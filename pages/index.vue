<script setup lang="ts"></script>

<template>
  <div>
    <div class="bodytext">
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h4>Headline 4</h4>
      <h5>Headline 5</h5>
      <h6>Headline 6</h6>
      <p>Copy 1</p>
      <p><small>Small</small></p>
    </div>
    <div class="test">Test</div>
  </div>
</template>

<style scoped lang="scss">
@use "@/layout";

.test {
    @include layout.colors-set(primary, red);
    color: layout.colors-get(primary, home);
  @include layout.grid-container;
}
</style>
