// R8-38 Algorithm from System.getProperty with an insecure default + key size from Integer.getInteger default.
package com.qx.deep.consts;

import java.security.KeyPairGenerator;
import java.security.Signature;

public class SystemPropertyDefault {
    static final String ALG = System.getProperty("qx.sig.alg", "SHA1withRSA");
    static final int BITS = Integer.getInteger("qx.rsa.bits", 1024);

    public static byte[] sign(byte[] d) throws Exception {
        KeyPairGenerator g = KeyPairGenerator.getInstance("RSA");
        g.initialize(BITS);
        Signature s = Signature.getInstance(ALG);
        s.initSign(g.generateKeyPair().getPrivate());
        s.update(d);
        return s.sign();
    }
}
