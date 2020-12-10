"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var HttpClientAxios = /** @class */ (function () {
    function HttpClientAxios(http) {
        this.http = http;
    }
    HttpClientAxios.createInstance = function () {
        return new HttpClientAxios(axios_1.default.create());
    };
    HttpClientAxios.prototype.callSimpleGET = function (url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, status;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(url)];
                    case 1:
                        response = _a.sent();
                        status = response.status;
                        if (status === 200) {
                            return [2 /*return*/, response.data];
                        }
                        else {
                            throw new Error("Response status: " + status);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HttpClientAxios.prototype.initiateAuthorize = function (url, auth, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, response, status;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = 'client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer'
                            + ("&client_assertion=" + auth)
                            + ("&request=" + body);
                        return [4 /*yield*/, this.http.post(url, data)];
                    case 1:
                        response = _a.sent();
                        status = response.status;
                        if (status === 201) {
                            return [2 /*return*/, response.data];
                        }
                        else {
                            throw new Error("Response status: " + status);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HttpClientAxios.prototype.token = function (url, clientAssertionToken, code, redirectUri, codeVerifier) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, response, status;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = "grant_type=authorization_code&code=" + code + "&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&client_assertion=" + clientAssertionToken + "&redirect_uri=" + redirectUri;
                        if (codeVerifier) {
                            data += "&code_verifier=" + codeVerifier;
                        }
                        return [4 /*yield*/, this.http.post(url, data)];
                    case 1:
                        response = _a.sent();
                        status = response.status;
                        if (status === 200) {
                            return [2 /*return*/, response.data];
                        }
                        else {
                            throw new Error("Response status: " + status);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return HttpClientAxios;
}());
exports.HttpClientAxios = HttpClientAxios;
//# sourceMappingURL=http-client-axios.js.map