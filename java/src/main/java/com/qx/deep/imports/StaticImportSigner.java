// R8-06 Static imports: getInstance(...) is called with no class name in front.
package com.qx.deep.imports;

import static java.security.KeyPairGenerator.getInstance;
import static javax.crypto.Cipher.ENCRYPT_MODE;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import javax.crypto.Cipher;

public class StaticImportSigner {
    public static byte[] run(byte[] data) throws Exception {
        KeyPairGenerator g = getInstance("RSA");
        g.initialize(2048);
        KeyPair kp = g.generateKeyPair();
        Cipher c = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        c.init(ENCRYPT_MODE, kp.getPublic());
        return c.doFinal(data);
    }
}
