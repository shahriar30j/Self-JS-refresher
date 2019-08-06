const person = {
    name: 'Shahriar',
    age: 30,

    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// const printName =(personData)=>{
//     console.log(personData.name);
// }

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

//object destructuring

const { name, age } = person;

console.log(name, age, age, age, name)

// //three dot ... to copy the person
// const copiedPerson = { ...person };
// // person.greet();

// console.log(copiedPerson);

//destructuring of array

const hobbies = ['Sports', 'Cooking'];

const [hobby1, hobby3] = hobbies;
console.log(hobby3, hobby3,hobby3,hobby3, hobby1)

// const copiedArray = [...hobbies];

// console.log(copiedArray);



// //usinng ... Three dots number of elements in array has been un limited
// const toArray2 = (...args) => {
//     return args;
// };

// console.log(toArray2(1, 2, 3, 4, 5, 6));