<template>
  <div class="bg-dark"></div>
  <div class="inner-container brighten">
    <h1 class="title">
      Are you sure you want to remove
      <span class="note-title"
        ><em>{{ title }}</em></span
      >?
    </h1>

    <p class="subtitle">This action cannot be undone</p>
    <div class="buttons">
      <button @click="emits('remove', false)">Cancel</button>
      <ClipLoader class="red loader" v-if="loading" size="10px" color="#FFFFFF" />
      <button class="red" @click="() => removeNote()" v-else>Remove</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ClipLoader } from "vue3-spinner";
import { ref } from "vue";

defineProps({ title: String });
const emits = defineEmits(["remove"]);
const loading = ref(false);

const removeNote = () => {
  loading.value = true;
  emits("remove", true);
};
</script>
<style lang="scss" scoped>
.inner-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 150px;

  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 20px 50px;

  display: flex;
  flex-direction: column;
  place-items: center;
}

.red {
  background: #ff5252 !important;
}

.title {
  font-weight: 600;
  font-size: 26px;
  line-height: 33px;
  color: #717171;
}

.subtitle {
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #aaaaaa;
  margin-top: -10px;
  flex-grow: 1;
}

.buttons {
  width: 100%;
  align-items: flex-end;
  display: flex;
  justify-content: space-around;

  button, .loader {
    background: #717171;
    border-radius: 5px;
    padding: 10px 25px;
    text-transform: uppercase;
    color: white;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
}
</style>
