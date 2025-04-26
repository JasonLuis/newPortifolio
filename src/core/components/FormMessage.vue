<template>
    <q-form @submit="submitForm">
        <q-input v-model="name" label="NAME" placeholder=""
            :rules="[val => val && val.length > 0 || 'Sorry, invalid format here']" />

        <q-input v-model="email" label="E-MAIL" placeholder=""
            :rules="[(val => (validateEmail(val)) || 'Sorry, invalid format here')]" />


        <q-input v-model="message" label="MESSAGE" type="textarea"
            :rules="[val => val && val.length > 0 || 'Sorry, invalid format here']" />

        <div class="row justify-end">
            <q-btn type="submit" label="SEND MESSAGE" />
        </div>

    </q-form>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useQuasar } from 'quasar';

const name = ref<string>('');
const email = ref<string>('');
const message = ref<string>('');

const $q = useQuasar();

const submitForm = () => {
    $q.notify({
        message: 'Form submitted!',
        color: 'green',
        position: 'top',
        timeout: 2000,
    });
}

const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

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
}

.q-btn::before {
    box-shadow: none;
}

.q-btn:hover {
    color: #4EE1A0;
}

@media (max-width: $breakpoint-sm) {
    .q-input {
        max-width: 343px;
    }

    .q-textarea {
        max-width: 343px;
    }
}
</style>