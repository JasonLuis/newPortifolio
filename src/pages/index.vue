<template>
  <section>
    <div class="container row align-items justify-between">
      <div class="info-left q-mt-xl">
        <span class="text-white name-header">jasoncosta</span>
        <UiBoxPerfil style="margin-top: 157px;"/>
      </div>          
      <div class="info-right">
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

section {
  max-width: 1440px;
}

.container {
  width: 100%;
  position: relative;
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

.info-left {
  z-index: 2;
}

.info-right {
  width: 445px;
  height: 720px;
  background-color: #242424;
  background: url("../core/assets/icon/profile.png") lightgray 0px 0px / 100%
    100% no-repeat;
  z-index: 1;  
  position: relative;
  left: -40px;
}

.q-icon {
  height: 25px;
  width: 25px;
}
</style>
