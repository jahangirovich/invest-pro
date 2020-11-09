<template>
  <div class="sidebar" :class="sidebarBlock ? 'sidebarWidth' : '' " :style="burgerBool ? 'right: 127px;' : ''">
    <a href="javascript:void(0);" class="sidebar__open" @click="sidebarBlock = !sidebarBlock" >
      <img :class="sidebarBlock ? 'sidebarArrow' : ''" src="@/static/arrow.svg" alt="">
    </a>
    <div class="login" v-if="sidebarBlock">
      <b-container fluid>
        <b-row>
          <b-col md="12" style="padding: 0px;">
            <div class="login__img">
              <img src="@/static/login_img.svg" alt="">
            </div>
            <div class="login__descr">
              <NuxtLink to="/">Войти</NuxtLink>
              <NuxtLink to="/">Зарегистрироваться</NuxtLink>
            </div>
            <div class="login__range">
              <div class="login__range_title">
                <h3>Рассчет вложения</h3>
              </div>
              <div class="login__range_descr">
                <span class="login__range_descr_title">Сумма инвестиций ₸</span>
                <input class="login__range_descr_input" type="text">
                <input type="range" id="volume" name="volume"
                      min="0" max="11">
                <label for="volume"></label>
              </div>
              <div class="login__range_descr">
                <span class="login__range_descr_title">Срок реализации</span>
                <input class="login__range_descr_input" type="text">
                <input type="range" id="volume" name="volume"
                      min="0" max="11">
                <label for="volume"></label>
              </div>
              <div class="login__range_descr">
                <span class="login__range_descr_title">Процентная ставка в год</span>
                <input class="login__range_descr_input" type="text">
                <input type="range" id="volume" name="volume"
                      min="0" max="11">
                <label for="volume"></label>
              </div>
              <div class="login__range_result">
                <span class="login__range_result_title">Прибыль</span>
                <div class="login__range_result_descr">11 000 000 ₸</div>
              </div>
              <div class="login__range_btn">
                <a href="javascript:void(0);">
                  <img src="@/static/update.svg" alt="">
                  <span>Рассчитать заново</span>
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="account" :class="burgerBool ? 'account_active' : ''">
      <ul>
        <li>
          <a href="javascript:void(0);">
            <img src="@/static/my_acc.svg" alt="">
            <span>Мой аккаунт</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <img src="@/static/project.svg" alt="">
            <span>Проекты</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <img src="@/static/notification.svg" alt="">
            <span>События +7</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <img src="@/static/setting.svg" alt="">
            <span>Настройки</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      sidebarBlock: false
    }
  },
  computed: {
    ...mapGetters(['burgerBool'])
  }
}
</script>

<style lang="scss">
.account_active {
  width: 127px!important;
  opacity: 1!important;
  right: -127px!important;
}
.account {
  transition: all .5s;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  transition: all .5s;
  z-index: 99;
  width: 0px;
  padding-top: 70px;
  padding-bottom: 50px;
  background: #6088F8;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      a {
        min-height: 126px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        &:hover {
          background: #4E78EE;
        }
        span {
          font-family: 'Roboto';
          font-weight: 600;
          font-size: 13px;
          line-height: 16px;
          color: #FFFFFF;
          padding-top: 25px;
        }
      }
    }
  }
}
  .sidebarArrow {
    transform: rotate(180deg)!important;
  }
  .sidebarWidth {
    width: 358px!important;
    z-index: 99;
  }
  .sidebar {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 28px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.06);
    transition: all .5s;
    z-index: 100;
    &__open {
      position: absolute;
      left: -14px;
      top: 82px;
      width: 28px;
      min-height: 106px;
      background: #FFFFFF;
      box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.06);
      border-radius: 23px;
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        transform: rotate(0deg);
        transition: all .3s;
      }
    }

    .login {
      padding-top: 110px;
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
      overflow: auto;
      height: 100%;
      &__range {
        display: flex;
        flex-direction: column;
        padding: 36px 66px;
        &_btn {
          background: #F3F3F3;
          border-radius: 60px;
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 38px;
          a {
            text-decoration: none;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 16px;
            color: #4E525B;
            img {
              padding-right: 15px;
            }
          }
        }
        &_result {
          &_title {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            color: #4E525B;
          }
          &_descr {
            font-family: Roboto;
            font-size: 20px;
            line-height: 23px;
            color: #54D469;
          }
        }
        &_title {
          h3 {
            font-family: 'Roboto';
            font-size: 18px;
            line-height: 21px;
            margin-bottom: 25px;
            color: #5E667D;
          }
        }
        &_descr {
          display: flex;
          flex-direction: column;
          padding: 15px 0px;
          input[type=range] {
            -webkit-appearance: none;
            margin: 10px 0;
            width: 100%;
          }
          input[type=range]:focus {
            outline: none;
          }
          input[type=range]::-webkit-slider-runnable-track {
            height: 1px;
            background: #678DF9;
            border-radius: 17px;
            cursor: pointer;
          }
          input[type=range]::-webkit-slider-thumb {
            width: 12px;
            height: 12px;
            margin-top: -5px;
            border-radius: 50%;
            background: #426DE6;
            cursor: pointer;
            transition: all .3s;
            -webkit-appearance: none;
            &:hover {
              width: 17px;
              height: 17px;
              padding: 1px;
              margin-top: -7px;
              border: 5px solid #DDE5FB;
            }
          }
          &_title {
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            color: #4E525B;
          }
          &_input {
            background: #FFFFFF;
            border: 1px solid #BBCDFF;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 14px 20px;
            margin-bottom: 15px;
          }
        }
      }
      &__img {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &__descr {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom:  4px solid #f8f8f8;
        padding-bottom: 25px;
         a {
          font-family: 'Roboto';
          font-weight: 750;
          font-size: 13px;
          line-height: 16px;
          color: #4E525B;
          margin: 18px 0px;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
