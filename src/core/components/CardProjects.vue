<template>
  <q-card class="image-container no-border-radius no-box-shadow" @mouseover="isHovered = true"
    @mouseleave="isHovered = false">
    <div class="image-overlay" v-if="isHovered"></div>

    <img class="image" :src="img" alt="example image" />

    <template v-if="$q.screen.xl || $q.screen.lg || $q.screen.md">
      <transition name="fade" mode="out-in">
        <UiLinksProject :git-front="link.gitFront" :git-back="link.gitBack" :url="link.url" v-if="isHovered" class="overlay-button" key="links-project" />
      </transition>
    </template>


    <q-card-section class="q-pa-none q-mt-md">
      <div class="title-project">{{ props.name }}</div>
      <div class="tecnologies">
        <div v-for="(tecnologies, count) in props.tecnologies" :key="count">{{ tecnologies }}</div>
      </div>
    </q-card-section>
    <q-card-section class="q-pa-none q-mt-md" v-if="!$q.screen.xl && !$q.screen.lg && !$q.screen.md">
      
      <UiButton text="View Project" :link="props.link.url" />
      <UiButton text="View Code" :link="props.link.gitFront" class="q-ml-lg"/>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UiLinksProject from "./LinksProject.vue";
import UiButton from "./Button.vue";
import type { IProject } from "~/core/entities/IProjects";

const props = defineProps<IProject>();


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
  width: 540px;
  height: 487px;
  background-color: transparent;

  &:deep(.image) {
    max-height: 400px;
    width: 100%;
    height: 400px;
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
    background-color: rgba(0, 0, 0, 0.5);
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
    gap: 16px;
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

@media (max-width: $breakpoint-lg) {
  .q-card {
    width: 420px;
    height: 400px;
    &:deep(.image) {
      max-height: 320px;
    }
    &:deep(.image-overlay) {
      max-height: 320px;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .q-card {
    width: 345px;
    height: 400px;
    &:deep(.image) {
      max-height: 253px;
    }
  }
  .image-overlay {
    display: none;
  }
}


</style>
