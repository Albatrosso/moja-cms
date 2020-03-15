<template>
  <div class="news-overview">
    <div>
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
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class NewsOverview extends Vue {
  news = [
    {
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
    {
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
    {
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
    {
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
    {
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
    {
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
  ];
}
</script>

<style scoped lang="scss">

</style>
