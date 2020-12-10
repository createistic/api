"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var claims_1 = require("./model/claims/sharing/claims");
var assertion_claims_1 = require("./model/claims/verifying/assertion-claims");
var address_1 = require("./model/claims/verifying/address");
var balance_1 = require("./model/claims/verifying/balance");
var verifyidclient_1 = require("./verifyidclient");
var initiate_authorize_requestBuilder_1 = require("./model/initiate-authorize-requestBuilder");
var token_requestBuilder_1 = require("./model/token/token-requestBuilder");
exports.Model = {
    Claims: claims_1.Claims,
    AssertionClaims: assertion_claims_1.AssertionClaims,
    Balance: balance_1.Balance,
    Address: address_1.Address
};
exports.Client = {
    VerifiedIdClient: verifyidclient_1.VerifiedIdClient,
    InitiateAuthorizeRequestBuilder: initiate_authorize_requestBuilder_1.InitiateAuthorizeRequestBuilder,
    TokenRequestBuilder: token_requestBuilder_1.TokenRequestBuilder
};
//# sourceMappingURL=api.js.map