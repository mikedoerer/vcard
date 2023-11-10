<script setup lang="ts"></script>

<template>
  <header class="page-header">
    <ul>
      <li>
        <NuxtLink href="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink href="/qr">QR</NuxtLink>
      </li>
    </ul>
    <h1>Test</h1>
  </header>
</template>

<style scoped lang="scss">
@use "@/layout/list";

.page-header {
  ul {
    @include list.reset;
  }
}
</style>
