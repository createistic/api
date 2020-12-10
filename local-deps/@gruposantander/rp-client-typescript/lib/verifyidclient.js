"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base64url_1 = tslib_1.__importDefault(require("base64url"));
var crypto_1 = tslib_1.__importDefault(require("crypto"));
var node_jose_1 = require("node-jose");
var http_client_axios_1 = require("./http/http-client-axios");
var OPConfiguration_1 = require("./model/OPConfiguration");
var jwk_util_1 = require("./util/jwk-util");
var request_helper_1 = require("./util/request-helper");
var request_util_1 = tslib_1.__importDefault(require("./util/request-util"));
var VerifiedIdClient = /** @class */ (function () {
    function VerifiedIdClient(wellKnownURI, privateJWK, algorithm, clientId, httpClient, helper) {
        this.deepLinkRegex = /(.*):/g;
        this.httpRegex = /https?:/g;
        this.wellKnownURI = wellKnownURI;
        this.privateJWK = privateJWK;
        this.algorithm = algorithm;
        this.clientId = clientId;
        this.httpClient = httpClient;
        this.helper = helper;
    }
    VerifiedIdClient.createInstance = function (param) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var wellKnownURI, privateJWK, algorithm, clientId, httpClient, helper, client;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wellKnownURI = param.wellKnownURI;
                        return [4 /*yield*/, this.extractKey(param.privateJWK)];
                    case 1:
                        privateJWK = _a.sent();
                        algorithm = param.algorithm ? param.algorithm : 'RS256';
                        clientId = param.clientId;
                        httpClient = param.httpClient ? param.httpClient : http_client_axios_1.HttpClientAxios.createInstance();
                        helper = param.helper ? param.helper : new request_helper_1.RequestHelper();
                        client = new VerifiedIdClient(wellKnownURI, privateJWK, algorithm, clientId, httpClient, helper);
                        return [4 /*yield*/, client.checkParameters()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, client];
                }
            });
        });
    };
    VerifiedIdClient.extractKey = function (privateJWK) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!privateJWK) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, jwk_util_1.extractJWKFromString(require(privateJWK))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VerifiedIdClient.prototype.setUpClient = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var wellKnownResponse, jwksResponse, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.httpClient.callSimpleGET(this.wellKnownURI)];
                    case 1:
                        wellKnownResponse = _a.sent();
                        this.extractWellKnownData(wellKnownResponse);
                        return [4 /*yield*/, this.httpClient.callSimpleGET(this.opConfiguration.jwksUri)];
                    case 2:
                        jwksResponse = _a.sent();
                        return [4 /*yield*/, this.extractJWKSData(jwksResponse)];
                    case 3:
                        _a.sent();
                        resolve();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        reject(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    VerifiedIdClient.prototype.initiateAuthorize = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var codeVerifier, now, authBody, auth, requestBody, requestData, response, redirectionUri, resolution, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        request.clientId = this.clientId;
                        if (!request.nonce) {
                            request.nonce = this.helper.random();
                        }
                        codeVerifier = void 0;
                        if (this.isDeepLink(request.redirectURI) && !request.codeChallenge) {
                            codeVerifier = this.helper.random();
                            request.codeChallenge = this.createHash(codeVerifier);
                        }
                        now = this.helper.now();
                        authBody = this.jwtStandardClaims(now);
                        return [4 /*yield*/, jwk_util_1.sign(this.privateJWK, authBody)];
                    case 1:
                        auth = _a.sent();
                        requestBody = Object.assign(this.jwtStandardClaims(now), request_util_1.default(request));
                        return [4 /*yield*/, jwk_util_1.sign(this.privateJWK, requestBody)];
                    case 2:
                        requestData = _a.sent();
                        return [4 /*yield*/, this.httpClient.initiateAuthorize(this.opConfiguration.initAuthorizeEndpoint, auth, requestData)];
                    case 3:
                        response = _a.sent();
                        redirectionUri = this.opConfiguration.authorizationEndpoint + "?request_uri=" + response.request_uri;
                        resolution = {
                            requestObjectUri: response.request_uri,
                            nonce: request.nonce,
                            expiration: response.expires_in,
                            redirectionUri: redirectionUri
                        };
                        if (codeVerifier) {
                            resolution.codeVerifier = codeVerifier;
                        }
                        resolve(resolution);
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        reject(e_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    VerifiedIdClient.prototype.token = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var now, authBody, auth, response, extractedData, e_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        now = this.helper.now();
                        authBody = this.jwtStandardClaims(now);
                        return [4 /*yield*/, jwk_util_1.sign(this.privateJWK, authBody)];
                    case 1:
                        auth = _a.sent();
                        return [4 /*yield*/, this.httpClient.token(this.opConfiguration.tokenEndpoint, auth, request.code, request.redirectUri, request.codeVerifier)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, jwk_util_1.verifySignature(this.opConfiguration.jwks, response.id_token)];
                    case 3:
                        extractedData = _a.sent();
                        if (request.nonce && extractedData.nonce && request.nonce !== extractedData.nonce) {
                            reject("Nonce mismatch. Expected: " + request.nonce + ". Received: " + extractedData.nonce);
                        }
                        resolve(extractedData);
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        reject(e_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    VerifiedIdClient.prototype.extractJWKSData = function (jwksResponse) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.opConfiguration;
                        return [4 /*yield*/, node_jose_1.JWK.asKeyStore(jwksResponse)];
                    case 1:
                        _a.jwks = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerifiedIdClient.prototype.createHash = function (value) {
        var hash = crypto_1.default.createHash('sha256').update(value).digest('base64');
        return base64url_1.default.fromBase64(hash);
    };
    VerifiedIdClient.prototype.jwtStandardClaims = function (now) {
        return {
            sub: this.clientId,
            aud: this.opConfiguration.issuer,
            iss: this.clientId,
            jti: this.helper.random(),
            exp: now + 30,
            iat: now,
            nbf: now
        };
    };
    VerifiedIdClient.prototype.isDeepLink = function (link) {
        if (link) {
            var matches = link.match(this.deepLinkRegex);
            if (matches.length > 0) {
                return !this.httpRegex.test(matches[0].toLocaleLowerCase());
            }
        }
        return false;
    };
    VerifiedIdClient.prototype.checkParameters = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var missing;
            return tslib_1.__generator(this, function (_a) {
                missing = Object.entries(this).find(function (el) { return !el[1]; });
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (missing) {
                            reject(missing[0] + " must be declared");
                        }
                        resolve();
                    })];
            });
        });
    };
    VerifiedIdClient.prototype.extractWellKnownData = function (wellKnownResponse) {
        var _this = this;
        this.opConfiguration = new OPConfiguration_1.OPConfiguration();
        this.opConfiguration.authorizationEndpoint = wellKnownResponse.authorization_endpoint;
        this.opConfiguration.initAuthorizeEndpoint = wellKnownResponse.pushed_authorization_request_endpoint;
        this.opConfiguration.tokenEndpoint = wellKnownResponse.token_endpoint;
        this.opConfiguration.issuer = wellKnownResponse.issuer;
        this.opConfiguration.jwksUri = wellKnownResponse.jwks_uri;
        Object.keys(this.opConfiguration).forEach(function (key) {
            var value = _this.opConfiguration[key];
            if (!value) {
                throw new Error("Value of " + key + " missing from well-known configuration");
            }
        });
    };
    return VerifiedIdClient;
}());
exports.VerifiedIdClient = VerifiedIdClient;
//# sourceMappingURL=verifyidclient.js.map