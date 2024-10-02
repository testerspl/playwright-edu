


let newName: string

function fun (num: object, newNum: number) {


}


fun({
    num1: 2
},2)

type users = {

    name: string,
    age: number

}

function getUserAge (newUser: users) {

    return newUser.age
}


getUserAge({name: '', age: 23})