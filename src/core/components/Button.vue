<template>
  <client-only>
    <template v-if="props.link !== undefined">
      <a flat :href="props.link" target="_blank" class="q-btn">{{ props.text.toUpperCase() }}</a>
    </template>
    <template v-else>
      <q-btn :loading="loading" :type="type" @click="handleClick">{{ props.text.toUpperCase() }}</q-btn>
    </template>
  </client-only>
</template>

<script setup lang="ts">
const emit = defineEmits(['onClick']);

const props = withDefaults(defineProps<{
  text: string;
  type?: 'button' | 'submit' | 'reset';
  link?: string;
  loading?: boolean;
}>(), {
  type: 'button',
  link: undefined,
  loading: false
});

const handleClick = () => {
  emit('onClick');
};

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
  cursor: pointer;
}

a:hover {
  color: #4EE1A0;
}

.q-btn {
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
  padding-right: 0px;
  padding-left: 0px;

  &:deep(.q-focus-helper) {
    display: none;
  }
}

.q-btn::before {
  box-shadow: none;
}

.q-btn:hover {
  color: #4EE1A0;
}
</style>
