<template>
    <div class="list-icons">
        <q-icon :name="`img: ${icons.github.icon}`" />
        <q-icon :name="`img: ${icons.frontMentor.icon}`" />
        <q-icon :name="`img: ${icons.linkedin.icon}`" />
        <q-icon :name="`img: ${icons.twitter.icon}`" />
    </div>
</template>

<script setup lang="ts">

const icons = {
    github: {
        icon: new URL("../assets/icon/icon-github.svg", import.meta.url),
        link: "#",
    },
    frontMentor: {
        icon: new URL(
            "../assets/icon/icon-frontend-mentor.svg",
            import.meta.url
        ),
        link: "#",
    },
    linkedin: {
        icon: new URL("../assets/icon/icon-linkedin.svg", import.meta.url),
        link: "#",
    },
    twitter: {
        icon: new URL("../assets/icon/icon-twitter.svg", import.meta.url),
        link: "#",
    },
};

</script>

<style scoped lang="scss">
.list-icons {
    display: flex;
    align-items: center;
    min-width: 192.5px;
    justify-content: space-between;
}

.q-icon {
    height: 25px;
    width: 25px;
}

@media (max-width: $breakpoint-xs) {
    .q-icon {
        width: 20px;
        height: 20px;
    }

    .list-icons {
        min-width: 174px;
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>