class Person {
    constructor(name, age, email, phone, address) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

   static getDetails(name, age, email, phone, address) {
        return {
            name: this.name,
            age: this.age,
            email: this.email,
            phone: this.phone,
            address: this.address
        };
    }
}

const person1 = new Person("gowtham", 22, "deephangowtham@gmail.com", "6369545396", "123 Main Street, City, State, ZIP");

console.log(person1);





