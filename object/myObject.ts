const tester = {
    name: "kham",
    email: "kham@kham.com",
    isError: false,
    age: 25,
}

function createTester({ name: string, isPaid: boolean }) { }

createTester({ name: 'thu thu', isPaid: true })

function createCourse(): { name: string, price: number } {
    return { name: 'reactjs', price: 399 }
}

const createToken = (): { name: string, id: number, age: number } => {
    return { name: 'guestAuth', id: 123123123, age: 30 }
}

type User = {
    name: string,
    age: number,
    isActive: boolean
}

function createUser(user: User): User {
    return { name: '', age: 12, isActive: false }
}

createUser({name: '', age: 15, isActive: true})

// const createUser = (user: User): User{} => {
//     return {name: "", age: 21, isActive: true}
// }

export{}