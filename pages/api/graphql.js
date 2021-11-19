import  {  ApolloServer  }  from  "apollo-server-micro";
import { gql } from 'graphql'
import  { typeDefs }  from  "../../apollo/schema.js";
import  {  resolvers  }  from  "../../apollo/resolvers";
import { scalars } from "../../apollo/scalars";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";


const  apolloServer  =  new  ApolloServer({  
    ...scalars,
    typeDefs, 
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
}) 

const startServer = apolloServer.start();

export default async function handler(req, res) {

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};