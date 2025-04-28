<template>
  <div class="box">
    <h1 class="title q-ma-none">Hello, nice to meet you!
      I'm
      <span class="highlight">
        Jason Costa.
      </span>
    </h1>

    <p class="text">
      I'm a Brazilian fullstack developer, born and raised in Cotia, São Paulo.
      Passionate about building accessible and user-friendly web applications, I strive to create digital experiences
      that people love.
    </p>
    <div class="row items-center q-mt-md" :class="`${$q.screen.xs ? 'justify-center' : 'justify-start'}`">
      <UiButton text="Contact Me" @onClick="handleClick" />

    </div>

  </div>
</template>

<script setup lang="ts">
import UiButton from "./Button.vue";

const emit = defineEmits(['onClick']);

const handleClick = () => {
  emit('onClick');
};

</script>

<style scoped lang="scss">
%text {
  color: var(--White, #fff);
  font-feature-settings: "liga" off, "clig" off;
  font-family: "Space Grotesk";
}

.box {
  width: 100%;
  height: auto;
}

.title {
  @extend %text;
  font-size: 88px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px;
  /* 100% */
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
  margin-top: 40px;
  position: relative;
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

@media screen and (max-width: $breakpoint-md) {
  .title {
    font-size: 72px;
    line-height: 72px;
  }
}


@media (max-width: $breakpoint-xs) {
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
