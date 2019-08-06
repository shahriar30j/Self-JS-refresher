const person = {
    name: 'Shahriar',
    age: 30,
    //  greet:()=>{  //wrong
    // greet: function () {
    greet() {          // shortcut
        console.log('Hi, I am ' + this.name);
    }
};

//three dot ... to copy the person
const copiedPerson={...person};
// person.greet();

console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
// console.log(hobby)
// }

// Below code is same as abpve code in short

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// console.log(hobbies.map(hobby=>hobby));

// console.log(hobbies);

// console.log('Before Push: ' + hobbies);

// hobbies.push('Programming');

// console.log('After Push: ' + hobbies);

// copy an array
// const copiedArray = hobbies.slice();

// instead of slice (Array inside array)
// const copiedArray = [hobbies];

//three dot ... to copy an Array
const copiedArray = [...hobbies];

console.log(copiedArray);


const toArray = (arg1, arg2, arg3)=>{
    return [arg1, arg2, arg3];
};

console.log(toArray(1,2,3));

//usinng ... Three dots number of elements in array has been un limited
const toArray2 = (...args)=>{
    return args;
};

console.log(toArray2(1,2,3,4,5,6));