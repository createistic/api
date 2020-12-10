import { JWK } from 'node-jose';
export declare class OPConfiguration {
    initAuthorizeEndpoint: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    issuer: string;
    jwksUri: string;
    jwks: JWK.KeyStore;
}
