"""R8-04 (use) Uses the re-exported helper: 'from qxcrypto import new_key'."""
from qxcrypto import new_key

INVOICE_KEY = new_key(3072)
