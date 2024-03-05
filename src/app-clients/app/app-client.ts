import { ApolloClient, InMemoryCache } from '@apollo/client';
import resolvers from './resolvers';

export const cache = new InMemoryCache({});

const AppClient = new ApolloClient({
    connectToDevTools: false,
    cache: cache,
    resolvers: resolvers as any,
});

export default AppClient;
