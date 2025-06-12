// ye background me chlta rehga

// async/await

// function wait2seconds() {
//     return new Promise ((resolve)=>{
//         setTimeout(() => {
//             resolve("wait for 2 seconds");
//         }, 2000);
//     })
// }

// function wait3seconds() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("wait3seconds")
//             resolve("ho gya")
//         }, 2000);
//     })
// }

// 1. waitFor2Seconds() ek Promise return karta hai.

// 2. setTimeout() 2 second ka delay lagata hai.

// 3. 2 seconds ke baad resolve() call hota hai.

// 4  await use krna ho to async ke ander hona jauri hai

// async function main() {
//     console.log("start")
    
//     let result = await wait3seconds();

//     console.log(result);

//     console.log("the end");
// }
// main()

// | Line                       | Explanation                                                                            |
// | -------------------------- | -------------------------------------------------------------------------------------- |
// | `async function main()`    | Ye function asynchronous hai. Iske andar hum `await` use kar sakte hain.               |
// | `console.log("Start");`    | Sabse pehle "Start" print hoga.                                                        |
// | `await waitFor2Seconds();` | Yahan code ruk jayega jab tak `waitFor2Seconds()` resolve na ho jaye (2 second delay). |
// | `let result = ...`         | Jab Promise resolve ho jata hai, result me `"2 seconds complete!"` aata hai.           |
// | `console.log(result);`     | Ye print karega: `"2 seconds complete!"`                                               |
// | `console.log("End");`      | Phir "End" print hoga.                                                                 |


// | Concept      | Example                           | Kya karta hai                             |
// | ------------ | --------------------------------- | ----------------------------------------- |
// | `async`      | `async function main() {}`        | Function ko asynchronous banata hai       |
// | `await`      | `await waitFor2Seconds();`        | Promise ke resolve hone ka wait karta hai |
// | `Promise`    | `return new Promise((resolve)...` | Future me koi value provide karega        |
// | `setTimeout` | `setTimeout(() => {...}, 2000)`   | 2 second ke baad kuch kaam karta hai      |


// async function wait() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json();
//     console.log(data)
// }
// wait()

console.log("hello world")

async function waiting(){
    let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let b = await a.json()
    console.log(b)

}
waiting()
console.log("hello world")