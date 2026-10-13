#!/usr/bin/env python3
"""
MailMate Educational Demo — Pattipati Lalitha
Local Backend Server (Educational UI Project)

Provides:
- Static file serving for index.html, styles.css, app.js, and hall-ticket PDF
- GET /api/download-hallticket : Serves the unmodified uploaded PDF with attachment header
- GET /api/health              : Verifies PDF presence and returns metadata
"""

import json
import os
import socket
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
PDF_PRIMARY_FILENAME = "NOC26CS93S370700756_261013124814.pdf"
PDF_FALLBACK_FILENAME = "NOC26CS93S370700756.pdf"
PORT = int(os.environ.get("PORT", "8000"))


def resolve_pdf_info():
    candidates = [
        (os.environ.get("HALL_TICKET_PDF_PATH", "").strip(), PDF_PRIMARY_FILENAME),
        (os.path.join(PROJECT_DIR, PDF_PRIMARY_FILENAME), PDF_PRIMARY_FILENAME),
        (os.path.join(PROJECT_DIR, PDF_FALLBACK_FILENAME), PDF_FALLBACK_FILENAME),
        (f"/etc/secrets/{PDF_PRIMARY_FILENAME}", PDF_PRIMARY_FILENAME),
        (f"/etc/secrets/{PDF_FALLBACK_FILENAME}", PDF_FALLBACK_FILENAME),
    ]
    for path, filename in candidates:
        if path and os.path.isfile(path):
            return path, filename
    return os.path.join(PROJECT_DIR, PDF_PRIMARY_FILENAME), PDF_PRIMARY_FILENAME


class DemoEmailRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PROJECT_DIR, **kwargs)

    def handle(self):
        try:
            super().handle()
        except (ConnectionAbortedError, ConnectionResetError, BrokenPipeError):
            pass

    def do_HEAD(self):
        parsed_path = urlparse(self.path).path
        pdf_path, pdf_filename = resolve_pdf_info()

        if parsed_path == "/favicon.ico":
            self.path = "/gmail-icon-192.png"
        elif parsed_path in ("/api/download-hallticket", f"/{PDF_PRIMARY_FILENAME}", f"/{PDF_FALLBACK_FILENAME}"):
            if not os.path.isfile(pdf_path):
                self.send_response(404)
                self.end_headers()
                return
            file_size = os.path.getsize(pdf_path)
            disposition = "attachment" if parsed_path == "/api/download-hallticket" else "inline"
            self.send_response(200)
            self.send_header("Content-Type", "application/pdf")
            self.send_header("Content-Disposition", f'{disposition}; filename="{pdf_filename}"')
            self.send_header("Content-Length", str(file_size))
            self.send_header("Accept-Ranges", "bytes")
            self.end_headers()
            return
        return super().do_HEAD()

    def do_GET(self):
        parsed_path = urlparse(self.path).path
        pdf_path, pdf_filename = resolve_pdf_info()

        if parsed_path == "/favicon.ico":
            self.path = "/gmail-icon-192.png"
            return super().do_GET()

        if parsed_path == "/api/health":
            exists = os.path.isfile(pdf_path)
            size = os.path.getsize(pdf_path) if exists else 0
            payload = {
                "status": "ok",
                "demoMode": True,
                "candidate": "Pattipati Lalitha",
                "pdfFilename": pdf_filename,
                "pdfExists": exists,
                "pdfSizeBytes": size,
            }
            body = json.dumps(payload).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            try:
                self.wfile.write(body)
            except (ConnectionAbortedError, ConnectionResetError, BrokenPipeError):
                pass
            return

        if parsed_path in ("/api/download-hallticket", f"/{PDF_PRIMARY_FILENAME}", f"/{PDF_FALLBACK_FILENAME}"):
            if not os.path.isfile(pdf_path):
                err = json.dumps({
                    "error": f"Hall Ticket PDF ({pdf_filename}) not found."
                }).encode("utf-8")
                self.send_response(404)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(err)))
                self.end_headers()
                try:
                    self.wfile.write(err)
                except (ConnectionAbortedError, ConnectionResetError, BrokenPipeError):
                    pass
                return

            file_size = os.path.getsize(pdf_path)
            disposition = "attachment" if parsed_path == "/api/download-hallticket" else "inline"
            self.send_response(200)
            self.send_header("Content-Type", "application/pdf")
            self.send_header("Content-Disposition", f'{disposition}; filename="{pdf_filename}"')
            self.send_header("Content-Length", str(file_size))
            self.send_header("Accept-Ranges", "bytes")
            self.end_headers()
            try:
                with open(pdf_path, "rb") as f:
                    while chunk := f.read(65536):
                        self.wfile.write(chunk)
            except (ConnectionAbortedError, ConnectionResetError, BrokenPipeError):
                pass
            return

        try:
            return super().do_GET()
        except (ConnectionAbortedError, ConnectionResetError, BrokenPipeError):
            pass


def get_lan_ip():
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"


if __name__ == "__main__":
    lan_ip = get_lan_ip()
    pdf_path, pdf_filename = resolve_pdf_info()
    server = ThreadingHTTPServer(("0.0.0.0", PORT), DemoEmailRequestHandler)
    print("=" * 70)
    print(" MailMate Educational Demo — Pattipati Lalitha (Server)")
    print("=" * 70)
    print(f" Local Desktop URL : http://localhost:{PORT}")
    print(f" Android / LAN URL : http://{lan_ip}:{PORT}")
    print(f" Hall Ticket PDF   : {pdf_path} (Exists: {os.path.isfile(pdf_path)})")
    print("=" * 70)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down demo server...")
        server.server_close()
