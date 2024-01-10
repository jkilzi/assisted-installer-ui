/* tslint:disable */
/* eslint-disable */
/**
 * AssistedInstall
 * Assisted installation
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface OpenshiftVersion
 */
export interface OpenshiftVersion {
  /**
   * Available CPU architectures.
   * @type {Array<string>}
   * @memberof OpenshiftVersion
   */
  cpu_architectures: Array<string>;
  /**
   * Name of the version to be presented to the user.
   * @type {string}
   * @memberof OpenshiftVersion
   */
  display_name: string;
  /**
   * Level of support of the version.
   * @type {string}
   * @memberof OpenshiftVersion
   */
  support_level: OpenshiftVersionSupportLevelEnum;
  /**
   * Indication that the version is the recommended one.
   * @type {boolean}
   * @memberof OpenshiftVersion
   */
  default?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum OpenshiftVersionSupportLevelEnum {
  Beta = 'beta',
  Production = 'production',
  Maintenance = 'maintenance',
}