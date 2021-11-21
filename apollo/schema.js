import  {  gql  }  from  "apollo-server-micro";


export  const  typeDefs  =  gql`
scalar Xml
scalar JSONObject
scalar DateTime
scalar JUDET{AR, BH, TM, CS, HD, AB, CJ}


input Produs { id:ID!}

input Furnizor {
    denumire:String! cui:String! email:String! 
    adresa:String localitate:String
    codpostal:String judet:JUDET

}

input Beneficiar {id:ID!}

input InvoiceData {
    nr: String 
    dt: DateTime
    furnizor: Furnizor
    beneficiar: Beneficiar
    produse: [Produs]
}


type Query {
    json(data: InvoiceData) : JSONObject
    xml(data: InvoiceData) : Xml
}
`
