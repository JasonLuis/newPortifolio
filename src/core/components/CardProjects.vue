<template>
  <q-card
    class="image-container no-border-radius no-box-shadow"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="image-overlay" v-if="isHovered"></div>

    <img class="image" :src="img" alt="example image" />

    <transition name="fade" mode="out-in">
      <UiLinksProject
        v-if="isHovered"
        class="overlay-button"
        key="links-project"
      />
    </transition>

    <q-card-section class="q-pa-none q-mt-md">
      <div class="title-project">{{ props.name }}</div>
      <div class="tecnologies">
        <div v-for="(tecnologies, count) in props.tecnologies" :key="count">{{ tecnologies }}</div> 
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UiLinksProject from "./LinksProject.vue";

const props = defineProps<{
  img: string;
  name: string;
  tecnologies: Array<string>;
  links: Array<{
    github: string;
    url: string;
  }>;
}>();


const isHovered = ref<boolean>(false);

const img = computed(() => {
  return new URL(props.img, import.meta.url).href;
});



</script>

<style scoped lang="scss">
%text {
  color: var(--White, #fff);
  font-feature-settings: "liga" off, "clig" off;
  font-family: "Space Grotesk";
  text-transform: uppercase;
}

.q-card {
  position: relative;
  display: inline-block;
  width: 545px;
  height: 487px;
  background-color: transparent;
  &:deep(.image) {
    max-height: 400px;
    width: 100%;
    height: 100%;
    display: block;
    transition: filter 0.3s ease;
  }
  &:deep(.image-overlay) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 400px;
    background-color: rgba(0, 0, 0, 0.5); /* Cor de escurecimento */
    z-index: 1;
  }
}

.q-card__section {
  @extend %text;
  &:deep(.title-project) {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
  &:deep(.tecnologies) {
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    line-height: 28px;
    display: flex;
    gap: 8px;
  }
}

.overlay-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
