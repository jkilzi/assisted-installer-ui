import { Configuration, EventsApi } from '../lib';

const config = new Configuration({
    
})

const client = new EventsApi();
client.v2ListEvents()