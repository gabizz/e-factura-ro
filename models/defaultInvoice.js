import moment from "moment";

export const DEFAULTINVOICE = {
    nr: 1,
    dt: moment(new Date()).format('YYYY-MM-DD'),
    vat: true,
    invoiceType: 380,
    currency: "RON",
    supplier: {
        name: "MAFTEI PFA",
        legalForm: "PFA",
        cif: "34612616",
        iban: "RO67BTRLRONCRT0302934301",
        bank: "BTRL",
        address: "SPL.G-RAL GH.MAGHERU, bl.304B, ap.26",
        city: "ARAD",
        county: "AR",
        country: "RO",
        email: "gmaftei@gmail.com",
        phone: "+40744845974",
        representative: {
            name: "MAFTEI GABRIEL",
            phone: "0744845974",
            email: "gmaftei@gmail.com",
        }
    },
    customer: {
        name: "COMUNA ZERIND",
        legalForm: "PUB",
        cif: "3519364",
        iban: "RO14TREZ02124510220XXXXX",
        bank: "TREZ",
        address: "ZERIND, STR. PRINCIPALA, NR.1",
        city: "ZERIND",
        county: "AR",
        country: "RO",
        email: "gmaftei@gmail.com",
        phone: "+40744845974",
        representative: {
            name: "SIMANDI ALEXANDRU",
            phone: "000000000",
            email: "primaria@zerind.ro",
        }
    },
    items: []
}