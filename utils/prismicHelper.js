var PrismicLink = require("apollo-link-prismic").PrismicLink;
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";

const client = new ApolloClient({
    link:PrismicLink({
        uri:"https://myblogy.prismic.io/graphql"
    }),
    cache: new InMemoryCache()
})

export default client;