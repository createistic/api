"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var node_jose_1 = require("node-jose");
function extractJWKFromString(asString) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node_jose_1.JWK.asKey(asString)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.extractJWKFromString = extractJWKFromString;
function sign(key, payload) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var payloadAsString, signature;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof payload === 'string') {
                        payloadAsString = payload;
                    }
                    else {
                        payloadAsString = JSON.stringify(payload);
                    }
                    return [4 /*yield*/, node_jose_1.JWS.createSign({ format: 'compact', fields: { typ: 'JWT' } }, key)
                            .update(payloadAsString)
                            .final()];
                case 1:
                    signature = _a.sent();
                    return [2 /*return*/, signature.toString()];
            }
        });
    });
}
exports.sign = sign;
function verifySignature(jwks, jwt) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var payload;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node_jose_1.JWS.createVerify(jwks)
                        .verify(jwt)];
                case 1:
                    payload = _a.sent();
                    return [2 /*return*/, JSON.parse(payload.payload.toString())];
            }
        });
    });
}
exports.verifySignature = verifySignature;
//# sourceMappingURL=jwk-util.js.map