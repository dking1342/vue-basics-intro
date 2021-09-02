<template>
    <div class="quiz-header">
        <h3>{{que.question}}</h3>
    </div>
    <div class="quiz-container">
        <ul>
            <li 
                v-for="(answer,index) in ans" 
                :key="answer.name" 
                @click="checkAnswer(answer,index)"
                :class="answerClass(index,answer)"
            >
                {{answer.name}}
            </li>
        </ul>
    </div>
    <div class="button-container">
        <button 
            @click="submitAnswer"
            :disabled="selected === null || answered"
        >
            Submit
        </button>
        <button 
            @click="nextPage"
            :disabled="!submitted"
        >Next</button>
    </div>
</template>

<script>
    export default {
        name:'Question',
        props:{
            que:Object,
            nextPage:Function,
            increment:Function
        },
        data(){
            return{
                selected: null,
                ans:[],
                answered:false,
                submitted:false,
            }
        },
        methods:{
            checkAnswer(value,index){
                this.selected = index
            },
            shuffle(){
                const correct = { name: this.que.correct_answer, isCorrect:true };
                const incorrectArr = Object.values(this.que.incorrect_answers).map(answer => {
                    return {
                        name: answer,
                        isCorrect: false
                    }
                })
                let availableAnswers = [...incorrectArr,correct];
                let newAvailableAnswers = availableAnswers.reduce((acc,val,i,arr)=>{
                    let allArr = [...acc,...arr];
                    let uniqueArr = allArr.filter(item => allArr.indexOf(item) === allArr.lastIndexOf(item));
                    let randomAnswer = uniqueArr[Math.floor(Math.random() * uniqueArr.length)]; 
                    return [...acc,randomAnswer]	
                },[]);
                this.ans = [...newAvailableAnswers]
                return [...newAvailableAnswers]
            },
            submitAnswer(){
                this.answered = true;
                this.increment(this.ans[this.selected].isCorrect);
                this.submitted = true;
            },
            answerClass(index,answer){
                if(this.answered && answer.isCorrect){
                    return 'correct'
                }
                if(this.answered && this.selected === index && !answer.isCorrect){
                    return 'incorrect'
                }
                if(!this.answered && this.selected === index){
                    return 'selected'
                }
            },
        },
        computed:{
            // answers(){
            //     const correct = { name: this.que.correct_answer, isCorrect:true };
            //     const incorrectArr = Object.values(this.que.incorrect_answers).map(answer => {
            //         return {
            //             name: answer,
            //             isCorrect: false
            //         }
            //     })
            //     let availableAnswers = [...incorrectArr,correct];
            //     let newAvailableAnswers = availableAnswers.reduce((acc,val,i,arr)=>{
            //         let allArr = [...acc,...arr];
            //         let uniqueArr = allArr.filter(item => allArr.indexOf(item) === allArr.lastIndexOf(item));
            //         let randomAnswer = uniqueArr[Math.floor(Math.random() * uniqueArr.length)]; 
            //         return [...acc,randomAnswer]	
            //     },[]);
            //     this.ans = [...newAvailableAnswers]
            //     return this.ans;
            //     return [...newAvailableAnswers]
            // }
        },
        watch:{
            que:{
                immediate:true,
                handler(){
                    this.selected = null;
                    this.shuffle();
                    this.answered = false;
                    this.submitted = false;
                }
            }
        }
    }
</script>

<style scoped>
.quiz-header{
	display:flex;
	flex-direction: column;
	gap:8px;
	width:350px;
	word-wrap: normal;
	overflow: auto;
	margin-bottom: 10px;
	max-height: 75px;
	text-align: center;
}
.quiz-container{
	width:350px;
	height:fit-content;
}
ul{
	width:100%;
	height:100%;
	list-style-type: none;
	display:flex;
	flex-direction: column;
	gap: 6px;
}
li{
	border:solid 0.5px #333;
	background-color: #eee;
	transition:all ease 0.3s;
	border-radius: 5px;
	cursor: pointer;
	line-height: 1.75rem;
}
li:hover{
	background-color: #ddd;
}
.button-container{
	width:350px;
	height:50px;
	display:flex;
	align-items: center;
	justify-content: space-evenly;
}
button{
	height:80%;
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
:is(.correct,.correct:hover){
    background:green;
    color:#eee;
}
:is(.incorrect,.incorrect:hover){
    background:red;
    color:#eee;
}
:is(.selected,.selected:hover){
    background:steelblue;
    color:#eee;
}
</style>