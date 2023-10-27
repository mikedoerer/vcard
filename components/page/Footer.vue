<script setup lang="ts">

</script>

<template>
    <footer class="page-footer">
        <h1 class="headline">Footer</h1>
    </footer>
</template>

<style scoped lang="scss">
@use "@/scss/list";
@use "@/scss/typography";
@use "@/scss/colors";

.headline {
    @include typography.get("headline3");
    color: colors.get("alert")
}
.page-footer {
    ul {
        @include list.reset;
    }
}
</style>