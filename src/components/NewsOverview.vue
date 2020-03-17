<template>
  <div class="news-overview">
      <ul class="news-overview__list">
        <li class="news-overview__list__item" v-for="news in allNews">
					<div  class="news-overview__list__item__overlay">
            <img class="editor-icon" src="../assets/pencil.svg" alt="edit">
            <img class="editor-icon" src="../assets/waste.svg" alt="delete" @click="showModal = true">
          </div>
<!--            <img class="news__img"-->
<!--                 :src="require(`../assets/img/${news.id}.jpg`)" alt="Санкт-Петербург">-->
            <h2 class="news__title">{{ news.title }}</h2>
            <time class="news__time" :datetime="news.dateTime">{{news.date}}</time>
            <p class="news__subtitle">
              {{news.text}}
            </p>
        </li>
      </ul>
    <modal v-if="showModal" @save="deleteNew">
      Нажимая на кнопку удалить вы безвозвратно удалите новость.
      <br>
      <br>
      Если вы уверены, нажмите "Продолжить",<br>
    </modal>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Modal from './Modal.vue';

@Component({
  components: {
    modal: Modal,
  },
})
export default class NewsOverview extends Vue {
  showModal = false;
  allNews = [
    {
      id: 0,
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
    {
      id: 1,
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
    {
      id: 2,
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
    {
      id: 3,
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
    {
      id: 4,
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
    {
      id: 5,
      title: 'Санкт-Петербург',
      text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
      date: '10.02.2020',
      photo: '',
    },
  ];

  deleteNew(val) {
    this.showModal = false;
  }
}
</script>

<style scoped lang="scss">
  .news-overview {
    height: 100%;
    overflow-y: scroll;
    background-color: #ffffff;


    &__list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;


      &__item {
        position: relative;
        flex: 1 0 230px;
        min-height: 350px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        margin: 0 60px 35px 0;
        padding: 10px;

        &__overlay {
          position: absolute;
          display: flex;
          justify-content: space-between;
          width: 95%;
        }


      }
    }
  }

  .editor-icon {
    width: 25px;
    height: 25px;
  }

</style>
