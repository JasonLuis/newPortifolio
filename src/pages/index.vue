<template>
  <!-- <div class="decor-left"></div>
  <div class="decor-right"></div> -->
  <main class="full-width">
    <section class="row justify-center">
      <div class="col-10 align-items justify-center">
        <div class="info-left q-mt-xl">
          <div>
            <span class="text-white name-header">jasoncosta</span>
            <UiBoxPerfil style="margin-top: 157px" />
          </div>
          
          
          <div class="profile">
            <UiImageProfile />
          </div>
          
        </div>
      </div>
    </section>
    <!--
    <hr style="margin-top: 102px" />

     <section class="row">
      <div class="row align-items justify-between">
        <UiCardTechlogiesExpirience />
      </div>
    </section>

    <section class="row" style="margin-top: 120px">
      <div class="row items-center justify-between" style="width: 100%">
        <p class="title">Projects</p>
        <UiButtonContacMe />
      </div>

      <div class="row q-mt-xl">
        <UiCardProjects
          v-for="(project, index) in projects"
          :name="project.name"
          :img="project.img"
          :tecnologies="project.tecnologies"
          :link="project.link"
          :key="index"
        />
      </div>
    </section> -->
  </main>
</template>

<script setup lang="ts">
import UiBoxPerfil from "~~/src/core/components/BoxPerfil.vue";
import UiImageProfile from "~~/src/core/components/ImagePerfil.vue";
import UiCardTechlogiesExpirience from "~~/src/core/components/CardTechlogiesExpirience.vue";
import UiButtonContacMe from "~~/src/core/components/ButtonContactMe.vue";
import UiCardProjects from "~~/src/core/components/CardProjects.vue";
import type { IProject } from "~~/server/Projects/IProjects";

const skils = [
  {
    technologie: "HTML",
    exprience: 11,
  },
  {
    technologie: "CSS",
    exprience: 11,
  },
  {
    technologie: "Javascript",
    exprience: 4,
  },
  {
    technologie: "Typescript",
    exprience: 4,
  },
  {
    technologie: "VueJS",
    exprience: 3,
  },
  {
    technologie: "C#",
    exprience: 1,
  },
  {
    technologie: "ASP.NET",
    exprience: 1,
  },
  {
    technologie: "Blazor",
    exprience: 1,
  },
];

const projects: Array<IProject> = [
  {
    img: new URL(
      "../core/assets/images/projeto1.png",
      import.meta.url
    ).toString(),
    name: "Design Portifolio",
    tecnologies: ["HTML", "CSS", "Javascript"],
    link: {
      github: "Github",
      url: "https://github.com/jasoncosta00",
    },
  },
];
</script>

<style scoped lang="scss">
%text {
  color: var(--White, #fff);
  font-feature-settings: "liga" off, "clig" off;
  font-family: "Space Grotesk";
}

%decor {
  background-image: url("../core/assets/icon/pattern-rings.svg");
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
}

.name-header {
  font-family: "Space Grotesk";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.444px;
}

.info-left {
  position: absolute;
  display: flex;
}

.profile {
  position: relative;
  z-index: 1;
  right: 50px;
  top: -48px;
}

.decor-left {
  @extend %decor;
  height: 100vh;
  background-position: -100px 175px;
  pointer-events: none;
}

.decor-right {
  @extend %decor;
  min-height: 100vh;
  height: 100%;
  background-position: calc(100% + 200px) 1077px;
  pointer-events: none;
}

.title {
  @extend %text;
  font-size: 88px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: -2.5px;
}
</style>
