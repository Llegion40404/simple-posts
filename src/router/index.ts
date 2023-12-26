import { createRouter, createWebHistory } from "vue-router";
import AuthLayoutVue from "../layouts/AuthLayout.vue";

export const isAuthenticated = () => {
	return localStorage.getItem("token") || false;
};

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/Home.vue"),
		},
		{
			path: "/posts",
			name: "posts",
			component: () => import("../views/Posts.vue"),
			meta: {
				auth: true,
			},
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../views/Login.vue"),
			meta: {
				layout: AuthLayoutVue,
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth) {
		if (isAuthenticated()) {
			return next();
		} else {
			alert("Log in please!");
			next(from.path);
		}
	} else next();
});
export default router;
