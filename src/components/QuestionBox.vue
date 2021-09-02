<template>
	<section>
		<article v-if="loading === true">
			Loading
		</article>
		<article v-else-if="error !== ''">
			{{this.error}}
		</article>
		<article v-else-if="counter <= data.length - 1">
			<Question 
				:que="data[this.counter]"
				:nextPage="nextPage"
				:increment="increment"
			/>
		</article>
		<article v-else>
			<button @click="refreshPage">New Game</button>
		</article>
	</section>
</template>

<script>
	import Question from './Question';

    export default {
		name:'QuestionBox',
		props:{
			loading:Boolean,
			error:String,
			data:Array,
			increment:Function
		},
		components:{
			Question
		},
		data(){
			return{
				counter:0,
			}
		},
		methods:{
			nextPage:function(){
				console.log(this.counter,this.data.length - 1)
				if(this.counter < this.data.length){
					this.counter++;
				} 
			},
			refreshPage(){
				location.reload();
			}
		},
    }
</script>

<style scoped>
section{
    margin:20px;
    height:calc(100vh - 50px);
}
article{
	background:#f4f4f4;
	width:100%;
	height:50vh;
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding:10px;
}
button{
	height:50px;
	width:100px;
	font-size: 1rem;
	cursor: pointer;
	border-radius: 5px;
	outline:none;
	border:0.25px #333 solid;
	transition:0.3s ease all;
}
button:hover{
	background-color: #ddd;
}
</style>