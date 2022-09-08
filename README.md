## How to use this package n-krypta

This package allows you to encrypt and decrypt short strings using a key. It is based on the [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) algorithm.

### Installation

```bash
npm install n-krypta or yarn add n-krypta
for typescript
npm install @types/n-krypta or yarn add @types/n-krypta
```
```
```

### Usage

```javascript
const crypta = require('n-rypta');

const key = 'my secret key'; // more than 16 characters is recommended, make sure it is the same for encryption and decryption and also kept secret
const text = 'my secret text'; 

const encrypted = crypta.encrypt(text, key);
const decrypted = crypta.decrypt(encrypted, key);

\`\`\`

### API

#### encrypt(text, key)

Encrypts the given text using the given key.

#### decrypt(encrypted, key)

Decrypts the given encrypted text using the given key.

### License

MIT

## How to use this package crypta

This package allows you to encrypt and decrypt short strings using a key. It is based on the [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) algorithm.

### Installation

```bash
npm install n-krypta
```

