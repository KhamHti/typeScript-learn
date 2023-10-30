// union is a combination of two or three or more data types 
// that you can put into a variable or an array

let score: number | string | boolean = 33

score = 323
score = 'ast'
score = true

type User = {
    username: string,
    id: number
}

type Admin = {
    name: string,
    id: number
}

let khamhit: User | Admin = { name: 'asdf', id: 123 }

function getToken(id: string | number) {
    // making api call
    console.log(`hello ggwp ${id}`)
}

function getApi(id: string | number) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
    id.toString()
}


// array
const data: number[] = [1, 2, 3, 4];
const data1: string[] = ['1', '4', "5"];
const gg: string[] | number[] = [1, 2, 3, 4];
const gg2: (number | string)[] = [1, 2, 3, 4, '5'];
