<script setup lang="ts">
import { usePostsStore } from "@/stores/posts";
import { storeToRefs } from "pinia";
const { posts } = storeToRefs(usePostsStore());
</script>

<template>
	<div>
		<div class="container">
			<h1 class="text-3xl mb-10">Posts</h1>
			<main class="grid grid-cols-3 capitalize gap-5">
				<div v-for="post in posts" class="p-5 rounded-sm bg-zinc-800">
					<h2 class="text-2xl mb-5">{{ post.title }}</h2>
					<p>{{ post.body }}</p>
				</div>
			</main>
		</div>
	</div>
</template>
