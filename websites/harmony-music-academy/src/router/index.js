import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Programs from '../views/Programs.vue'
import Instructors from '../views/Instructors.vue'
import Schedule from '../views/Schedule.vue'
import Recitals from '../views/Recitals.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/programs', name: 'Programs', component: Programs },
  { path: '/instructors', name: 'Instructors', component: Instructors },
  { path: '/schedule', name: 'Schedule', component: Schedule },
  { path: '/recitals', name: 'Recitals', component: Recitals },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/admin', name: 'Admin', component: Admin }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
