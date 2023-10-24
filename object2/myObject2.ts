type User = {
    readonly _id: string,
    name: string,
    age: number,
    isGay: boolean,
    details?: number
}

let myUser: User = {
    _id: "12345",
    name: 'yy',
    age: 1,
    isGay: true,
}
myUser.name = 'paing paing';

// coz readOnly
// myUser._id = 'asdf'