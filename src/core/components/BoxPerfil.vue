<template>
  <div class="box">
    <h1 class="title q-ma-none"> Nice to meet you! </h1>
    <h1 class="title q-ma-none">
        I'm 
        <span>
            Jason Costa.
            <hr />
        </span>
    </h1>

    <p class="text">
      Based in Brazil, I'm a front-end developer passionate about creating accessible web applications that users love.
    </p>
    <div style="margin-top: 66px;">
      <UiButtonContacMe />
    </div>
    
  </div>
</template>

<script setup lang="ts">
import UiButtonContacMe from "./ButtonContactMe.vue";
</script>

<style scoped lang="scss">
%text {
  color: var(--White, #fff);
  font-feature-settings: "liga" off, "clig" off;
  font-family: "Space Grotesk";
}
.box {
  width: 706px;
  height: 303px;
}

.title {
  @extend %text;
  font-size: 88px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px; /* 100% */
  letter-spacing: -2.5px;
}

.text {
  @extend %text;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  max-width: 445px;
  margin-top: 43px;
}

hr {
    width: 492px;
    height: 6px;
    background: var(--Green, #4EE1A0);
    border: 0px;
    margin-top: -10px;
    margin-right: 70px;
}
</style>
