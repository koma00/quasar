
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Profile.vue'), meta: { requiresAuth: true } },
      { path: 'profile/:id', component: () => import('pages/Profile.vue'), meta: { requiresAuth: true } },
      { path: 'friends/', component: () => import('pages/Friends.vue'), meta: { requiresAuth: true } },
      { path: 'message/', component: () => import('pages/Message.vue'), meta: { requiresAuth: true } },
      { path: 'chat/:id', component: () => import('pages/Chat.vue'), meta: { requiresAuth: true } },
      { path: '/settings', component: () => import('pages/Error404.vue'), meta: { requiresAuth: true } },
      { path: '/exit', component: () => import('pages/Error404.vue'), meta: { requiresAuth: true } },
      { path: '/help', component: () => import('pages/Error404.vue'), meta: { requiresAuth: 'all' } }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue'), meta: { requiresAuth: false } }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Register.vue'), meta: { requiresAuth: false } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Error404.vue'), meta: { requiresAuth: true } }
    ]
  }
]

export default routes
