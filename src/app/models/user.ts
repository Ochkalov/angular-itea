export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public age: number;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
}