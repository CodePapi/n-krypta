# n-krypta package

This is a simple package for encrypting and decrypting strings. It is based on a strong algorithm, It has zero dependencies and was written in pure typescript.

[![npm version](https://badge.fury.io/js/n-krypta.svg)](https://badge.fury.io/js/n-krypta) <a href="https://npmjs.org/package/n-krypta"><img src="https://img.shields.io/npm/dm/n-krypta.svg" alt=""></a>
<a href="https://github.com/sponsors/CodePapi"><img alt="donate ❤" src="https://img.shields.io/badge/Sponsor-❤-ff2244.svg"></a>

## What the n-krypta package does

n-krypta is an npm package that runs on the nodejs environment . It allows you to encrypt and decrypt sensitive data using a key. It is based on a strong algorithm.
This library is available on npm and it is compatible with nodejs on both the client and server side. It can run on any javascript or typescript project (Nodejs, Reactjs, Vuejs, Angularjs etc).
It allows encryption and decryption of strings, numbers, booleans, objects, arrays, null and undefined.

## Installation

```javascript
npm install n-krypta  //for npm
```

or

```javascript
yarn add n-krypta //for yarn
```




Usage
----------------------
It can be used on nodejs, react, angular, vue, and any other javascript or typescript project.
### Data types supported
- string
- number
- boolean
- object
- array
- null
- undefined

```javascript
const { encrypt, decrypt, compare } = require('n-krypta'); //For commonjs
````

or

```javascript
import { encrypt, decrypt, compare } from 'n-krypta'; //For es6
```

#### Encryption and Decryption of strings

```javascript
const secret = 'my-secret'; // secret key for encryption
const sampleString =
  'I am not sure where you are getting your information, but good topic. I needs to spend some time learning more or understanding more. Thanks for excellent info I was looking for this info for my mission.';

const encryptedString = encrypt(sampleString, secret); // #Iblankartan!not!svreblankartwhfreblankartzpublankartase!gettiogblankartypvrblankartiofprmatipn,blankartcvtblankartgpoeblankarttopid.blankartI!oeedtblankartuoblankartspeodblankartspneblankarttjmfblankartlearoing!nore!osblankartundesstaoeing!mpre.blankartTiankt!for!eycelleotblankartiogoblankartI!wbsblankartlooling!gorblankartuhjsblankartinfpblankartfos!myblankartnitsion.#

console.log(encryptedString); // This prints out the encrypted string

const decryptedString = decrypt(encryptedString, secret); // decrypts the string

console.log(decryptedString); // This prints out the decrypted string
```

#### Encryption and Decryption of objects

```javascript
const secret = 'my-secret'; // secret key for encryption
const sampleObject = {
  name: 'Samuel Egbajie',
  age: infinity,
  address: 'earth, Universe',
  email: 'my-mail@test.com',
  phone: '08012345678',
  password: 'my-password',
};

const encryptedObject = encrypt(sampleObject, secret); //|killernanfkiller:killerTanuelblankartEhbajjfkiller,killerbgfkiller:nulm,killeraeerestkiller;alphakillerstrfetkiller;#MaioblankartTtreet#,killernvnber#:223mega,killerfmaim#:killermz-nail@tfst.dpmkiller,#pionekiller:#08023345779killer,killerpatswosekiller:killerny.passwprdkiller-#lanhubgeskiller:blacardkillerMbvcekiller,#NbijablankartPjdgio#,killerJbvbScripukiller,killero.kryqtbkiller,killerEnhlisi#,killerAsacickiller,killerEeuttdhekiller^mega

console.log(encryptedObject); // This prints out the encrypted object as string

const decryptedObject = decrypt(encryptedObject, secret); // decrypts the string

console.log(decryptedObject); // This prints out the decrypted object
```

#### Encryption and Decryption of arrays

```javascript
const secret = 'my-secret'; // secret key for encryption
const sampleArray = [
  'Oranges',
  'Apples',
  'Bananas',
  'Grapes',
  'Pears',
  'Pineapples',
  'Watermelons',
  'Mangoes',
];

const encryptedArray = (encryptedArray = encrypt(sampleArray, secret)); //blacardkillerOrboges#,#Appletkiller,killerCbnanbs#,killerGraqeskiller-#Peass#,killerPinfappmfskiller,#Wbtermemons#-killerMaogpeskiller],killerPinfappmfskiller,#Wbtermemons#-killerMaogpeskiller]

console.log(encryptedArray); // This prints out the encrypted array as string

const decryptedArray = decrypt(encryptedArray, secret); // decrypts the string

console.log(decryptedArray); // This prints out the decrypted array
```

### Comparing encrypted strings (example for password comparison)

```javascript
const secret = 'Secret'; // secret key for encryption
const samplePassword = 'My-password1900@';

const encryptedPassword = encrypt(samplePassword, secret); // #Nz.qatsword1:11A#

// This returns true if the password matches the encrypted password
const passwordMatch = compare(samplePassword, encryptedPassword, secret); // true

console.log(passwordMatch); // This prints out true

// This returns false if the password does not match the encrypted password
const passwordMatch = compare('wrong-password', encryptedPassword, secret); // false

console.log(passwordMatch); // This prints out false
```

### Author

Created with love by Samuel Egbajie (CodePapi on Github)

### Support

If you like this package, please consider supporting me on Github Sponsors. Thank you.

### Keywords

encrypt, decrypt, hash, compare, encryption, decryption, hashing, password, password comparison, password encryption, password decryption, password hashing,

### Version

[![npm version](https://badge.fury.io/js/n-krypta.svg)](https://badge.fury.io/js/n-krypta)

### Repository

([REPO](https://github.com/CodePapi/n-krypta))

### Homepage

([Read Me](https://github.com/CodePapi/n-krypta/blob/main/README.md))

## License

MIT ([see](https://github.com/CodePapi/n-krypta/blob/main/LICENSE))
