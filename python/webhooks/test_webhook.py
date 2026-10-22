
# R8-28 Flask webhook: HMAC-SHA1 legacy check; SHA-256 version as control.
import hashlib
import hmac

from flask import Flask, abort, request

app = Flask(__name__)
SECRET = b"test-only-secret"


@app.post("/hook")
def hook():
    body = request.get_data(cache=True)

    # Legacy SHA-1 check: ordinary comparison (timing-leak example).
    legacy = "sha1=" + hmac.new(
        SECRET, body, hashlib.sha1
    ).hexdigest()

    if request.headers.get("X-Hub-Signature") == legacy:
        return "ok", 200

    # SHA-256 check: constant-time comparison.
    modern = "sha256=" + hmac.new(
        SECRET, body, hashlib.sha256
    ).hexdigest()

    provided = request.headers.get("X-Hub-Signature-256", "")

    # Compare bytes only when their lengths match.
    expected_bytes = modern.encode("ascii")
    provided_bytes = provided.encode("ascii", errors="ignore")

    if (
        len(provided_bytes) == len(expected_bytes)
        and hmac.compare_digest(provided_bytes, expected_bytes)
    ):
        return "ok", 200

    abort(401)


if __name__ == "__main__":
    app.run()
