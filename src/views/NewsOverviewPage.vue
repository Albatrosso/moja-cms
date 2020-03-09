<template>
  <div class="news-overview">
    <dash>
      <ul class="news-overview__list"></ul>
    </dash>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import DashBoard from './DashBoardPage.vue';
@Component({
  components: {
    dash: DashBoard,
  },
})
export default class NewsOverview extends Vue {
}
</script>

<style scoped lang="scss">

</style
