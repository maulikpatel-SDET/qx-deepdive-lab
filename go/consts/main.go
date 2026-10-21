// R8-37 Go constants: key size from a shift expression (1 << 10 = 1024) and an iota enum.
package main

import (
	"crypto/rand"
	"crypto/rsa"
	"fmt"
)

type KeyProfile int

const (
	Legacy KeyProfile = iota
	Modern
)

const legacyBits = 1 << 10 // 1024

func bitsFor(p KeyProfile) int {
	if p == Legacy {
		return legacyBits
	}
	return 4096
}

func main() {
	k, _ := rsa.GenerateKey(rand.Reader, bitsFor(Legacy))
	fmt.Println(k.N.BitLen())
}
