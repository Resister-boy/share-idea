import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://montelabbate.stepzen.net/api/kind-squid/__graphql",
  headers: {
    Authorization: `Apikey ${process.env.STEPZEN_APIKEY}`
  },
  cache: new InMemoryCache(),
})

export default client;
