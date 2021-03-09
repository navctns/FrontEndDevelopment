
const data = [
  {
    name:'Joseph Alexy',
    age:32,
    gender:'male',
    loolingfor:'female',
    location:'Boston MA',
    image:'https://randomuser.me/portraits/men/82.jpg'
  },
  {
    name:'Ann',
    age:26,
    gender:'female',
    loolingfor:'male',
    location:'Mumbai MH',
    image:'https://randomuser.me/portraits/women/82.jpg'
  },
  {
    name:'Julia',
    age:24,
    gender:'female',
    loolingfor:'female',
    location:'Kolkata WB',
    image:'https://randomuser.me/portraits/women/81.jpg'
  }
]

//SET Random Pics
// let randomPicId = Math.ceil(Math.random()*100);
// data[0].image = `https://randomuser.me/portraits/men/${randomPicId}.jpg`;
// randomPicId = Math.ceil(Math.random()*100);
// data[1].image = `https://randomuser.me/portraits/women/${randomPicId}.jpg`;
// randomPicId = Math.ceil(Math.random()*100);
// data[2].image = `https://randomuser.me/portraits/women/${randomPicId}.jpg`

const profiles = profileIterator(data);

//Call First Profile
nextProfie();

//PROFILE ITERATOR
function profileIterator(profiles){

  let nextIndex = 0,
      prevIndex;
  return {
    next:function(){
      return nextIndex<profiles.length?
        {value:profiles[nextIndex++],done:false}
        :{done:true}

    },
    prev:function(){
      return nextIndex >= 0?
        {value:profiles[nextIndex],done:false}
        :{done:true}
    }
  };
}

//Next Profile
function nextProfie(){

  const currentProfile = profiles.next().value;
  if(currentProfile != undefined){
        document.getElementById('profileDisplay').innerHTML = `
                  <ul class="list-group">
                    <li class="list-group-item">Name:${currentProfile.name}</li>
                    <li class="list-group-item">Location:${currentProfile.location}</li>
                    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
                  </ul>
                `
        document.getElementById('imageDisplay').innerHTML = `
                <img src="${currentProfile.image}" alt="" />`
    }else{
      window.location.reload();
    }
}

//PREVIOUS PROFILE
function prevProfie(){

  const currentProfile = profiles.prev().value;
  if(currentProfile != undefined){
        document.getElementById('profileDisplay').innerHTML = `
                  <ul class="list-group">
                    <li class="list-group-item">Name:${currentProfile.name}</li>
                    <li class="list-group-item">Location:${currentProfile.location}</li>
                    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
                  </ul>
                `
        document.getElementById('imageDisplay').innerHTML = `
                <img src="${currentProfile.image}" alt="" />`
    }else{
      window.location.reload();
    }
}

console.log('prev', profiles.prev().value);
console.log('prev', profiles.prev().value);
