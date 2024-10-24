import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('pages/DashbordPage.vue'),
      },
      {
        path: '/stats',
        component: () => import('pages/Stats/StatsPage.vue'),
      },
      {
        path: '/messeges',
        component: () => import('pages/Messeges/MessegesPage.vue'),
      },
      {
        path: '/counter-readings',
        component: () => import('pages/CounterPage.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('pages/Log/LoginPage.vue'),
  },
  {
    path: '/sign-up',
    component: () => import('pages/Log/SignUpPage.vue'),
  },
  {
    path: '',
    component: () => import('pages/Welcome/WelcomePage.vue'),
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
