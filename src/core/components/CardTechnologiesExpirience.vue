<template>
  <q-card class="no-shadow">
    <q-card-section>
      <div class="content row align-items justify-between" :class="{ 'expanded': expanded }">
        <div class="col-12 col-sm-6 col-md-4 q-mt-xl" v-for="(skil, count) in props.skils" :key="count">
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
import type { ISkills } from '../entities/ISkills';

const props = defineProps({
  skils: {
    type: Array<ISkills>,
    default: () => []
  }
});

const expanded = ref(false);

const toggleExpand = () => {
  expanded.value = !expanded.value;
};
</script>



<style scoped lang="scss">
.q-card {
  //width: 1100px;
  height: auto;
  background-color: transparent;
  &:deep(.q-card__section--vert) {
    padding: 0;
  }
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

@media (max-width: $breakpoint-sm) {
  .q-card {
    padding-left: 32px;
  }
}

</style>



