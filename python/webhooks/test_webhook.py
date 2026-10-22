import hashlib
import hmac

# Keys and messages must be bytes
secret_key = b"my_secret_key"
message = b"Hello, world!"

# One-shot calculation (Python 3.7+)
signature_bytes = hmac.digest(secret_key, message, hashlib.sha256)
signature_hex = hmac.new(secret_key, message, hashlib.sha256).hexdigest()

print("Hex signature:", signature_hex)
