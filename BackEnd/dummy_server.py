import socket
import threading


def dummy_server(port):
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(("0.0.0.0", port))
    server.listen(5)
    print(f"[+] Dummy server listening on port {port}...")

    try:
        while True:
            client_socket, addr = server.accept()
            print(f"[+] Connection accepted from {addr}")
            client_socket.close()
    except KeyboardInterrupt:
        server.close()
        print("\n[-] Dummy server shut down.")


if __name__ == "__main__":
    dummy_port = 9090  # Or any port you want!
    threading.Thread(target=dummy_server, args=(
        dummy_port,), daemon=True).start()

    input("Press ENTER to keep the dummy server running... (CTRL+C to stop)\n")
