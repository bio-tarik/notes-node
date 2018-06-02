let square = x => x * x;
console.log(square(9));

let user = {
    name: 'Tarik',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHi();
user.sayHi(1,2,3,4,5);
user.sayHiAlt();
user.sayHiAlt(1,2,3,4,5);