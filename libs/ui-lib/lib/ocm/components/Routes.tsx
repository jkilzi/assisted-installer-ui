import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Clusters, ClusterPage, NewClusterPage } from './clusters';
import type { FeatureListType } from '../../common/features/featureGate';
import { routeBasePath, setRouteBasePath } from '../config';
import { AssistedUILibVersion } from './ui';
import { storeDay1 } from '../store';
import { useFeatureDetection } from '../hooks/use-feature-detection';

export const Routes: React.FC<{ allEnabledFeatures: FeatureListType; basePath?: string }> = ({
  allEnabledFeatures,
  children,
  basePath = '/assisted-installer',
}) => {
  useEffect(() => {
    setRouteBasePath(basePath);
  }, [basePath]);

  useFeatureDetection(allEnabledFeatures);

  return (
    <Provider store={storeDay1}>
      <AssistedUILibVersion />
      <Switch>
        <Route path={`${routeBasePath}/clusters/~new`} component={NewClusterPage} />
        <Route path={`${routeBasePath}/clusters/:clusterId`} component={ClusterPage} />
        <Route path={`${routeBasePath}/clusters`} component={Clusters} />
        {children}
        <Redirect to={`${routeBasePath}/clusters`} />
      </Switch>
    </Provider>
  );
};
