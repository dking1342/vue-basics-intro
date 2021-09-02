<template>
  <main>
    <Header 
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />
    <QuestionBox 
      :loading="loading" 
      :error="error"
      :data="data"
      :increment="increment"
    />
  </main>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox
  },
  data(){
    return{
      loading: false,
      error:'',
      data:[],
      numCorrect:0,
      numTotal:0,
    }
  },
  methods:{
    increment(input){
      if(input){
        this.numCorrect++
      }
      this.numTotal++
    }
  },
  mounted:async function(){
    try {
      this.loading = true;
      let response = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple');
      let data = await response.json();
      
      if(data.response_code === 2){
        this.error = 'Error loading the questions';
        this.loading = false;
      } 
      if(data.response_code === 0){
        this.data = data.results;
        this.loading = false;
      } 
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this.error = error.message;
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
