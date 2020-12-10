"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InitiateAuthorizeRequest = /** @class */ (function () {
    function InitiateAuthorizeRequest(builder) {
        this._redirectURI = builder.redirectURI;
        this._assertionClaims = builder.assertionClaims;
        this._claims = builder.claims;
        this._state = builder.state;
        this._purpose = builder.purpose;
        this._codeChallenge = builder.codeChallenge;
        this._nonce = builder.nonce;
    }
    Object.defineProperty(InitiateAuthorizeRequest.prototype, "redirectURI", {
        get: function () {
            return this._redirectURI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitiateAuthorizeRequest.prototype, "assertionClaims", {
        get: function () {
            return this._assertionClaims;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitiateAuthorizeRequest.prototype, "claims", {
        get: function () {
            return this._claims;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitiateAuthorizeRequest.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitiateAuthorizeRequest.prototype, "purpose", {
        get: function () {
            return this._purpose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitiateAuthorizeRequest.prototype, "clientId", {
        get: function () {
            return this._clientId;
        },
        set: function (value) {
            this._clientId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitiateAuthorizeRequest.prototype, "codeChallenge", {
        get: function () {
            return this._codeChallenge;
        },
        set: function (value) {
            this._codeChallenge = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitiateAuthorizeRequest.prototype, "nonce", {
        get: function () {
            return this._nonce;
        },
        set: function (value) {
            this._nonce = value;
        },
        enumerable: true,
        configurable: true
    });
    return InitiateAuthorizeRequest;
}());
exports.InitiateAuthorizeRequest = InitiateAuthorizeRequest;
//# sourceMappingURL=initiate-authorize-request.js.map