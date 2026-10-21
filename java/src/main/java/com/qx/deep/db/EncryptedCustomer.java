// R8-19 JPA / Hibernate: crypto in @ColumnTransformer and in a native @Query.
package com.qx.deep.db;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.hibernate.annotations.ColumnTransformer;
import org.springframework.data.jpa.repository.Query;

@Entity
public class EncryptedCustomer {
    @Id
    private Long id;

    @Column(name = "ssn_enc")
    @ColumnTransformer(
        read = "pgp_sym_decrypt(ssn_enc, 'test-only-key', 'cipher-algo=cast5')",
        write = "pgp_sym_encrypt(?, 'test-only-key', 'cipher-algo=cast5')")
    private String ssn;

    interface Repo {
        @Query(value = "SELECT * FROM users WHERE pw = crypt(:pw, gen_salt('md5')) OR token = encode(digest(:t, 'sha1'), 'hex')",
               nativeQuery = true)
        Object findLegacy(String pw, String t);
    }
}
