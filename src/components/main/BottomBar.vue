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
defineProps({ totalNotes: { type: Number, required: true } });
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  bottom: 0;
  left: 0;
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
