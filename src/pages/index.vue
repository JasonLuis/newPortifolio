<template>
  <div class="decor-left"></div>
  <main class="q-px-auto">
    <section>
      <div class="container row align-items justify-between">
        <div class="info-left q-mt-xl">
          <span class="text-white name-header">jasoncosta</span>
          <UiBoxPerfil style="margin-top: 157px" />
        </div>
        <div class="info-right">
          <UiImageProfile />
        </div>
      </div>
    </section>
    <!-- <div class="decor-right"></div> -->
    <hr style="margin-top: 102px" />

    <section>
      <div class="row align-items justify-between">
        <div class="col-6 col-sm-4 q-mt-xl" v-for="(skil, count) in skils">
          <BoxTechnologiesExpirience :exprience="skil.exprience" :technologie="skil.technologie" :key="count"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import UiBoxPerfil from "~~/src/core/components/BoxPerfil.vue";
import UiImageProfile from "~~/src/core/components/ImagePerfil.vue";

const skils = [
  {
    technologie: "HTML",
    exprience: 4
  },
]

</script>

<style lang="scss">
section {
  max-width: 1112px;
}

.container {
  width: 100%;
  flex-wrap: nowrap;
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

.decor-left {
  background-image: url("../core/assets/icon/pattern-rings.svg");
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-position: -100px 175px;
}
</style>
