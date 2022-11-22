import { EventList } from '../../../common';
import { client } from '../../api';
import { EventsAPIListOptions } from './types';
import { AxiosResponse } from 'axios';

interface EventSubscription {
  // The subscription ID
  id: string;
  eventName: string;
  clusterId: string;
  // A callback URL
  url: string;
  //Status returned after calling the callback URL
  status: string;
}

interface EventSubscriptionCreate {
  eventName: string;
  clusterId: string;
  url: string;
}

const EventsAPI = {
  makeBaseURI() {
    return '/v2/events';
  },

  subscribe(eventName: string, clusterId: string, url: string) {
    return client.post<
      EventSubscription,
      AxiosResponse<EventSubscription>,
      EventSubscriptionCreate
    >(`${EventsAPI.makeBaseURI()}/subscription`, {
      eventName,
      clusterId,
      url,
    });
  },

  list(options: EventsAPIListOptions) {
    let queryParams = '?';

    queryParams += options.clusterId ? `cluster_id=${options.clusterId}&` : '';
    queryParams += options.hostId ? `host_id=${options.hostId}&` : '';
    queryParams += options.infraEnvId ? `infra_env_id=${options.infraEnvId}&` : '';
    if (options.categories) {
      queryParams += `categories=`;
      options.categories.forEach((category) => {
        queryParams += `${category},`;
      });
    }
    queryParams = queryParams.slice(0, -1);

    return client.get<EventList>(`${EventsAPI.makeBaseURI()}${queryParams}`);
  },
};

export default EventsAPI;
