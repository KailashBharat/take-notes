<template>
  <div :class="{ 'bg-dark': edit }"></div>
  <div
    class="card-container"
    v-if="edit"
    :class="{ brighten: updatedNote.id == props.id }"
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
      <button class="save">Save</button>
      <button class="cancel" @click="edit = false">Cancel</button>
    </div>
  </div>
  <div class="card-container" v-else>
    <h4 class="title">{{ title }}</h4>
    <hr />
    <div class="description">{{ description }}</div>
    <div class="icons">
      <img src="../../assets/bin.svg" alt="delete icon" />
      <img src="../../assets/pencil.svg" alt="edit icon" @click="edit = true" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const edit = ref(false);
const updatedNote = ref({
  title: props.title,
  description: props.description,
  id: "",
});

watch(edit, () => {
  updatedNote.value.id = edit.value ? props.id : "";
});
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

.brighten {
  z-index: 2;
}

.bg-dark {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
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
