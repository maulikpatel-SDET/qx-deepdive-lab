// R8-30 (Java) SSLContext TLSv1 + trust-all TrustManager + hostname verifier off.
package com.qx.deep.tls;

import java.security.cert.X509Certificate;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

public class TrustAllClient {
    public static void install() throws Exception {
        TrustManager[] trustAll = { new X509TrustManager() {
            public void checkClientTrusted(X509Certificate[] c, String a) { }
            public void checkServerTrusted(X509Certificate[] c, String a) { }
            public X509Certificate[] getAcceptedIssuers() { return new X509Certificate[0]; }
        } };
        SSLContext ctx = SSLContext.getInstance("TLSv1");
        ctx.init(null, trustAll, new java.security.SecureRandom());
        HttpsURLConnection.setDefaultSSLSocketFactory(ctx.getSocketFactory());
        HttpsURLConnection.setDefaultHostnameVerifier((host, session) -> true);
    }
}
