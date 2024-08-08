<template>
  <div class="box">
    <span class="title"> Nice to meet you! </span>
    <span class="title">
        I'm 
        <span>
            Jason Costa.
            <hr class="retangle" />
        </span>
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
%text {
  color: var(--White, #fff);
  font-feature-settings: "liga" off, "clig" off;
  font-family: "Space Grotesk";
}
.box {
  width: 706px;
  height: 303px;
}

.title {
  @extend %text;
  font-size: 88px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px; /* 100% */
  letter-spacing: -2.5px;
}

.text-underline {
    position: relative;
}

.text-underline ::after { 
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px; /* Ajuste a altura da linha aqui */
    background-color: green;
    z-index: -1; /* Garante que a linha fique atrás do texto */
}

.retangle {
    width: 492px;
    height: 6px;
    background: var(--Green, #4EE1A0);
    border: 0px;
    margin-top: -10px;
    margin-right: 70px;
}
</style>
