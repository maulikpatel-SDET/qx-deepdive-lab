// R8-08 (use) Constants from another class + algorithm passed in as a method argument.
package com.qx.deep.imports;

import java.security.KeyPairGenerator;
import java.security.Signature;

public class ConstantConsumer {
    static byte[] sign(String sigAlg, byte[] d) throws Exception {
        KeyPairGenerator g = KeyPairGenerator.getInstance(CryptoAlgorithms.KEY_ALG);
        g.initialize(CryptoAlgorithms.KEY_BITS);
        Signature s = Signature.getInstance(sigAlg);
        s.initSign(g.generateKeyPair().getPrivate());
        s.update(d);
        return s.sign();
    }

    public static byte[] invoice(byte[] d) throws Exception {
        return sign(CryptoAlgorithms.SIG_ALG, d);
    }
}
