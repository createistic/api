"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertionClaim = /** @class */ (function () {
    function AssertionClaim(claimName) {
        this._claimName = claimName;
    }
    Object.defineProperty(AssertionClaim.prototype, "claimName", {
        get: function () {
            return this._claimName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssertionClaim.prototype, "purpose", {
        get: function () {
            return this._purpose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssertionClaim.prototype, "essential", {
        get: function () {
            return this._essential;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssertionClaim.prototype, "ial", {
        get: function () {
            return this._ial;
        },
        enumerable: true,
        configurable: true
    });
    AssertionClaim.prototype.withPurpose = function (purpose) {
        this._purpose = purpose;
        return this;
    };
    AssertionClaim.prototype.withEssential = function (essential) {
        this._essential = essential;
        return this;
    };
    AssertionClaim.prototype.withIAL = function (ial) {
        this._ial = ial;
        return this;
    };
    return AssertionClaim;
}());
exports.AssertionClaim = AssertionClaim;
//# sourceMappingURL=assertion-claim.js.map