<template>
  <q-card class="no-shadow">
    <q-card-section>
      <div class="content row align-items justify-between" :class="{ 'expanded': expanded }">
        <div class="col-6 col-sm-4 q-mt-xl" v-for="(skil, count) in skils" :key="count">
          <UiTechnologiesExpirienceItem :exprience="skil.exprience" :technologie="skil.technologie" />
        </div>
      </div>
      
    </q-card-section>
    <q-card-actions class="row justify-center">
      <a flat @click="toggleExpand" class="q-mt-sm">
        {{ expanded ? 'VER MENOS' : 'VER MAIS' }}
      </a>
    </q-card-actions>
  </q-card>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import UiTechnologiesExpirienceItem from "../components/TechnologiesExpirienceItem.vue";

const skils = [
  { technologie: "HTML", exprience: 11 },
  { technologie: "CSS", exprience: 11 },
  { technologie: "Javascript", exprience: 4 },
  { technologie: "Typescript", exprience: 4 },
  { technologie: "VueJS", exprience: 3 },
  { technologie: "Java", exprience: 2 },
  { technologie: "Kotlin", exprience: 1 },
  { technologie: "Spring Boot", exprience: 2 },
  { technologie: "Python", exprience: 1 },
  { technologie: "OpenCV", exprience: 1 },
  { technologie: "C#", exprience: 1 },
  { technologie: "Aps.NET", exprience: 1 },
  { technologie: "Blazor", exprience: 1 }
];

const expanded = ref(false);

const toggleExpand = () => {
  expanded.value = !expanded.value;
};
</script>



<style scoped lang="scss">
.q-card {
  width: 1100px;
  height: auto;
  background-color: transparent;
}

.content {
  max-height: 285px;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.content.expanded {
  max-height: 1000px;
}

a {
  width: 120px;
  height: 38px;
  text-align: center;
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
  text-transform: capitalize;
  cursor: pointer;
}

a:hover {
    color: #4EE1A0;
}

</style>



