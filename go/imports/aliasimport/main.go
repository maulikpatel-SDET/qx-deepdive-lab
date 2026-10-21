// R8-10 Go alias imports: r = crypto/rsa, ecd = crypto/ecdsa, ell = crypto/elliptic.
package main

import (
	ecd "crypto/ecdsa"
	ell "crypto/elliptic"
	"crypto/rand"
	r "crypto/rsa"
	"fmt"
)

func main() {
	rk, _ := r.GenerateKey(rand.Reader, 3072)
	ek, _ := ecd.GenerateKey(ell.P384(), rand.Reader)
	fmt.Println(rk.N.BitLen(), ek.Curve.Params().Name)
}
