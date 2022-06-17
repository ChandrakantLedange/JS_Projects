// EasyHTTP Library
//Library for making HTTP request
//version 2

const http = new EasyHTTP;

//get posts
// http.get('https://jsonplaceholder.typicode.com/posts')
// .then(data => console.log(data))
// .catch(err =>console.log(err));


//create data
const data={
    title:'John Doe',
    body:'This is john doe'
}

//POST method
// http.post('https://jsonplaceholder.typicode.com/posts',data)
// .then(data => console.log(data))
// .catch(err =>console.log(err));

//PUT method
// http.put('https://jsonplaceholder.typicode.com/posts/1',data)
// .then(data => console.log(data))
// .catch(err =>console.log(err));

//DELETE Method
http.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(data => console.log(data))
.catch(err =>console.log(err));