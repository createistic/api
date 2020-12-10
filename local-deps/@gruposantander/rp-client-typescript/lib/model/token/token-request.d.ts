import { TokenRequestBuilder } from './token-requestBuilder';
export declare class TokenRequest {
    private readonly _code;
    private readonly _clientAssertionType;
    private readonly _redirectUri;
    private readonly _grantType;
    private readonly _nonce;
    private readonly _codeVerifier;
    constructor(builder: TokenRequestBuilder);
    readonly code: string;
    readonly redirectUri: string;
    readonly nonce: string;
    readonly codeVerifier: string;
}
