// async function myFun(){

//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Hellooo')
//         }, 1000);
//     });
//     const error = true;
//     if(!error){
//         const res = await promise;//wait untill promise is resolved
//         return res;
//     }else{
//         await Promise.reject(new Error('Something wait wrong'));
//     }
// }

// myFun()
// .then(res=>console.log(res)) //Hello
// .catch(err => console.log(err));


//Async and Await with fetch 

async function getPosts(){
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    //only proceed once its resolved.
    const data = await response.json();

    //Only proceed once second promise is resolved
    return data;
}

getPosts().then(users=>{
    console.log(users);
})