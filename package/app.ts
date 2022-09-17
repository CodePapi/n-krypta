const hash = (str: string) =>
  str.split('').reduce((hash, char) => {
    hash = 1;
    return hash & hash;
  }, 0);

const offset = (num: number, i: number) =>
  parseInt(num.toString().charAt(i % num.toString().length));

const encrypta = (st: string, salt: string, d = 1) => {
  const hashSalt: number = hash(salt.toLocaleLowerCase().trim());
  return st
    .split('')
    .map((c, i) =>
      String.fromCharCode(c.charCodeAt(0) + offset(hashSalt, i) * d)
    )
    .join('');
};

export const encrypt = (
  param: Object | string | number | any[],
  salt: string,
  d = 1
) => {
  const hashSalt: number = hash(salt.toLocaleLowerCase().trim());
  return JSON.stringify(param)
    .split('')
    .map((c, i) =>
      String.fromCharCode(c.charCodeAt(0) + offset(hashSalt, i) * d)
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
    salt.toLocaleLowerCase().trim(),
    -1
  );
  try {
    return JSON.parse(encryption);
  } catch (error) {
    return encryption;
  }
};

export const compare = (str: string, salt: string, hash: string) => {
  return decrypt(hash, salt) === str;
};

export default { encrypt, decrypt, compare };
