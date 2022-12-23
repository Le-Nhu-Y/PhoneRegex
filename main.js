"use strict";
exports.__esModule = true;
var PhoneRegex_1 = require("./PhoneRegex");
var phoneRegex = new PhoneRegex_1.PhoneRegex();
var validPhone = ['840986022086', '840912999999'];
var invalidPhone = ['841234999999'];
for (var _i = 0, validPhone_1 = validPhone; _i < validPhone_1.length; _i++) {
    var phone = validPhone_1[_i];
    var isvalid = phoneRegex.validate(phone);
    console.log('Phone is ' + phone + ' is valid ' + isvalid);
}
for (var _a = 0, invalidPhone_1 = invalidPhone; _a < invalidPhone_1.length; _a++) {
    var phone = invalidPhone_1[_a];
    var isvalid = phoneRegex.validate(phone);
    console.log('Phone is ' + phone + ' is valid ' + isvalid);
}
