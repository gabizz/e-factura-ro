import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language'
import { create } from "xmlbuilder2"
import GraphQLJSON , {GraphQLJSONObject} from "graphql-type-json"
import moment from 'moment'

export const scalars = {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'Date EN custom scalar type',
        parseValue: value => moment(new Date(value)).format("YYYY-MM-DD"), // value from the client
        serialize: value => moment(new Date(value)).format("YYYY-MM-DD"), // value sent to the client
        parseLiteral: ast => {
            console.log("kind: ", ast.kind)
          if (ast.kind === Kind.INT) {
            return parseInt(ast.value, 10); // ast value is always in string format
          }
          return null;
        },
      }),
    Xml: new GraphQLScalarType({
        name: "Xml",
        description: "parse json response to xml",
        serialize: value => {console.log("serializing...", value); return value},
        parseValue: value => value,
        
        parseLiteral: value => {
            return value.toString()
        }

    }),
    JSON: GraphQLJSONObject
    

}