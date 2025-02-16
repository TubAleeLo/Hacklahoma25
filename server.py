from flask import Flask, send_from_directory
import os

app = Flask(__name__)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

@app.route('/')
def serve_qwykems():
    return send_from_directory(BASE_DIR, "qwykems.html")

@app.route('/index')
def serve_index():
    return send_from_directory(BASE_DIR, "index.html")

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
