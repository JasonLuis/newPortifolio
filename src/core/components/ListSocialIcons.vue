<template>
    <client-only>
        <div class="list-icons">
            <NuxtLink :to="icons.github.link" target="_blank">
                <q-icon :name="`img: ${icons.github.icon}`" @mouseenter="hoverOn(IconsEnum.GITHUB)"
                    @mouseleave="hoverOff(IconsEnum.GITHUB)" />
            </NuxtLink>

            <NuxtLink :to="icons.frontMentor.link" target="_blank">
                <q-icon :name="`img: ${icons.frontMentor.icon}`" @mouseenter="hoverOn(IconsEnum.FRONT_MENTOR)"
                    @mouseleave="hoverOff(IconsEnum.FRONT_MENTOR)" />
            </NuxtLink>
            <NuxtLink :to="icons.linkedin.link" target="_blank">
                <q-icon :name="`img: ${icons.linkedin.icon}`" @mouseenter="hoverOn(IconsEnum.LINKEDIN)"
                @mouseleave="hoverOff(IconsEnum.LINKEDIN)"/>
            </NuxtLink>
            <NuxtLink :to="icons.whatsapp.link" target="_blank">
                <q-icon :name="`img: ${icons.whatsapp.icon}`" @mouseenter="hoverOn(IconsEnum.WHATSAPP)"
                    @mouseleave="hoverOff(IconsEnum.WHATSAPP)" />
            </NuxtLink>
        </div>
    </client-only>
</template>

<script setup lang="ts">

const icons = reactive({
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
    whatsapp: {
        icon: new URL("../assets/icon/icon-whatsapp.png", import.meta.url),
        link: "https://wa.me/5511962327519?text=Hello%20Jason",
    },
});

const hoverOn = (icon: IconsEnum) => {
    switch (icon) {
        case IconsEnum.GITHUB:
            icons.github.icon = new URL("../assets/icon/icon-github-hover.svg", import.meta.url)
            break;
        case IconsEnum.FRONT_MENTOR:
            icons.frontMentor.icon = new URL(
                "../assets/icon/icon-frontend-mentor-hover.svg",
                import.meta.url);
            break;
        case IconsEnum.LINKEDIN:
            icons.linkedin.icon = new URL("../assets/icon/icon-linkedin-hover.svg", import.meta.url)
            break;
        case IconsEnum.WHATSAPP:
            icons.whatsapp.icon = new URL("../assets/icon/icon-whatsapp-hover.png", import.meta.url)
            break;
    }
}

const hoverOff = (icon: IconsEnum) => {
    switch (icon) {
        case IconsEnum.GITHUB:
            icons.github.icon = new URL("../assets/icon/icon-github.svg", import.meta.url)
            break;
        case IconsEnum.FRONT_MENTOR:
            icons.frontMentor.icon = new URL(
                "../assets/icon/icon-frontend-mentor.svg",
                import.meta.url);
            break;
        case IconsEnum.LINKEDIN:
            icons.linkedin.icon = new URL("../assets/icon/icon-linkedin.svg", import.meta.url)
            break;
        case IconsEnum.WHATSAPP:
            icons.whatsapp.icon = new URL("../assets/icon/icon-whatsapp.png", import.meta.url)
            break;
    }
}

enum IconsEnum {
    GITHUB,
    FRONT_MENTOR,
    LINKEDIN,
    WHATSAPP
}

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

    &:deep(img) {
        width: 25px;
        height: 25px;
    }
}

.q-icon:hover {
    cursor: pointer;
    // background-color: blue;
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