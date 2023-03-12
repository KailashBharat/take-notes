<template>
  <div class="container">
    <div class="left-container">
      &copy; Bootmine {{ new Date().getFullYear() }}
    </div>
    <div class="right-container">
      <span class="total-notes">{{ totalNotes }}</span>
      {{ totalNotes == 1 ? "note" : "notes" }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject, onMounted, ref } from "vue";
import { Emitter } from "mitt";
import { Events } from "@/types";

const emitter = inject("emitter") as Emitter<Events>;
const totalNotes = ref(0);

onMounted(() => {
  emitter.on("totalNotes", (val: number) => (totalNotes.value = val));
});
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  height: 75px;

  div {
    font-size: 22px;
    flex-grow: 1;
    color: #9b9b9b;
  }
}

.left-container {
  text-align: left;
  padding-left: 10%;
}

.right-container {
  text-align: right;
  padding-right: 10%;

  .total-notes {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 33px;
  }
}
</style>
