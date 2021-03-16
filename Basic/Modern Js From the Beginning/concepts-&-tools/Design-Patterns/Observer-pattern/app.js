
class EventObserver {

  constructor(){
    this.observers = [];
  }

  subscribe(fn){
    this.observers.push(fn);
    console.log(`You are subscribed to ${fn.name}`);
  }

  unsubscribe(fn){
    //Loading observers array by avoiding the function
    this.observers = this.observers.filter(function(item){
      if(item!=fn){
        return item;
      }
    });
    console.log(`You are Unsubscribed from ${fn.name}`);
  }

  fire(){
    this.observers.forEach(item =>{
      item.call();
    })
  }
}

const click = new EventObserver();
//UI Event
function subMillisecond(){
  click.subscribe(getCurMilliseconds);
}

function unsubMillisecond(){
  click.unsubscribe(getCurMilliseconds);
}

function subSecond(){
  click.subscribe(getCurSeconds);
}

function unsubSecond(){
  click.unsubscribe(getCurSeconds);
}

function fireSubscriptions(){
  click.fire();
}

// functions Subscribing to
const getCurMilliseconds = function(){
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function(){
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}
