<template>
  <client-only>
    <q-layout view="hHh lpR fFf">
      <q-page-container>
        <div class="row justify-center">
          <nuxt-page></nuxt-page>
        </div>
      </q-page-container>
    </q-layout>
  </client-only>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
body {
  background-color: $dark-navy;
}
</style>
