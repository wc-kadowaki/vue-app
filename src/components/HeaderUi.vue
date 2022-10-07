<script setup>
import { ref } from "vue";

const title = ref("タイトル");
</script>

<template>
  <header class="headerUi">
    <h1 class="headerUi__title">{{ title }}</h1>
  </header>
</template>

<style lang="scss" scoped>
.headerUi {
  &__title {
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
