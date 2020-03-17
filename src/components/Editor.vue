<template>
  <div class="editor" >
        <h2 class="editor__title">Отображаемый текст на странице:</h2>
      <div class="editor__input">
        <ckeditor id="editor" class="editor__field" :editor="editor" v-model="newText"/>
        <button class="editor__button" :disabled="!newText"
                @click="showModal = true" type="submit">Сохранить</button>
      </div>
		<modal v-if="showModal" @save="save">
      Нажимая на кнопку принять - вы сохраните новость и разместите ее на сайте.
      <br><br>
      Убедитесь, что все выполнено верно.<br><br>
      Если вы уверены, нажмите "Продолжить",<br>
      Если вы хотели бы внести правки, нажмите "Назад".
    </modal>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Ckeditor from '@ckeditor/ckeditor5-build-classic';
import Modal from './Modal.vue';

@Component({
  components: {
    modal: Modal,
  },
})
export default class CreatePage extends Vue {
  editor = Ckeditor;
  newText = '';
  showModal = false;

  save(val) {
    this.showModal = false;
    if (val) {
      this.newText = '';
    }
  }
}
</script>

<style lang="scss">
  .editor {
    height: 100%;
    background-color: #ffffff;


    &__title {
      margin: 0;
      outline: none;
      padding: 10px 5px;
      background-color: #3d845f;
      color: #ffffff;
      font-size: 18px;
      font-weight: normal;
      border-bottom: 1px solid #a7a7a7;
    }

    &__input {
      width: 100%;
      height: 50%;
    }

    &__output {
      width: 100%;
      height: 50%;
			background-color: #ffffff;
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

  .ck-content{
    height: 550px;
  }
</style>
