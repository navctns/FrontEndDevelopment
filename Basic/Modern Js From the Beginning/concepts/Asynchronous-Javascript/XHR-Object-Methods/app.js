

//HTTP STATUSES
//200 : 'OK'
//403: 'Forbidden'
//404: 'Not Found'

//Ready State Values (of Request)
//0- Request not initialized
//1 - Server Connection Established
//2 - Request recieved
//3 - Processing Request
//4 - Request is finished & response is ready



document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  //create an XHR object //XmlHttpRes
  const xhr = new XMLHttpRequest();


  //OPEN
  //xhr.open(type of request, file(data), true(if synchronous))
  xhr.open('GET','data.txt',true);
  //What to do with data get by open()
  xhr.onload = function(){
    //track state of request
    console.log('READY STATE', xhr.readyState);
    if(this.status === 200){
      console.log(this.responseText);
      //change output element value
      document.getElementById('output').innerHTML = `
                <h2>${this.responseText}</h2>`
    }
  }
  xhr.send();
}

function OldMethodloadData(){
  //create an XHR object //XmlHttpRes
  const xhr = new XMLHttpRequest();

  //OPEN
  //xhr.open(type of request, file(data), true(if synchronous))
  xhr.open('GET','data.txt',true);
  xhr.onreadystatechange = function(){
    if(this.status === 200 && this.readyState === 4){
      console.log(this.responseText);
      //change output element value
      document.getElementById('output').innerHTML = `
                              <h2>${this.responseText}</h2>
                                        `
    }
  }
  xhr.send();

}
