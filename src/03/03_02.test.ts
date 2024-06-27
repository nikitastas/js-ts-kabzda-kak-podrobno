import {CityType} from "../02/02_02";
import {addMoneyToBudget, demolishHouseOnTheStreet, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New-York',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {id: 1, number: 100, street: {title: 'White street'}}
            }, {
                buildedAt: 2008, repaired: false,
                address: {id: 2, number: 100, street: {title: 'Happy street'}}
            }, {
                buildedAt: 2020, repaired: false,
                address: {id: 3, number: 101, street: {title: 'Happy street'}}
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {id: 1, number: 1, street: {title: 'Central Str'}}
            }, {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {id: 2, number: 2, street: {title: 'South Str'}}
            },
        ],
        citizensNumber: 1000000
    }
});

test('Budget should be changed for HOSPITAL ', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
});

test('Budget should be changed for FIRE-STATION ', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);
});

test('Houses should be destroyed', () => {
    demolishHouseOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].address.id).toBe(1);
});

test('House should be repaired', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
});

test('staff should be decreased', () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});

test('staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);
    toHireStaff(city.governmentBuildings[1], 100);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
    expect(city.governmentBuildings[1].staffCount).toBe(1100);
});