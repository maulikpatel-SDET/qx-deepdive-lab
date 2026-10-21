"""R8-17 SQLAlchemy func.* and Django raw SQL (MySQL) crypto functions."""
from django.db import connection
from sqlalchemy import func, select, text

from app.models import Customer

stmt = select(func.pgp_sym_encrypt(Customer.ssn, "pw", "cipher-algo=aes128"), func.digest(Customer.email, "md5"))
legacy = text("SELECT AES_ENCRYPT(:pan, :k), SHA1(:email), MD5(:pw), DES_ENCRYPT(:x)")

with connection.cursor() as c:
    c.execute("SET block_encryption_mode = 'aes-128-ecb'")
    c.execute("SELECT AES_ENCRYPT(card_no, %s), SHA2(email, 224) FROM legacy_cards", ["k"])
