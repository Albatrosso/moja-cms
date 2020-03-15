<template>
  <div class="dash-board">
    <modal @approved="$emit('save')" @back="$emit('close-modal')" v-if="showModal"></modal>
    <header class="dash-header">
      <ul class="dash-header__list">
        <li class="dash-header__item">
          <img class="dash-header__logo" src="../assets/icon.svg" alt="MajoCMS">
        </li>
        <li class="dash-header__item">
          <router-link class="dash-header__link" to="/login">Выйти</router-link>
        </li>
      </ul>
      <div class="dash-header__user">
        <p class="dash-header__id">Редактор</p>
      </div>
    </header>
    <div class="dash-page">
    <div class="dash-menu">
        <h2 class="dash-title">Действия:</h2>
        <ul class="menu-list">
          <li class="menu-list__item">
            <router-link class="menu-list__link" to="/news-overview">Обзор новостей</router-link>
          </li>
          <li class="menu-list__item">
            <router-link class="menu-list__link" to="/dash-board">Создать новость</router-link>
          </li>
        </ul>
    </div>
    <div class="dash-content">
      <slot></slot>
    </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import Modal from '../components/Modal.vue';

  @Component({
    components: {
      modal: Modal,
    },
  })
export default class DashBoard extends Vue {
    @Prop(Boolean)showModal;
  }
</script>

<style scoped lang="scss">

.dash-board {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  background-color: #e7e7e7;
}

.dash-page {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.dash-title {
  margin: 0;
  padding: 10px 0;
  font-size: 18px;
  font-weight: normal;
  border-bottom: 1px solid #a7a7a7;
}

.dash-header {
  height: 50px;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #517060;
  background: linear-gradient(#517060, #3d845f);
  color: #ffffff;

  &__list {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
  }

  &__link {
    margin-left: 30px;
    font: inherit;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      opacity: 0.75;
    }
  }

  &__id {
    padding-right: 60px;
    position: relative;

    &::after {
      content: url("../assets/editor.svg");
      height: 40px;
      width: 40px;
      position: absolute;
      top: 50%;
      left: 78%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: #ffffff;
    }
  }
}

.dash-menu {
  flex: 0.05 1 auto;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background-color: #ffffff;
}

.dash-content {
  display: flex;
  flex: 1 1 25%;
  justify-content: space-between;
  flex-flow: column;
}

.menu-list {
  padding: 0;
  list-style: none;
  text-align: left;

  &__link {
    display: block;
    padding: 10px 25px;
    text-decoration: none;
    font: inherit;
    color: #000000;

    &:hover {
      color: #ffffff;
    }
  }
  &__item {

    &:hover {
      color: #ffffff;
      background-color: #517060;
    }
  }
}

</style>
