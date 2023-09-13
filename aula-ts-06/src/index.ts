const user: {
    name: string;
    email: string;
    password: string;
    birth?: string | Date;
} = {
    name: "name",
    email: "mail@mail.com",
    password: "password",
    birth: new Date("2019-12-12")
}
const users: {
    name: string;
    email: string;
    password: string;
}[] = [user, user, user]


function checkUserWithEmailI() {
    console.log()
}