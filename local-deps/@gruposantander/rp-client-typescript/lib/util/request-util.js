"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toJSON(request) {
    var idToken = prepareSharingClaims(request.claims);
    idToken.assertion_claims = prepareVerifyingClaims(request.assertionClaims);
    var json = {
        state: request.state,
        redirect_uri: request.redirectURI,
        nonce: request.nonce,
        response_type: 'code',
        scope: 'openid',
        client_id: request.clientId,
        claims: {
            purpose: request.purpose,
            id_token: idToken
        }
    };
    if (request.codeChallenge) {
        json.code_challenge = request.codeChallenge;
        json.code_challenge_method = 'S256';
    }
    return json;
}
exports.default = toJSON;
function prepareVerifyingClaims(assertionClaims) {
    var verifyingClaims = {};
    assertionClaims.claims.forEach(function (claim) {
        verifyingClaims[claim.claimName] = {
            purpose: claim.purpose,
            ial: claim.ial,
            essential: claim.essential
        };
        var assertion = {};
        var type = claim.constructor.name;
        switch (type) {
            case 'AssertionClaimComplex':
                prepareAssertionForComplexClaim(claim, assertion);
                assertion = { props: assertion };
                break;
            case 'AssertionClaimSimple':
            case 'AssertionClaimComparator':
                prepareAssertionForSimpleClaim(claim, assertion);
                break;
            default:
                throw Error(type + " does not exist");
        }
        verifyingClaims[claim.claimName].assertion = assertion;
    });
    return verifyingClaims;
}
function prepareAssertionForSimpleClaim(claim, assertion) {
    var simpleClaim = claim;
    assertion[simpleClaim.operator] = prepareOperand(simpleClaim.operand);
}
function prepareAssertionForComplexClaim(claim, assertion) {
    var complexClaim = claim;
    complexClaim.properties.forEach(function (property) {
        var internalAssertion = {};
        internalAssertion[property.operator] = property.operand;
        assertion[property.propertyName] = internalAssertion;
    });
}
function prepareSharingClaims(claims) {
    var idToken = {};
    claims.claims.forEach(function (claim) {
        idToken[claim.claimName] = {
            purpose: claim.purpose,
            ial: claim.ial,
            essential: claim.essential
        };
    });
    return idToken;
}
function prepareOperand(operand) {
    if (operand instanceof Date) {
        return operand.toISOString().split('T')[0];
    }
    else
        return operand;
}
//# sourceMappingURL=request-util.js.map