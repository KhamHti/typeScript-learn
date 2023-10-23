function addTwo(num: number): number{
    return num + 2
}
let q = addTwo(5)
console.log(q)
console.log(addTwo(1).valueOf)


function getUpper(val: string){
    return val.toUpperCase()
}

console.log(getUpper("hello3"))

function signUpUser(name: string, email: string, isPaid: boolean = false){}
signUpUser("kang", "kand@ae.com", true)
console.log(signUpUser("kand", "kann@gmail.com"))


function loginUser(name: string,email: string, isPaid: boolean = false){

}
const s = loginUser('gg', 'abc@gmail.com')
console.log(s)

const getValue = (val: number) => {
    if(val > 5){
        return true
    }else {
        return "200 OK"
    }
}

const getHello = (s: string): string => {
    return ''
}

const heros = ["spiderman", 'batman', 'ironman']
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `Hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

// export{}
