<template>
  <a flat :href="props.link">{{props.text.toUpperCase()}}</a>
</template>

<script setup lang="ts">

  const props = withDefaults(defineProps<{
    text: string;
    link: string;
  }>(), {
    link: "#",
  });

</script>

<style scoped lang="scss">
a {
  width: auto;
  height: 38px;
  text-decoration: none;  
  color: var(--White, #fff);
  font-family: "Space Grotesk";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 2.286px;
  border-bottom: 2px solid #4EE1A0;
  padding-bottom: 10px;
}

a:hover {
    color: #4EE1A0;
}
</style>
