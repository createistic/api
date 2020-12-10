import { JWK } from 'node-jose';
export declare function extractJWKFromString(asString: string): Promise<JWK.Key>;
export declare function sign(key: JWK.Key, payload: any): Promise<string>;
export declare function verifySignature(jwks: JWK.KeyStore, jwt: string): Promise<any>;
