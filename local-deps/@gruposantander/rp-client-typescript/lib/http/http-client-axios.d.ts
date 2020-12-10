import { HttpClient } from './http-client';
export declare class HttpClientAxios implements HttpClient {
    private readonly http;
    private constructor();
    static createInstance(): HttpClientAxios;
    callSimpleGET(url: string): Promise<string>;
    initiateAuthorize(url: string, auth: string, body: string): Promise<string>;
    token(url: string, clientAssertionToken: string, code: string, redirectUri: string, codeVerifier: string): Promise<any>;
}
