type Guitarist = {
    name: string,
    age: number,
    albums: (string | number)[]
}

type stringOrNumber = string | number

//Literal types
let myName: "dave"

let useName: "dave" | "jhon" | "amy"

useName = "jhon"

//fuctions

//type mathfunction = (a : number, b : number) => number
interface mathfunction {
    (a: number, b: number): number
}
let multiply: mathfunction = function (c, d) {
    return c * d
}

const printthis = (a: any) => {
    console.log(a)
}

//rest prarameters
const totalnumber = (...nums: number[]): number => {
    return nums.reduce((prev, current) => prev + current)
}

//never types
const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

//number or string
const numbertocheck: any = "sami"
const lengthof: number = (numbertocheck as string).length

//type casting or assertions
 
