<template>
  <div class="main_menu">
    <div class="main_menu__attribute">
      <b-container fluid>
        <b-row class="main_menu__wrap">
          <b-col md="9" cols="9" class="main_menu__filter_wrap">
            <div class="main_menu__filter" :class="toggleMenu ? 'main_menu__filter_active' : ''">
              <b-container fluid>
                <b-row v-if="toggleMenu">
                  <b-col md="3" cols="3">
                    <ul class="main_menu__filter_rating">
                      <li @click="rating = !rating" :class="rating ? 'main_menu__filter_rating_active' : ''"><a href="javascript:void(0);">A+</a></li>
                      <li><a href="javascript:void(0);">B+</a></li>
                      <li><a href="javascript:void(0);">C+</a></li>
                    </ul>
                  </b-col>
                  <b-col md="5" cols="5" class="main_menu__filter_category_wrap">
                    <ul class="main_menu__filter_category">
                      <li @click="category = !category" :class="category ? 'main_menu__filter_category_active' : ''"><a href="javascript:void(0);">ГЧП</a></li>
                      <li><a href="javascript:void(0);">Частные</a></li>
                      <li><a href="javascript:void(0);">Все</a></li>
                    </ul>
                  </b-col>
                  <b-col md="4" cols="4" class="main_menu__filter_date_wrap">
                    <div class="main_menu__filter_date">  
                      <date-picker class="main_menu__filter_date_1" placeholder="с" format="MM.dd" v-model="date_to"></date-picker>
                      <date-picker class="main_menu__filter_date_2" placeholder="по" format="MM.dd" v-model="date_from"></date-picker>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </b-col>
          <b-col md="3" cols="3" class="main_menu__icons_wrap">
            <a @click="toggleMenu = !toggleMenu" href="javascript:void(0);" class="main_menu__icon">
              <img v-if="toggleMenu" src="@/static/main_menu_true.svg" alt="">
              <img v-else src="@/static/menu_home.svg" alt="">
            </a>
            <a href="javascript:void(0);" class="main_menu__dropdown" @click="menu = !menu">
              <span>Сначала новые</span>
              <transition name="fade">
                <ul v-if="menu" class="main_menu__dropdown_list">
                  <li><a href="javascript:void(0);">По дате: Новые</a></li>
                  <li><a href="javascript:void(0);">По дате: Старые</a></li>
                  <li><a href="javascript:void(0);">По рейтингу</a></li>
                  <li><a href="javascript:void(0);">Убывание цены</a></li>
                  <li><a href="javascript:void(0);">Возрастание цены</a></li>
                </ul>
              </transition>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      rating: false,
      category: false,
      toggleMenu: true,
      date_to: '',
      date_from: ''
    }
  },
}
</script>

<style lang="scss">
.main_menu {
  position: relative;
  &__filter_wrap {
    display: flex;
    align-items: center;
    min-height: 65px;
  }
  &__filter {
    opacity: 0;
    background: #FFFFFF;
    box-shadow: 0px 11px 20px rgba(186, 186, 186, 0.2);
    border-radius: 39px;
    width: 0;
    min-height: 60px;
    top: 3px;
    right: -93px;
    position: absolute;
    z-index: 2;
    transition: all 1s;
    &_active {
      width: 80%;
      transition: all 1s;
      opacity: 1;
    }
    &_date {
      background: #FAFAFA;
      border: 1px solid #EBEBEB;
      box-sizing: border-box;
      border-radius: 8px;
      min-height: 40px;
      display: flex;
      width: 82%;
      &_wrap {
        display: flex;
        align-items: center; 
      }
      .vdp-datepicker {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
      }
      .vdp-datepicker__calendar {
        top: 50px;
      }
      &_1 {
        border-right: 1px solid #EBEBEB;
        input {
          display: flex;
          align-items: center;
          min-height: 38px;
          background: transparent;
          border: 0;
          width: 100%;
          padding-left: 15px;
          font-family: Roboto;
          font-size: 13px;
          line-height: 15px;
          color: #4E525B;
          &:focus {
            outline: none;
          }
        }
      }
      &_2 {
        input {
          display: flex;
          background: transparent;
          border: 0;
          align-items: center;
          min-height: 38px;
          width: 100%;
          padding-left: 15px;
          font-family: Roboto;
          font-size: 13px;
          line-height: 15px;
          color: #4E525B;
          &:focus {
            outline: none;
          }
        }
      }
    }
    &_rating_active {
      background: #54D469!important;
      border: 3px solid rgba(255, 255, 255, 0.34);
      box-sizing: border-box;
      a {
        color: #fff!important;
      }
    }
    &_category {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      &_active {
        border: 2px solid #678DF9!important;
        box-sizing: border-box;
        border-radius: 8px;
        a {
          color: #678DF9!important;
          font-weight: bold!important;
        }
      }
      &_wrap {
        display: flex;
        align-items: center;
        border-right: 1px solid #F8F8F8;
      }
      li {
        border: 1px solid #EBEBEB;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 12px 30px;
        cursor: pointer;
        &:hover {
          border: 2px solid #678DF9;
          box-sizing: border-box;
          border-radius: 8px;
          a {
            color: #678DF9;
            font-weight: bold;
          }
        }
        a {
          font-family: 'Roboto';
          font-weight: 500;
          font-size: 13px;
          line-height: 16px;
          text-align: center;
          color: #4E525B;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
      }
    }
    &_rating {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-right: 1px solid #F8F8F8;
      min-height: 60px;
      padding-right: 25px;
      li {
        width: 40px;
        min-height: 40px;
        border-radius: 50%;
        background: #EBEBEB;
        border: 3px solid rgba(255, 255, 255, 0.34);
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
          background: #54D469;
          border: 3px solid rgba(255, 255, 255, 0.34);
          box-sizing: border-box;
          a {
            color: #fff;
          }
        }
        a {
          font-family: 'Roboto';
          font-weight: bold;
          font-size: 13px;
          line-height: 16px;
          color: #4E525B;
          text-decoration: none;
        }
      }
    }
  }
  &__wrap {
    min-height: 120px;
    display: flex;
    align-items: center;
  }
  &__icon {
    margin-right: -50px;
    position: relative;
    z-index: 2;
  }
  &__icons_wrap {
    display: flex;
    justify-content: space-around;
    margin-left: -18px;
  }
  &__dropdown {
    &:hover {
      text-decoration: none;
    }
    position: relative;
    span {
      background: #FFFFFF;
      border: 1px solid #DCDCDC;
      box-sizing: border-box;
      border-radius: 8px;
      padding: 20px 38px;
      display: flex;
      align-items: center;
      z-index: 2;
      font-family: 'Roboto';
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      text-align: center;
      color: #4E525B;
      position: relative;
    }
  }
  &__dropdown_list {
    position: absolute;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    background: #fff;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.13);
    border-radius: 8px;
    width: 172px;
    min-height: 300px;
    top: 45%;
    left: 0%;
    z-index: 1;
    transition: opacity 2s ease-in-out;
    li {
      padding: 13px;
      &:first-child {
        margin-top: 30px;
      }
      a {
        font-family: Roboto;
        font-weight: 500;
        font-size: 13px;
        line-height: 15px;
        text-align: center;
        color: #4E525B;
        &:hover {
          text-decoration: none;
          color: #426DE6;
        }
      }
    }
  }
}
</style>