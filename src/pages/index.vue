<template>
  <div class="decor-left"></div>
  <div class="decor-right"></div>
  <main class="full-width full-height">
    <section class="row justify-center">
      <div class="container min-height-container row col-12 col-md-8">
        <div class="info-perfil col-12 col-sm-8">
          <p class="text-white name-header q-mt-xl">jasoncosta</p>
          <div :class="`${$q.screen.lt.sm ? 'full-width row justify-center relative-position' : 'hidden'}`">
            <UiImageProfile />
          </div>
          <UiBoxPerfil class="mt-personalizado" />
        </div>

        <div class="col-12 col-sm-4 col-md-6" :class="`${$q.screen.md ? 'hidden' : ''}`">

        </div>

        <div class="profile">
          <UiImageProfile />
        </div>
      </div>
    </section>


    <section class="row justify-center q-mt-xl">
      <div class="col-12 col-md-8">
        <div class="divisor full-width text-center">
          <hr style="max-width: 1110px;" />
        </div>
      </div>

      <div class="col-12 col-md-8 container">
        <UiCardTechlogiesExpirience />
      </div>

    </section>

    <section class="row justify-center" style="margin-top: 120px">
      <div class="col-12 col-md-8 container">
        <div class="row items-center justify-between q-px-md" style="width: 100%">
          <p class="title">Projects</p>
          <UiButtonContacMe />
        </div>

      </div>

      <div class="col-12 col-md-8 container">
        <UiCardProjects v-for="(project, index) in projects" :name="project.name" :img="project.img"
          :tecnologies="project.tecnologies" :link="project.link" :key="index" />
      </div>
    </section>
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
  @extend %text;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.444px;
}

.container {
  position: relative;
  max-width: 1110px;
}

.min-height-container {
  min-height: 720px;
}

[class^="min-height-"] {
  min-height: var(--max-width, 100%);
}

.profile {
  position: absolute;
  z-index: 1;
  right: 0px;
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

.mt-personalizado {
  margin-top: 157px;
}

.divisor {
  padding-left: 0px;
  padding-right: 0px;
}

@media (max-width: $breakpoint-md) {
  .mt-personalizado {
    margin-top: 90px;
  }

  .profile {
    right: 0px;
  }

  .min-height-container {
    min-height: 600px;
  }

  .title {
    font-size: 72px;
    line-height: 72px;
    letter-spacing: -2.045px;
  }
}


@media (max-width: $breakpoint-sm) {

  .info-perfil {
    padding-left: 32px;
  }

  .divisor {
    padding-left: 32px;
    padding-right: 32px;
  }
}



@media (max-width: $breakpoint-xs) {

  .container {
    padding-left: 0px;
  }

  .profile {
    display: none;
  }

  .name-header {
    font-size: 24px;
    text-align: center;
  }

  .mt-personalizado {
    margin-top: 40px;
  }

  .decor-left {
    background-position: -220px 175px;
  }

  .info-perfil {
    padding-left: 12px;
    padding-right: 12px;
  }

  .divisor {
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
