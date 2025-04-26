<template>
    <q-form>
        <q-input v-model="name" label="NAME" placeholder=""
            :rules="[val => val && val.length > 0 || 'Sorry, invalid format here']" />

        <q-input v-model="email" label="E-MAIL" placeholder=""
            :rules="[val => val && val.length > 0 || 'Sorry, invalid format here']" />

        
        <q-input v-model="message" label="MESSAGE" type="textarea"/>
        <div class="row justify-end">
            <UiButton text="SEND MESSAGE" />
        </div>
        
    </q-form>
</template>

<script setup lang="ts">

import UiButton from "~/core/components/Button.vue";
import { ref } from 'vue';

const name = ref<string>('');
const email = ref<string>('');
const message = ref<string>('');

</script>

<style scoped lang="scss">
.q-input {
    max-width: 445px;
    color: white;

    &:deep(.q-field__inner > .q-field__control:before) {
        border-bottom: 1px solid #e0e0e0 !important;
    }

    &:deep(.q-field__inner > .q-field__control > .q-field__control-container > .q-field__label) {
        color: white !important;
        opacity: 0.5;
    }

    &:deep(.q-field__inner > .q-field__control > .q-field__control-container > .q-field__native) {
        color: white !important;
    }
}

.q-textarea {
    width: 445px;
    color: white;
    margin-bottom: 32px;
    &:deep(.q-field__inner > .q-field__control:before) {
        border-bottom: 1px solid #e0e0e0 !important;
    }

    &:deep(.q-field__inner > .q-field__control > .q-field__control-container > .q-field__label) {
        color: white !important;
        opacity: 0.5;
    }

    &:deep(.q-field__inner > .q-field__control > .q-field__control-container > .q-field__native) {
        color: white !important;
    }
}

@media (max-width: $breakpoint-sm) {
    .q-input {
        min-width: 343px;
    }
    .q-textarea {
        min-width: 343px;
    }
}
</style>