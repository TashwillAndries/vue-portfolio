import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/HomeContainer.vue";
import About from "../views/AboutME/AboutContainer.vue";
import History from "../views/History/HistoryContainer.vue";
import Portfolio from "../views/Portfolio/PortfolioContainer.vue";
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
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
