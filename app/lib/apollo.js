import { ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://teste-teste.ohjyxd.easypanel.host/graphql',
    cache: new InMemoryCache()
})