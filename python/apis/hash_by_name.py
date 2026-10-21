"""R8-27 Hash / HMAC / KDF chosen by STRING name (hashlib.new, hmac.new, pbkdf2_hmac)."""
import hashlib
import hmac

HASH_NAME = "sha1"

h1 = hashlib.new("md5", b"pw").hexdigest()
h2 = hashlib.new(HASH_NAME, b"pw").hexdigest()
mac = hmac.new(b"test-only", b"body", "sha1").hexdigest()
dk = hashlib.pbkdf2_hmac("sha1", b"pw", b"salt", 1000)
non_security = hashlib.md5(b"cache-key", usedforsecurity=False).hexdigest()   # declared non-security use
