import { AssertionClaims } from './claims/verifying/assertion-claims';
import { Claims } from './claims/sharing/claims';
import { InitiateAuthorizeRequest } from './initiate-authorize-request';
export declare class InitiateAuthorizeRequestBuilder {
    redirectURI: string;
    assertionClaims: AssertionClaims;
    claims: Claims;
    state: string;
    purpose: string;
    codeChallenge: string;
    nonce: string;
    build(): InitiateAuthorizeRequest;
    withRedirectURI(value: string): this;
    withAssertionClaims(value: AssertionClaims): this;
    withClaims(value: Claims): this;
    withState(value: string): this;
    withPurpose(value: string): this;
    withCodeChallenge(value: string): this;
    withNonce(value: string): this;
}
