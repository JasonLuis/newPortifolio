<template>
  <section class="row justify-center full-width">
    <div class="container row align-items justify-between">
      <span class="text-white name-header q-mt-xl">jasoncosta</span>
      <UiBoxPerfil />
      
      <div class="picture-perfil">
        <div class="row justify-end q-pt-xl q-pr-lg">
          <div class="list-icons">
            <q-icon :name="`img: ${icons.github.icon}`" />
            <q-icon :name="`img: ${icons.frontMentor.icon}`" />
            <q-icon :name="`img: ${icons.linkedin.icon}`" />
            <q-icon :name="`img: ${icons.twitter.icon}`" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiBoxPerfil from "~~/src/core/components/BoxPerfil.vue"; 

const icons = {
  github: {
    icon: new URL("../core/assets/icon/icon-github.svg", import.meta.url),
    link: "#",
  },
  frontMentor: {
    icon: new URL(
      "../core/assets/icon/icon-frontend-mentor.svg",
      import.meta.url
    ),
    link: "#",
  },
  linkedin: {
    icon: new URL("../core/assets/icon/icon-linkedin.svg", import.meta.url),
    link: "#",
  },
  twitter: {
    icon: new URL("../core/assets/icon/icon-twitter.svg", import.meta.url),
    link: "#",
  },
};
</script>

<style lang="scss">
.container {
  width: 80%;
}

.name-header {
  font-family: "Space Grotesk";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.444px;
}

.list-icons {
  display: flex;
  align-items: center;
  min-width: 192.5px;
  justify-content: space-between;
}

.picture-perfil {
  width: 445px;
  height: 720px;
  background-color: #242424;
  background: url("../core/assets/icon/profile.png") lightgray 0px 0px / 100%
    100% no-repeat;
}

.q-icon {
  height: 25px;
  width: 25px;
}
</style>
