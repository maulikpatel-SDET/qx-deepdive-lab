// R8-35 golang.org/x/crypto legacy packages: openpgp (RSA), blowfish, cast5, md4, ripemd160.
package main

import (
	"fmt"

	"golang.org/x/crypto/blowfish"
	"golang.org/x/crypto/cast5"
	"golang.org/x/crypto/md4"
	"golang.org/x/crypto/openpgp"
	"golang.org/x/crypto/ripemd160"
)

func main() {
	ent, _ := openpgp.NewEntity("QX Test", "", "test@qx.example.com", nil) // RSA-2048 by default
	bf, _ := blowfish.NewCipher([]byte("test-only-key"))
	c5, _ := cast5.NewCipher(make([]byte, 16))
	m4 := md4.New()
	rm := ripemd160.New()
	fmt.Println(ent != nil, bf.BlockSize(), c5.BlockSize(), m4.Size(), rm.Size())
}
