import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import {
  ChangeHostnameAction,
  selectSchedulableMasters,
  isSNO,
  DeleteHostAction,
  TableToolbar,
} from '../../../common';
import { HostsTableModals, useHostsTable } from './use-hosts-table';
import {
  countColumn,
  cpuCoresColumn,
  discoveredAtColumn,
  disksColumn,
  hostnameColumn,
  memoryColumn,
  roleColumn,
} from '../../../common/components/hosts/tableUtils';
import HostsTable from '../../../common/components/hosts/HostsTable';
import { HostDetail } from '../../../common/components/hosts/HostRowDetail';
import { ExpandComponentProps } from '../../../common/components/hosts/AITable';
import { AdditionalNTPSourcesDialogToggle } from './AdditionaNTPSourceDialogToggle';
import { usePagination } from '../../../common/components/hosts/usePagination';
import { useTranslation } from '../../../common/hooks/use-translation-wrapper';
import { hardwareStatusColumn } from './HardwareStatus';
import HostsTableEmptyState from '../hosts/HostsTableEmptyState';
import { useSelector } from 'react-redux';
import { selectCurrentClusterPermissionsState } from '../../store/slices/current-cluster/selectors';
import { useClusterWizardContext } from '../clusterWizard/ClusterWizardContext';
import { Cluster, Host } from '@openshift-assisted/types/assisted-installer-service';

const HostRowDetailExpand = ({ obj: host }: ExpandComponentProps<Host>) => (
  <HostDetail
    key={host.id}
    host={host}
    AdditionalNTPSourcesDialogToggleComponent={AdditionalNTPSourcesDialogToggle}
    hideStorage
  />
);

type HostsDiscoveryTableProps = {
  cluster: Cluster;
};

const HostsDiscoveryTable = ({ cluster }: HostsDiscoveryTableProps) => {
  const {
    onEditHost,
    actionChecks,
    onEditRole,
    actionResolver,
    onSelect,
    selectedHostIDs,
    setSelectedHostIDs,
    onMassChangeHostname,
    onMassDeleteHost,
    ...modalProps
  } = useHostsTable(cluster);
  const { wizardPerPage, setWizardPerPage } = useClusterWizardContext();

  const { isViewerMode } = useSelector(selectCurrentClusterPermissionsState);
  const isSNOCluster = isSNO(cluster);
  const { t } = useTranslation();
  const content = React.useMemo(
    () => [
      hostnameColumn(t, onEditHost, undefined, actionChecks.canEditHostname),
      roleColumn(
        t,
        actionChecks.canEditRole,
        onEditRole,
        selectSchedulableMasters(cluster),
        cluster.kind,
      ),
      hardwareStatusColumn({ onEditHostname: onEditHost }),
      discoveredAtColumn(t),
      cpuCoresColumn(t),
      memoryColumn(t),
      disksColumn(t),
      countColumn(cluster),
    ],
    [t, onEditHost, actionChecks.canEditHostname, actionChecks.canEditRole, onEditRole, cluster],
  );

  const hosts = cluster.hosts || [];
  const paginationProps = usePagination(hosts.length, wizardPerPage, setWizardPerPage);
  const itemIDs = hosts.map((h) => h.id);
  const showBulkActions = !(isViewerMode || isSNOCluster);

  return (
    <>
      <Stack hasGutter>
        {showBulkActions && (
          <StackItem>
            <TableToolbar
              selectedIDs={selectedHostIDs || []}
              itemIDs={itemIDs}
              setSelectedIDs={setSelectedHostIDs}
              actions={[
                <ChangeHostnameAction key="hostname" onChangeHostname={onMassChangeHostname} />,
                <DeleteHostAction key="delete" onDeleteHost={onMassDeleteHost} />,
              ]}
              {...paginationProps}
            />
          </StackItem>
        )}
        <StackItem>
          <HostsTable
            testId="hosts-discovery-table"
            hosts={hosts}
            content={content}
            actionResolver={actionResolver}
            ExpandComponent={HostRowDetailExpand}
            onSelect={showBulkActions ? onSelect : undefined}
            selectedIDs={selectedHostIDs}
            setSelectedIDs={setSelectedHostIDs}
            {...paginationProps}
          >
            <HostsTableEmptyState isSingleNode={isSNOCluster} />
          </HostsTable>
        </StackItem>
      </Stack>
      <HostsTableModals cluster={cluster} {...modalProps} />
    </>
  );
};

export default HostsDiscoveryTable;
