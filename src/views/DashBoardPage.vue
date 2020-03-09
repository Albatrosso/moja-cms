<template>
  <div class="dash-board">
    <modal @approved="$emit('save')" @back="$emit('close-modal')" v-if="showModal"></modal>
    <div class="dash-menu">
      <h2 class="dash-title">Действия:</h2>
      <ul class="menu-list">
        <li class="menu-list__item">
          <router-link class="menu-list__link" to="/news-overview">Обзор новостей</router-link>
        </li>
        <li class="menu-list__item">
          <router-link class="menu-list__link" to="/dash-board">Создать новость</router-link>
        </li>
        <li class="menu-list__item">
          <router-link class="menu-list__link" to="/login">Выйти</router-link>
        </li>
      </ul>
    </div>
    <div class="dash-content">
      <slot></slot>
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

  ul {
    list-style: none;
    padding: 0;
  }
.dash-board {
  display: flex;
  flex-flow: row;
  height: 100vh;
  width: 100%;
}

.dash-title {
  border-bottom: 1px solid #2c3e50;
  padding-bottom: 5px;
}

.dash-menu {
  flex: 0.05 1 auto;
  border-right: 1px solid #2c3e50;
}

.dash-content {
  flex: 1 1 25%;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
}

.menu-list {
  text-align: left;
  &__link {
    text-decoration: none;
    font: inherit;
    color: #000;
    display: block;
    padding: 10px 25px;

    &:hover {
      color: #ffffff;
    }
  }
  &__item {
    &:hover {
      color: #ffffff;
      background-color: #394B59;
    }
  }
}
  .editor-block {
    width: 100%;
    height: 50%;
  }

  .editor-result {
    width: 100%;
    height: 50%;
  }

  .save-button {
    outline: none;
    width: 50%;
    margin: 10px auto;
    height: 45px;
    color: #ffffff;
    background-color: #394B59;
    border-radius: 16px;

    &:disabled {
      background-color: #E7E7E7;
      color: #2c3e50;
      border: 1px solid #2c3e50;
    }
  }

  .result {
    text-align: left;
    padding: 0 25px;
  }
</style>
