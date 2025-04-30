<template>
  <client-only>
    <div class="perfil">
      <div class="row justify-end" :class="`${$q.screen.xs ? '' : 'q-pr-lg q-pt-xl'}`">
        <UiListSocialIcons />
      </div>

      <img class="icon-circle" :src="`${iconCircle}`" />
    </div>
  </client-only>
</template>

<script setup lang="ts">
import UiListSocialIcons from "~~/src/core/components/ListSocialIcons.vue";
const iconCircle = new URL("../assets/icon/pattern-circle.svg", import.meta.url);

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
.perfil {
  width: 445px;
  height: 720px;
  background: url("../assets/images/profile.png") #242424 0px 0px / 100% 100% no-repeat;
}

.icon-circle {
  position: absolute;
  width: 129px;
  height: 129px;
  z-index: 2;
  bottom: 15%;
  left: -65px;
}

@media (max-width: $breakpoint-md) {
  .perfil {
    width: 350px;
    height: 600px;
  }

  .icon-circle {
    bottom: 0;
    right: 0px;
    left: inherit;
    object-fit: cover;
    object-position: 15px;
    width: 75px;
  }
}

@media (max-width: $breakpoint-xs) {
  .perfil {
    width: 174px;
    height: 350px;
    // background-image: url("../assets/images/profile-responsive.png") 0px 0px / 100% 100% no-repeat;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0.65%, #242424 100%), url("../assets/images/profile.png") 0px 0px / 100% 100% no-repeat;
  }

}
</style>
