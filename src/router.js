import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import store from "@/store";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            name: "home",
            path: "/",
            component: Home,
            children: [
                // {
                //     name: 'changeRequests',
                //     path: '/mwslin/:id/change-requests',
                //     component: () => import('./components/ChangeRequest.vue')
                // }
            ]
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    let currentUser = store.getters["session/getCurrentUser"];
    if (_.isNil(currentUser.principal) || _.isNil(currentUser.principal.email)) {
        await store.dispatch("session/login");
        currentUser = store.getters["session/getCurrentUser"];
    }

    if (to.name !== "accountRequest" && (_.isNil(currentUser.principal) || _.isNil(currentUser.principal.email) || !currentUser.principal.enabled)) {
        next({ name: "accountRequest" });
    } else {
        next();
    }
});

export default router;
