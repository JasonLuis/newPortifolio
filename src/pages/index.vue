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
          <UiBoxPerfil class="mt-personalizado" @onClick="scrollToContact"/>
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
        <div class="padding-x full-width text-center">
          <hr style="max-width: 1110px;" />
        </div>
      </div>

      <div class="col-12 col-md-8 container">
        <UiCardTechnologiesExpirience :skils="skils" />
      </div>

    </section>

    <section class="row justify-center" style="position: relative; margin-top: 128px; margin-bottom: 139px;">
      <div class="col-12 col-md-8 container q-mb-xl">
        <div class="row items-center justify-between padding-x">
          <p class="title q-mb-none">Projects</p>
          <UiButton text="Contact Me" @onClick="scrollToContact" />
        </div>
      </div>

      <div class="col-12 col-md-8 container padding-x row" :class="`${ $q.screen.xs ? ' justify-center' : 'justify-between'}`" style="display: flex; gap: 18px;">
        <UiCardProjects v-for="(project, index) in projects" :name="project.name" :img="project.img"
          :tecnologies="project.tecnologies" :link="project.link" :key="index" />
      </div>
    </section>

    <footer id="contact" class="row justify-center" style="position: relative; background: var(--Dark-Grey, #242424);">
      <div class="decor-left-contact"></div>
      <div class="col-12 col-md-8 container row">
        <UiContact />

        <div class="col-12">
          <div class="padding-x full-width text-center q-mt-xl">
            <hr style="max-width: 1110px;" />
            <div class="row justify-between">
              <p class="text-white name-header q-mt-md">jasoncosta</p>

              <UiListSocialIcons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import UiBoxPerfil from "~~/src/core/components/BoxPerfil.vue";
import UiImageProfile from "~~/src/core/components/ImagePerfil.vue";
import UiCardTechnologiesExpirience from "~/core/components/CardTechnologiesExpirience.vue";
import UiButton from "~/core/components/Button.vue";
import UiCardProjects from "~~/src/core/components/CardProjects.vue";
import UiContact from "~~/src/core/components/Contact.vue";
import UiListSocialIcons from "~~/src/core/components/ListSocialIcons.vue";

import type { IProject } from "~/core/entities/IProjects";
import type { ISkills } from "~/core/entities/ISkills";

const skils: Array<ISkills> = [
  {
    technologie: "HTML",
    exprience: 8,
  },
  {
    technologie: "CSS",
    exprience: 8,
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
      "../core/assets/images/linklearn.jpg",
      import.meta.url
    ).toString(),
    name: "Link&Learn",
    tecnologies: ["REACT", "Javascript", "NodeJS"],
    link: {
      gitFront: "https://github.com/sasle/LinkNLearn",
      gitBack: "https://github.com/JasonLuis/LinkNLearn",
    },
  },
  {
    img: new URL(
      "../core/assets/images/hero-hairdresses.png",
      import.meta.url
    ).toString(),
    name: "Hero HairDresses",
    tecnologies: ["REACT", "Javascript", "NodeJS"],
    link: {
      gitFront: "https://github.com/JasonLuis/semana-do-heroi",
    },
  },
  {
    img: new URL(
      "../core/assets/images/tictactoe.jpg",
      import.meta.url
    ).toString(),
    name: "Tic Tac Toe",
    tecnologies: ["VueJS", "Tipescript", "Quasar"],
    link: {
      url: "https://game-vue-tictactoe.netlify.app/",
      gitFront: "https://github.com/JasonLuis/tic-tac-toe-vue",
    },
  },
  {
    img: new URL(
      "../core/assets/images/pokedex.jpg",
      import.meta.url
    ).toString(),
    name: "Pokedex",
    tecnologies: ["Blazor", "ASP.NET", "Tailwind"],
    link: {
      url: "https://blazor-pokedex.fly.dev/",
      gitFront: "https://github.com/JasonLuis/pokedex",
    },
  },
];

const scrollToContact = () => {
  const section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
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

.decor-left-contact {
  @extend %decor;
  height: 100%;
  background-position: -100px 290px;
  pointer-events: none;
}

.decor-right {
  @extend %decor;
  min-height: 100vh;
  height: 100%;
  background-position: calc(100% + 200px) 1000px;
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

.text {
  @extend %text;
  max-width: 445px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  color: var(--Grey, #D9D9D9);
}

.mt-personalizado {
  margin-top: 157px;
}

.padding-x {
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

  .padding-x {
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

  .title {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -1.136px;
  }

  .padding-x {
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
