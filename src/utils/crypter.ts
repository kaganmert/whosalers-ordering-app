import { GlobalKeys } from "./constants";

var CryptoJS = require("crypto-js");

export const encrypt = (str: any) => {
  return encodeURIComponent(
    CryptoJS.AES.encrypt(JSON.stringify(str), GlobalKeys.EncryptKey).toString()
  );
};

export const decrypt = (str: any) => {
  var deData = CryptoJS.AES.decrypt(
    decodeURIComponent(str),
    GlobalKeys.EncryptKey
  );
  return JSON.parse(deData.toString(CryptoJS.enc.Utf8));
};
