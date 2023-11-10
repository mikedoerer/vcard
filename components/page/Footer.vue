<script setup lang="ts"></script>

<template>
  <footer class="page-footer">
    <ul>
      <li>
        <h1 class="headline">Footer</h1>
      </li>
    </ul>
  </footer>
</template>

<style scoped lang="scss">
@use "@/layout";

.headline {
  @include layout.typography-get("headline3", footer);
  color: layout.colors-get("primary", footer);
}

.page-footer {
  ul {
      margin-bottom: 2px;
    @include layout.list-reset;
  }
}
</style>
