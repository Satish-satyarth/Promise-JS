
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("satish")
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Satyarth");
    
// });

// new Promise (function(resolve, reject){
//     setTimeout(function(){
//         console.log("Satish 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Satyarth 2"); 
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             userName : "Satishsatyarth",
//             email : "whitedevil@.com"
//         })   
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promisefour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username : "Sagar_satyarth" , email : "satyarth@.com"})
//         }else{
//             reject('Something went wrong')
//         }
//     },1000)
// })

// promisefour.then((user) => {
//     console.log(user);
//     return user.username; 
//  }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);  
// }).finally(() => {
//     console.log("The promise is either resolved or rejected");   
// })

// const promisefive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username : "Sagar_satyarth" , email : "satyarth@.com"})
//         }else{
//             reject('Something went wrong')
//         }
//     },1000)
// })

async function consumePromiseFive(){
   try {
    const response = await promisefive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
} 
consumePromiseFive();

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/Satish-satyarth')
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
getAllUsers();

fetch('https://api.github.com/users/Satish-satyarth')
.then((response) => {
return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
    
})
 