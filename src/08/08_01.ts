//export const usersArray = ['Nikita', 'Natasha', 'Valera', 'Katya']

export const usersObj = {
    '0': 'Nikita',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Nikita'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}

let user = {id: 100500, name: 'Igor'}

users[user.id] = user

export const usersArray = [
    {id: 101, name: 'Nikita'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]