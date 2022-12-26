import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../pages/Posts/Posts.vue";
import User from "../pages/User/User.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "posts",
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
    },
    {
      path: "/user",
      name: "user",
      component: User,
    },
  ],
});

export default router;
