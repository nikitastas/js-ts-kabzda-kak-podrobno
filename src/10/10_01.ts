export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    // copy.hair = u.hair / power

    return copy
}

export function moveUser(user: UserWithLaptopType, city: string) {
    return {...user, address: {...user.address, city}}
}

export function moveUserToOtherHouse(user: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...user, address: {...user.address, house}}
}

export function upgradeUserLaptop(user: UserWithLaptopType, laptop: string) {
    return {...user, laptop: {...user.laptop, title: laptop}}
}