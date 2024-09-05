type User = {
    name: string
    age: number
    address: { title: string }
}

function increaseAge(u: User) {
    u.age++
}

test('big test', () => {
    const users = [
        {
            name: 'Nikita',
            age: 30,
        },
        {
            name: 'Ilya',
            age: 31,
        }
    ]
    const admins = users
    admins.push({name: 'Bandos', age: 20})

    expect(users[2]).toEqual({name: 'Bandos', age: 20})
})

test('big test', () => {
    const user: User = {
        name: 'Nikita',
        age: 30,
        address: {
            title: 'Grodno'
        }
    }

    // let addr = user.address

    const user2: User = {
        name: 'Victoria',
        age: 25,
        address: user.address
    }
    user2.address.title = 'Kanary'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Kanary')
})

test('reference type array test', () => {
    const address = {
        title: 'Grodno'
    }

    const user: User = {
        name: 'Nikita',
        age: 30,
        address
    }

    const user2: User = {
        name: 'Victoria',
        age: 25,
        address: address
    }

    const users = [user, user2, {name: 'Ilya', age: 31, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Nikita Vladimirovich'

    expect(users[0].name).toBe('Nikita Vladimirovich')
    expect(user.name).toBe('Nikita Vladimirovich')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']
    letters.sort()

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])

})