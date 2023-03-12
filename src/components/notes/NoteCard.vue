<template>
  <div :class="{ 'bg-dark': edit }"></div>
  <div
    class="card-container"
    v-if="edit"
    :class="{ brighten: updatedNote._id == props.id }"
  >
    <input class="title" v-model="updatedNote.title" />
    <hr />
    <textarea
      name="desciption"
      cols="30"
      rows="10"
      v-model="updatedNote.description"
    >
    </textarea>
    <div class="icons">
      <button class="save" @click="() => handleUpdate()">Save</button>
      <button class="cancel" @click="edit = false">Cancel</button>
    </div>
  </div>
  <div class="card-container" v-else>
    <h4 class="title">{{ title }}</h4>
    <hr />
    <div class="description">{{ description }}</div>
    <div class="icons">
      <img
        src="../../assets/bin.svg"
        alt="delete icon"
        @click="removeNoteId = id"
      />
      <img src="../../assets/pencil.svg" alt="edit icon" @click="edit = true" />
    </div>
  </div>
  <Modal
    :title="title"
    v-if="removeNoteId == id"
    @remove="(e:boolean) => handleRemoval(e)"
  />
</template>
<script lang="ts" setup>
import { ref, watch, inject } from "vue";
import { deleteNote, updateNote } from "@/api";
import Modal from "@/components/main/Modal.vue";
import { Events } from "@/types";
import { Emitter } from "mitt";

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});
const emits = inject("emitter") as Emitter<Events>;

const edit = ref(false);
const removeNoteId = ref("");
const updatedNote = ref({
  title: props.title,
  description: props.description,
  _id: "",
});

watch(edit, () => {
  updatedNote.value._id = edit.value ? props.id : "";
});

async function handleRemoval(val: boolean) {
  if (val) {
    await deleteNote(removeNoteId.value);
  }
  removeNoteId.value = "";
  emits.emit("rerenderNotes", true);
}

async function handleUpdate() {
  const note = await updateNote(updatedNote.value);

  if (note) {
    edit.value = false;
    emits.emit("rerenderNotes", true);
  }
}
</script>
<style lang="scss" scoped>
.card-container {
  background: #ffffc9;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12),
    0px 3px 4px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14);
  border-radius: 5px;

  padding: 20px;
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: min-content;

  &:hover {
    img {
      visibility: visible;
    }
  }
}

hr {
  width: 100%;
  color: #ebebb0;
  border: 1px solid #ebebb0;
}

.description {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #767653;
}

.title,
input {
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #767653;
}

button {
  cursor: pointer;
  padding: 10px 20px;
  background: #000000;
  border-radius: 5px;
  color: white;
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

input {
  border: none;
  background: inherit;

  &:focus {
    outline: none;
  }
}

.icons {
  width: 100%;
  margin-top: 15px;
  text-align: right;
  position: relative;
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 15px;

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    visibility: hidden;
  }
}
</style>
