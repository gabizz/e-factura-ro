import moment from 'moment'
export const novat = props => {

   
    const {nr, vat, dt, currency, bank, iban, scadenta, supplier, customer, items} = props || {currency:"RON"}



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
            "cbc:DocumentCurrencyCode": currency,
            "cbc:TaxCurrencyCode": currency,
            "cac:AccountingSupplierParty": {
                "cac:Party": {
                    "cbc:EndpointID": {
                        "@schemeID": "EM",
                        "#": supplier.email
                    },
                    "cac:PartyIdentification": {
                        "cbc:ID":supplier.cif
                    },
                    "cac:PartyName": {
                        "cbc:Name": supplier.name
                    },
                    "cac:PostalAddress": {
                        "cbc:StreetName": supplier.address,
                        "cbc:CityName": supplier.city,
                        "cbc:PostalZone": supplier.zip,
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
                        "cbc:Telephone": supplier.representative ? supplier.representative.phone : "000",
                        "cbc:ElectronicMail": supplier.representative ? supplier.representative.email : supplier.email,
                    }
                }
            },
            "cac:AccountingCustomerParty": {
                "cac:Party": {
                    "cbc:EndpointID": {
                        "@schemeID": "EM",
                        "#": customer.email
                    },
                    "cac:PartyIdentification": {
                        "cbc:ID": customer.cif
                    },
                    "cac:PartyName": {
                        "cbc:Name": customer
                    },
                    "cac:PostalAddress": {
                        "cbc:StreetName": customer.address,
                        "cbc:CityName": customer.city,
                        "cbc:PostalZone": customer.zip,
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
                        "cbc:CompanyID": customer.cif,
                        "cbc:CompanyLegalForm": customer.legalForm
                    },
                    "cac:Contact": {
                        "cbc:Name": customer.representative ? customer.representative.name : customer.name,
                        "cbc:Telephone": customer.representative ? customer.representative.phonr : customer.phonr,
                        "cbc:ElectronicMail": customer.representative ? customer.representative.email : customer.email,
                    }
                }
            },
            "cac:PaymentMeans": {
                "cbc:PaymentMeansCode": "30",
                "cbc:PaymentID": bank,
                "cac:PayeeFinancialAccount": {
                    "cbc:ID":iban
                }
            },
            "cac:TaxTotal": {
                "cbc:TaxAmount": {
                    "@currencyID": "RON",
                    "#": "0.00"
                },
                "cac:TaxSubtotal": {
                    "cbc:TaxableAmount": {
                        "@currencyID": "RON",
                        "#": "3000.00"
                    },
                    "cbc:TaxAmount": {
                        "@currencyID": "RON",
                        "#": "0.00"
                    },
                    "cac:TaxCategory": {
                        "cbc:ID": "S",
                        "!": " <cbc:Percent>0</cbc:Percent> ",
                        "cac:TaxScheme": {
                            "cbc:ID": "VAT"
                        }
                    }
                }
            },
            "cac:LegalMonetaryTotal": {
                "cbc:LineExtensionAmount": {
                    "@currencyID": "RON",
                    "#": "3000.00"
                },
                "cbc:TaxExclusiveAmount": {
                    "@currencyID": "RON",
                    "#": "3000.00"
                },
                "cbc:TaxInclusiveAmount": {
                    "@currencyID": "RON",
                    "#": "3000.00"
                },
                "cbc:PayableAmount": {
                    "@currencyID": "RON",
                    "#": "3000.00"
                }
            },
            "cac:InvoiceLine": {
                "cbc:ID": "1",
                "cbc:InvoicedQuantity": {
                    "@unitCode": "MON",
                    "#": "1.000"
                },
                "cbc:LineExtensionAmount": {
                    "@currencyID": "RON",
                    "#": "3000.00"
                },
                "cac:Item": {
                    "cbc:Description": "Servicii informatice",
                    "cbc:Name": "Servicii informatice",
                    "cac:ClassifiedTaxCategory": {
                        "cbc:ID": "S",
                        "!": " <cbc:Percent>0</cbc:Percent> ",
                        "cac:TaxScheme": {
                            "cbc:ID": "VAT"
                        }
                    }
                },
                "cac:Price": {
                    "cbc:PriceAmount": {
                        "@currencyID": "RON",
                        "#": "3000.00"
                    }
                }
            }
        }
    }
}

