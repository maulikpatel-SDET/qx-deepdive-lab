// R8-08 (definition) Algorithm names live in a constants class.
package com.qx.deep.imports;

public final class CryptoAlgorithms {
    public static final String KEY_ALG = "RSA";
    public static final int KEY_BITS = 1024;
    public static final String SIG_ALG = "SHA1withRSA";

    private CryptoAlgorithms() { }
}
