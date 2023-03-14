<template>
  <div class="cards-container loader" v-if="loading">
    <ClipLoader />
  </div>
  <div class="cards-container" v-else>
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

import { ClipLoader } from "vue3-spinner";

const notes = ref<Note[]>([]);
const loading = ref(false);
const emitter = inject("emitter") as Emitter<Events>;

onMounted(async () => {
  await handleUpdates();

  emitter.on("rerenderNotes", async () => {
    handleUpdates();
  });
});

async function handleUpdates() {
  loading.value = true;
  notes.value = await getNotes();
  emitter.emit("totalNotes", notes.value.length);
  loading.value = false;
}
</script>
<style lang="scss" scoped>
.cards-container {
  background-color: #eeeef1;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 15px 10px;
  min-height: 400px;
  justify-content: center;
  padding: 50px 20px;
  box-sizing: border-box;
  overflow: auto;
}

@media screen and (max-width: 450px) {
  .cards-container{
    justify-content: flex-start;
    gap: 15px 0;
    padding: 20px;
  }
}
</style>
