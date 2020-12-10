import { InitiateAuthorizeRequest } from './model/initiate-authorize-request';
import { TokenRequest } from './model/token/token-request';
export declare class VerifiedIdClient {
    private readonly deepLinkRegex;
    private readonly httpRegex;
    private readonly wellKnownURI;
    private readonly privateJWK;
    private readonly algorithm;
    private readonly clientId;
    private readonly httpClient;
    private readonly helper;
    private opConfiguration;
    private constructor();
    static createInstance(param: {
        [key: string]: any;
    }): Promise<VerifiedIdClient>;
    private static extractKey;
    setUpClient(): Promise<void>;
    initiateAuthorize(request: InitiateAuthorizeRequest): Promise<any>;
    token(request: TokenRequest): Promise<any>;
    private extractJWKSData;
    private createHash;
    private jwtStandardClaims;
    private isDeepLink;
    private checkParameters;
    private extractWellKnownData;
}
