<template>
  <q-layout view="hHh lpR fFf" class="bg-dark-navy">
    <q-page-container>
      <!-- <q-img class="decor-left" :src="img"/> -->
       <div class="decor-left"></div>

       <div class="row justify-center">
          <nuxt-page></nuxt-page>
       </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from "vue";

const img = computed(() => new URL(`../assets/icon/pattern-rings.svg`, import.meta.url));
</script>

<style scoped lang="scss">
.q-layout {
  background-color: $dark-navy;
}

.decor-left {
  background-image: url('../../core/assets/icon/pattern-rings.svg');
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-position: -100px 166px;
}
</style>
