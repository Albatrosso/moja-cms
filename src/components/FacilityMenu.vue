<template>
  <ul class="menu-list">
    <li class="menu-list__item">
      <router-link class="menu-list__link" to="/news-overview">Обзор филиалов</router-link>
    </li>
    <li class="menu-list__item">
      <router-link class="menu-list__link" to="/dash-board">Добавить филиал</router-link>
    </li>
  </ul>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

  @Component
export default class FacilityMenu extends Vue {}
</script>

<style scoped>

</style>
