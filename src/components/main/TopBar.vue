<template>
  <div class="container">
    <img src="../../assets/logo.svg" alt="" class="logo" />
    <h2 class="title">Bootmine</h2>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.container {
  position: relative;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  width: 100vw;
}

.title {
  text-transform: uppercase;
  color: white;
}
</style>
