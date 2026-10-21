// R8-33 Java libraries: Commons Codec DigestUtils, Guava Hashing, Spring Security legacy password encoders.
package com.qx.deep.libs;

import com.google.common.hash.Hashing;
import java.nio.charset.StandardCharsets;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.security.crypto.password.MessageDigestPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class SpringAndCommons {
    public static void all(String pw) {
        String a = DigestUtils.md5Hex(pw);
        String b = DigestUtils.sha1Hex(pw);
        String c = Hashing.md5().hashString(pw, StandardCharsets.UTF_8).toString();
        String d = Hashing.sha1().hashString(pw, StandardCharsets.UTF_8).toString();
        PasswordEncoder legacy = new MessageDigestPasswordEncoder("MD5");
        PasswordEncoder none = NoOpPasswordEncoder.getInstance();
        System.out.println(a + b + c + d + legacy.encode(pw) + none.encode(pw));
    }
}
