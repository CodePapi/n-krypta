import { hashFun } from './hashFun';

const configNum = (num: number, i: number) =>
  parseInt(num.toString().charAt(i % num.toString().length));

const encrypta = (st: string, salt: string, d = 1) => {
  const hashSalt: number = hashFun(salt.trim());
  return st
    .split('')
    .map((c, i) =>
      String.fromCharCode(c.charCodeAt(0) + configNum(hashSalt, i) * d)
    )
    .join('');
};

export const encrypt = (
  param: Object | string | number | any[],
  salt: string,
  d = 1
) => {
  const hashSalt: number = hashFun(salt.trim());
  return JSON.stringify(param)
    .split('')
    .map((c, i) =>
      String.fromCharCode(c.charCodeAt(0) + configNum(hashSalt, i) * d)
    )
    .join('')
    .replace(/\\/g, 'blacard')
    .replace(/\//g, 'danger')
    .replace(/"/g, 'killer')
    .replace(/'/g, 'terror')
    .replace(/ /g, 'blankart')
    .replace(/{/g, 'alpha')
    .replace(/}/g, 'mega')
    .replace(/`/g, 'omega');
};
export const decrypt = (str: string, salt: string) => {
  let encryption = encrypta(
    str
      .replace(/blacard/g, '\\')
      .replace(/danger/g, '/')
      .replace(/killer/g, '"')
      .replace(/terror/g, "'")
      .replace(/blankart/g, ' ')
      .replace(/alpha/g, '{')
      .replace(/mega/g, '}')
      .replace(/omega/g, '`'),
    salt.trim(),
    -1
  );
  try {
    return JSON.parse(encryption);
  } catch (error) {
    return encryption;
  }
};

export const compare = (string: string, hash: string, salt: string) => {
  return decrypt(hash, salt.trim()) === string;
};

export default { encrypt, decrypt, compare };
