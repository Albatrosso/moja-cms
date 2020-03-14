<template>
  <div class="news-overview">
    <dash>
      <ul class="news-overview__list" v-for="news in news">
        <li class="news-overview__item">
          <h3 class="news-overview__title">{{news.title}}</h3>
          <p class="news-overview__date">{{news.date}}</p>
          <p class="news-overview__text">{{news.text}}</p>
        </li>
        <li class="news-overview__item news-overview__item--add">
          <router-link to="/dash-board"/>
        </li>
      </ul>
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

</style>
