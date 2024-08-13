<template>
  <section>
    <div class="container row align-items justify-between">
      <div class="info-left q-mt-xl">
        <span class="text-white name-header">jasoncosta</span>
        <UiBoxPerfil style="margin-top: 157px;"/>
      </div>          
      <div class="info-right">
        <UiImageProfile />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiBoxPerfil from "~~/src/core/components/BoxPerfil.vue"; 
import UiImageProfile from "~~/src/core/components/ImagePerfil.vue"

</script>

<style lang="scss">

section {
  max-width: 1440px;
}

.container {
  width: 100%;
  position: relative;
}

.name-header {
  font-family: "Space Grotesk";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.444px;
}

.info-left {
  z-index: 2;
}

.info-right {
  z-index: 1;  
  position: relative;
  left: -40px;
}
</style>
