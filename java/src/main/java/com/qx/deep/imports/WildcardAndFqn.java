// R8-07 Wildcard imports (java.security.*) and fully-qualified names with NO import at all.
package com.qx.deep.imports;

import java.security.*;

public class WildcardAndFqn {
    public static byte[] wildcard(byte[] d) throws Exception {
        KeyPairGenerator g = KeyPairGenerator.getInstance("EC");
        g.initialize(256);
        Signature s = Signature.getInstance("SHA256withECDSA");
        s.initSign(g.generateKeyPair().getPrivate());
        s.update(d);
        return s.sign();
    }

    public static byte[] fullyQualified(byte[] d) throws Exception {
        java.security.KeyPairGenerator g = java.security.KeyPairGenerator.getInstance("DSA");
        g.initialize(2048);
        java.security.Signature s = java.security.Signature.getInstance("SHA1withDSA");
        s.initSign(g.generateKeyPair().getPrivate());
        s.update(d);
        return s.sign();
    }
}
