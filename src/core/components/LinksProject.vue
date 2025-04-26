<template>

    <div class="full-width full-height row items-center">
        <div class="full-width text-center">
            <p v-if="props.url !== undefined">
                <UiButton text="View Project" :link="props.url" />
            </p>
            <p v-if="props.git !== undefined" :class="`${props.url !== undefined ? 'q-mt-xl' : ''}`">
                <UiButton text="View Code" :link="props.git" />
            </p>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { ILink } from "~~/server/Projects/IProjects";
import UiButton from "./Button.vue";


const props = defineProps<ILink>();
</script>

<style scoped lang="scss">
a {
  width: auto;
  height: 38px;
  text-decoration: none;  
  color: var(--White, #fff);
  font-family: "Space Grotesk";
  text-transform: uppercase;
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