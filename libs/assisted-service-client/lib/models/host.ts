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
import { HostProgressInfo } from './host-progress-info';
import { HostRole } from './host-role';
import { HostStage } from './host-stage';
import { LogsState } from './logs-state';
/**
 * 
 * @export
 * @interface Host
 */
export interface Host {
    /**
     * Indicates the type of this object. Will be 'Host' if this is a complete object or 'HostLink' if it is just a link, or 'AddToExistingClusterHost' for host being added to existing OCP cluster, or 
     * @type {string}
     * @memberof Host
     */
    kind: HostKindEnum;
    /**
     * Unique identifier of the object.
     * @type {string}
     * @memberof Host
     */
    id: string;
    /**
     * Self link.
     * @type {string}
     * @memberof Host
     */
    href: string;
    /**
     * The cluster that this host is associated with.
     * @type {string}
     * @memberof Host
     */
    clusterId?: string | null;
    /**
     * The infra-env that this host is associated with.
     * @type {string}
     * @memberof Host
     */
    infraEnvId?: string;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    status: HostStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    statusInfo: string;
    /**
     * JSON-formatted string containing the validation results for each validation id grouped by category (network, hardware, etc.)
     * @type {string}
     * @memberof Host
     */
    validationsInfo?: string;
    /**
     * 
     * @type {LogsState}
     * @memberof Host
     */
    logsInfo?: LogsState;
    /**
     * The last time that the host status was updated.
     * @type {Date}
     * @memberof Host
     */
    statusUpdatedAt?: Date;
    /**
     * 
     * @type {HostProgressInfo}
     * @memberof Host
     */
    progress?: HostProgressInfo;
    /**
     * Time at which the current progress stage started.
     * @type {Date}
     * @memberof Host
     */
    stageStartedAt?: Date;
    /**
     * Time at which the current progress stage was last updated.
     * @type {Date}
     * @memberof Host
     */
    stageUpdatedAt?: Date;
    /**
     * 
     * @type {Array<HostStage>}
     * @memberof Host
     */
    progressStages?: Array<HostStage> | null;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    connectivity?: string;
    /**
     * Contains a serialized api_vip_connectivity_response
     * @type {string}
     * @memberof Host
     */
    apiVipConnectivity?: string;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    tangConnectivity?: string;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    inventory?: string;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    freeAddresses?: string;
    /**
     * The configured NTP sources on the host.
     * @type {string}
     * @memberof Host
     */
    ntpSources?: string;
    /**
     * Additional information about disks, formatted as JSON.
     * @type {string}
     * @memberof Host
     */
    disksInfo?: string;
    /**
     * 
     * @type {HostRole}
     * @memberof Host
     */
    role?: HostRole;
    /**
     * 
     * @type {HostRole}
     * @memberof Host
     */
    suggestedRole?: HostRole;
    /**
     * 
     * @type {boolean}
     * @memberof Host
     */
    bootstrap?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof Host
     */
    logsCollectedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Host
     */
    logsStartedAt?: Date;
    /**
     * Installer version.
     * @type {string}
     * @memberof Host
     */
    installerVersion?: string;
    /**
     * Contains the inventory disk path, This field is replaced by installation_disk_id field and used for backward compatability with the old UI.
     * @type {string}
     * @memberof Host
     */
    installationDiskPath?: string;
    /**
     * Contains the inventory disk id to install on.
     * @type {string}
     * @memberof Host
     */
    installationDiskId?: string;
    /**
     * 
     * @type {Date}
     * @memberof Host
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Host
     */
    createdAt?: Date;
    /**
     * The last time the host's agent communicated with the service.
     * @type {Date}
     * @memberof Host
     */
    checkedInAt?: Date;
    /**
     * The last time the host's agent tried to register in the service.
     * @type {Date}
     * @memberof Host
     */
    registeredAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    discoveryAgentVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    requestedHostname?: string;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    userName?: string;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    mediaStatus?: HostMediaStatusEnum;
    /**
     * swagger:ignore
     * @type {any}
     * @memberof Host
     */
    deletedAt?: any;
    /**
     * Json formatted string containing the user overrides for the host's pointer ignition
     * @type {string}
     * @memberof Host
     */
    ignitionConfigOverrides?: string;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    installerArgs?: string;
    /**
     * The time on the host as seconds since the Unix epoch.
     * @type {number}
     * @memberof Host
     */
    timestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof Host
     */
    machineConfigPoolName?: string;
    /**
     * Array of image statuses.
     * @type {string}
     * @memberof Host
     */
    imagesStatus?: string;
    /**
     * The domain name resolution result.
     * @type {string}
     * @memberof Host
     */
    domainNameResolutions?: string;
    /**
     * True if the token to fetch the ignition from ignition_endpoint_url is set.
     * @type {boolean}
     * @memberof Host
     */
    ignitionEndpointTokenSet?: boolean;
    /**
     * Json containing node's labels.
     * @type {string}
     * @memberof Host
     */
    nodeLabels?: string;
    /**
     * A comma-separated list of disks that will be formatted once installation begins, unless otherwise set to be skipped by skip_formatting_disks. This means that this list also includes disks that appear in skip_formatting_disks. This property is managed by the service and cannot be modified by the user.
     * @type {string}
     * @memberof Host
     */
    disksToBeFormatted?: string;
    /**
     * A comma-seperated list of host disks that the service will avoid formatting.
     * @type {string}
     * @memberof Host
     */
    skipFormattingDisks?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum HostKindEnum {
    Host = 'Host',
    AddToExistingClusterHost = 'AddToExistingClusterHost'
}
/**
    * @export
    * @enum {string}
    */
export enum HostStatusEnum {
    Discovering = 'discovering',
    Known = 'known',
    Disconnected = 'disconnected',
    Insufficient = 'insufficient',
    Disabled = 'disabled',
    PreparingForInstallation = 'preparing-for-installation',
    PreparingFailed = 'preparing-failed',
    PreparingSuccessful = 'preparing-successful',
    PendingForInput = 'pending-for-input',
    Installing = 'installing',
    InstallingInProgress = 'installing-in-progress',
    InstallingPendingUserAction = 'installing-pending-user-action',
    ResettingPendingUserAction = 'resetting-pending-user-action',
    Installed = 'installed',
    Error = 'error',
    Resetting = 'resetting',
    AddedToExistingCluster = 'added-to-existing-cluster',
    Cancelled = 'cancelled',
    Binding = 'binding',
    Unbinding = 'unbinding',
    UnbindingPendingUserAction = 'unbinding-pending-user-action',
    KnownUnbound = 'known-unbound',
    DisconnectedUnbound = 'disconnected-unbound',
    InsufficientUnbound = 'insufficient-unbound',
    DisabledUnbound = 'disabled-unbound',
    DiscoveringUnbound = 'discovering-unbound',
    Reclaiming = 'reclaiming',
    ReclaimingRebooting = 'reclaiming-rebooting'
}
/**
    * @export
    * @enum {string}
    */
export enum HostMediaStatusEnum {
    Connected = 'connected',
    Disconnected = 'disconnected'
}

