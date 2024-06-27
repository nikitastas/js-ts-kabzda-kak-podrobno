import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, city: string) {
    return s.address.city.title === city;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) =>  {
    building.budget += budget;
}

export const demolishHouseOnTheStreet = (city: CityType, streetTitle: string) => {
    city.houses = city.houses.filter(f => f.address.street.title !== streetTitle);
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingsType, staffToBeFired: number) => {
    building.staffCount -= staffToBeFired;
}
export function toHireStaff(building: GovernmentBuildingsType, staffToBeHired: number) {
    building.staffCount += staffToBeHired;
}