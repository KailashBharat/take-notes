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
  {
    description: "Hello, I'm some placeholder text!",
    id: "ewrar",
    title: "This is me",
  },
  {
    description:
      "testtesttesttesttestt esttestt esttestt esttesttesttest testtestt esttes ttestte sttest testt esttes tte stte sttes ttes ttest test test tes ttes tt esttes tt es tte stt es tt esttes tt est tes tt est t es ttest te stt est te stt est test te stt es ttes ttes t testt es ttes ttes ttestt est tes ttes tt est",
    id: "ewrar",
    title: "rtesete",
  },
  { description: "test", id: "ewrar", title: "rtesete" },
  {
    description: "Hello, I'm some placeholder text!",
    id: "ewrar",
    title: "This is me",
  },
  { description: "test", id: "ewrar", title: "rtesete" },
  {
    description:
      "testtesttesttesttestt esttestt esttestt esttesttesttest testtestt esttes ttestte sttest testt esttes tte stte sttes ttes ttest test test tes ttes tt esttes tt es tte stt es tt esttes tt est tes tt est t es ttest te stt est te stt est test te stt es ttes ttes t testt es ttes ttes ttestt est tes ttes tt est",
    id: "ewrar",
    title: "rtesete",
  },
  { description: "test", id: "ewrar", title: "rtesete" },
  {
    description:
      "testtesttesttesttestt esttestt esttestt esttesttesttest testtestt esttes ttestte sttest testt esttes tte stte sttes ttes ttest test test tes ttes tt esttes tt es tte stt es tt esttes tt est tes tt est t es ttest te stt est te stt est test te stt es ttes ttes t testt es ttes ttes ttestt est tes ttes tt est",
    id: "ewrar",
    title: "rtesete",
  },
  {
    description: "Hello, I'm some placeholder text!",
    id: "ewrar",
    title: "This is me",
  },
  { description: "test", id: "ewrar", title: "rtesete" },
  {
    description:
      "testtesttesttesttestt esttestt esttestt esttesttesttest testtestt esttes ttestte sttest testt esttes tte stte sttes ttes ttest test test tes ttes tt esttes tt es tte stt es tt esttes tt est tes tt est t es ttest te stt est te stt est test te stt es ttes ttes t testt es ttes ttes ttestt est tes ttes tt est",
    id: "ewrar",
    title: "rtesete",
  },
  { description: "test", id: "ewrar", title: "rtesete" },
  {
    description:
      "testtesttesttesttestt esttestt esttestt esttesttesttest testtestt esttes ttestte sttest testt esttes tte stte sttes ttes ttest test test tes ttes tt esttes tt es tte stt es tt esttes tt est tes tt est t es ttest te stt est te stt est test te stt es ttes ttes t testt es ttes ttes ttestt est tes ttes tt est",
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
  flex-wrap: wrap;
  gap: 20px;
  min-height: 400px;
  justify-content: center;
  padding: 50px 0;
  box-sizing: border-box;
  overflow: auto;
}
</style>
