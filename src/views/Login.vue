<template>
  <div class="login">
    <div class="login__form">
      <div class="login__card">
        <h2 class="login__headline"></h2>
        <div class="login__input-wrap">
          <label for="login" class="login__label">Логин:
            <input class="login__field" type="text" id="login">
          </label>
          <label for="password" class="login__label">Пароль:
            <input class="login__field" type="password" id="password">
          </label>
        </div>
        <button class="login__submit" type="submit" @click="submitLogin">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Login extends Vue {
  login = '';
  password = '';

  submitLogin() {
    console.log('submited');
    this.$router.push('/news-overview');
  }
}
</script>

<style scoped lang="scss">
  .login {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("../assets/background.jpeg") center/cover;
    &__form {
      height: 100vh;
      display: flex;
      flex: 0 1 auto;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    &__card {
      box-sizing: border-box;
      width: 500px;
      height: 250px;
      padding: 20px;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 2;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.2);
      &::after {
        content: "";
        width: 100%;
        height: 70px;
        position: absolute;
        bottom: 0;
        background-color: rgba(231,231,231,0.9);
        border-radius: 0 0px 5px 5px;
      }
    }
    &__headline {
      margin: 0;
    }
    &__input-wrap {
      width: 80%;
    }
    &__label {
      display: block;
      text-align: right;
      width: 300px;
    }
    &__field {
      width: 60%;
      max-height: 50px;
      margin: 0 0 10px 10px;
      padding: 5px;
      border: 1px solid #a7a7a7;
      border-radius: 5px;
      box-shadow: none;
      outline: none;
    }
    &__submit {
      width: 20%;
      height: 30px;
      padding: 5px 0;
      position: relative;
      z-index: 5;
      border: none;
      outline: none;
      background-color: #3b3b3b;
      color: #ffffff;
      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>
