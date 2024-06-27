import {CityType, getBuildingsWithStaffCountGreaterThen} from './04_02';
import {demolishHouseOnTheStreet} from '../03/03';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New-York',
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            }, {
                id: 2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            }, {
                id: 3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {number: 1, street: {title: 'Central Str'}}
            }, {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {number: 2, street: {title: 'South Str'}}
            },
        ],
        citizensNumber: 1000000
    }
});

test('Houses should be destroyed', () => {
    demolishHouseOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
})

test('test city should contains 3 houses', () => {

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('Happy street');

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe('Happy street');
});

test('test city should contains 3 houses', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL');
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str');

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION');
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe('South Str');
});
