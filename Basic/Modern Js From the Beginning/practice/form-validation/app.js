
//VALIDATE NAME
function validateName(){
  event
    const name = event.target;
    const re = /^[a-zA-Z]{2,10}$/;
    if(!re.test(name.value)){
      name.classList.add('is-invalid');
    }else{
      name.classList.remove('is-invalid');
    }
}

//VALIDATE ZIP
function validateZip(){
  event
    const zip = event.target;
    const re = /^[0-9]{6}(-[0-9]{4})?$/;
    if(!re.test(zip.value)){
      zip.classList.add('is-invalid');
    }else{
      zip.classList.remove('is-invalid');
    }
}

//VALIDATE MAIL
function validateEmail(){
  event
    const mail = event.target;
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(mail.value)){
        mail.classList.add('is-invalid');
      }else{
        mail.classList.remove('is-invalid');
      }
}

//VALIDATE PHONE
function validatePhone(){
  event
    const phone = event.target;
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
      }else{
        phone.classList.remove('is-invalid');
      }
}
