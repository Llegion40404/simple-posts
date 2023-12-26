import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Post } from "../Types/index";

export const usePostsStore = defineStore("posts", () => {
	const URL = "https://jsonplaceholder.typicode.com/posts";

	const posts = ref<Post[]>([]);

	async function getPosts() {
		let res = await axios.get(URL);
		posts.value = res.data;
	}
	return { posts, getPosts };
});
