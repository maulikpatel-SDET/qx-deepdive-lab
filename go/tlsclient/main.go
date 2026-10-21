// R8-30 (Go) TLS client: verification off, TLS 1.0 allowed, RSA key-exchange cipher.
package main

import (
	"crypto/tls"
	"net/http"
)

func main() {
	tr := &http.Transport{TLSClientConfig: &tls.Config{
		InsecureSkipVerify: true,
		MinVersion:         tls.VersionTLS10,
		CipherSuites:       []uint16{tls.TLS_RSA_WITH_AES_128_CBC_SHA, tls.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256},
	}}
	_, _ = (&http.Client{Transport: tr}).Get("https://partner.qx.example.com")
}
