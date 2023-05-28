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
import { Subnet } from './subnet';
/**
 * A network from which Pod IPs are allocated. This block must not overlap with existing physical networks. These IP addresses are used for the Pod network, and if you need to access the Pods from an external network, configure load balancers and routers to manage the traffic.
 * @export
 * @interface ClusterNetwork
 */
export interface ClusterNetwork {
    /**
     * The cluster that this network is associated with.
     * @type {string}
     * @memberof ClusterNetwork
     */
    clusterId?: string;
    /**
     * 
     * @type {Subnet}
     * @memberof ClusterNetwork
     */
    cidr?: Subnet;
    /**
     * The subnet prefix length to assign to each individual node. For example if is set to 23, then each node is assigned a /23 subnet out of the given CIDR, which allows for 510 (2^(32 - 23) - 2) pod IPs addresses.
     * @type {number}
     * @memberof ClusterNetwork
     */
    hostPrefix?: number;
}
