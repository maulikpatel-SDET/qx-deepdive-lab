// R8-09 Go dot import: GenerateKey is called with NO package prefix.
package main

import (
	"crypto/rand"
	. "crypto/rsa"
	"fmt"
)

func main() {
	key, err := GenerateKey(rand.Reader, 2048)
	if err != nil {
		panic(err)
	}
	fmt.Println(key.N.BitLen())
}
