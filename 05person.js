const person = {
    name: 'Shahriar',
    age: 30,
    //  greet:()=>{  //wrong
    // greet: function () {
    greet() {          // shortcut
        console.log('Hi, I am ' + this.name);
    }
};

// person.greet();

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
// console.log(hobby)
// }

// Below code is same as abpve code in short

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// console.log(hobbies.map(hobby=>hobby));

console.log(hobbies);