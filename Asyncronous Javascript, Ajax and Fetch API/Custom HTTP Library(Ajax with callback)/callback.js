//Callback - callback is a function which take another function as a parameter.

const posts = [
    {title:"Post One", body:"This is post one"},
    {title:"Post Two", body:"This is post two"},
];

//without callback(syncronous call)
// function createPost(post){
//     setTimeout(function(){
//         posts.push(post)   
//     },2000);
// }

// function getPost(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(post => {
//             output += `
//             <li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     },1000);
// };

// createPost({title:"Post Three",body:"This is post three"});
// getPost();

//Withcallback (Asyncronous call)

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)  
        callback() 
    },2000);
}

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach(post => {
            output += `
            <li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    },1000);
};

createPost({title:"Post Three",body:"This is post three"},getPosts);


