<script setup lang="ts">
import Home from "@/views/Home.vue";
import { v4 as id } from "uuid";
import { onMounted } from "vue";

onMounted(() => {
  main();
});

function main() {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    const newUserId = id();
    localStorage.setItem("userId", newUserId);
  }
}
</script>

<template>
  <div>
    <Home />
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
