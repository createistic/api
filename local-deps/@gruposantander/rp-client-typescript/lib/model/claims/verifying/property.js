"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operator_1 = require("./operator");
var Property = /** @class */ (function () {
    function Property(propertyName) {
        this._propertyName = propertyName;
    }
    Object.defineProperty(Property.prototype, "operand", {
        get: function () {
            return this._operand;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "operator", {
        get: function () {
            return this._operator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        enumerable: true,
        configurable: true
    });
    Property.prototype.eq = function (operand) {
        this._operand = operand;
        this._operator = operator_1.Operator.EQUAL;
        return this;
    };
    return Property;
}());
exports.Property = Property;
//# sourceMappingURL=property.js.map