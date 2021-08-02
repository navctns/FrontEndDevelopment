//IN VUE REACTIVITY IS IMPLEMENTED USING PROXY IN JAVASCRIPT 

const data = {
  message:'Hello!',
  longMessage:'Hello! World',
};

const handler = {
  set(target,key,value){
    // console.log(target);
    // console.log(key);
    // console.log(value);
    if(key === 'message'){
      target.longMessage = value + 'World!';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data,handler);

proxy.message = 'Hello!!!';
console.log(proxy.longMessage);
