import type { Cluster } from '../api';
import React from 'react';

const ENDPOINT_URL =
  'https://assisted-eta-assisted-installer-integration.apps.app-sre-stage-0.k3s7.p1.openshiftapps.com/duration';

const sleep = (delayMs: number) => new Promise((resolve) => setTimeout(resolve, delayMs));

export default function useInstallationEta({
  highAvailabilityMode,
  openshiftVersion = '4.11.0-fc.0', // otherwise we get no data :(
  hostsCount = 0,
}: {
  highAvailabilityMode: Cluster['highAvailabilityMode'];
  openshiftVersion?: Cluster['openshiftVersion'];
  hostsCount?: number;
}) {
  const [eta, setEta] = React.useState(0);
  React.useEffect(() => {
    const getInstallationEta = async () => {
      if (highAvailabilityMode && hostsCount > 0 && openshiftVersion) {
        const url = new URL(ENDPOINT_URL);
        url.searchParams.set('HA', highAvailabilityMode);
        url.searchParams.set('numHosts', hostsCount.toString());
        url.searchParams.set('version', openshiftVersion);
        try {
          // const response = await fetch(url.toString());
          // const etaSeconds = (await response.json()) as number;
          await sleep(512);
          const etaSeconds = 2479.856689453125;
          if (etaSeconds > 0) {
            setEta(etaSeconds);
          }
        } catch (e) {
          console.error('Failed to fetch ETA', e);
        }
      }
    };

    void getInstallationEta();
    // eslint-disable-next-line
  }, []);

  return eta;
}
