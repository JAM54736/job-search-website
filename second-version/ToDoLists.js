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
    <div class="pt-5 pb-5">
    <div class="todo-list container mt-5 p-4 rounded shadow bg-light">
  <h2 class="text-center mb-4">To-Do List</h2>
  <!-- Input for adding a new task -->
  <div class="input-group mb-3">
    <input 
      type="text" 
      class="form-control rounded-pill" 
      v-model="newTodo" 
      placeholder="Add a new task" 
      @keyup.enter="addTodo" 
    />
    <button 
      class="btn btn-primary ms-2 rounded-pill" 
      @click="addTodo"
    >
      Add
    </button>
  </div>

  <!-- Display tasks in a list -->
  <ul class="list-group">
    <li 
      v-for="(todo, index) in todos" 
      :key="index" 
      class="list-group-item d-flex justify-content-between align-items-center mb-2 rounded shadow-sm border-0"
    >
      <span class="task-text">
        {{ todo.text }}
        <span 
          class="badge rounded-pill ms-2" 
          :class="todo.priority === 'High Priority' ? 'bg-danger' : 'bg-secondary'"
        >
          {{ todo.priority }}
        </span>
      </span>
      <div>
        <button 
          class="btn btn-outline-warning btn-sm rounded-pill me-2" 
          @click="togglePriority(index)"
        >
          {{ todo.priority === "Low Priority" ? "Mark as High Priority" : "Mark as Low Priority" }}
        </button>
        <button 
          class="btn btn-outline-danger btn-sm rounded-pill" 
          @click="removeTodo(index)"
        >
          Delete
        </button>
      </div>
    </li>
  </ul>
</div>
</div>
<div class="pt-5 pb-5"></div>
    `
  };