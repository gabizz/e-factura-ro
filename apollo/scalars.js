import { GraphQLScalarType } from 'graphql';
import { create } from "xmlbuilder2"
import GraphQLJSON , {GraphQLJSONObject} from "graphql-type-json"

export const scalars = {

    XML: new GraphQLScalarType({
        name: "XML",
        description: "parse json response to xml",
        serialize: value => {console.log("serializing...", value); return value},
        parseValue: value => value,
        
        parseLiteral: value => {
            // let root = create(value)
            // return root.end({ prettyPrint: true })
            return value.toString()
        }

    }),
    JSON: GraphQLJSONObject
    

}