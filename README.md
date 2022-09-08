## How to use n-krypta package
n-krypta is an npm package that allows you to encrypt and decrypt sensitive data using a key. It is based on a strong algorithm.
It is very easy to use, just follow the steps below:

### Installation

```javascript
npm install n-krypta --save or yarn add n-krypta
```

### Usage

```javascript
const { encrypt, decrypt } = require('n-krypta');

const secret = 'secret'; // secret key for encryption

const encrypted = encrypt('Hello World', secret); // encrypts the string

const decrypted = decrypt(encrypted, secret); // decrypts the string

console.log(encrypted); // prints the encrypted string

console.log(decrypted); // prints the decrypted string
```

### License

MIT

### Author

Samuel Egbajie (CodePapi on Github)

### Contributing

Contributions are welcome. Please open an issue or a pull request.

### Disclaimer

This package is not meant to be used for production. It is just a simple package for encrypting and decrypting strings.

### Keywords

encrypt, decrypt, hash,

### Version

1.0.0

### Repository

(Repo)[https://github.com/CodePapi/n-krypta]

### Homepage

https://github.com/CodePapi/n-krypta) [https://github.com/CodePapi/n-krypta]
