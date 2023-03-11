<template>
  <TopBar />
  <NotesContainer />
  <BottomBar :total-notes="0" />
</template>
<script lang="ts" setup>
import TopBar from "@/components/main/TopBar.vue";
import BottomBar from "@/components/main/BottomBar.vue";
import NotesContainer from "@/components/notes/NotesContainer.vue";
</script>
<style lang="scss" scoped></style>
