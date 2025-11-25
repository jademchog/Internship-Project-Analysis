/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const DashboardLayout = () => import('@/LayoutView.vue')
const HomePage = () => import('@/pages/Home.vue')
const Dashboard = () => import('@/pages/DashBoard.vue')
const Food = () => import('@/pages/Food.vue')
const Graphs = () => import('@/pages/Graphs.vue')
const DataTable = () => import('@/pages/DataTable.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: HomePage,
        },
        {
          path: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'food',
          component: Food,
        },
        {
          path: 'graphs',
          component: Graphs,
        },
        {
          path: 'table',
          component: DataTable,
        }
      ],
    },
  ],
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
