<template>
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks 
      @delete-task="deleteTask" 
      :tasks="tasks" 
      @toggle-reminder="toggleReminder"
    />
</template>

<script>
    import Tasks from '../components/Tasks.vue'
    import AddTask from '../components/AddTask.vue'

    export default {
        name:'Home',
        components:{
            Tasks,
            AddTask
        },
        data(){
            return{
                tasks:[],
                showAddTask:false
            }
        },
        methods:{
            async addTask(task){
                const response = await fetch('api/tasks',{
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                },
                body:JSON.stringify(task)
                });
                const data = await response.json();

                this.tasks = [...this.tasks, data]
            },
            async deleteTask(id){
                if(confirm('Are you sure?')){
                const response = await fetch(`api/tasks/${id}`,{
                    method:'DELETE',
                    headers:{
                    'Content-type':'application/json',
                    },
                    body:null
                });
                response.status === 200 ? (
                    this.tasks = this.tasks.filter((task)=> task.id !== id)
                ) : alert('Error deleting task');
                }
            },
            async toggleReminder(id){
                const taskToToggle = await this.fetchTask(id);
                const updateTask = {
                ...taskToToggle,
                reminder:!taskToToggle.reminder
                }
                const response = await fetch(`api/tasks/${id}`,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(updateTask)
                });
                const data = await response.json();

                this.tasks = this.tasks.map(task=>{
                if(task.id === id){
                    return data
                } else {
                    return task;
                }
                });

                // this.tasks = this.tasks.map((task)=>{
                //   if(task.id === id){
                //     return {
                //       ...task,
                //       reminder: !task.reminder
                //     }
                //   } else {
                //     return task
                //   }
                // })
            },
            async fetchTasks(){
                const response = await fetch('api/tasks');
                const data = await response.json();
                return data;
            },
            async fetchTask(id){
                const response = await fetch(`api/tasks/${id}`);
                const data = await response.json();
                return data;
            }
        },
        async created(){
            this.tasks = await this.fetchTasks();
        },

    }
</script>

<style scoped>

</style>