import {vat, novat} from '../models'

import { create } from "xmlbuilder2"

export const resolvers = {
    Query: {
        xml: (_,args) => {
            
            let root = create(vat())
            root = root.end({prettyPrint: true})
            return root
        },
        json: (root, args, ctx) => {
            return vat()
        }
    }
}