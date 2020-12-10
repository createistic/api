"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var property_1 = require("./property");
var property_comparator_1 = require("./property-comparator");
var Balance = /** @class */ (function () {
    function Balance() {
    }
    Balance.currency = function () {
        return new property_1.Property('currency');
    };
    Balance.amount = function () {
        return new property_comparator_1.PropertyComparator('amount');
    };
    return Balance;
}());
exports.Balance = Balance;
//# sourceMappingURL=balance.js.map