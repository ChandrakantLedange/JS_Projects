// EasyHTTP Library
//Library for making HTTP request
//version 2

class EasyHTTP{
    //make a HTTP GET Request
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(res=> res.json())
            .then(data =>resolve(data))
            .catch(err => reject(err));
        })
    }

    //make a HTTP POST Request
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res=> res.json())
            .then(data =>resolve(data))
            .catch(err => reject(err));
        })
    }

    //make a HTTP PUT Request
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res=> res.json())
            .then(data =>resolve(data))
            .catch(err => reject(err));
        })
    }

    //make a HTTP DELETE Request
    delete(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                },
            })
            .then(res=> res.json())
            .then(data =>resolve('Resorece Deleted'))
            .catch(err => reject(err));
        })
    }
}