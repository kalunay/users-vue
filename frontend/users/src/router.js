import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/*export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/users",
            name: "users",
            component: () => import("./components/UsersList")
        },
        {
            path: "/users/:id",
            name: "user-details",
            component: () => import("./components/User"),
            props: true
        },
        {
            path: "/add",
            name: "user-add",
            component: () => import("./components/AddUser")
        }
    ]
}); */

const routes = [
    {
        path: '/',
        component: () => import("./components/UsersList"),
        name: "users"
    },
    {
        path: '/users/:id',
        component: () => import("./components/User"),
        name: "user-details"
    },
    {
        path: '/add',
        component: () => import("./components/AddUser"),
        name: "user-add"
    }
];

const router = new Router({
    mode: "history",
    routes
});

export default router;