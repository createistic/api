import { Claims } from './model/claims/sharing/claims';
import { AssertionClaims } from './model/claims/verifying/assertion-claims';
import { Address } from './model/claims/verifying/address';
import { Balance } from './model/claims/verifying/balance';
import { VerifiedIdClient } from './verifyidclient';
import { InitiateAuthorizeRequestBuilder } from './model/initiate-authorize-requestBuilder';
import { TokenRequestBuilder } from './model/token/token-requestBuilder';
export declare const Model: {
    Claims: typeof Claims;
    AssertionClaims: typeof AssertionClaims;
    Balance: typeof Balance;
    Address: typeof Address;
};
export declare const Client: {
    VerifiedIdClient: typeof VerifiedIdClient;
    InitiateAuthorizeRequestBuilder: typeof InitiateAuthorizeRequestBuilder;
    TokenRequestBuilder: typeof TokenRequestBuilder;
};
