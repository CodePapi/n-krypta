## How to use this package n-krypta

This package allows you to encrypt and decrypt short strings using a key. It is based on the [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) algorithm.

### Installation

```bash
npm install n-krypta
```

### Usage

```javascript
const crypta = require('n-rypta');

const key = 'my secret key';
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
