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
 * @interface DhcpAllocationResponse
 */
export interface DhcpAllocationResponse {
    /**
     * The IPv4 address that was allocated by DHCP for the API virtual IP.
     * @type {string}
     * @memberof DhcpAllocationResponse
     */
    apiVipAddress: string;
    /**
     * The IPv4 address that was allocated by DHCP for the Ingress virtual IP.
     * @type {string}
     * @memberof DhcpAllocationResponse
     */
    ingressVipAddress: string;
    /**
     * Contents of last acquired lease for API virtual IP.
     * @type {string}
     * @memberof DhcpAllocationResponse
     */
    apiVipLease?: string;
    /**
     * Contents of last acquired lease for Ingress virtual IP.
     * @type {string}
     * @memberof DhcpAllocationResponse
     */
    ingressVipLease?: string;
}
