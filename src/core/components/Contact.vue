<template>
    <client-only>
        <div class="col-12 col-md-6">
            <h1 class="title">Contact</h1>
            <p class="text">Checked out my personal projects and found them interesting? Feel free to leave a message — I'll get back to you via email as soon as possible!</p>
        </div>
        <div class="col-12 col-md-6 q-py-xl row justify-end contact-form"
            :class="`${$q.screen.xs ? 'row justify-center' : ''}`">
            <UiFormMessage />
        </div>
    </client-only>
</template>

<script setup lang="ts">
import UiFormMessage from "~~/src/core/components/FormMessage.vue";
</script>

<style scoped lang="scss">
%text {
    color: var(--White, #fff);
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Space Grotesk";
}

.title {
    @extend %text;
    font-size: 88px;
    font-style: normal;
    font-weight: 700;
    line-height: 88px;
    letter-spacing: -2.5px;
}

.text {
    @extend %text;
    max-width: 445px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    color: var(--Grey, #D9D9D9);
}

@media (max-width: $breakpoint-md) {
    .title {
        font-size: 72px;
        line-height: 72px;
        letter-spacing: -2.045px;
    }

    .text {
        font-size: 16px;
        line-height: 24px;
    }
}

@media (max-width: $breakpoint-sm) {
    .title {
        text-align: center;
    }

    .text {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        max-width: 100%;
        padding-left: 50px;
        padding-right: 50px;
    }

    .contact-form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
}


@media (max-width: $breakpoint-xs) {
    .title {
        font-size: 40px;
        line-height: 40px;
        letter-spacing: -1.136px;
    }
}
</style>
