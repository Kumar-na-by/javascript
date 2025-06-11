// Promise JavaScript ka ek object hai jo future me kuch kaam hone ka vaada (promise) karta hai — ya to:
// 🔓 Kaam pura ho jayega → resolve
// ❌ Ya fail ho jayega → reject
// Jaise ek dost aapse promise karta hai ki "main kal 5 baje aunga", ab wo ya to aayega (resolve) ya nahi aayega (reject).

// 1. kese pta chelga ki error aa rha hai
// 2. aap ye try krna ki console ke ander error nhi aaye 

// let prom1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("mera kaam ho gya")
//         resolve("sloved")
//     }, 2000);
// })

// prom1.then((a)=>{
//     console.log(a)
// })

let prom1 = new Promise((resolve,reject)=>{
    let random = Math.random() * 100;
    console.log(random)
    if (random<10) {  // 81<10
        reject("ye number support nhi krta hai")
    } else {
        setTimeout(() => {   
            console.log("me prmoise krta hu");
            resolve("kumar");
        }, 2000);
    }
})

let prom2 = new Promise((resolve,reject)=>{
    let random = Math.random()*100;
    console.log(random)
    if (random<10) {
        reject("ye number support nhi krta hai 2")
    } else {
        setTimeout(() => {   
            console.log("me prmoise krta hu 2");
            resolve("kumar");
        }, 2000);
    }
}) 
// method 1 - promise.all([prom1,prom2]) =- Jab aapko multiple Promises ek sath run karne ho aur sab complete hone ka wait karna ho:-

// let p3 = Promise.all([prom1,prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log("this is " + err)
// })

// method 2 - promise.allsettled([prom1,prom2]) -Sabhi promises complete ho chahe fail ho ya pass — saare ka result milega dono result or status mil jayega:-

// let p4 = Promise.allSettled([prom1,prom2])
// p4.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log("this is " + err)
// })

// method  3 .Promise.race([]) - Jab aapko multiple Promises me se jo pehle complete ho use lena ho:
// let p3 = Promise.race([prom1,prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log("this is " + err)
// })

// method 4 . Promise.any([]) - Pehla success wala result dega (jo bhi pehle resolve ho):
// let p3 = Promise.any([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log("this error "  + err)
// })

// method 5 resolve 
// method 6 reject

