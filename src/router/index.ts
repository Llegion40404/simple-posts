import AppVue from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";

export const isAuthenticated = () => {
	return localStorage.getItem("token") || false;
};

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "app",
			component: AppVue,
			children: [
				{
					path: "/",
					name: "home",
					component: () => import("../views/Home.vue"),
					children: [
						{
							path: "/",
							name: "home",
							component: () => import("../views/Main.vue"),
						},
						{
							path: "/posts",
							name: "posts",
							component: () => import("../views/Posts.vue"),
							meta: { auth: true },
						},
					],
				},
			],
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../views/Login.vue"),
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
