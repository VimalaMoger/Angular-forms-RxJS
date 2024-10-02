/* Some of ES6 and Typescript features implementation*/

//Array destructuring
const arr =[1,2];
const[x, y] = arr;
console.log(x, y);
//
for(var value of arr){
    console.log(value);
}

//parameter destructuring
function f({x = 0}){
    console.log(x);
}
f({x:1});

//mapset
let base = {a:1, b:2};
let copyBase =Object.create(base);
copyBase['c'] = 3;
for(let i in copyBase){
    if(copyBase.hasOwnProperty(i)){
        console.log(i);  //prints the value that belongs to current object
    }
}
let map = new Map().set("A", 1).set("B",2);
//loop over map
for(let [key,value] of map){
    console.log(key, value);
}

function hello() {
    var a = "function";
    for (var i = 0; i < 5; i++) {
        let a = "block";   //block level
    }
    console.log(a);  //function gets printed
}
hello();

//asynchronous function
function doAsyncTask(cb: { (): void; (): void; }) {
  setTimeout(() => {
    console.log("Async Task Calling Callback");
    cb();
  }, 1000);
}

doAsyncTask(() => console.log("Callback Called")); //this function is called when task finishes

//using promise- ES6 built in language which serves the same function as callback-  async process
let error = true;
function doAsyncJob(){
    var promise = new Promise((resolve, reject) => { //inner function takes two arguments
        setTimeout(() => {
            console.log("Async work complete ");
            if(error)
                reject('error');
            else
                resolve('done');
        }, 1000);
    });
    return promise;
}
doAsyncJob().then(   //promise chaining
    (val) => console.log(val),
    (err) => console.error(err)
  ).then(() => console.log("tasks all done ") 
  ).catch((err) => console.error(err));
  ;