<template>
  <a href="javascript:void(0);" class="projects" >
    <div class="projects__wrapper">
      <div class="projects__descr">
        <div class="projects__number" :style="projects.full ? 'background: #54D469;' : 'background: #426DE6'">{{projects.id}}</div>
        <div class="projects__title" @click="projectView = !projectView">{{projects.title}}</div>
      </div>
      <div class="projects__clear" v-if="projectView == false">
        <span>Очистить раздел</span>
        <img src="@/static/clear.svg" alt="">
      </div>
      <div class="projects__hide" v-if="projectView" @click="projectView = false">
        <span>Свернуть</span>
        <img src="@/static/arrow_top.svg" alt="">
      </div>
      <div class="projects__btn" v-else>
        <nuxt-link :to="projects.link">
          <span>{{projects.fullTitle}} <img :src="projects.full ? require('@/static/edit.svg') : require('@/static/next.svg')" :style="projects.full ? 'margin-left: 30px;' : 'margin-left: 15px;'" alt=""></span>
        </nuxt-link>
      </div>
    </div>
    <div v-if="projectView" class="projectView">
      <div v-if="projects.full == false" class="projectView__descr">
        <projectsInner></projectsInner>
        <projectsInner></projectsInner>
      </div>
      <a v-if="projects.full" href="javascript:void(0);" class="project_full">
        <span>Раздел полностью заполнен</span>
        <img src="@/static/full.svg" alt="" />
      </a>
    </div>
  </a>
</template>
<script>
import projectsInner from './projects_inner'
export default {
  data() {
    return {
      projectView: false,
    }
  },
  components: {
    projectsInner
  },
  props: ['projects']
}
</script>

<style lang="scss">
@import "../../assets/text.scss";
  .projectView {
    display: flex;
    flex-direction: column;
    transition: all .5s;
    &__descr {
      height: get-vw-1440(302px);
      background: #EFEFEF;
      border-radius: 8px;
      padding-top: get-vw-1440(30px);
      margin-top: get-vw-1440(15px);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &_inner {
        display: flex;
        align-items: flex-start;
        flex-direction: row;
      }
      &_text {
        position: relative;
        padding-left: get-vw-1440(31px);
        &_reference {
          border: 1px solid #D1D1D1;
          box-sizing: border-box;
          border-radius: 50%;
          padding: get-vw-1440(10px) get-vw-1440(15px);
          position: relative;
          z-index: 2;
          &_wrap {
            position: relative;
            margin-top: get-vw-1440(20px);
            margin-left: get-vw-1440(25px);
            &:hover {
              .projectView__descr_text_reference_descr {
                display: block;
              }
            }
          }
          &_descr {
            position: absolute;
            left: 0%;
            top: 0%;
            width: get-vw-1440(464px);
            min-height: get-vw-1440(82px);
            padding: get-vw-1440(16px) get-vw-1440(60px);
            background: #FFFFFF;
            box-shadow: 0px 11px 20px rgba(186, 186, 186, 0.2);
            border-radius: 20px;
            z-index: 1;
            line-height: get-vw-1440(14px)!important;
            display: none;
            &:hover {
              opacity: 0;
            }
            span {
              font-family: 'Roboto';
              font-weight: 500;
              font-size: get-vw-1440(12px);
              color: #4E525B;
            }
          }
          .reference_active {
            display: none;
          }
          &:hover {
            background: #426DE6;
            border: 1px solid #426DE6;
            .reference {
              display: none;
            }
            .reference_active {
              display: block;
              padding-top: get-vw-1440(5px);
              padding-bottom: get-vw-1440(3px);
              z-index: 2;
            }
          }
        }
        h3 {
          font-family: 'Roboto';
          font-weight: 500;
          font-size: get-vw-1440(12px);
          line-height: get-vw-1440(14px);
          color: #4E525B;
          span {
            color: #54D469;
          }
        }
        p {
          font-family: 'Roboto';
          font-size: get-vw-1440(13px);
          line-height: get-vw-1440(15px);
          border-radius: get-vw-1440(8px);
          color: #5E667D;
          background: #fff;
          padding-left: get-vw-1440(22px);
          padding-top: get-vw-1440(15px);
          padding-right: get-vw-1440(81px);
          width: get-vw-1440(633px);
          height: get-vw-1440(89px);
          position: relative;
          &::after {
            content: '';
            position: absolute;
            background-image: url('../../static/projectViewImg.svg');
            background-repeat: no-repeat;
            right: 20px;
            top: 40%;
            height: get-vw-1440(22px);
            width: get-vw-1440(24px);
          }
        }
      }
    }
  }
  .project_full {
    background: #FFFFFF;
    border: 6px solid rgba(204, 244, 210, 0.35);
    border-radius: 35px;
    width: get-vw-1440(280px);
    height: get-vw-1440(50px);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: get-vw-1440(38px);
    margin-bottom: get-vw-1440(46px);
    span {
      font-family: 'Roboto';
      font-size: get-vw-1440(14px);
      line-height: get-vw-1440(17px);
      color: #54D469;
    }
    &:hover {
      text-decoration: none;
    }
  }
  .projects {
    font-family: 'Roboto';
    min-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    transition: all .5s;
    padding-left: get-vw-1440(50px);
    padding-right: get-vw-1440(50px);
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background: #E4E4E4;
    }
    &:hover {
      text-decoration: none;
      background: linear-gradient(90deg, #F4F4F4 0%, #E9E9E9 100%), #C4C4C4;
      .projects__clear {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
    }
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__descr {
      width: get-vw-1440(360px);
      display: flex;
      align-items: center;
    }
    &__clear {
      width: get-vw-1440(186px);
      height: get-vw-1440(50px);
      border: 1px solid #A0A0A0;
      box-sizing: border-box;
      border-radius: 8px;
      position: absolute;
      right: 25%;
      display: none;
      span {
        font-family: 'Roboto';
        font-size: get-vw-1440(14px);
        line-height: get-vw-1440(17px);
        color: #4E525B;
      }
    }
    &__title {
      text-transform: uppercase;
      color: #4E525B;
      padding-left: get-vw-1440(12px);
      font-weight: 600;
      font-family: 'Roboto';
      font-size: get-vw-1440(14px);
      line-height: get-vw-1440(17px);
    }
    &__number {
      font-family: 'Roboto';
      font-size: get-vw-1440(10px);
      width: get-vw-1440(18px);
      height: get-vw-1440(18px);
      color: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__hide {
      width: get-vw-1440(136px);
      height: get-vw-1440(50px);
      margin-top: get-vw-1440(15px);
      border: 1px solid #BEBEBE;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-family: 'Roboto';
      font-size: get-vw-1440(14px);
      line-height: get-vw-1440(17px);
      color: #4E525B;
      &:hover {
        text-decoration: none;
      }
    }
    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 50px;
      background: #FFFFFF;
      width: get-vw-1440(246px);
      border-radius: get-vw-1440(8px);
      span {
        font-family: 'Roboto';
        font-size: get-vw-1440(14px);
        line-height: get-vw-1440(17px);
        color: #4E525B;
        img {
          width: get-vw-1440(21px);
          height: get-vw-1440(21px);
        }
      }
      a {
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
.createProject__btns_wrap {
  width: get-vw-1440(609px);
  display: flex;
  justify-content: space-between;
  a {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: get-vw-1440(14px);
    line-height: get-vw-1440(17px);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: get-vw-1440(50px);
  }
  &__save {
    background: #54D469;
    border-radius: get-vw-1440(8px);
    width: get-vw-1440(213px);
  }
  &__next {
    background: #426DE6;
    border-radius: get-vw-1440(8px);
    width: get-vw-1440(376px);
  }
}
.createProject {
  padding-top: get-vw-1440(30px);
  &_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: get-vw-1440(50px);
    padding-right: get-vw-1440(50px);
    padding-top: get-vw-1440(50px);
    padding-bottom: get-vw-1440(50px);
    .download_pdf {
      color: #426DE6;
      border: 2px solid #426DE6;
      box-sizing: border-box;
      border-radius: get-vw-1440(8px);
      padding: get-vw-1440(17px);
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: get-vw-1440(174px);
    }
    a {
      font-family: 'Roboto';
      font-weight: 500;
      font-size: get-vw-1440(14px);
      line-height: get-vw-1440(17px);
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
