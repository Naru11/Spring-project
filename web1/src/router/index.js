import { createRouter, createWebHistory } from 'vue-router'
import pkIndexView from '../views/pk/pkIndexView.vue'
import recordIndexView from '../views/record/recordIndexView.vue'
import ranklistIndexView from '../views/ranklist/rankelistIndexView.vue'
import boxIndexView from '../views/user/bot/boxIndexView.vue'
import notFoundView from '../views/error/NotFound.vue'
const routes = [
  {
    path: "/",
    redirect: "/pk/",
    name:"home"
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: pkIndexView,
  },
  {
    path: "/record/",
    name: "record_index",
    component: recordIndexView,
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: ranklistIndexView,
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: boxIndexView,
  },
  {
    path: "/404/",
    name: "404_index",
    component: notFoundView,
  },
  {
    path: "/:catchall(.*)",
    redirect:"/404/"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
