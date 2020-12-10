"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assertion_claim_1 = require("./assertion-claim");
var AssertionClaimComplex = /** @class */ (function (_super) {
    tslib_1.__extends(AssertionClaimComplex, _super);
    function AssertionClaimComplex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._properties = [];
        return _this;
    }
    Object.defineProperty(AssertionClaimComplex.prototype, "properties", {
        get: function () {
            return this._properties;
        },
        enumerable: true,
        configurable: true
    });
    AssertionClaimComplex.prototype.withAssertion = function (property) {
        this._properties.push(property);
        return this;
    };
    return AssertionClaimComplex;
}(assertion_claim_1.AssertionClaim));
exports.AssertionClaimComplex = AssertionClaimComplex;
//# sourceMappingURL=assertion-claim-complex.js.map