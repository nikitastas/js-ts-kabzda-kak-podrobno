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

export type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
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

export function addNewBooksToUser(user: UserWithLaptopType & UserWithBooksType, books: string[]) {
    return {...user, books: [...user.books, ...books]}
}

export function updateBook(user:  UserWithLaptopType & UserWithBooksType, replacedBook: string, newBook: string ) {
    return {...user, books: user.books.map(book => book === replacedBook ? newBook : book)}
}

export function removeBook(user:  UserWithLaptopType & UserWithBooksType, removedBook: string) {
    return {...user, books: user.books.filter(book => book !== removedBook)}
}

export function updateCompany(user: UserWithLaptopType & WithCompaniesType, id: number, title: string) {
    return {...user, companies: user.companies.map(company => company.id === id ? {...company, title} : company)}
}

export function updateCompanyTitle2(companies: {[key: string]: Array<CompanyType>}, userName: string, companyId: number, newTitle: string) {
    return {...companies, [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)}
}