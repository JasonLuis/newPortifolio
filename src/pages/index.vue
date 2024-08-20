<template>
  <div class="decor-left"></div>
  <div class="decor-right"></div>
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

    <section class="row">
      <div class="row align-items justify-between">
        <!-- <div class="col-6 col-sm-4 q-mt-xl" v-for="(skil, count) in skils">
          
        </div> -->
        <UiCardTechlogiesExpirience />
      </div>
    </section>
    
  </main>
  
</template>

<script setup lang="ts">
import UiBoxPerfil from "~~/src/core/components/BoxPerfil.vue";
import UiImageProfile from "~~/src/core/components/ImagePerfil.vue";
import UiCardTechlogiesExpirience from "~~/src/core/components/CardTechlogiesExpirience.vue";

const skils = [
  {
    technologie: "HTML",
    exprience: 11
  },
  {
    technologie: "CSS",
    exprience: 11
  },
  {
    technologie: "Javascript",
    exprience: 4
  },
  {
    technologie: "Typescript",
    exprience: 4
  },
  {
    technologie: "VueJS",
    exprience: 3
  },
  {
    technologie: "Java",
    exprience: 2
  },
  {
    technologie: "Kotlin",
    exprience: 1
  },
  {
    technologie: "Spring Boot",
    exprience: 2
  },
  {
    technologie: "Python",
    exprience: 1
  },
  {
    technologie: "OpenCV",
    exprience: 1
  },
  {
    technologie: "C#",
    exprience: 1
  },
  {
    technologie: "Aps.NET",
    exprience: 1
  },
  {
    technologie: "Blazor",
    exprience: 1
  },
]

</script>

<style lang="scss">

%decor {
  background-image: url("../core/assets/icon/pattern-rings.svg");
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
}

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
  @extend %decor;
  height: 100vh;
  background-position: -100px 175px;
}

.decor-right {
  @extend %decor;
  min-height: 100vh;
  height: 100%;
  background-position: calc(100% + 100px) 1077px;
}
</style>
