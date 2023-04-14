import { dump, load } from 'js-yaml';
import {
  Nmstate,
  NmstateDns,
  NmstateInterface,
  NmstateInterfaceType,
  NmstateProtocolConfig,
  NmstateProtocolConfigs,
  NmstateRoutesConfig,
} from './nmstateTypes';
import {
  FormViewNetworkWideValues,
  MachineNetworks,
  ProtocolVersion,
  StaticProtocolType,
} from './dataTypes';
import findLastIndex from 'lodash-es/findLastIndex.js';

const ROUTE_DESTINATIONS = {
  ipv4: '0.0.0.0/0',
  ipv6: '::/0',
};
const TABLE_ID = 254;
export const YAML_COMMENT_CHAR = '#';
export const FORM_VIEW_PREFIX = 'generated by ui form view';

export const getMachineNetworkFieldName = (protocolVersion: ProtocolVersion): string => {
  return `${protocolVersion}MachineNetwork`;
};

export const getVlanNicName = (nicName: string, vlanId: number) => `${nicName}.${vlanId}`;

export const getProtocolVersionIdx = (protocolVersion: ProtocolVersion): number => {
  return protocolVersion === ProtocolVersion.ipv4 ? 0 : 1;
};

export const yamlToNmstateObject = (yaml: string): Nmstate => {
  return load(yaml) as Nmstate;
};

export const getYamlComments = (yaml: string): string[] => {
  const lines = yaml.split('\n');
  const lastCommentIdx = findLastIndex(lines, (line) => line.startsWith(YAML_COMMENT_CHAR));
  return lines.slice(0, lastCommentIdx + 1).map((line) => line.slice(1));
};

export const toYamlWithComments = (json: object, comments: string[]) => {
  const yamlComments = comments.map((comment) => `${YAML_COMMENT_CHAR}${comment}`);
  return `${yamlComments.join('\n')}\n${dump(json)}`;
};

const getMachineNetwork = (comments: string[], protocolVersion: ProtocolVersion) => {
  const line = comments.find((comment) =>
    comment.startsWith(getMachineNetworkFieldName(protocolVersion)),
  );
  return line ? line.split(' ')[1] : '';
};

export const getMachineNetworks = (comments: string[]): MachineNetworks => {
  return {
    ipv4: getMachineNetwork(comments, ProtocolVersion.ipv4),
    ipv6: getMachineNetwork(comments, ProtocolVersion.ipv6),
  };
};

export const getProtocolType = (comments: string[]): StaticProtocolType | null => {
  const machineNetworks = getMachineNetworks(comments);
  if (machineNetworks[ProtocolVersion.ipv4] && machineNetworks[ProtocolVersion.ipv6]) {
    return 'dualStack';
  }
  if (machineNetworks[ProtocolVersion.ipv4]) {
    return 'ipv4';
  }
  return null;
};

export const getNmstateProtocolConfig = (
  ipAddress: string,
  prefixLength: number,
): NmstateProtocolConfig => {
  return {
    address: [
      {
        ip: ipAddress,
        'prefix-length': prefixLength,
      },
    ],
    enabled: true,
    dhcp: false,
  };
};

export const getDnsSection = (dns: string): NmstateDns => {
  const dnsServers = dns.split(',');
  return { config: { server: dnsServers } };
};

export const getInterface = (
  nicName: string,
  protocolConfigs: NmstateProtocolConfigs,
  networkWide: FormViewNetworkWideValues,
): NmstateInterface => {
  if (networkWide.useVlan && networkWide.vlanId) {
    return {
      name: getVlanNicName(nicName, networkWide.vlanId),
      type: NmstateInterfaceType.VLAN,
      state: 'up',
      vlan: { 'base-iface': nicName, id: networkWide.vlanId },
      ...protocolConfigs,
    };
  } else {
    return {
      name: nicName,
      type: NmstateInterfaceType.ETHERNET,
      state: 'up',
      ...protocolConfigs,
    };
  }
};

export const getRouteConfig = (
  protocolVersion: ProtocolVersion,
  gatewayAddress: string,
  nicName: string,
): NmstateRoutesConfig => {
  return {
    destination: ROUTE_DESTINATIONS[protocolVersion],
    'next-hop-address': gatewayAddress,
    'next-hop-interface': nicName,
    'table-id': TABLE_ID,
  };
};