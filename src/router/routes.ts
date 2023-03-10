import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    // redirect: 'invoice',
    children: [
      {
        path: '',
        children: [],
        redirect: 'invoice',
        component: () => import('pages/IndexPage.vue')
      },
      { path: 'invoice', component: () => import('pages/InvoicePage.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
