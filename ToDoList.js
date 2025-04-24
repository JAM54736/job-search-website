export default {
    name: 'ToDoList',
    template: `
      <div>
        <h2>To-Do List</h2>
        <input v-model="newTask" placeholder="Enter a task" />
        <button @click="addTask">Add</button>
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            {{ task.text }} ({{ task.priority }})
            <button @click="togglePriority(index)">Toggle Priority</button>
            <button @click="removeTask(index)">Delete</button>
          </li>
        </ul>
      </div>
    `,
    data() {
      return {
        newTask: '',
        tasks: [],
      };
    },
    methods: {
      addTask() {
        if (this.newTask) {
          this.tasks.unshift({ text: this.newTask, priority: 'Low Priority' });
          this.newTask = '';
        }
      },
      togglePriority(index) {
        const task = this.tasks[index];
        task.priority = task.priority === 'Low Priority' ? 'High Priority' : 'Low Priority';
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
    },
  };