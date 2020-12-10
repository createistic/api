import { TokenRequest } from './token-request';
export declare class TokenRequestBuilder {
    grantType: string;
    code: string;
    clientAssertionType: string;
    clientAssertionToken: string;
    redirectUri: string;
    nonce: string;
    codeVerifier: string;
    build(): TokenRequest;
    withCode(value: string): this;
    withRedirectUri(value: string): this;
    withNonce(value: string): this;
    withCodeVerifier(value: string): this;
}
