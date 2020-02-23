<template>
  <div class="login-page">
    <div class="login-form">
      <div class="login-form__card">
        <h2>Войдите</h2>
        <input type="text" class="login-form__field">
        <input type="text" class="login-form__field">
        <button class="login-form__submit" type="submit" @click="submitLogin">Войти</button>
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
    this.$router.push('/dash-board');
  }
}
</script>

<style scoped lang="scss">
  h2 {
    margin: 0 0 10px;

  }
  .login-page {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #394B59;
  }

  .login-form {
    height: 100vh;
    display: flex;
    flex: 0 1 auto;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    &__card {
      display: flex;
      flex-flow: column;
      width: 500px;
      height: 200px;
      padding: 25px;
      background-color: #ffffff;
      border: 1px solid cadetblue;
      border-radius: 12px;
      justify-content: center;
      align-items: center;
    }

    &__field {
      outline: none;
      width: 50%;
      border-radius: 5px;
      max-height: 50px;
      margin-bottom: 10px;
      box-shadow: none;
      border: 1px solid #E7E7E7;
    }

    &__submit {
      width: 25%;
      outline: none;
      background-color: #a8c3bc;
      color: #ffffff;
      border-radius: 6px;
      border: none;
      height: 35px;
    }
  }
</style>
