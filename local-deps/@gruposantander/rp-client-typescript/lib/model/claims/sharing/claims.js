"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var claim_1 = require("./claim");
var Claims = /** @class */ (function () {
    function Claims() {
        this._claims = [];
    }
    Object.defineProperty(Claims.prototype, "claims", {
        get: function () {
            return this._claims;
        },
        enumerable: true,
        configurable: true
    });
    Claims.prototype.phoneNumber = function () {
        return this.addClaim('phone_number');
    };
    Claims.prototype.email = function () {
        return this.addClaim('email');
    };
    Claims.prototype.familyName = function () {
        return this.addClaim('family_name');
    };
    Claims.prototype.givenName = function () {
        return this.addClaim('given_name');
    };
    Claims.prototype.birthdate = function () {
        return this.addClaim('birthdate');
    };
    Claims.prototype.age = function () {
        return this.addClaim('age');
    };
    Claims.prototype.totalBalance = function () {
        return this.addClaim('total_balance');
    };
    Claims.prototype.address = function () {
        return this.addClaim('address');
    };
    Claims.prototype.gender = function () {
        return this.addClaim('gender');
    };
    Claims.prototype.countryOfBirth = function () {
        return this.addClaim('country_of_birth');
    };
    Claims.prototype.title = function () {
        return this.addClaim('title');
    };
    Claims.prototype.nationality = function () {
        return this.addClaim('nationality');
    };
    Claims.prototype.civilStatus = function () {
        return this.addClaim('civil_status');
    };
    Claims.prototype.companyRegisteredName = function () {
        return this.addClaim('company_registered_name');
    };
    Claims.prototype.companyTradeName = function () {
        return this.addClaim('company_trade_name');
    };
    Claims.prototype.companyStartDate = function () {
        return this.addClaim('company_start_date');
    };
    Claims.prototype.companyEndDate = function () {
        return this.addClaim('company_end_date');
    };
    Claims.prototype.companyType = function () {
        return this.addClaim('company_type');
    };
    Claims.prototype.companyCountryIncorporation = function () {
        return this.addClaim('company_country_incorporation');
    };
    Claims.prototype.companyAge = function () {
        return this.addClaim('company_age');
    };
    Claims.prototype.companyOperating = function () {
        return this.addClaim('company_operating');
    };
    Claims.prototype.lastYearMoneyIn = function () {
        return this.addClaim('last_year_money_in');
    };
    Claims.prototype.lastQuarterMoneyIn = function () {
        return this.addClaim('last_quarter_money_in');
    };
    Claims.prototype.averageMonthlyMoneyIn = function () {
        return this.addClaim('average_monthly_money_in');
    };
    Claims.prototype.passportId = function () {
        return this.addClaim('passport_id');
    };
    Claims.prototype.drivingLicenseId = function () {
        return this.addClaim('driving_license_id');
    };
    Claims.prototype.nationalCardId = function () {
        return this.addClaim('national_card_id');
    };
    Claims.prototype.addClaim = function (claimName) {
        var claim = new claim_1.Claim(claimName);
        var existingClaimIndex = this._claims.findIndex(function (cl) { return cl.claimName === claimName; });
        if (existingClaimIndex >= 0) {
            this._claims.splice(existingClaimIndex, 1);
        }
        this._claims.push(claim);
        return claim;
    };
    return Claims;
}());
exports.Claims = Claims;
//# sourceMappingURL=claims.js.map