export type StreetType = {
    title: string;
}

export type AddressType = {
    id?: number;
    number: number;
    street: StreetType;
}

export type HouseType = {
    id?: number;
    buildedAt: number;
    repaired: boolean;
    address: AddressType;
}

export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION';
    budget: number;
    staffCount: number;
    address: AddressType;
}

export type CityType = {
    title: string;
    houses: Array<HouseType>;
    governmentBuildings: Array<GovernmentBuildingsType>;
    citizensNumber: number;
}