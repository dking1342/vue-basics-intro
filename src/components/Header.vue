<template>
    <header>
        <h1>Task Tracker</h1>
        <Button text="Add Text" color="green" />
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
        }
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