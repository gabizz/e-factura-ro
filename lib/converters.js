import { convert, create } from "xmlbuilder2"



// const [data, setData] = useState({ ...BLANKINVOICE, items: [DEFALUTITEM] })

export const xml2json = xml => {
    let imported, res = {}
    imported = convert(xml, { format: 'object' })

    const { Invoice } = imported || null

    if (Invoice) {
        // console.log("INVOICE FOUND in XML object!\n", Invoice["cac:AccountingSupplierParty"]["cac:Party"])
        // console.log("INVOICE:", Invoice)
        res = {
            nr: Invoice["cbc:ID"],
            dt: Invoice["cbc:IssueDate"],
            currency: Invoice["bc:DocumentCurrencyCode"],
            bank: Invoice["cac:PaymentMeans"]["cbc:PaymentID"],
            iban: Invoice["cac:PaymentMeans"]["cac:PayeeFinancialAccount"]["cbc:ID"],
            supplier: {
                name: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:RegistrationName"],
                legalForm: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:CompanyLegalForm"],
                cif: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:CompanyID"],
                address: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:PostalAddress"]["cbc:StreetName"],
                city: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:PostalAddress"]["cbc:CityName"],
                zip: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:PostalAddress"]["cbc:PostalZone"],
                county: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:PostalAddress"]["cbc:CountrySubentity"],
                country: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:PostalAddress"]["cac:Country"]["cbc:IdentificationCode"],
                email: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:Contact"]["cbc:ElectronicMail"],
                phone: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:Contact"]["cbc:Telephone"],
                representative: {
                    name: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:Contact"]["cbc:Name"],
                    email: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:Contact"]["cbc:ElectronicMail"],
                    phone: Invoice["cac:AccountingSupplierParty"]["cac:Party"]["cac:Contact"]["cbc:Telephone"],
                }
            },
            customer: {
                name: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:RegistrationName"],
                legalForm: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:CompanyLegalForm"],
                cif: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:CompanyID"],
                address: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:PostalAddress"]["cbc:StreetName"],
                city: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:PostalAddress"]["cbc:CityName"],
                zip: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:PostalAddress"]["cbc:PostalZone"],
                county: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:PostalAddress"]["cbc:CountrySubentity"],
                country: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:PostalAddress"]["cac:Country"]["cbc:IdentificationCode"],

                representative: {
                    name: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:Contact"]["cbc:Name"],
                    email: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:Contact"]["cbc:ElectronicMail"],
                    phone: Invoice["cac:AccountingCustomerParty"]["cac:Party"]["cac:Contact"]["cbc:Telephone"],
                }
            },
            // items:[]
            items: ["cac:InvoiceLine"].map(e => ({
                description: "item1",
                name: "item1name",
                unit: "MON",
                vat: 19,
                price: 100,
                amount: 10
            }))
        }


    } else {
        res = { err: "FISIERUL NU ESTE VALID" }
    }
    return res
}

export const json2xml = obj => {
    let imported, res = {}
    imported = create(obj)
    imported.end({ prettyPrint: true })




    return res

}