import ProjectsLayout from '@/modules/projects/layouts/ProjectsLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'projects' },
      component: ProjectsLayout,
      children: [
        {
          path: '/projects',
          name: 'projects',
          component: () => import('@/modules/projects/pages/ProjectsPage.vue'),
        },

        {
          path: '/projects/:id',
          props: true,
          name: 'projectDetails',
          component: () => import('@/modules/projects/pages/ProjectDetails.vue'),
        },
      ],
    },
  ],
});

export default router;
