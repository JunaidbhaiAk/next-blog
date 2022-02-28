import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";

const client = new ApolloClient({
    link:PrismicLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_API
    }),
    cache: new InMemoryCache()
})

export default client;