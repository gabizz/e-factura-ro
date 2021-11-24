import {vat, novat} from '../models'

import { create } from "xmlbuilder2"

export const resolvers = {
    Query: {
        xml: (_,args) => {
            
            let root = create(novat())
            root = root.end({prettyPrint: false})
            return root
        },
        json: (__, args, ctx) => {
            console.log("args: ", args, ctx)
            return vat()
        }
    }
}