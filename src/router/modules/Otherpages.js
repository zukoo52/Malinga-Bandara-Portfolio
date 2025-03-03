export default[
  {
    path: "/",
    component: import("@/layouts/default.vue"),

    children: [
      {
        path: "/about",
        component: import("@/pages/About.vue"),
      },
      {
        path: "/Contacts",
        component: import("@/pages/Contects.vue"),
      },
      
      {
        path: "/Projects",
        component: import("@/pages/Projects.vue"),
      },
      {
        path: "/Education",
        component: import("@/pages/Education.vue"),
      },
      {
        path: "/Experience",
        component: import("@/pages/Experience.vue"),
      },
      {
        path: "/tech-stack",
        name: "TechStack",
        component: () => import("@/pages/TechStack.vue"),
      }
    ],
  },
];
