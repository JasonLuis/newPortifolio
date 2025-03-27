<template>
  <div class="perfil">
    <div class="row justify-end"
     :class="`${$q.screen.lt.md ? '' : 'q-pr-lg q-pt-xl'}`"
    >
      <div class="list-icons">
        <q-icon :name="`img: ${icons.github.icon}`" />
        <q-icon :name="`img: ${icons.frontMentor.icon}`" />
        <q-icon :name="`img: ${icons.linkedin.icon}`" />
        <q-icon :name="`img: ${icons.twitter.icon}`" />
      </div>
    </div>
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
.perfil {
  width: 445px;
  height: 720px;
  background: url("../assets/images/profile.png") #242424 0px 0px / 100%
    100% no-repeat;
}

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

@media (max-width: $breakpoint-sm) {
  .perfil {
    width: 174px;
    height: 350px;
    // background-image: url("../assets/images/profile-responsive.png") 0px 0px / 100% 100% no-repeat;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0.65%, #242424 100%), url("../assets/images/profile.png") 0px 0px / 100%
    100% no-repeat;
  }
  .q-icon {
    width: 20px;
    height: 20px;
  }

  .list-icons {
    min-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
