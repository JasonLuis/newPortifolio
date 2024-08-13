<template>
  <div class="perfil">
    <div class="row justify-end q-pt-xl q-pr-lg">
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
  width: 446px;
  height: 720px;
  background-color: #242424;
  background: url("../assets/icon/profile.png") lightgray 0px 0px / 100%
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
</style>
