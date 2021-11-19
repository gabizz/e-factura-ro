export const vat = props => {

    const { data } = props || {}

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
            "cbc:ID": "1",
            "cbc:IssueDate": "2021-11-18",
            "cbc:InvoiceTypeCode": "380",
            "cbc:DocumentCurrencyCode": "RON",
            "cbc:TaxCurrencyCode": "RON",
            "cac:AccountingSupplierParty": {
                "cac:Party": {
                    "cbc:EndpointID": {
                        "@schemeID": "EM",
                        "#": "gmaftei@gmail.com"
                    },
                    "cac:PartyIdentification": {
                        "cbc:ID": "34612616"
                    },
                    "cac:PartyName": {
                        "cbc:Name": "MAFTEI GABREL-CLAUDIU PFA"
                    },
                    "cac:PostalAddress": {
                        "cbc:StreetName": "SPL.G-RAL GH.MAGARU",
                        "cbc:CityName": "ARAD",
                        "cbc:PostalZone": "310329",
                        "cbc:CountrySubentity": "AR",
                        "cac:Country": {
                            "cbc:IdentificationCode": "RO"
                        }
                    },
                    "cac:PartyTaxScheme": {
                        "cbc:CompanyID": "34612616",
                        "cac:TaxScheme": {
                            "cbc:ID": "VAT"
                        }
                    },
                    "cac:PartyLegalEntity": {
                        "cbc:RegistrationName": "MAFTEI GABREL CLAUDIU PFA",
                        "cbc:CompanyID": "34612616",
                        "cbc:CompanyLegalForm": "PFA"
                    },
                    "cac:Contact": {
                        "cbc:Name": "Maftei Gabriel - me pe persoana fizica",
                        "cbc:Telephone": "+40744845974",
                        "cbc:ElectronicMail": "office@signportal.ro"
                    }
                }
            },
            "cac:AccountingCustomerParty": {
                "cac:Party": {
                    "cbc:EndpointID": {
                        "@schemeID": "EM",
                        "#": "client@gmail.com"
                    },
                    "cac:PartyIdentification": {
                        "cbc:ID": "16344256"
                    },
                    "cac:PartyName": {
                        "cbc:Name": "SIGN PORTAL SRL ARAD"
                    },
                    "cac:PostalAddress": {
                        "cbc:StreetName": "SPL.G-RAL GH.MAGARU",
                        "cbc:CityName": "ARAD",
                        "cbc:PostalZone": "310329",
                        "cbc:CountrySubentity": "AR",
                        "cac:Country": {
                            "cbc:IdentificationCode": "RO"
                        }
                    },
                    "cac:PartyTaxScheme": {
                        "cbc:CompanyID": "RO16344256",
                        "cac:TaxScheme": {}
                    },
                    "cac:PartyLegalEntity": {
                        "cbc:RegistrationName": "SIGN PORTAL SRL",
                        "cbc:CompanyID": "RO16344256",
                        "cbc:CompanyLegalForm": "S.R.L."
                    },
                    "cac:Contact": {
                        "cbc:Name": "Gabriel Maftei, celalalt eu, de la SRL",
                        "cbc:Telephone": "0744845974",
                        "cbc:ElectronicMail": "office@signportal.ro"
                    }
                }
            },
            "cac:PaymentMeans": {
                "cbc:PaymentMeansCode": "30",
                "cbc:PaymentID": "BTRL",
                "cac:PayeeFinancialAccount": {
                    "cbc:ID": "RO67BTRLRONCRT0302934301"
                }
            },
            "cac:TaxTotal": {
                "cbc:TaxAmount": {
                    "@currencyID": "RON",
                    "#": "150.00"
                },
                "cac:TaxSubtotal": {
                    "cbc:TaxableAmount": {
                        "@currencyID": "RON",
                        "#": "3000.00"
                    },
                    "cbc:TaxAmount": {
                        "@currencyID": "RON",
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
                    "@currencyID": "RON",
                    "#": "3000.00"
                },
                "cbc:TaxExclusiveAmount": {
                    "@currencyID": "RON",
                    "#": "3000.00"
                },
                "cbc:TaxInclusiveAmount": {
                    "@currencyID": "RON",
                    "#": "3150.00"
                },
                "cbc:PayableAmount": {
                    "@currencyID": "RON",
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
                    "@currencyID": "RON",
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
                        "@currencyID": "RON",
                        "#": "3000.00"
                    }
                }
            }
        }
    }
}

