<template>
    <client-only>
        <q-form @submit="sendForm" id="form" ref="form">
            <q-input v-model="fields.name.value" label="NAME" placeholder="" :readonly="loading"
                :rules="[val => val && val.length > 0 || 'Sorry, invalid format here']" />

            <q-input v-model="fields.email.value" label="E-MAIL" placeholder="" :readonly="loading"
                :rules="[(val => (validateEmail(val)) || 'Sorry, invalid format here')]" />


            <q-input v-model="fields.message.value" label="MESSAGE" type="textarea" :readonly="loading"
                :rules="[val => val && val.length > 0 || 'Sorry, invalid format here']" />

            <div class="row justify-end">
                <UiButton :loading="loading" text="send message" type="submit" />
            </div>

        </q-form>
    </client-only>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { QForm, useQuasar } from 'quasar';
import UiButton from './Button.vue';

const form = ref<QForm | null>(null);

const fields = {
  name: ref<string>(''),
  email: ref<string>(''),
  message: ref<string>(''),
};

const loading = ref<boolean>(false);

const $q = useQuasar();

const sendForm = async () => {

    // console.log(process.env.USER);

    try {
        loading.value = true;
        const res = await $fetch('/api/send-email', {
            method: 'POST',
            body: {
                name: fields.name.value,
                email: fields.email.value,
                message: fields.message.value
            }
        });

        loading.value = false;

        if (res) {
            clearInputs();          
            await nextTick();        // 2 - espera Vue atualizar DOM
            resetValidation();
            $q.notify({
                message: 'Form submitted!',
                color: 'green',
                position: 'top',
                timeout: 2000,
            });
        } else {
            $q.notify({
                message: 'Error sending form!',
                color: 'red',
                position: 'top',
                timeout: 2000,
            });
        }
    } catch (error) {
        console.error('Erro ao enviar a requisição:', error);
    }
}
const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const clearInputs = () => {
  Object.keys(fields).forEach(key => {
    fields[key as keyof typeof fields].value = '';
  });
}

const resetValidation = () => {
    form.value?.resetValidation();
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

@media (max-width: $breakpoint-sm) {
    .q-input {
        max-width: 343px;
    }

    .q-textarea {
        max-width: 343px;
    }
}
</style>