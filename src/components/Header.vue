<template>
    <header>
        <h1>Task Tracker</h1>
        <Button 
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