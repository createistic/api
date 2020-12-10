"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assertion_claim_simple_1 = require("./assertion-claim-simple");
var operator_1 = require("./operator");
var AssertionClaimComparator = /** @class */ (function (_super) {
    tslib_1.__extends(AssertionClaimComparator, _super);
    function AssertionClaimComparator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssertionClaimComparator.prototype.gt = function (operand) {
        this._operand = operand;
        this._operator = operator_1.Operator.GREATER_THAN;
        return this;
    };
    AssertionClaimComparator.prototype.gte = function (operand) {
        this._operand = operand;
        this._operator = operator_1.Operator.GREATER_THAN_OR_EQUAL;
        return this;
    };
    AssertionClaimComparator.prototype.lt = function (operand) {
        this._operand = operand;
        this._operator = operator_1.Operator.LESS_THAN;
        return this;
    };
    AssertionClaimComparator.prototype.lte = function (operand) {
        this._operand = operand;
        this._operator = operator_1.Operator.LESS_THAN_OR_EQUAL;
        return this;
    };
    return AssertionClaimComparator;
}(assertion_claim_simple_1.AssertionClaimSimple));
exports.AssertionClaimComparator = AssertionClaimComparator;
//# sourceMappingURL=assertion-claim-comparator.js.map