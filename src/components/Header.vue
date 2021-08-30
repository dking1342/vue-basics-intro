<template>
    <header>
        <h1>Task Tracker</h1>
        <Button 
            v-show="homePage"
            :text="showAddTask ? 'Close' : 'Add Text'"
            :color="showAddTask ? 'red' : 'green'"
            @btn-click="$emit('toggle-add-task')"
        />
        <!-- <Button text="Update Text" color="blue" />
        <Button text="Delete Text" color="red" /> -->
    </header>
</template>

<script>
    import Button from './Button.vue'
    export default {
        name:'Header',
        components:{
            Button
        },
        computed:{
            homePage(){
                if(this.$route.path === '/'){
                    return true
                } else {
                    return false
                }
            }
        },
        props:{
            showAddTask:Boolean
        },
        emits:['toggle-add-task']
    }
</script>

<style scoped>
    header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>