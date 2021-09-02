<template>
	<div>
		<nav>
			<ul>
				<li>
					<b>Fancy Quiz App</b>
				</li>
				<li>
					Counter: {{numCorrect}}/{{numTotal}}
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
    export default {
        name:'Header',
		props:{
			numCorrect:Number,
			numTotal:Number
		}
    }
</script>

<style scoped>
nav{
	display:flex;
	width:100%;
	height:50px;
	background:#444;
	color:#eee;
	position:sticky;
	top:0;
	left:0;
	right:0;
}
ul{
	width:100%;
	height:100%;
	display:flex;
	justify-content: flex-start;
	align-items: center;
	list-style: none;
	padding:0 20px;
}
li{
	width:fit-content;
	height:100%;
	margin:0 10px;
	display:flex;
	justify-content: center;
	align-items: center;
}
a{
	text-decoration: none;
	cursor: pointer;
	width:100%;
	height:100%;
	display:flex;
	align-items: center;
	justify-content: center;
	color:#eee;
}
</style>