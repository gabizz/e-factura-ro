import moment from "moment";

export const BLANKINVOICE = {
    nr: 1,
    dt: moment(new Date()).format('YYYY-MM-DD'),
    vat: true,
    invoiceType: 380,
    currency: "RON",
    supplier: {
        name: "",
        legalForm: "",
        cif: "",
        iban: "",
        bank: "",
        address: "",
        zip: "",
        city: "",
        county: "",
        country: "",
        email: "",
        phone: "",
        representative: {
            name: "",
            phone: "",
            email: "",
        }
    },
    customer: {
        name: "",
        legalForm: "",
        cif: "",
        iban: "",
        bank: "",
        address: "",
        city: "",
        county: "",
        country: "",
        email: "",
        phone: "",
        representative: {
            name: "",
            phone: "",
            email: "",
        }
    },
    items: []
}