<template lang="html">
  <li>
    <h2>{{name}}{{isFavourite ? '(Favourite)':''}}</h2>
    <div class="star-rating">
      <span class="fa fa-star checked" :class="{active:friendStarRating >=1}"></span>
      <span class="fa fa-star checked" :class="{active:friendStarRating >=2}"></span>
      <span class="fa fa-star checked" :class="{active:friendStarRating >=3}"></span>
      <span class="fa fa-star" :class="{active:friendStarRating >=4}"></span>
      <span class="fa fa-star" :class="{active:friendStarRating ==5}"></span>
    </div>
    <button type="button" @click="toggleFavourite">Toggle Favourite</button>
    <button type="button" @click="toggleDetails">{{detailsAreVisible ? 'Hide':'Show'}}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{phoneNumber}}</li>
      <li><strong>Email: </strong>{{emailAddress}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //Props as array
  // props:[
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavourite',
  // ],
  //Props as object

  //Props With TYPE
  // props:{
  //   name:String,
  //   phoneNumber:String,
  //   emailAddress:String,
  //   isFavourite:String
  // },

  //Props with TYPE,REQUIRED,...
  props:{
    id:{
      type:String,
      requiered:true,
    },
    name:{
      type:String,
      requiered:true,
    },
    phoneNumber:{
      type:String,
      requiered:true,
    },
    emailAddress:{
      type:String,
      requiered:true,
    },
    isFavourite:{
      type:Boolean,
      requiered:false,
      default:false,
      // validator:function(value){
      //   return value === '1' || value ==='0';
      // }
    },
    starRating:{
      type:String,
      requiered:false,
      default:'1',
    }
  },
  //Emit as array
  // emit:[
  //   'toggle-favourite'
  // ],
  //Emit as Object
  emit:{
    'toggle-favourite':function(id){
      if(id){
        return true
      }else{
        console.log('Id is Missing');
        return false
      }
    },
  },
  data(){
    return{
      detailsAreVisible:false,
      friend:{
        id:'manuel',
        name:'Manuel Lorenz',
        phone:'234-5553-444',
        mail:'manauellorenz@mail.in'
      },
      friendIsFavourite:this.isFavourite,
      friendStarRating:parseInt(this.starRating),
    }
  },
  methods:{
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
      console.log(this.friendStarRating);
    },
    toggleFavourite(){
      //EMIT - makes your own custom event listened by parent
      this.$emit('toggle-favourite',this.id);
      // this.friendIsFavourite = !this.friendIsFavourite;
      // if(this.friendIsFavourite === '1'){
      //   this.friendIsFavourite = '0';
      // }else{
      //   this.friendIsFavourite = '1';
      // }
    }
  }
}
</script>

  <style lang="css" scoped>


</style>
