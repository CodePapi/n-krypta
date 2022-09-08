"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
var hash = function (str) {
    return str.split("").reduce(function (hash, char) {
        hash = (hash << 5) - hash + char.charCodeAt(0);
        return hash & hash;
    }, 0);
};
var offset = function (num, i) {
    return parseInt(num.toString().charAt(i % num.toString().length));
};
var encrypt = function (st, sa, d) {
    if (d === void 0) { d = 1; }
    var hashSalt = hash(sa);
    return st
        .split("")
        .map(function (c, i) { return String.fromCharCode(c.charCodeAt(0) + offset(hashSalt, i) * d); })
        .join("");
};
exports.encrypt = encrypt;
var decrypt = function (str, salt) {
    return (0, exports.encrypt)(str, salt, -1);
};
exports.decrypt = decrypt;
var salt = "test";
var str = "My name is john bosco";
var scram = (0, exports.encrypt)(str, salt);
var unscram = (0, exports.decrypt)(scram, salt);
console.log("encrypt:", scram);
console.log("decrypt:", unscram);
exports.default = { encrypt: exports.encrypt, decrypt: exports.decrypt };
