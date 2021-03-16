
const User = function(name){
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send:function(message,to){
    this.chatroom.send(message,this,to);
    let messageEl = document.createElement('li');
    let textNode = document.createTextNode(`${this.name}:${message}`);
    messageEl.appendChild(textNode);
    document.querySelector('#message-box').querySelector('.messages').appendChild(messageEl)
  },
  recieve:function(message,from){
    console.log(`${from.name} to ${this.name}:${message}`);
  }
}

const Chatroom = function(){

  let users = {};// list of users

  return {
    register:function(user){
      users[user.name] = user;
      user.chatroom = this;
    },
    send:function(message,from,to){
      if(to){
        //Single user message
        to.recieve(message,from);
      }else{
        //Mass message
        for(key in users){
          if(users[key] !== from){
            users[key].recieve(message,from);
          }
        }
      }
    }

  }
}

const brad = new User('Brad'),
      jeff = new User('Jeff'),
      sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello Jeff',jeff);
sara.send('Hello Brad, You are the best dev ever!!!');
jeff.send('Hello Everyone');
