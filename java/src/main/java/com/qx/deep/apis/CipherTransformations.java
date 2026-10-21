// R8-23 Cipher transformation strings (very common in real Java code).
package com.qx.deep.apis;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

public class CipherTransformations {
    public static void all() throws Exception {
        Cipher rsaPkcs1 = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        Cipher rsaOaep = Cipher.getInstance("RSA/ECB/OAEPWithSHA-256AndMGF1Padding");
        Cipher aesDefault = Cipher.getInstance("AES");                 // = AES/ECB/PKCS5Padding
        Cipher aesCbc = Cipher.getInstance("AES/CBC/PKCS5Padding");
        Cipher tripleDes = Cipher.getInstance("DESede/CBC/PKCS5Padding");
        Cipher blowfish = Cipher.getInstance("Blowfish");
        Cipher rc4 = Cipher.getInstance("ARCFOUR");
        SecretKey aes128 = KeyGenerator.getInstance("AES").generateKey();   // default 128-bit
        System.out.println(rsaPkcs1 + " " + rsaOaep + " " + aesDefault + " " + aesCbc + " " + tripleDes + " " + blowfish + " " + rc4 + aes128);
    }
}
