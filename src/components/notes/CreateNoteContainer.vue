<template>
  <div class="cards-container">
    <div class="title">New note</div>
    <CreateNoteCard />
  </div>
</template>
<script lang="ts" setup>
import CreateNoteCard from "./CreateNoteCard.vue";
</script>
<style lang="scss" scoped>
.cards-container {
  width: 100vw;
  background: #e3e3e7;
  min-height: 400px;
  justify-content: center;
  padding: 50px;
  box-sizing: border-box;
}

.title {
  font-weight: 600;
  font-size: 26px;
  line-height: 33px;
  color: #717171;
  margin-bottom: 20px;
}

@media screen and (max-width: 450px) {
  .cards-container {
    justify-content: flex-start;
    padding: 20px;
  }
}
</style>
