import moment from "moment"

export const vat = props => {

    const { data } = props || {}
    let {nr, vat, dt, currency, bank, iban, scadenta, supplier, customer, items} = props || {currency:"RON"}
    customer = customer || {}
    supplier = supplier || {}

    return {
        "Invoice": {
            "@xmlns:cbc": "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2",
            "@xmlns:udt": "urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2",
            "@xmlns:cac": "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2",
            "@xmlns:ccts": "urn:un:unece:uncefact:documentation:2",
            "@xmlns": "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2",
            "@xmlns:qdt": "urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2",
            "@xsi:schemaLocation": "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2 ../../UBL-2.1(1)/xsd/maindoc/UBL-Invoice-2.1.xsd",
            "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "cbc:UBLVersionID": "2.1",
            "cbc:CustomizationID": "urn:cen.eu:en16931:2017#compliant#urn:efactura.mfinante.ro:CIUS-RO:1.0.0",
            "cbc:ID": nr+"",
            "cbc:IssueDate": moment(dt).format("YYYY-MM-DD"),
            "cbc:InvoiceTypeCode": "380",
            "cbc:DocumentCurrencyCode": currency || "RON",
            "cbc:TaxCurrencyCode": currency || "RON",
            "cac:AccountingSupplierParty": {
                "cac:Party": {
                    "cbc:EndpointID": {
                        "@schemeID": "EM",
                        "#": supplier.email
                    },
                    "cac:PartyIdentification": {
                        "cbc:ID": supplier.cif
                    },
                    "cac:PartyName": {
                        "cbc:Name": supplier.name
                    },
                    "cac:PostalAddress": {
                        "cbc:StreetName": supplier.name,
                        "cbc:CityName": supplier.city,
                        "cbc:PostalZone": supplier.cif,
                        "cbc:CountrySubentity": supplier.county,
                        "cac:Country": {
                            "cbc:IdentificationCode": supplier.country
                        }
                    },
                    "cac:PartyTaxScheme": {
                        "cbc:CompanyID": supplier.cif,
                        "cac:TaxScheme": {
                            "cbc:ID": "VAT"
                        }
                    },
                    "cac:PartyLegalEntity": {
                        "cbc:RegistrationName": supplier.name,
                        "cbc:CompanyID": supplier.cif,
                        "cbc:CompanyLegalForm": supplier.legalForm
                    },
                    "cac:Contact": {
                        "cbc:Name": supplier.representative ? supplier.representative.name : supplier.name,
                        "cbc:Telephone": supplier.representative ? supplier.representative.phone : supplier.phone,
                        "cbc:ElectronicMail": supplier.representative ? supplier.representative.email : supplier.email
                    }
                }
            },
            "cac:AccountingCustomerParty": {
                "cac:Party": {
                    "cbc:EndpointID": {
                        "@schemeID": "EM",
                        "#": customer.cif,
                    },
                    "cac:PartyIdentification": {
                        "cbc:ID": customer.cif
                    },
                    "cac:PartyName": {
                        "cbc:Name": customer.name
                    },
                    "cac:PostalAddress": {
                        "cbc:StreetName": customer.address,
                        "cbc:CityName": customer.city,
                        "cbc:PostalZone": customer.cif,
                        "cbc:CountrySubentity": customer.county,
                        "cac:Country": {
                            "cbc:IdentificationCode": customer.country
                        }
                    },
                    "cac:PartyTaxScheme": {
                        "cbc:CompanyID": customer.cif,
                        "cac:TaxScheme": {}
                    },
                    "cac:PartyLegalEntity": {
                        "cbc:RegistrationName": customer.name,
                        "cbc:CompanyID": customer.name,
                        "cbc:CompanyLegalForm": customer.legalForm
                    },
                    "cac:Contact": {
                        "cbc:Name": customer.representative ? customer.representative.name : customer.name,
                        "cbc:Telephone": customer.representative ? customer.representative.phone : customer.phone,
                        "cbc:ElectronicMail": customer.representative ? customer.representative.email : customer.email,
                    }
                }
            },
            "cac:PaymentMeans": {
                "cbc:PaymentMeansCode": "30",
                "cbc:PaymentID": bank,
                "cac:PayeeFinancialAccount": {
                    "cbc:ID": iban
                }
            },
            "cac:TaxTotal": {
                "cbc:TaxAmount": {
                    "@currencyID": currency,
                    "#": "150.00"
                },
                "cac:TaxSubtotal": {
                    "cbc:TaxableAmount": {
                        "@currencyID": currency,
                        "#": "3000.00"
                    },
                    "cbc:TaxAmount": {
                        "@currencyID":currency,
                        "#": "150.00"
                    },
                    "cac:TaxCategory": {
                        "cbc:ID": "S",
                        "cbc:Percent": "5",
                        "cac:TaxScheme": {
                            "cbc:ID": "VAT"
                        }
                    }
                }
            },
            "cac:LegalMonetaryTotal": {
                "cbc:LineExtensionAmount": {
                    "@currencyID": currency,
                    "#": "3000.00"
                },
                "cbc:TaxExclusiveAmount": {
                    "@currencyID": currency,
                    "#": "3000.00"
                },
                "cbc:TaxInclusiveAmount": {
                    "@currencyID": currency,
                    "#": "3150.00"
                },
                "cbc:PayableAmount": {
                    "@currencyID": currency,
                    "#": "3150.00"
                }
            },
            "cac:InvoiceLine": {
                "cbc:ID": "1",
                "cbc:InvoicedQuantity": {
                    "@unitCode": "MON",
                    "#": "1.000"
                },
                "cbc:LineExtensionAmount": {
                    "@currencyID": currency,
                    "#": "3000.00"
                },
                "cac:Item": {
                    "cbc:Description": "Servicii informatice",
                    "cbc:Name": "Servicii informatice",
                    "cac:ClassifiedTaxCategory": {
                        "cbc:ID": "S",
                        "cbc:Percent": "5",
                        "cac:TaxScheme": {
                            "cbc:ID": "VAT"
                        }
                    }
                },
                "cac:Price": {
                    "cbc:PriceAmount": {
                        "@currencyID": currency,
                        "#": "3000.00"
                    }
                }
            }
        }
    }
}

