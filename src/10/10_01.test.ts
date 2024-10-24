import {makeHairstyle, moveUser, UserType, UserWithLaptopType} from './10_01'

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