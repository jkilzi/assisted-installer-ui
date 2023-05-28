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
 * @interface Error
 */
export interface Error {
    /**
     * Indicates the type of this object. Will always be 'Error'.
     * @type {string}
     * @memberof Error
     */
    kind: ErrorKindEnum;
    /**
     * Numeric identifier of the error.
     * @type {number}
     * @memberof Error
     */
    id: number;
    /**
     * Self link.
     * @type {string}
     * @memberof Error
     */
    href: string;
    /**
     * Globally unique code of the error, composed of the unique identifier of the API and the numeric identifier of the error. For example, if the numeric identifier of the error is 93 and the identifier of the API is assisted_install then the code will be ASSISTED-INSTALL-93.
     * @type {string}
     * @memberof Error
     */
    code: string;
    /**
     * Human-readable description of the error.
     * @type {string}
     * @memberof Error
     */
    reason: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ErrorKindEnum {
    Error = 'Error'
}

