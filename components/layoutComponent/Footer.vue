<template>
  <footer>
    <b-container fluid>
      <b-row>
        <b-col md="12" lg="2" sm="12" cols="12" xl="2" class="footer_logo_wrap">
          <nuxt-link to="/">
            <img class="footer_logo" src="@/static/investpro.svg" alt="">
          </nuxt-link>
        </b-col>
        <b-col md="12" lg="8" sm="12" cols="12" xl="8" class="footer_text">
          <span>© investpro 2020. Все права защищены</span>
        </b-col>
        <b-col md="12" lg="2" sm="12" cols="12" xl="2">
          <div class="footer_soc_icon">
            <a href="javascript:void(0);">
              <img src="@/static/facebook.svg" alt="">
            </a>
            <a href="javascript:void(0);">
              <img src="@/static/youtube.svg" alt="">
            </a>
            <a href="javascript:void(0);">
              <img src="@/static/insta.svg" alt="">
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  
  footer {
    display: flex;
    align-items: center;
    min-height: 70px;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background: #6088F8;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    .footer_logo_wrap {
      display: flex;
      justify-content: center;
      margin-left: -15px;
    }
    .footer_logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .footer_soc_icon {
      display: flex;
      justify-content: space-evenly;
    }
    .footer_text {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 0.01em;
        color: #FFFFFF;
      }
    }
  }
</style>