// R8-24 MessageDigest, Mac, SecretKeyFactory, KeyAgreement, KeyFactory(RSAPublicKeySpec).
package com.qx.deep.apis;

import java.math.BigInteger;
import java.security.KeyFactory;
import java.security.KeyPairGenerator;
import java.security.MessageDigest;
import java.security.spec.RSAPublicKeySpec;
import javax.crypto.KeyAgreement;
import javax.crypto.Mac;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

public class DigestMacKdf {
    public static void all(char[] pw, byte[] salt) throws Exception {
        MessageDigest md5 = MessageDigest.getInstance("MD5");
        MessageDigest sha1 = MessageDigest.getInstance("SHA-1");
        Mac hmac = Mac.getInstance("HmacSHA1");
        hmac.init(new SecretKeySpec("test-only".getBytes(), "HmacSHA1"));
        SecretKeyFactory kdf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        kdf.generateSecret(new PBEKeySpec(pw, salt, 1000, 128));      // 1000 iterations

        KeyPairGenerator dhGen = KeyPairGenerator.getInstance("DH");
        dhGen.initialize(1024);
        KeyAgreement dh = KeyAgreement.getInstance("DH");
        dh.init(dhGen.generateKeyPair().getPrivate());
        KeyAgreement ecdh = KeyAgreement.getInstance("ECDH");

        BigInteger modulus = BigInteger.ONE.shiftLeft(2047).add(BigInteger.ONE);
        KeyFactory.getInstance("RSA").generatePublic(new RSAPublicKeySpec(modulus, BigInteger.valueOf(65537)));
        System.out.println(md5 + " " + sha1 + " " + ecdh);
    }
}
