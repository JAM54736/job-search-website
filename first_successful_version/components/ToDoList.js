const ToDoList = {
    data() {
      return {
        todos: [], // Array to store to-do tasks
        newTodo: "" // New task input field
      };
    },
    methods: {
      // Add a new task to the beginning of the list
      addTodo() {
        if (this.newTodo.trim() !== "") {
          this.todos.unshift({ 
            text: this.newTodo, 
            priority: "Low Priority" // Default priority
          });
          this.newTodo = ""; // Clear the input field
        }
      },
      // Remove a task by index
      removeTodo(index) {
        this.todos.splice(index, 1);
      },
      // Toggle the priority status of a task
      togglePriority(index) {
        const task = this.todos[index];
        if (task.priority === "Low Priority") {
          task.priority = "High Priority";
        } else {
          task.priority = "Low Priority";
        }
      }
    },
    template: `
      <div class="todo-list">
        <h2>To-Do List</h2>
        <!-- Input for adding a new task -->
        <div>
          <input 
            v-model="newTodo" 
            placeholder="Add a new task" 
            @keyup.enter="addTodo" 
          />
          <button @click="addTodo">Add</button>
        </div>
        <!-- Display tasks in a list -->
        <ul>
          <li v-for="(todo, index) in todos" :key="index">
            <!-- Task text and priority status -->
            <span>{{ todo.text }} ({{ todo.priority }})</span>
            <!-- Priority toggle button -->
            <button @click="togglePriority(index)">
              {{ todo.priority === "Low Priority" ? "Mark as High Priority" : "Mark as Low Priority" }}
            </button>
            <!-- Delete button -->
            <button @click="removeTodo(index)">Delete</button>
          </li>
        </ul>
      </div>
    `
  };
