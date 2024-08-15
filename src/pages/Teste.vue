<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="content" :class="{ expanded: expanded }">
          <!-- Conteúdo que você quer esconder -->
          <p v-for="i in 10" :key="i">Linha de conteúdo {{ i }}</p>
        </div>
        <q-btn flat @click="toggleExpand">
          {{ expanded ? "Ver menos" : "Ver mais" }}
        </q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const expanded = ref(false);

const toggleExpand = () => {
  expanded.value = !expanded.value;
};
</script>

<style scoped>
.content {
  max-height: 100px;
  overflow: hidden;
  transition: max-height 0.5s ease;
}
.content.expanded {
  max-height: 500px; /* Ajuste conforme necessário */
}
</style>
