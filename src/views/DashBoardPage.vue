<template>
  <div class="dash-board">
    <div class="dash-menu">
      <h2 class="dash-title">Действия</h2>
      <ul class="menu-list">
        <li class="menu-list__item">Обзор всех новостей</li>
        <li class="menu-list__item">Создать новость</li>
        <li class="menu-list__item">Выйти</li>
      </ul>
    </div>
    <div class="dash-content">
      <div class="editor-result">
        <h2 class="dash-title">Так будет выглядеть отформатированный текст на странице</h2>
        <div v-html="newText"></div>
      </div>
      <div class="editor-block">
        <ckeditor :editor="editor" v-model="newText" :config="editorConfig"></ckeditor>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Ckeditor from '@ckeditor/ckeditor5-build-classic';

  @Component({

  })
export default class DashBoard extends Vue {
  editor = Ckeditor;
  newText = '';
  editorConfig = {
    height: '50%',
  };
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
  flex: 0 1 auto;
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

  &__item {
    padding: 5px 25px;

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
</style>
