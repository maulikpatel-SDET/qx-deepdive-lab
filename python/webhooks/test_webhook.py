"""R8-28 Flask webhook: HMAC-SHA1 compared with == (timing leak)."""
import hashlib
import hmac

from flask import Flask, abort, request

app = Flask(__name__)
SECRET = b"test-only-secret"


@app.post("/hook")
def hook():
    expected = hmac.new(SECRET, request.data, hashlib.sha1).hexdigest()
    if request.headers.get("X-Hub-Signature") != expected:
        abort(401)
    return "ok"
