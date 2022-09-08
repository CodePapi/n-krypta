import {encryptPassword, decryptPassword} from "./app"
export {encryptPassword, decryptPassword} from "./app"

console.log("test")

console.log(encryptPassword("My name is john bosco","test"))
console.log(encryptPassword("My name is john bosco","test",-1))
console.log(decryptPassword("My name is john bosco","test"))