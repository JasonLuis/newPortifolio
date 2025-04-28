<template>
    <client-only>
        <div class="list-icons">
            <NuxtLink :to="icons.github.link" target="_blank">
                <q-icon :name="`img: ${icons.github.icon}`" />
            </NuxtLink>

            <NuxtLink :to="icons.frontMentor.link" target="_blank">
                <q-icon :name="`img: ${icons.frontMentor.icon}`" />
            </NuxtLink>
            <NuxtLink :to="icons.linkedin.link" target="_blank">
                <q-icon :name="`img: ${icons.linkedin.icon}`" />
            </NuxtLink>
            <NuxtLink :to="icons.twitter.link" target="_blank">
                <q-icon :name="`img: ${icons.twitter.icon}`" />
            </NuxtLink>
        </div>
    </client-only>
</template>

<script setup lang="ts">

const icons = {
    github: {
        icon: new URL("../assets/icon/icon-github.svg", import.meta.url),
        link: "https://github.com/JasonLuis",
    },
    frontMentor: {
        icon: new URL(
            "../assets/icon/icon-frontend-mentor.svg",
            import.meta.url
        ),
        link: "https://www.frontendmentor.io/profile/JasonLuis",
    },
    linkedin: {
        icon: new URL("../assets/icon/icon-linkedin.svg", import.meta.url),
        link: "https://www.linkedin.com/in/djeison-l-185703122",
    },
    twitter: {
        icon: new URL("../assets/icon/icon-whatsapp.png", import.meta.url),
        link: "https://wa.me/5511962327519?text=Hello%20Jason",
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

.q-icon:hover {
    cursor: pointer;
    background-color: #4EE1A0;
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