"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assertion_claim_comparator_1 = require("./assertion-claim-comparator");
var assertion_claim_complex_1 = require("./assertion-claim-complex");
var assertion_claim_simple_1 = require("./assertion-claim-simple");
var AssertionClaims = /** @class */ (function () {
    function AssertionClaims() {
        this._claims = [];
    }
    Object.defineProperty(AssertionClaims.prototype, "claims", {
        get: function () {
            return this._claims;
        },
        enumerable: true,
        configurable: true
    });
    AssertionClaims.prototype.email = function () {
        return this.addAssertionClaimSimple('email');
    };
    AssertionClaims.prototype.phoneNumber = function () {
        return this.addAssertionClaimSimple('phone_number');
    };
    AssertionClaims.prototype.familyName = function () {
        return this.addAssertionClaimSimple('family_name');
    };
    AssertionClaims.prototype.givenName = function () {
        return this.addAssertionClaimSimple('given_name');
    };
    AssertionClaims.prototype.age = function () {
        return this.addAssertionClaimComparator('age');
    };
    AssertionClaims.prototype.gender = function () {
        return this.addAssertionClaimSimple('gender');
    };
    AssertionClaims.prototype.countryOfBirth = function () {
        return this.addAssertionClaimSimple('country_of_birth');
    };
    AssertionClaims.prototype.title = function () {
        return this.addAssertionClaimSimple('title');
    };
    AssertionClaims.prototype.nationality = function () {
        return this.addAssertionClaimSimple('nationality');
    };
    AssertionClaims.prototype.civilStatus = function () {
        return this.addAssertionClaimSimple('civil_status');
    };
    AssertionClaims.prototype.companyRegisteredName = function () {
        return this.addAssertionClaimSimple('company_registered_name');
    };
    AssertionClaims.prototype.companyTradeName = function () {
        return this.addAssertionClaimSimple('company_trade_name');
    };
    AssertionClaims.prototype.companyStartDate = function () {
        return this.addAssertionClaimComparator('company_start_date');
    };
    AssertionClaims.prototype.companyEndDate = function () {
        return this.addAssertionClaimComparator('company_end_date');
    };
    AssertionClaims.prototype.companyType = function () {
        return this.addAssertionClaimSimple('company_type');
    };
    AssertionClaims.prototype.companyCountryIncorporation = function () {
        return this.addAssertionClaimSimple('company_country_incorporation');
    };
    AssertionClaims.prototype.companyAge = function () {
        return this.addAssertionClaimComparator('company_age');
    };
    AssertionClaims.prototype.companyOperating = function () {
        return this.addAssertionClaimSimple('company_operating');
    };
    AssertionClaims.prototype.birthdate = function () {
        return this.addAssertionClaimComparator('birthdate');
    };
    AssertionClaims.prototype.totalBalance = function () {
        return this.addAssertionClaimComplex('total_balance');
    };
    AssertionClaims.prototype.address = function () {
        return this.addAssertionClaimComplex('address');
    };
    AssertionClaims.prototype.lastYearMoneyIn = function () {
        return this.addAssertionClaimComplex('last_year_money_in');
    };
    AssertionClaims.prototype.lastQuarterMoneyIn = function () {
        return this.addAssertionClaimComplex('last_quarter_money_in');
    };
    AssertionClaims.prototype.averageMonthlyMoneyIn = function () {
        return this.addAssertionClaimComplex('average_monthly_money_in');
    };
    AssertionClaims.prototype.passportId = function () {
        return this.addAssertionClaimSimple('passport_id');
    };
    AssertionClaims.prototype.drivingLicenseId = function () {
        return this.addAssertionClaimSimple('driving_license_id');
    };
    AssertionClaims.prototype.nationalCardId = function () {
        return this.addAssertionClaimSimple('national_card_id');
    };
    AssertionClaims.prototype.addAssertionClaimSimple = function (claimName) {
        var claim = new assertion_claim_simple_1.AssertionClaimSimple(claimName);
        var existingClaimIndex = this._claims.findIndex(function (cl) { return cl.claimName === claimName; });
        if (existingClaimIndex > -1)
            this._claims.splice(existingClaimIndex, 1);
        this._claims.push(claim);
        return claim;
    };
    AssertionClaims.prototype.addAssertionClaimComparator = function (claimName) {
        var claim = new assertion_claim_comparator_1.AssertionClaimComparator(claimName);
        var existingClaimIndex = this._claims.findIndex(function (cl) { return cl.claimName === claimName; });
        if (existingClaimIndex > -1)
            this._claims.splice(existingClaimIndex, 1);
        this._claims.push(claim);
        return claim;
    };
    AssertionClaims.prototype.addAssertionClaimComplex = function (claimName) {
        var claim = new assertion_claim_complex_1.AssertionClaimComplex(claimName);
        var existingClaimIndex = this._claims.findIndex(function (cl) { return cl.claimName === claimName; });
        if (existingClaimIndex > -1)
            this._claims.splice(existingClaimIndex, 1);
        this._claims.push(claim);
        return claim;
    };
    return AssertionClaims;
}());
exports.AssertionClaims = AssertionClaims;
//# sourceMappingURL=assertion-claims.js.map