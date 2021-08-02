<template>
  <active-element
    :topic-title="activeTopic && activeTopic.title"
    :text="activeTopic && activeTopic.content"
  ></active-element>
  <div class="topics-container">
    <!-- WITHOUT Provide-inject function -->
    <!-- <knowledge-base  @select-topic="activateTopic"></knowledge-base> -->
    <!-- WITH Provide-inject function -->
    <knowledge-base></knowledge-base>

  </div>
  <content-index :topic-title="activeTopic && activeTopic.title"></content-index>
</template>
<script>
  import ContentIndex from './components/ContentIndex.vue'
  export default {
    components:{
      'content-index':ContentIndex,
    },
    mounted(){
      setTimeout(()=>{
        this.topics.push({
          id:'Kierkegaard',
          title:'Kierkegaard on art',
          description:'Kierkegaard on the transformative power of art',
          content:'Kierkegaard seeks to inspire transformations. His aim is to get us to devote our lives to God or the Good rather than our own personal enjoyment – to abandon the aesthetic life in favour of the ethical or religious one. Drawing on Laurie Paul and Agnes Callard’s recent work, I maintain that two obstacles stand in Kierkegaard’s way'
        })
      },3000);
    },
    data(){
      return{
        topics:[
          {
            id:'immanuel-kant',
            title:'Immanuel kant on Art',
            description:'Kant has a definition of art, and of fine art',
            content:'Kant has a definition of art, and of fine art; the latter, which Kant calls the art of genius, is “a kind of representation that is purposive in itself and, though without an end, nevertheless promotes the cultivation of the mental powers for sociable communication” (Kant, Critique of the Power of Judgment, Guyer ..'
          },
          {
            id:'nietzsche',
            title:'Living as an artist',
            description:'Love or loathe him, philosopher Friedrich Nietzsche (1844-1900) offered a unique way of considering creativity in his first major work, The Birth of Tragedy, published in 1872',
            content:'The Apollonian is the cool rational intellect, while the Dionysian is the passionate emotional aspect. Nietzsche worried that the society of his time only emphasised the Apollonian and neglected the role of the Dionysian or the emotions. He thought it was important to balance the two and saw this best depicted through artworks such as the Ancient Greek Tragedies. ',
          }
        ],
        activeTopic:null,
      }
    },
    provide(){
      return {
        topics:this.topics,
        selectTopic:this.activateTopic,
      }
    },
    methods: {
      activateTopic(topicId) {
        this.activeTopic = this.topics.find((topic) => topic.id === topicId);
      },
    },
  }
</script>
<style>
  font-family:'Sans-serif';
  .topics-container{
    display: flex;
    gap:1em;
  }
  .topics-container > *>*{
    width:100%;
  }
  body{
    margin: 0;
  }
</style>
