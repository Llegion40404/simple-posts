<script setup lang="ts">
import Default from "./layouts/Default.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
	<div>
		a little
		<component :is="route.meta?.layout ? route.meta?.layout : Default">
		</component>
	</div>
</template>
