import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Timer from "../views/Timer.vue";
import Register from "../views/Register.vue";
import Jobs from "../views/jobs/Job.vue";
import Job from "../views/jobs/JobDetails.vue";
import NotFound from "../views/404.vue";
import Animals from "../views/animals/Animals.vue";
import Refs from "../views/Refs.vue";
import Blog from "../views/Blog.vue";
import PostDetails from "../components/PostDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/timer",
    name: "Timer",
    component: Timer,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "Job",
    component: Job,
    props: true,
  },
  {
    path: "/animals",
    name: "Animals",
    component: Animals,
  },
  {
    path: "/refs",
    name: "Refs",
    component: Refs,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:id",
    name: "Blo",
    component: PostDetails,
    props: true,
  },
  // redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  // non-existing routes
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
