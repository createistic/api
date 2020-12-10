"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operator_1 = require("./operator");
var property_1 = require("./property");
var PropertyComparator = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyComparator, _super);
    function PropertyComparator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropertyComparator.prototype.gt = function (operand) {
        this._operand = operand;
        this._operator = operator_1.Operator.GREATER_THAN;
        return this;
    };
    PropertyComparator.prototype.gte = function (operand) {
        this._operand = operand;
        this._operator = operator_1.Operator.GREATER_THAN_OR_EQUAL;
        return this;
    };
    PropertyComparator.prototype.lt = function (operand) {
        this._operand = operand;
        this._operator = operator_1.Operator.LESS_THAN;
        return this;
    };
    PropertyComparator.prototype.lte = function (operand) {
        this._operand = operand;
        this._operator = operator_1.Operator.LESS_THAN_OR_EQUAL;
        return this;
    };
    return PropertyComparator;
}(property_1.Property));
exports.PropertyComparator = PropertyComparator;
//# sourceMappingURL=property-comparator.js.map