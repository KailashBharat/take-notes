<template>
  <div class="cards-container">
    <NoteCard
      v-for="note in notes"
      :title="note.title"
      :description="note.description"
      :id="note._id"
      :key="note._id"
    />
  </div>
</template>
<script lang="ts" setup>
import { Note } from "@/types";
import { getNotes } from "@/api";
import { onMounted, ref, inject } from "vue";
import NoteCard from "./NoteCard.vue";
import { Events } from "@/types";
import { Emitter } from "mitt";

const notes = ref<Note[]>([]);
const emitter= inject("emitter") as Emitter<Events>;

onMounted(async () => {
  await handleUpdates();

  emitter.on("rerenderNotes", async () => {
    handleUpdates();
  });
});

async function handleUpdates() {
  notes.value = await getNotes();
  emitter.emit("totalNotes", notes.value.length)
}

</script>
<style lang="scss" scoped>
.cards-container {
  background-color: #eeeef1;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  min-height: 400px;
  justify-content: center;
  padding: 50px 0;
  box-sizing: border-box;
  overflow: auto;
}
</style>
