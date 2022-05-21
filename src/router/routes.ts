// import ImtixonTopshirish from "../pages/imtixon-topshirish.vue";
// import indexVue from "../pages/index.vue";
// import OtmgaKirishBallari from "../pages/otmga-kirish-ballari.vue";

const routes = [
  {
    path: "/",
    component: () => import("../pages/index.vue"),
    name: "home-page",
  },
  {
    path: "/imtixon-topshirish",
    component: () => import("../pages/imtixon-topshirish.vue"),
    name: "imtixon-topshirish",
  },
  {
    path: "/otmga-kirish-ballari",
    component: () => import("../pages/otmga-kirish-ballari.vue"),
    name: "otmga-kirish-ballari",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/[...all].vue"),
  },
];
export default routes;
