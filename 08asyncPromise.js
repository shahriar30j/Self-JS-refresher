const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Call Back Fetching Data Done');
        }, 1500);
    });
    return promise;
};


// Asynch code

setTimeout(() => {
    console.log('First Timer is Done');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
            return fetchData();
        })
        .then(msg => {
            console.log(msg);
        });
}, 2000);

//sync Code
console.log('Hello!');
console.log('Hi!');

// setTimeout(() =>{
//     console.log('Second Timer is Done');
// }, 1000);