"""R8-16 PostgreSQL pgcrypto calls inside Python SQL strings (psycopg2)."""
import psycopg2

conn = psycopg2.connect("dbname=qx user=qx")
cur = conn.cursor()

cur.execute("UPDATE cards SET pan_enc = pgp_pub_encrypt(%s, dearmor(%s)) WHERE id = %s", ("4111", "PUBKEY", 1))
cur.execute("UPDATE notes SET body_enc = pgp_sym_encrypt(%s, %s, 'cipher-algo=3des, compress-algo=1')", ("x", "pw"))
cur.execute("SELECT encode(digest(email, 'sha1'), 'hex') FROM users")
cur.execute("UPDATE users SET pw = crypt(%s, gen_salt('md5')) WHERE id = %s", ("secret", 7))
cur.execute("SELECT encrypt(%s::bytea, %s::bytea, 'bf-ecb')", ("data", "key"))
