/* tslint:disable */
/* eslint-disable */
/**
 * AssistedInstall
 * Assisted installation
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface CompletionParams
 */
export interface CompletionParams {
    /**
     * 
     * @type {boolean}
     * @memberof CompletionParams
     */
    isSuccess: boolean;
    /**
     * 
     * @type {string}
     * @memberof CompletionParams
     */
    errorInfo?: string;
    /**
     * additional data from the cluster
     * @type {{ [key: string]: any; }}
     * @memberof CompletionParams
     */
    data?: { [key: string]: any; };
}
