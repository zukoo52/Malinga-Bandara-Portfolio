export default [
  {
    path: "/",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/pages/Home.vue"),
      },
    ],
  },
];
