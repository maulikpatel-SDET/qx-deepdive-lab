"""R8-34 Python libraries not tested before: pyOpenSSL, M2Crypto, passlib, PyCryptodome legacy ciphers."""
from Crypto.Cipher import ARC4, DES, Blowfish
from M2Crypto import RSA as M2RSA
from OpenSSL import crypto
from passlib.hash import des_crypt, md5_crypt

pkey = crypto.PKey()
pkey.generate_key(crypto.TYPE_RSA, 1024)                 # pyOpenSSL RSA-1024
dsa_pkey = crypto.PKey()
dsa_pkey.generate_key(crypto.TYPE_DSA, 1024)              # pyOpenSSL DSA-1024

m2 = M2RSA.gen_key(2048, 65537)                          # M2Crypto RSA-2048

pw1 = md5_crypt.hash("pw")                               # passlib MD5-crypt
pw2 = des_crypt.hash("pw")                               # passlib DES-crypt

des = DES.new(b"8bytekey", DES.MODE_ECB)
rc4 = ARC4.new(b"test-only-key")
bf = Blowfish.new(b"test-only-key", Blowfish.MODE_CBC, iv=b"\x00" * 8)
