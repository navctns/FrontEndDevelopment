/**
* easyHTTP Library
* Library for making HTTP Requests
* @version 2.0.0
* @author Brad
* @license MIT
**/

class EasyHTTP{

  //MAKE HTTP GET Request
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });

  }

  //MAKE HTTP POST Request
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  //MAKE HTTP PUT Request

  put(url,data){

    return new Promise((resolve, reject) => {
      fetch(url, {
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res  => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }


  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method:'DELETE',
        headers:{
          'Content-type':'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resourse deleted'))
      .catch(err => reject(err));
    });
  }
}
