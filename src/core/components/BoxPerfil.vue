<template>
  <div class="box">
    <h1 class="title q-ma-none"> Nice to meet you! 
        I'm 
        <span class="highlight">
            Jason Costa.
        </span>
    </h1>

    <p class="text">
      Based in Brazil, I'm a front-end developer passionate about creating accessible web applications that users love.
    </p>
    <div 
      class="row items-center q-mt-md q-pr-lg"
      :class="`${$q.screen.lt.md ? 'justify-center' : 'justify-start'}`"
    >

      <UiButtonContacMe />

      <!-- <q-icon :name="`img: ${iconCircle}`" /> -->
    </div>
    
  </div>
</template>

<script setup lang="ts">
import UiButtonContacMe from "./ButtonContactMe.vue";

const iconCircle = new URL("../assets/icon/pattern-circle.svg", import.meta.url);
</script>

<style scoped lang="scss">
%text {
  color: var(--White, #fff);
  font-feature-settings: "liga" off, "clig" off;
  font-family: "Space Grotesk";
}
.box {
  width: 100%;
  height: 303px;
}

.title {
  @extend %text;
  font-size: 88px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px; /* 100% */
  letter-spacing: -2.5px;
  position: relative;
  z-index: 2;
}

.text {
  @extend %text;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  max-width: 445px;
  margin-top: 43px;
  z-index: 2;
}

.highlight {
    text-decoration: underline;
    text-decoration-color: var(--Green, #4EE1A0);
}

.q-icon {
  width: 129px;
  height: 129px;
  z-index: 2;
}

@media (max-width: $breakpoint-sm) {
  .title {
    text-align: center;
    font-size: 40px;
    line-height: 40px;
  }
  .text {
    text-align: center;
    max-width: 100%;
  }
} 
</style>
