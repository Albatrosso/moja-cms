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
      <div class="tabs-selector">
        <button class="dash-title" v-for="(tab, index) in tabs" :key="index" @click="chooseTab(tab)" :class="{active: currentTab === tab.tab}">{{tab.name}}</button>
      </div>
        <keep-alive>
          <transition name="fade-page">
            <component @choosenProp="getChoosenProp" :is="currentTabComponent"></component>
          </transition>
        </keep-alive>

    </div>
    <div class="dash-content">
      <transition name="fade-page">
        <component :is="currentEditorComponent"></component>
      </transition>
    </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import FacilityMenu from '../components/FacilityMenu.vue';
import NewsMenu from '../components/NewsMenu.vue';
import Modal from '../components/Modal.vue';
import Editor from '../components/Editor.vue';
import NewsOverview from '../components/NewsOverview.vue';


  @Component({
    components: {
      modal: Modal,
      'facility-menu': FacilityMenu,
      'news-menu': NewsMenu,
      'editor': Editor,
      'news-cards': NewsOverview,
    },
  })
export default class DashBoard extends Vue {
    @Prop(Boolean)showModal;

    currentTab = 'news-menu';
    currentEditorMode = 'editor';
    choosenProp = 1;
    tabId = 0;
    tabs = [
      {
        id: 0,
        name: 'Новости',
        tab: 'news-menu',
        editorComponent: ['news-cards', 'editor'],
      },
      {
        id: 1,
        name: 'Филиалы',
        tab: 'facility-menu',
        editorComponent: ['' ,'editor'],
      },
    ];

    get currentTabComponent() {
      return this.currentTab;
    }

   get currentEditorComponent() {
      const choosenTab = this.tabs.find((el) => el.id === this.tabId);
      this.currentEditorMode = choosenTab.editorComponent[this.choosenProp];
      return this.currentEditorMode;
    }

    getChoosenProp(val) {
      this.choosenProp = val;
    }

    chooseTab(tab){
      this.currentTab = tab.tab;
      this.tabId = tab.id;
    }
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
  width: 50%;
  outline: none;
  padding: 10px 5px;
  background-color: #3d845f;
  color: #ffffff;
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
	width: 20%;
  height: 500px;
  margin: 30px 10px 0 30px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background-color: #ffffff;
}

.dash-content {
  display: flex;
  flex: 1 1 25%;
  justify-content: space-between;
  height: 90%;
	margin: 30px 30px 0 0;
  flex-flow: column;
  border: 1px solid #333333;
}

.active {
  background-color: #ffffff;
  color: #333333;
}

.tabs-selector {
  width: 100%;
}

.fade-page-leave-active {
  transition: all .5s ease-in;
}

.fade-page-enter-active {
  transition: all .4s ease-in .5s;
}

.fade-page-enter, .fade-page-leave-to {
  opacity: 0;
}
</style>
