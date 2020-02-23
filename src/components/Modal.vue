<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
              <h3>Подтверждение</h3>
          </div>

          <div class="modal-body">
            Нажимая на кнопку принять - вы сохраните новость и тем самым отправите ее на сайт
            <br><br>
            Убедитесь еще раз, что выполнили все верно.<br><br>
            Если вы уверены, то можете спокойно продолжать<br>
            а если хотели бы еще проверить или внести правки, то нажмите назад
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('approved')">
                Принять
              </button>
              <button class="modal-default-button" @click="$emit('back')">
                Назад
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {

}
</script>

<style scoped lang="scss">
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    width: 45%;
    height: 30px;
    border-radius: 6px;
    outline: none;
    border: none;
    background-color: #E7E7E7;
    &:first-child {
      margin-right: 5px;
      color: #ffffff;
      background-color: #394B59;
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
