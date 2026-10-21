// R8-20 Go database/sql + pgx: Oracle DBMS_CRYPTO and PostgreSQL pgcrypto inside query strings.
package db

import (
	"context"
	"database/sql"

	"github.com/jackc/pgx/v5"
)

func Store(ctx context.Context, ora *sql.DB, pg *pgx.Conn, pan string) error {
	_, err := ora.ExecContext(ctx, `UPDATE cards SET pan_enc = DBMS_CRYPTO.ENCRYPT(UTL_RAW.CAST_TO_RAW(:1),
		DBMS_CRYPTO.ENCRYPT_DES + DBMS_CRYPTO.CHAIN_CBC + DBMS_CRYPTO.PAD_PKCS5, UTL_RAW.CAST_TO_RAW('testkey1'))`, pan)
	if err != nil {
		return err
	}
	_, err = ora.ExecContext(ctx, `SELECT DBMS_CRYPTO.HASH(UTL_RAW.CAST_TO_RAW(:1), DBMS_CRYPTO.HASH_SH1) FROM dual`, pan)
	if err != nil {
		return err
	}
	_, err = pg.Exec(ctx, `UPDATE cards SET pan_enc = pgp_pub_encrypt($1, dearmor((SELECT rsa_pub FROM keys WHERE kid = 'rsa-2048')))`, pan)
	return err
}
