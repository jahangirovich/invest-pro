<template>
<header>
  <b-container fluid>
    <b-row>
      <b-col md="4" class="header__logo">
        <div class="logo">
          <img src="@/static/logo.svg" alt="">
        </div>
        <NuxtLink to="/createProject" class="addProject">
          <img class="addProject__img" src="@/static/add_project.svg" alt="">
          <span class="addProject__text">Создать проект</span>
        </NuxtLink>
      </b-col>
      <b-col md="5" class="header__wrap">
        <ul class="header__wrap_nav">
          <li><NuxtLink to="/project">О проекте</NuxtLink></li>
          <li><NuxtLink to="/partner">Партнерам</NuxtLink></li>
          <li><NuxtLink to="/zaem">Заемщикам</NuxtLink></li>
          <li><NuxtLink to="/investor">Инвесторам</NuxtLink></li>
          <li><NuxtLink to="/news">Новости</NuxtLink></li>
          <li><NuxtLink to="/news">Контакты</NuxtLink></li>
        </ul>
      </b-col>
      <b-col md="3" class="header__acc">
        <div class="header__acc_wrap">
          <a href="javascript:void(0);" class="header__acc_wrap_search">
            <img src="@/static/search.svg" alt="">
          </a>
          <a href="javascript:void(0);" @click="lang = !lang" class="header__acc_wrap_lang">
            <span>{{ langDescr }}</span>
            <div v-if="lang" class="lang_title">
              <span @click="langDescr = 'RU'">RU</span>
              <span @click="langDescr = 'KZ'">KZ</span>
              <span @click="langDescr = 'EN'">EN</span>
            </div>
          </a>
          <a href="javascript:void(0);" class="burger" @click="burgerToggle(burger = !burger)">
            <img v-if="burgerBool" src="@/static/burger_active.svg" alt="">
            <img v-else src="@/static/burger_acc.svg" alt="">
          </a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</header>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      burger: false,
      lang: false,
      langDescr: 'KZ'
    }
  },
  methods: {
    ...mapMutations(['burgerAcc']),
    burgerToggle(b) {
      this.burgerAcc(!b)
    }
  },
  computed: {
    ...mapGetters(['burgerBool'])
  }

}
</script>

<style lang="scss">
header {
  min-height: 70px;
  display: flex;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 100;
  .burger {
    text-decoration: none;
  }
  .header__logo {
    display: flex;
    align-content: center;
    justify-content: space-around;
    .addProject {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      text-decoration: none;
      color: #54D469;
      border: 1px solid #54D469;
      width: 181px;
      min-height: 35px;
      border: 1px solid #55D569;
      box-sizing: border-box;
      border-radius: 4px;
      margin-top: 5px;
      &__text {
        color: #54D469;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        text-align: center;
      }
    }
  }
  .header__acc {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    &_wrap {
      width: 50%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-right: 15px;
      &_lang {
        text-decoration: none;
        border: 2px solid #D3D3D3;
        border-radius: 23px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        position: relative;
        width: 29px;
        min-height: 19px;
        background: #FFFFFF;
        span {
          font-family: 'Roboto';
          font-weight: bold;
          font-size: 11px;
          color: #426DE6;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lang_title {
          width: 29px;
          min-height: 57px;
          background: #FFFFFF;
          border: 2px solid #D3D3D3;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          position: absolute;
          left: -2px;
          top: -5px;
        }
      }
    }
  }
  .header__wrap {
    display: flex;
    align-items: center;
    .header__wrap_nav {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      li {
        a {
          text-decoration: none;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: normal;
          font-size: 13px;
          line-height: 16px;
          color: #5E667D;
        }
      }
    }
  }
}
</style>
