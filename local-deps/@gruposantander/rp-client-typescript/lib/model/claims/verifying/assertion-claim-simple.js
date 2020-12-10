"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assertion_claim_1 = require("./assertion-claim");
var operator_1 = require("./operator");
var AssertionClaimSimple = /** @class */ (function (_super) {
    tslib_1.__extends(AssertionClaimSimple, _super);
    function AssertionClaimSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AssertionClaimSimple.prototype, "operand", {
        get: function () {
            return this._operand;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssertionClaimSimple.prototype, "operator", {
        get: function () {
            return this._operator;
        },
        enumerable: true,
        configurable: true
    });
    AssertionClaimSimple.prototype.equal = function (operand) {
        this._operand = operand;
        this._operator = operator_1.Operator.EQUAL;
        return this;
    };
    return AssertionClaimSimple;
}(assertion_claim_1.AssertionClaim));
exports.AssertionClaimSimple = AssertionClaimSimple;
//# sourceMappingURL=assertion-claim-simple.js.map