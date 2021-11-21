import  {  ApolloServer  }  from  "apollo-server-micro";
import { gql } from 'graphql'
import  { typeDefs }  from  "../../apollo/schema.js";
import  {  resolvers  }  from  "../../apollo/resolvers";
import { scalars } from "../../apollo/scalars";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";


const apolloParams = {
    ...scalars,
    typeDefs, 
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({playground: true})],
}

const  apolloServer  =  new  ApolloServer(apolloParams) 

const startServer = apolloServer.start();

export const config = {
    api: {
      bodyParser: false,
    },
  };


export default async function cors(req, res) {

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

