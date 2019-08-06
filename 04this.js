const person = {
    name: 'Shahriar',
    age: 30,
    //  greet:()=>{  //wrong
    // greet: function () {
    greet() {          // shortcut
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();