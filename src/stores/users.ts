import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { User } from "../Types/index";

export const useUsersStore = defineStore("users", () => {
	const router = useRouter();
	const URL = "https://jsonplaceholder.typicode.com/users";
	const users = ref<User[]>([]);

	async function getUsers() {
		let res = await axios.get(URL);
		users.value = res.data;
	}
	function loginUser(email: string, pass: string) {
		const usr = users.value.find((u) => u.email === email);
		if (pass === usr?.username) {
			localStorage.setItem(
				"token",
				String(Math.round(Math.random() * 6848745))
			);
			router.push("/");
			return;
		}
		return;
	}
	return { users, loginUser, getUsers };
});
