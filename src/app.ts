const hash = (str:string) =>
  str.split("").reduce((hash, char) => {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    return hash & hash;
  }, 0);

const offset = (num:number, i:number) =>
  parseInt(num.toString().charAt(i % num.toString().length));

export const encrypt = (st:string, sa:string, d = 1) =>{
  const hashSalt:number=hash(sa)
  return st
    .split("")
    .map((c, i) => String.fromCharCode(c.charCodeAt(0) + offset(hashSalt, i) * d))
    .join("");

}
export const decrypt = (str:string, salt:string) => {
  return encrypt(str, salt, -1);}

const salt = "test";
const str = "My name is john bosco";

const scram = encrypt(str, salt);
const unscram = decrypt(scram, salt);

console.log("encrypt:", scram);
console.log("decrypt:", unscram);

export default { encrypt, decrypt };