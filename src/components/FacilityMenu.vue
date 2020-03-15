<template>
  <div class="menu-list">
    <button class="menu-list__link" v-for="(item, index) in menuItems" @click="selectEditorMode(index)" :class="{active: item.id === currentProp}">{{item.name}}</button>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class NewsMenu extends Vue {
  currentProp = 1;

  menuItems = [
    {
      id: 0,
      name: 'Обзор филиалов',
    },
    {
      id: 1,
      name: 'Создать филиал',
    },
  ];

  selectEditorMode(index) {
    this.currentProp = index;
    this.$emit('choosenProp', index);
  }
}
</script>

<style scoped lang="scss">
  .menu-list {
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: left;

    &__link {
      outline: none;
      background: none;
      border: none;
      display: block;
      padding: 10px 25px;
      font: inherit;
      width: 100%;
      text-align: left;


      &:hover {
        color: #ffffff;
        background-color: #517060;
      }
    }
  }

  .active {
    color: #ffffff;
    background-color: #517060;
  }

</style>
