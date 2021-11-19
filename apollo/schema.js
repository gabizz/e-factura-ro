import  {  gql  }  from  "apollo-server-micro";


export  const  typeDefs  =  gql`
scalar XML
scalar JSONObject



input Item { id:ID!}

input Supplier {id:ID!}

input Customer {id:ID!}

input InvoiceData {
    supplier: Supplier
    customer: Customer
    items: [Item]
}


type Query {
    json(data: InvoiceData) : JSONObject
    xml(data: InvoiceData) : XML
}
`
