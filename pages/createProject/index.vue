<template>
  <div class="createProject">
    <projects v-for="(i, index) in projects" :key="index" :projects="i"/>
    <div class="createProject_btns">
      <a href="javascript:void(0);" class="download_pdf">
        <span>Скачать PDF</span>
        <img src="@/static/updates.svg" alt="">
      </a>
      <div class="createProject__btns_wrap">
        <a href="javascript:void(0);" class="createProject__btns_wrap__save">
          <span>Сохранить</span>
          <img src="@/static/true.svg" alt="">
        </a>
        <a href="javascript:void(0);" class="createProject__btns_wrap__next">
          <span>Перейти к заполнению следующего шага</span>
          <img src="@/static/arrow_next.svg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '@/components/createProjectComponents/projects.vue'
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Паспорт проекта (общие сведения)',
          full: true,
          fullTitle: 'Редактировать раздел',
          link: '/passport'
        },
        {
          id: 2,
          title: 'ВВЕДЕНИЕ',
          full: true,
          fullTitle: 'Редактировать раздел',
          link: '/'
        },
        {
          id: 3,
          title: 'Институциональный раздел',
          full: true,
          fullTitle: 'Редактировать раздел',
          link: '/'
        },
        {
          id: 4,
          title: 'Маркетинговый раздел',
          full: true,
          fullTitle: 'Редактировать раздел',
          link: '/'
        },
        {
          id: 5,
          title: 'Финансовый раздел',
          full: false,
          fullTitle: 'Продолжить заполнение',
          link: '/'
        },
        {
          id: 6,
          title: 'Социально-экономический раздел',
          full: false,
          fullTitle: 'Продолжить заполнение',
          link: '/'
        },
        {
          id: 7,
          title: 'Технико-технологический раздел',
          full: false,
          fullTitle: 'Продолжить заполнение',
          link: '/'
        },
        {
          id: 8,
          title: 'Распределение рисков',
          full: true,
          fullTitle: 'Редактировать раздел',
          link: '/'
        },
        {
          id: 9,
          title: 'Выводы по проекту',
          full: false,
          fullTitle: 'Продолжить заполнение',
          link: '/'
        },
      ]
    }
  },
  layout: 'main',
  components: {
    projects
  }
}
</script>
<style lang="scss">
@import "../../assets/text.scss";
@import "../../assets/media/createproject.scss";
</style>
