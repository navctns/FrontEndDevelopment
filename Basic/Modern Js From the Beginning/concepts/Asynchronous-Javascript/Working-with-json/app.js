
document.getElementById('button').addEventListener('click',loadCustomer);
document.getElementById('button1').addEventListener('click', loadCustomers);
//load customer
function loadCustomer(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','customer.json',true);
  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);
      //convert json string to object
      const customer = JSON.parse(this.responseText);
      //output dom manipulation
      const output = `
                  <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                  </ul>
                `
      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}

//load customers
function loadCustomers(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','customer.json',true);
  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);
      //convert json string to object
      let output = '';
      const customer = JSON.parse(this.responseText);
      //output dom manipulation
      customer.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
        `
      });

      document.getElementById('customers').innerHTML = output;
    }
  }
  xhr.send();
}
