"use strict";
exports.__esModule = true;
exports.PhoneRegex = void 0;
var PhoneRegex = /** @class */ (function () {
    function PhoneRegex() {
        this.PHONE_REGEX = /^[0-9]{2}[0][0-9]{9}$/;
    }
    PhoneRegex.prototype.validate = function (regex) {
        return this.PHONE_REGEX.test(regex);
    };
    return PhoneRegex;
}());
exports.PhoneRegex = PhoneRegex;
