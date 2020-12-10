"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_request_1 = require("./token-request");
var TokenRequestBuilder = /** @class */ (function () {
    function TokenRequestBuilder() {
        this.grantType = 'authorization';
        this.clientAssertionType = 'client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer';
    }
    TokenRequestBuilder.prototype.build = function () {
        return new token_request_1.TokenRequest(this);
    };
    TokenRequestBuilder.prototype.withCode = function (value) {
        this.code = value;
        return this;
    };
    TokenRequestBuilder.prototype.withRedirectUri = function (value) {
        this.redirectUri = value;
        return this;
    };
    TokenRequestBuilder.prototype.withNonce = function (value) {
        this.nonce = value;
        return this;
    };
    TokenRequestBuilder.prototype.withCodeVerifier = function (value) {
        this.codeVerifier = value;
        return this;
    };
    return TokenRequestBuilder;
}());
exports.TokenRequestBuilder = TokenRequestBuilder;
//# sourceMappingURL=token-requestBuilder.js.map