<script setup lang="ts">
import { useUsersStore } from "@/stores/users";
import { ref } from "vue";

const email = ref("");
const pass = ref("");
const { loginUser } = useUsersStore();
</script>

<template>
	<div class="flex items-center justify-center h-screen pb-20">
		<section class="flex flex-col gap-5 p-10 bg-white rounded text-white w-1/5">
			<label for="email">
				<p class="text-black text-lg">Email</p>
				<input
					v-model="email"
					class="block px-3 py-2 bg-blue-400 w-full outline-none rounded-sm"
					type="text"
					name="email" />
			</label>
			<label for="pass">
				<p class="text-black text-lg">Password</p>
				<input
					v-model="pass"
					class="block px-3 py-2 bg-blue-400 w-full outline-none rounded-sm"
					type="password"
					name="pass" />
			</label>
			<button
				@click="loginUser(email, pass)"
				class="p-4 self-end w-1/3 bg-zinc-800 rounded">
				Login
			</button>
		</section>
	</div>
</template>
