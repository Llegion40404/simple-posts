<script setup lang="ts">
import router, { isAuthenticated } from "../router";
const logout = () => {
	localStorage.removeItem("token");
	router.push("/login");
};
</script>

<template>
	<div>
		<nav class="bg-emerald-700 text-white text-2xl font-semibold">
			<div class="container py-8 flex items-center justify-between">
				<div>
					<RouterLink class="mr-5" to="/">HOME</RouterLink>
					<RouterLink to="/posts">Posts</RouterLink>
				</div>
				<RouterLink
					@click="logout"
					class="px-4 py-2 bg-zinc-800 rounded"
					to="/login"
					>{{ isAuthenticated() ? "Log out" : "Log in" }}</RouterLink
				>
			</div>
		</nav>
		<main>
			<div class="container text-white py-5 text-xl">
				<RouterView></RouterView>
			</div>
		</main>
	</div>
</template>
