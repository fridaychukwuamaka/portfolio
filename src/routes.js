import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import Experience from "./components/Experience.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/work", component: Work },
  { path: "/experience", component: Experience },
  { path: "*", redirect: '/' },
];
