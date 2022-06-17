document.getElementById('button1').addEventListener('click',getText);

//Get simple (local) text
function getText(){
    fetch('text.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
        console.log(err)
    })
}

//Get(local) JSON
document.getElementById('button2').addEventListener('click',getJSON);

function getJSON(){
    fetch('post.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);

        let output = '';

        data.forEach(post => {
            output += `
            <li>${post.title}
            `
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err)
    })
}

//Get from external API
document.getElementById('button3').addEventListener('click',getJSON);

function getJSON(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);

        let output = '';

        data.forEach(post => {
            output += `
            <li>${post.title}
            `
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err)
    })
}