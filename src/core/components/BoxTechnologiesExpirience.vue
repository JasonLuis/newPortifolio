<template>
  <div class="box">
    <h1 class="q-ma-none">{{ props.technologie }}</h1>
    <span>{{ props.exprience }} Years Experience</span>
  </div>
</template>

<script setup lang="ts">



  const props = defineProps<{
    technologie: string,
    exprience: number,
  }>();

</script>

<style scoped lang="scss">
%text {
  color: var(--White, #fff);
  font-feature-settings: "liga" off, "clig" off;
  font-family: "Space Grotesk";
  font-style: normal;
}

.box {
  width: 345px;
  height: 98px;
}

h1 {
  @extend %text;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -1.5px;
}

span {
    @extend %text;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
}
</style>
