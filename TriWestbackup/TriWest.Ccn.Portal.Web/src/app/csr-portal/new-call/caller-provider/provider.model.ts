export class Provider {
    id: number;
    taxId: string;
    npi: string;
    providerName: string;
    groupName: string;
    addressPrimary: string;
    cityPrimary: string;
    statePrimary: string;
    postalCodePrimary: string;

    constructor(id, taxId,npi,providerName, groupName, addressPrimary, cityPrimary, statePrimary, postalCodePrimary)
    {
        this.id =id;
        this.taxId = taxId;
        this.npi = npi;
        this.providerName = providerName;
        this.groupName = groupName;
        this.addressPrimary = addressPrimary;
        this.cityPrimary = cityPrimary;
        this.statePrimary = statePrimary;
        this.postalCodePrimary = postalCodePrimary;
    }
}