"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nanoid_1 = tslib_1.__importDefault(require("nanoid"));
var RequestHelper = /** @class */ (function () {
    function RequestHelper() {
    }
    RequestHelper.prototype.now = function () {
        return Math.floor(Date.now() / 1000);
    };
    RequestHelper.prototype.random = function () {
        return nanoid_1.default(43);
    };
    return RequestHelper;
}());
exports.RequestHelper = RequestHelper;
//# sourceMappingURL=request-helper.js.map