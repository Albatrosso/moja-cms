<template>
<div>
  <dash :show-modal="showModal" @close-modal="openModal" @save="save">
      <div class="editor-result">
        <h2 class="dash-title">Так будет выглядеть отформатированный текст на странице:</h2>
        <div class="result" v-html="newText"></div>
      </div>
      <div class="editor-block">
        <ckeditor :editor="editor" v-model="newText"></ckeditor>
        <button class="save-button" :disabled="!newText" @click="openModal">Сохранить</button>
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

<style scoped>

</style>
