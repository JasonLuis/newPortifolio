<template>

    <div class="full-width full-height row items-center">
        <div class="full-width text-center">
            <p v-if="props.url !== undefined">
                <UiButton text="View Project" :link="props.url" />
            </p>

            <template v-if="props.gitFront !== undefined && props.gitBack !== undefined">
                <p :class="`${props.url !== undefined ? 'q-bt-xl' : ''}`">
                    <UiButton text="Code Frontend" :link="props.gitFront" />
                </p>

                <p :class="`${props.gitFront !== undefined ? 'q-mt-xl' : ''}`">
                    <UiButton text="Code Backend" :link="props.gitFront" />
                </p>
            </template>

            <template v-else>
                <p v-if="props.gitFront !== undefined" :class="`${props.url !== undefined ? 'q-mt-xl' : ''}`">
                    <UiButton text="View Code" :link="props.gitFront" />
                </p>

                <p v-if="props.gitBack !== undefined" :class="`${props.url !== undefined ? 'q-mt-xl' : ''}`">
                    <UiButton text="View Code Backend" :link="props.gitBack" />
                </p>
            </template>

        </div>
    </div>

</template>

<script setup lang="ts">
import type { ILink } from "~/core/entities/IProjects";
import UiButton from "./Button.vue";


const props = defineProps<ILink>();
</script>

<style scoped lang="scss">
a {
    width: auto;
    height: 38px;
    text-decoration: none;
    color: var(--White, #fff);
    font-family: "Space Grotesk";
    text-transform: uppercase;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 2.286px;
    border-bottom: 2px solid #4EE1A0;
    padding-bottom: 10px;
}

a:hover {
    color: #4EE1A0;
}
</style>