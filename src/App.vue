<template>
  <div id="app">
    <transition name="fade-page">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
