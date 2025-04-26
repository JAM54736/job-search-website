
const routes = [
    { path: '/jobdetails', component: JobDetail}, // Route for Job Detail
    {path: '/todolist', component: ToDoList}, 
    {path: '/applicationform', component: ApplicationForm}, // Route for Application Form
    
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // Pass the routes array here
});


