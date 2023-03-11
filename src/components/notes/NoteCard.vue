<template>
  <div class="card-container" v-if="edit">
    <input class="title" />
    <textarea name="desciption" id="" cols="30" rows="10"> </textarea>
    <div class="icons">
      <img src="../../assets/check.svg" alt="submit icon" />
      <img
        src="../../assets/cross.svg"
        alt="cancel icon"
        @click="edit = false"
      />
    </div>
  </div>
  <div class="card-container" v-else>
    <h4 class="title">{{ title }}</h4>
    <div class="description">{{ description }}</div>
    <div class="icons">
      <img src="../../assets/bin.svg" alt="delete icon" />
      <img src="../../assets/pencil.svg" alt="edit icon" @click="edit = true" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const edit = ref(false);
</script>
<style lang="scss" scoped>
.card-container {
  background: #ffffc9;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12),
    0px 3px 4px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14);
  border-radius: 5px;

  padding: 10px;
  width: 200px;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.description{
    
}

textarea {
  background-color: transparent;
  border: none;
  resize: none;
  box-sizing: border-box;
  overflow-y: scroll;

  &:focus {
    outline: none;
  }
}

.icons {
  width: 100%;
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 10px;
  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    visibility: hidden;
  }

  &:hover {
    img {
      visibility: visible;
    }
  }
}
</style>
