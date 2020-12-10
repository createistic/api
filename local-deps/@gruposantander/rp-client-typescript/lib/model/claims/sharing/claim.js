"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Claim = /** @class */ (function () {
    function Claim(claimName) {
        this._claimName = claimName;
    }
    Object.defineProperty(Claim.prototype, "claimName", {
        get: function () {
            return this._claimName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Claim.prototype, "purpose", {
        get: function () {
            return this._purpose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Claim.prototype, "essential", {
        get: function () {
            return this._essential;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Claim.prototype, "ial", {
        get: function () {
            return this._ial;
        },
        enumerable: true,
        configurable: true
    });
    Claim.prototype.withPurpose = function (purpose) {
        this._purpose = purpose;
        return this;
    };
    Claim.prototype.withEssential = function (essential) {
        this._essential = essential;
        return this;
    };
    Claim.prototype.withIAL = function (ial) {
        this._ial = ial;
        return this;
    };
    return Claim;
}());
exports.Claim = Claim;
//# sourceMappingURL=claim.js.map