<template>
  <div class="cards-container">
    <NoteCard
      v-for="note in notes"
      :title="note.title"
      :description="note.description"
      :key="note.id"
    />
  </div>
</template>
<script lang="ts" setup>
import { Note } from "@/types";
import NoteCard from "./NoteCard.vue";

const notes: Note[] = [
  { description: "test", id: "ewrar", title: "rtesete" },
  { description: "test", id: "ewrar", title: "rtesete" },
  {
    description:
      "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
    id: "ewrar",
    title: "rtesete",
  },
];
</script>
<style lang="scss" scoped>
.cards-container {
  background-color: #eeeef1;
  width: 100vw;
  display: flex;
  gap: 20px;
  min-height: 400px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
