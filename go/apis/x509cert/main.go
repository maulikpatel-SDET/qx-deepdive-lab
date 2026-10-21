// R8-26 Go: x509 certificate with SHA1WithRSA, crypto/ecdh, crypto/dsa, 3DES, RC4, MD5, SHA-1, crypto.SHA1.
package main

import (
	"crypto"
	"crypto/des"
	"crypto/dsa"
	"crypto/ecdh"
	"crypto/md5"
	"crypto/rand"
	"crypto/rc4"
	"crypto/rsa"
	"crypto/sha1"
	"crypto/x509"
	"crypto/x509/pkix"
	"fmt"
	"math/big"
	"time"
)

func main() {
	key, _ := rsa.GenerateKey(rand.Reader, 2048)
	tmpl := &x509.Certificate{
		SerialNumber:       big.NewInt(1),
		Subject:            pkix.Name{CommonName: "legacy.qx.example.com"},
		NotBefore:          time.Now(),
		NotAfter:           time.Now().AddDate(1, 0, 0),
		SignatureAlgorithm: x509.SHA1WithRSA,
	}
	der, _ := x509.CreateCertificate(rand.Reader, tmpl, tmpl, &key.PublicKey, key)

	ek, _ := ecdh.P256().GenerateKey(rand.Reader)

	var params dsa.Parameters
	_ = dsa.GenerateParameters(&params, rand.Reader, dsa.L1024N160)

	block, _ := des.NewTripleDESCipher(make([]byte, 24))
	stream, _ := rc4.NewCipher([]byte("test-only-key"))
	sum := md5.Sum([]byte("pw"))
	h := sha1.New()
	h2 := crypto.SHA1.New()

	fmt.Println(len(der), ek.PublicKey(), block.BlockSize(), stream != nil, sum, h.Size(), h2.Size())
}
