<template>
  <div class="main">
    <mainVideo />
    <mainMenu />
    <mainContent />
    <mainFooter />
  </div>
</template>

<script>
import mainVideo from '@/components/homeComponents/mainVideo'
import mainContent from '@/components/homeComponents/mainContent'
import mainMenu from '@/components/homeComponents/mainMenu'
import mainFooter from '@/components/homeComponents/mainFooter'

export default {
  
  components: {
    mainVideo,
    mainContent,
    mainMenu,
    mainFooter
  },
  layout: 'main'
}
</script>
<style href="../assets/media/media.css"></style>
<style lang="scss">
@font-face {
  font-family: "Roboto";
  src: url("./../assets/fonts/Roboto-Regular.ttf");
}
@font-face {
  font-family: "Roboto-Bold";
  src: url("./../assets/fonts/Roboto-Bold.ttf");
}

html, body {
  margin:0;   
  padding:0;
  height:100%;
  position: relative;
}


.main {
  &__video {
    background-image: url('./../static/home_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 270px;
  }
  &__wrap {
    &_descr {
      display: flex;
      min-height: 270px;
      align-items: center;
      justify-content: space-around;
      &:hover {
        text-decoration: none;
      }
      h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        width: 50%;
        margin-left: 45px;
        &::before {
          content: '';
          position: absolute;
          background-image: url('./../static/line.svg');
          background-repeat: no-repeat;
          background-size: contain;
          height: 60%;
          width: 3px;
          top: 20%;
          left: 40%;
        }
      }
    }
  }
  &__content {
    margin-bottom: 50px;
    &_block {
      display: flex;
      &_descr {
        background: #FFFFFF;
        border-radius: 8px;
        width: 100%;
        min-height: 150px;
        margin-left: 30px;
        flex: 0 0 94%;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        &__wrap {
          display: flex;
          &_img {
            width: 155px;
            min-height: 150px;
            border-radius: 8px;
            position: relative;
            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
              line-height: 0;
            }
            .subrating {
              position: absolute;
              width: 80px;
              min-height: 40px;
              background: #54D469;
              border: 2px solid rgba(255, 255, 255, 0.35);
              box-sizing: border-box;
              border-top-right-radius: 23px;
              border-bottom-right-radius: 23px;
              bottom: 13px;
              left: 36px;
              h3 {
                font-family: 'Roboto';
                font-weight: bold;
                font-size: 13px;
                line-height: 16px;
                margin: 0;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                margin: 0;
                min-height: 34px;
              }
            }
            .rating {
              position: absolute;
              width: 40px;
              min-height: 40px;
              bottom: 13px;
              left: 13px;
              background: #54D469;
              border: 3px solid rgba(255, 255, 255, 0.34);
              box-sizing: border-box;
              border-radius: 50%;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
              z-index: 1;
              h3 {
                font-family: 'Roboto';
                font-weight: bold;
                font-size: 13px;
                line-height: 16px;
                margin: 0;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                min-height: 34px;
              }
            }
          }
          &_text {
            margin-top: 18px;
            margin-bottom: 24px;
            margin-left: 38px;
            width: 306px;
            h3 {
              font-family: 'Roboto';
              font-size: 18px;
              line-height: 21px;
              color: #5E667D;
              margin: 0;
            }
            span {
              font-family: 'Roboto';
              font-size: 10px;
              line-height: 12px;
              color: #A0A0A0;
            }
            &_inner {
              margin-top: 25px;
              h3 {
                font-family: 'Roboto';
                font-weight: bold;
                font-size: 10px;
                line-height: 12px;
                color: #426DE6;
              }
              .progress_bar {
                background: #E9E9E9;
                border-radius: 13px;
                height: 5px;
                margin: 8px 0px;
              }
              .progress_sum {
                display: flex;
                justify-content: space-between;
              }
            }
          }
        }
        &__result {
          width: 306px;
          &_top {
            margin-bottom: 55px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 23px;
            h3 {
              font-family: 'Roboto';
              font-size: 10px;
              line-height: 12px;
              color: #A0A0A0;
              strong {
                color: #3078FF;
                font-weight: bold;
              }
            }
          }
          &_wrap {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          &_bottom {
            display: flex;
            a {
              display: flex;
              justify-content: space-around;
              align-items: center;
              min-height: 24px;
              background: linear-gradient(270deg, #5ADC6F -74.43%, rgba(98, 236, 121, 0) 50%), #54D469;
              border-radius: 22px;
              width: 155px;
              &:hover {
                text-decoration: none;
              }
              span {
                font-family: 'Roboto';
                font-weight: 500;
                font-size: 10px;
                line-height: 12px;
                text-align: center;
                color: rgba(255, 255, 255, 0.79);
              }
              h3 {
                font-family: 'Roboto';
                font-weight: bold;
                font-size: 11px;
                line-height: 13px;
                text-align: center;
                color: #FFFFFF;
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: width 0.1s ease-in;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
