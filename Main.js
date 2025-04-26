// Create the Vue app
const app = Vue.createApp({});

// Register the ToDoList component globally
app.component('todo-list', ToDoList);

// Use the router (make sure you have defined `router` in router.js)
app.use(router);

// Mount the app to the <div id="app"> in your HTML
app.mount('#app');

console.log('App mounted successfully!');
