"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var property_1 = require("./property");
var Address = /** @class */ (function () {
    function Address() {
    }
    Address.formatted = function () {
        return new property_1.Property('formatted');
    };
    Address.streetAddress = function () {
        return new property_1.Property('street_address');
    };
    Address.locality = function () {
        return new property_1.Property('locality');
    };
    Address.region = function () {
        return new property_1.Property('region');
    };
    Address.postalCode = function () {
        return new property_1.Property('postal_code');
    };
    Address.country = function () {
        return new property_1.Property('country');
    };
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.js.map