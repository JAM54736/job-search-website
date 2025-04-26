
// Create the Vue app
const app = Vue.createApp({});

// Register the ToDoList component globally
app.component('todo-list', ToDoList);

app.component('job-overview', JobOverview);

app.component('job-detail', JobDetail);

app.component('job-ApplicationForm', ApplicationForm);
// Use the router (make sure you have defined `router` in router.js)
app.use(router);

// Mount the app to the <div id="app"> in your HTML
app.mount('#app');

console.log('App mounted successfully!');
