from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from scapy.all import sniff, IP, TCP, UDP, ICMP, Raw
import threading
import pandas as pd
import joblib
import os
import time

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

capturing = False
flag = False  # Default: No anomaly detection

# List of features to extract
features = [
    'dur', 'proto', 'service', 'state', 'spkts', 'dpkts',
    'sbytes', 'dbytes', 'rate', 'sload',
    'dload', 'sloss', 'dloss', 'swin', 'dwin', 'is_sm_ips_ports'
]


def handle_flag_false(df, model):
    predictions = model.predict(df[features])
    prediction = pd.Series(predictions).mode()[0]
    # Notify frontend to change button and show toast message
    socketio.emit('safe')
    # Send prediction result
    socketio.emit('prediction', {'prediction': prediction})


def handle_flag_true():
    print("Simulating attack analysis... (5 seconds)")
    time.sleep(5)  # Simulate attack detection delay
    print('Anomaly Detected! Preventing attack...')
    socketio.emit('anomaly_detected')  # Notify frontend
    socketio.emit('prediction', {'prediction': 'DDoS'})  # Send "DDoS" alert


def prevent():
    """ Blocks all incoming network connections for 10 seconds. """
    print("Blocking all incoming connections...")
    os.system("iptables -A INPUT -j DROP")  # Block all incoming traffic
    # Notify frontend that all connections are blocked
    socketio.emit("all_blocked")

    time.sleep(10)  # Wait before restoring

    print("Restoring network connections...")
    os.system("iptables -F")  # Flush iptables to restore connections
    socketio.emit("restored")  # Notify frontend


@socketio.on("block")
def handle_block():
    """ Listens for the 'block' event from frontend and starts the prevent function. """
    print("Received 'block' command from frontend.")
    threading.Thread(target=prevent, daemon=True).start()


def process_packet(packet):
    global flag
    if not capturing:
        return  # Stop processing if capturing is set to False

    data = {
        'dur': 0, 'proto': 'Unknown', 'service': 'Unknown', 'state': 'Unknown',
        'spkts': 0, 'dpkts': 0, 'sbytes': 0, 'dbytes': 0, 'rate': 0, 'sload': 0, 'dload': 0, 'sloss': 0, 'dloss': 0,
        'swin': 0, 'dwin': 0, 'is_sm_ips_ports': 0
    }

    service_ports = {
        21: 'ftp', 22: 'ssh', 23: 'telnet', 25: 'smtp', 53: 'dns', 67: 'dhcp', 68: 'dhcp',
        69: 'tftp', 80: 'http', 110: 'pop3', 123: 'ntp', 143: 'imap', 161: 'snmp', 162: 'snmp-trap',
        389: 'ldap', 443: 'https', 465: 'smtps', 993: 'imaps', 995: 'pop3s', 3306: 'mysql', 3389: 'rdp',
        5355: 'llmnr'
    }

    if IP in packet:
        data['proto'] = 'IP'
        data['sbytes'] = len(packet[IP])
        data['dbytes'] = len(packet) - len(packet[IP])

    if TCP in packet or UDP in packet:
        data['proto'] = 'TCP' if TCP in packet else 'UDP'
        sport = packet[TCP].sport if TCP in packet else packet[UDP].sport
        dport = packet[TCP].dport if TCP in packet else packet[UDP].dport
        data['service'] = service_ports.get(dport, 'Unknown')
        data['spkts'] = 1
        data['dpkts'] = 1
        data['swin'] = packet[TCP].window if TCP in packet else 0
        data['dwin'] = 0  # Dummy for UDP

    if ICMP in packet:
        data['proto'] = 'ICMP'
        data['service'] = 'ICMP'
        data['spkts'] = 1
        data['dpkts'] = 1

    if Raw in packet:
        data['sbytes'] = len(packet[Raw])
        data['dbytes'] = len(packet) - len(packet[Raw])

    data['rate'] = data['sbytes'] / 1.0 if data['sbytes'] else 0
    data['sload'] = data['sbytes'] * 8
    data['dload'] = data['dbytes'] * 8
    data['is_sm_ips_ports'] = 1 if packet.haslayer(IP) else 0

    if data['service'] != 'Unknown':
        socketio.emit('new_packet', {'data': data})

    model = joblib.load('ML/catboost_model.pkl')
    df = pd.DataFrame([data])

    if not flag:
        handle_flag_false(df, model)
    else:
        handle_flag_true()


def start_sniffing():
    global capturing
    capturing = True
    sniff(prn=process_packet, store=False, stop_filter=lambda x: not capturing)


@app.route('/start', methods=['GET'])
def start_capture():
    global capturing
    if not capturing:
        threading.Thread(target=start_sniffing, daemon=True).start()
    return {'status': 'started'}


@app.route('/stop', methods=['GET'])
def stop_capture():
    global capturing
    capturing = False
    return {'status': 'stopped'}


if __name__ == '__main__':
    socketio.run(app, debug=True)
