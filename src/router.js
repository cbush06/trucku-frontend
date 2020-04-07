import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import store from "@/store";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: "home",
            path: "/",
            component: Home,
            // children: [
            //     // {
            //     //     name: 'changeRequests',
            //     //     path: '/mwslin/:id/change-requests',
            //     //     component: () => import('./components/ChangeRequest.vue')
            //     // }
            // ]
        },
        {
            name: "profile",
            path: '/profile',
            component: Profile
        }

    ]
});

router.beforeEach(async (to, from, next) => {
    let currentUser = store.getters["session/getCurrentUser"];
    if (_.isNil(currentUser) || _.isNil(currentUser.email)) {
        await store.dispatch("session/login");
        currentUser = store.getters["session/getCurrentUser"];
    }

    if (to.name !== "accountRequest" && (_.isNil(currentUser) || _.isNil(currentUser.email) || !currentUser.enabled)) {
        next({ name: "accountRequest" });
    } else {
        next();
    }
});

export default router;
