import {
    ApiKeyAuth,
    Authentication,
    GateApiV4Auth,
    Interceptor,
    ObjectSerializer
} from "../model/models";
import localVarRequest = require('request');
import http = require('http');
import { HttpError } from "./apis";

export class ApiClient {

    protected _basePath: string = 'https://api.gateio.ws/api/v4';
    protected _defaultHeaders: any = {};

    protected authentications: { [key: string]: Authentication } = {
        'apiv4': new ApiKeyAuth('header', 'SIGN'),
    }

    protected interceptors: Interceptor[] = [];

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKeySecret(key: string, secret: string) {
        let auth = this.authentications["apiv4"] as GateApiV4Auth;
        auth.key = key;
        auth.secret = secret;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    public applyToRequest(options: localVarRequest.Options, authSettings: Array<string>) {
        for (let auth of authSettings) {
            let authenticator = this.authentications[auth];
            if (authenticator) {
                authenticator.applyToRequest(options);
            }
        }
    }

    public async request<T>(options: localVarRequest.Options, responseType: string, authSettings: Array<string>): Promise<{ response: http.IncomingMessage; body: T; }> {
        let authenticationPromise = Promise.resolve();
        let interceptorPromise = authenticationPromise.then(() => this.applyToRequest(options, authSettings));
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(options));
        }

        return interceptorPromise.then(() => {
            return new Promise<{ response: http.IncomingMessage; body: T; }>((resolve, reject) => {
                localVarRequest(options, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (responseType.length > 0) {
                            body = ObjectSerializer.deserialize(body, responseType);
                        }
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({response: response, body: body});
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
