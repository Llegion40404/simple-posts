<script setup lang="ts">
import { usePostsStore } from "@/stores/posts";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const { posts } = storeToRefs(usePostsStore());
const { getPosts } = usePostsStore();

onMounted(async () => {
	posts.value.length > 0 ? null : await getPosts();
});
</script>

<template>
	<div>
		<div class="container">
			<h1 class="text-3xl mb-10">Posts</h1>
			<main class="grid grid-cols-3 capitalize gap-5">
				<div v-if="posts.length == 0">
					<span class="loader"></span>
				</div>
				<div v-else v-for="post in posts" class="p-5 rounded-sm bg-zinc-800">
					<h2 class="text-2xl mb-5">{{ post.title }}</h2>
					<p>{{ post.body }}</p>
				</div>
			</main>
		</div>
	</div>
</template>

<style scoped>
.loader {
	position: absolute;
	top: 40%;
	left: 50%;
	right: 50%;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	border-top: 10px solid #198115;
	border-right: 10px solid transparent;
	animation: rotation 1s linear infinite;
}

@keyframes rotation {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
