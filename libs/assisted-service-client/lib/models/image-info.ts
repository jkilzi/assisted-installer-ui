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
import { ImageType } from './image-type';
/**
 * 
 * @export
 * @interface ImageInfo
 */
export interface ImageInfo {
    /**
     * SSH public key for debugging the installation.
     * @type {string}
     * @memberof ImageInfo
     */
    sshPublicKey?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageInfo
     */
    sizeBytes?: number;
    /**
     * 
     * @type {string}
     * @memberof ImageInfo
     */
    downloadUrl?: string;
    /**
     * Image generator version.
     * @type {string}
     * @memberof ImageInfo
     */
    generatorVersion?: string;
    /**
     * 
     * @type {Date}
     * @memberof ImageInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ImageInfo
     */
    expiresAt?: Date;
    /**
     * static network configuration string in the format expected by discovery ignition generation
     * @type {string}
     * @memberof ImageInfo
     */
    staticNetworkConfig?: string;
    /**
     * 
     * @type {ImageType}
     * @memberof ImageInfo
     */
    type?: ImageType;
}
