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
 * @interface DiskInstallationEligibility
 */
export interface DiskInstallationEligibility {
    /**
     * Whether the disk is eligible for installation or not.
     * @type {boolean}
     * @memberof DiskInstallationEligibility
     */
    eligible?: boolean;
    /**
     * Reasons for why this disk is not eligible for installation.
     * @type {Array<string>}
     * @memberof DiskInstallationEligibility
     */
    notEligibleReasons?: Array<string>;
}
