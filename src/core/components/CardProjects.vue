<template>
    <div class="image-container" @mouseover="isHovered = true" @mouseleave="isHovered = false">
      <!-- Adicione uma div de overlay para escurecer a imagem -->
      <div class="image-overlay" v-if="isHovered"></div>
      
      <img class="image" :src="img" alt="example image" />
      
      <transition name="fade" mode="out-in">
        <UiLinksProject v-if="true" class="overlay-button" key="links-project"/>
      </transition>
    </div>
  </template>
  
  <script setup lang="ts">
      import { ref } from 'vue';
      import UiLinksProject from "./LinksProject.vue";
  
      const isHovered = ref<boolean>(false); 
      const img = new URL("../assets/images/projeto1.png", import.meta.url).toString();
  </script>
  
  <style scoped>
  .image-container {
    position: relative;
    display: inline-block;
    width: 545px;
    height: 400px;
  }
  
  .image {
    display: block;
    width: 100%;
    height: 100%;
    transition: filter 0.3s ease; /* Transição para o efeito de escurecimento */
  }
  
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor de escurecimento */
    z-index: 1;
  }
  
  .overlay-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2; /* Coloca o botão acima da imagem e do overlay */
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  