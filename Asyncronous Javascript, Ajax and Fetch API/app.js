document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    //create an XHR Object
    const xhr = new XMLHttpRequest();

    //open- take three parameter as 1.method(GET) 2. file name(data.ext) 3.make it asyncronous(true)
    xhr.open('GET','data.txt',true);

    // console.log('READYSTATE',xhr.readyState);//1

    //Optional - used for spinner / loader
    xhr.onprogress = function(){
        console.log('READYSTATE',xhr.readyState);
    }

    xhr.onload = function(){
        console.log('READYSTATE',xhr.readyState);//4
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    //check status and readyState (older syntax)
    // xhr.onreadystatechange =  function(){
    //     console.log('READYSTATE',xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    // request error
    xhr.onerror = function(){
        console.log('request error...');
    }

    xhr.send();

    //readyState Values
    //0 - request not initialized
    //1 - server connection established
    //2 - request received
    //3 - processing request
    //4 - request is finished and response ready

    //HTTP statuses
    //200 - OK
    //403 - Forbidden
    //404 - Not Found
}