// const ToDoLists = {
//     data () {
//         return {
//             todos: [],
//             newTodo: ''
//         };
//     },
//     methods: {
//         addTodo () {
//             if (this.newTodo.trim() !== '') {
//                 this.todos.push({ text: this.newTodo, completed: false });
//                 this.newTodo = '';
//             }
//         },
//         removeTodo (index) {
//             this.todos.splice(index, 1);
//         },
//         toggleComplete (index) {
//             this.todos[index].completed = !this.todos[index].completed;
//         }
//     },
//     template: `
//         <div class="todo-list">
//             <h2>To-Do List</h2>
//             <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task" />
//             <ul>
//                 <li v-for="(todo, index) in todos" :key="index">
//                     <input type="checkbox" v-model="todo.completed" @change="toggleComplete(index)" />
//                     <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
//                     <button @click="removeTodo(index)">Remove</button>
//                 </li>
//             </ul>
//         </div>
//     `
// }


// Create and register the ToDoList component
const ToDoList = {
    data() {
      return {
        todos: [],
        newTodo: '',
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.todos.push({ text: this.newTodo, completed: false });
          this.newTodo = '';
        }
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
      },
      toggleComplete(index) {
        this.todos[index].completed = !this.todos[index].completed;
      },
    },
    template: `
      <div class="todo-list">
        <h2>To-Do List</h2>
        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task" />
        <ul>
          <li v-for="(todo, index) in todos" :key="index">
            <input type="checkbox" v-model="todo.completed" @change="toggleComplete(index)" />
            <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
            <button @click="removeTodo(index)">Remove</button>
          </li>
        </ul>
      </div>
    `,
  };
  
