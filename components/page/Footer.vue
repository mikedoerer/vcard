<script setup lang="ts"></script>

<template>
  <footer class="page-footer">
    <h1 class="headline">Footer</h1>
  </footer>
</template>

<style scoped lang="scss">
@use "module/list";
@use "module/typography";
@use "module/colors";

.headline {
  @include typography.get("headline3");
  color: colors.get("alert");
}
.page-footer {
  ul {
    @include list.reset;
  }
}
</style>
