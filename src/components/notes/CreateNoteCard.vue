<template>
  <div class="card-container">
    <input class="title" v-model="note.title" placeholder="Your note title" />
    <hr />
    <textarea
      name="desciption"
      placeholder="Type your text here. Feel free to use markdown"
      id=""
      cols="30"
      rows="10"
      v-model="note.description"
    >
    </textarea>
    <div class="btn-container">
      <button @click="handleClick()">Add</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, inject } from "vue";
import { createNote } from "@/api";
import { Events } from "@/types";
import { Emitter } from "mitt";

const emitter = inject("emitter") as Emitter<Events>;
const note = ref({
  title: "",
  description: "",
});

async function handleClick() {
  const newNote = await createNote(note.value);

  if (newNote) {
    note.value.title = "";
    note.value.description = "";
    emitter.emit("rerenderNotes", true);
  }
}
</script>
<style lang="scss" scoped>
.card-container {
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12),
    0px 3px 4px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14);
  border-radius: 5px;

  padding: 20px;
  width: 55%;
  min-width: 200px;
  max-width: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: min-content;
}

hr {
  width: 100%;
  color: #ebebb0;
  border: 1px solid #efefef;
}

textarea {
  background-color: transparent;
  border: none;
  resize: none;
  box-sizing: border-box;
  overflow-y: auto;

  &:focus {
    outline: none;
  }
}

.description {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #767653;
}

input {
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #767653;
  border: none;

  &:focus {
    outline: none;
  }
}

.btn-container {
  text-align: right;
  button {
    padding: 10px 20px;
    color: white;
    background-color: #34a84a;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
}
</style>
