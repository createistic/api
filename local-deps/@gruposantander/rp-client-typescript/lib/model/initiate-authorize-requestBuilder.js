"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initiate_authorize_request_1 = require("./initiate-authorize-request");
var InitiateAuthorizeRequestBuilder = /** @class */ (function () {
    function InitiateAuthorizeRequestBuilder() {
        this.redirectURI = undefined;
        this.assertionClaims = undefined;
        this.claims = undefined;
        this.state = undefined;
        this.purpose = undefined;
        this.codeChallenge = undefined;
        this.nonce = undefined;
    }
    InitiateAuthorizeRequestBuilder.prototype.build = function () {
        return new initiate_authorize_request_1.InitiateAuthorizeRequest(this);
    };
    InitiateAuthorizeRequestBuilder.prototype.withRedirectURI = function (value) {
        this.redirectURI = value;
        return this;
    };
    InitiateAuthorizeRequestBuilder.prototype.withAssertionClaims = function (value) {
        this.assertionClaims = value;
        return this;
    };
    InitiateAuthorizeRequestBuilder.prototype.withClaims = function (value) {
        this.claims = value;
        return this;
    };
    InitiateAuthorizeRequestBuilder.prototype.withState = function (value) {
        this.state = value;
        return this;
    };
    InitiateAuthorizeRequestBuilder.prototype.withPurpose = function (value) {
        this.purpose = value;
        return this;
    };
    InitiateAuthorizeRequestBuilder.prototype.withCodeChallenge = function (value) {
        this.codeChallenge = value;
        return this;
    };
    InitiateAuthorizeRequestBuilder.prototype.withNonce = function (value) {
        this.nonce = value;
        return this;
    };
    return InitiateAuthorizeRequestBuilder;
}());
exports.InitiateAuthorizeRequestBuilder = InitiateAuthorizeRequestBuilder;
//# sourceMappingURL=initiate-authorize-requestBuilder.js.map