"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenRequest = /** @class */ (function () {
    function TokenRequest(builder) {
        this._code = builder.code;
        this._clientAssertionType = builder.clientAssertionType;
        this._redirectUri = builder.redirectUri;
        this._grantType = builder.grantType;
        this._nonce = builder.nonce;
        this._codeVerifier = builder.codeVerifier;
    }
    Object.defineProperty(TokenRequest.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenRequest.prototype, "redirectUri", {
        get: function () {
            return this._redirectUri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenRequest.prototype, "nonce", {
        get: function () {
            return this._nonce;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenRequest.prototype, "codeVerifier", {
        get: function () {
            return this._codeVerifier;
        },
        enumerable: true,
        configurable: true
    });
    return TokenRequest;
}());
exports.TokenRequest = TokenRequest;
//# sourceMappingURL=token-request.js.map