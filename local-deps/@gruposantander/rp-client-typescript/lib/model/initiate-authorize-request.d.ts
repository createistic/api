import { AssertionClaims } from './claims/verifying/assertion-claims';
import { Claims } from './claims/sharing/claims';
import { InitiateAuthorizeRequestBuilder } from './initiate-authorize-requestBuilder';
export declare class InitiateAuthorizeRequest {
    private readonly _redirectURI;
    private readonly _assertionClaims;
    private readonly _claims;
    private readonly _state;
    private readonly _purpose;
    private _clientId;
    private _nonce;
    private _codeChallenge;
    constructor(builder: InitiateAuthorizeRequestBuilder);
    readonly redirectURI: string;
    readonly assertionClaims: AssertionClaims;
    readonly claims: Claims;
    readonly state: string;
    readonly purpose: string;
    clientId: string;
    codeChallenge: string;
    nonce: string;
}
