import {
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from './10_01'

test('reference type test', () => {
    let user: UserType = {
        name: 'Nikita',
        hair: 30,
        address: {
            city: 'Grodno'
        }
    }

    const userWithHaircut = makeHairstyle(user, 2)

    expect(userWithHaircut.hair).toBe(15)
    expect(user.hair).toBe(30)
    expect(userWithHaircut.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Nikita',
        hair: 30,
        address: {
            city: 'Grodno',
            house: 12,
        },
        laptop: {
            title: 'Lenovo'
        }
    }

    const movedUser = moveUser(user, 'Minsk')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Minsk')
})

test('upgrade user laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Nikita',
        hair: 30,
        address: {
            city: 'Grodno',
            house: 12,
        },
        laptop: {
            title: 'Lenovo'
        }
    }

    const userWithUpgradedLaptop = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userWithUpgradedLaptop)
    expect(user.address).toBe(userWithUpgradedLaptop.address)
    expect(user.laptop).not.toBe(userWithUpgradedLaptop.laptop)
    expect(user.laptop.title).not.toBe(userWithUpgradedLaptop.laptop.title)
    expect(userWithUpgradedLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Lenovo')
})

test('upgrade user laptop', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nikita',
        hair: 30,
        address: {
            city: 'Grodno',
            house: 12,
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 666)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(666)
})