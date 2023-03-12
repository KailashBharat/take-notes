<template>
  <TopBar />
  <NotesContainer />
  <CreateNoteContainer />
  <BottomBar />
</template>
<script lang="ts" setup>
import TopBar from "@/components/main/TopBar.vue";
import BottomBar from "@/components/main/BottomBar.vue";
import NotesContainer from "@/components/notes/NotesContainer.vue";
import CreateNoteContainer from "@/components/notes/CreateNoteContainer.vue";
</script>
<style lang="scss" scoped></style>
