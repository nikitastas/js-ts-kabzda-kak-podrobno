import {
    addNewBooksToUser, CompanyType,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
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

test('add new books to user', () => {
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

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
})

test('update js to ts', () => {
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

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
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

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[2]).toBe('react')
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Nikita',
        hair: 30,
        address: {
            city: 'Grodno',
            house: 12,
        },
        laptop: {
            title: 'Lenovo'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = updateCompany(user, 1, 'EPAM')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company', () => {
    let companies = {
        'Nikita': [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Alex': [{id: 1, title: 'IT-INCUBATOR'}]
    }

    const companiesCopy: {[key: string]: CompanyType[]} = updateCompanyTitle2(companies, 'Nikita', 1, 'Google')

    expect(companies).not.toBe(companiesCopy)
    expect(companies['Nikita']).not.toBe(companiesCopy['Nikita'])
    expect(companies.Alex).toBe(companiesCopy.Alex)
    expect(companiesCopy.Nikita[0].title).toBe('Google')
})