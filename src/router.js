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
            component: Home
        },
        {
            name: "profile",
            path: '/profile',
            component: Profile
            children: [
                // {
                //     name: 'changeRequests',
                //     path: '/mwslin/:id/change-requests',
                //     component: () => import('./components/ChangeRequest.vue')
                // }
            ]
        },
        {
            name: "describe-shipment",
            path: "/describe-shipment",
            component: () => import('@/views/DescribeShipment')
        }

    ]
});

router.beforeEach(async (to, from, next) => {
    let currentUser = store.getters["session/getCurrentUser"];
    if (_.isNil(currentUser) || _.isNil(currentUser.email)) {
        await store.dispatch("session/login");
        currentUser = store.getters["session/getCurrentUser"];
    }

    // if (to.name !== "accountRequest" && (_.isNil(currentUser.principal) || _.isNil(currentUser.principal.email) || !currentUser.principal.enabled)) {
    //     next({ name: "accountRequest" });
    // } else {
    //     next();
    // }
    next();
});

export default router;
