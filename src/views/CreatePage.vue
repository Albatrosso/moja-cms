<template>
<div class="editor__wrap">
  <dash class="editor" :show-modal="showModal" @close-modal="openModal" @save="save">
      <div class="editor__output">
        <h2 class="dash-title">Отображаемый текст на странице:</h2>
        <div class="editor__result" v-html="newText"/>
      </div>
      <div class="editor__input">
        <ckeditor class="editor__field" :editor="editor" v-model="newText"/>
        <button class="editor__button" :disabled="!newText"
                @click="openModal" type="submit">Сохранить</button>
      </div>
  </dash>
</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Ckeditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import DashBoardPage from './DashBoardPage.vue';
import Modal from '../components/Modal.vue';

@Component({
  components: {
    dash: DashBoardPage,
    modal: Modal,
  },
})
export default class CreatePage extends Vue {
  editor = Ckeditor;
  newText = '';
  showModal = false;

  openModal() {
    this.showModal = !this.showModal;
  }

  save() {
    axios.post('https://localhost:3026', {
      newText: this.newText,
    });
  }
}
</script>

<style scoped lang="scss">
  .editor {
    background-color: #ffffff;

    &__input {
      width: 100%;
      height: 50%;
    }

    &__output {
      width: 100%;
      height: 50%;
    }

    &__field {
      height: 100px;
    }

    &__button {
      width: 50%;
      margin: 10px auto;
      height: 45px;
      color: #ffffff;
      border: none;
      background-color: #517060;
      border-radius: 16px;
      outline: none;

      &:disabled {
        background-color: #e7e7e7;
        color: #454545;
        border: 1px solid #454545;
      }
    }

    &__result {
      text-align: left;
      padding: 0 25px;
    }
  }
</style>
