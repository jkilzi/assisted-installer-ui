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
 * @interface LogsGatherCmdRequest
 */
export interface LogsGatherCmdRequest {
    /**
     * Cluster id
     * @type {string}
     * @memberof LogsGatherCmdRequest
     */
    clusterId: string;
    /**
     * Infra env id
     * @type {string}
     * @memberof LogsGatherCmdRequest
     */
    infraEnvId: string;
    /**
     * Host id
     * @type {string}
     * @memberof LogsGatherCmdRequest
     */
    hostId: string;
    /**
     * Host is bootstrap or not
     * @type {boolean}
     * @memberof LogsGatherCmdRequest
     */
    bootstrap: boolean;
    /**
     * Run installer gather logs
     * @type {boolean}
     * @memberof LogsGatherCmdRequest
     */
    installerGather: boolean;
    /**
     * List of master ips
     * @type {Array<string>}
     * @memberof LogsGatherCmdRequest
     */
    masterIps?: Array<string>;
}
