const hash = (str:string) =>
  str.split("").reduce((hash, char) => {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    return hash & hash;
  }, 0);

const offset = (num:number, i:number) =>
  parseInt(num.toString().charAt(i % num.toString().length));

export const encryptPassword = (st:string, sa:string, d = 1) =>{
  const hashSalt:number=hash(sa)
  return st
    .split("")
    .map((c, i) => String.fromCharCode(c.charCodeAt(0) + offset(hashSalt, i) * d))
    .join("");

}
export const decryptPassword = (str:string, salt:string) => {
  return encryptPassword(str, salt, -1);}

const salt = "test";
const str = "My name is john bosco";

const scram = encryptPassword(str, salt);
const unscram = decryptPassword(scram, salt);

console.log("encryptPassword:", scram);
console.log("decryptPassword:", unscram);