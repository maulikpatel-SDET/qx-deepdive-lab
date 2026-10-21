// R8-18 SQL crypto inside JDBC strings: MySQL + SQL Server.
package com.qx.deep.db;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class JdbcCrypto {
    public void store(Connection c, String pan, String email) throws Exception {
        try (PreparedStatement ps = c.prepareStatement(
                "INSERT INTO cards(pan_enc, email_hash) VALUES (AES_ENCRYPT(?, 'test-only-key'), SHA1(?))")) {
            ps.setString(1, pan);
            ps.setString(2, email);
            ps.executeUpdate();
        }
        c.createStatement().execute(
            "CREATE SYMMETRIC KEY qx_card_key WITH ALGORITHM = TRIPLE_DES ENCRYPTION BY PASSWORD = 'Test-Only-1'");
        c.createStatement().execute(
            "SELECT ENCRYPTBYPASSPHRASE('test-only', pan), HASHBYTES('SHA1', email), HASHBYTES('MD5', pw) FROM legacy");
        c.createStatement().execute(
            "CREATE ASYMMETRIC KEY qx_rsa WITH ALGORITHM = RSA_1024 ENCRYPTION BY PASSWORD = 'Test-Only-1'");
    }
}
