from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class QuietHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        pass


if __name__ == "__main__":
    server_address = ("127.0.0.1", PORT)
    httpd = ThreadingHTTPServer(server_address, QuietHandler)
    print(f"Serving Axis Campus Navigator at http://127.0.0.1:{PORT}")
    httpd.serve_forever()
