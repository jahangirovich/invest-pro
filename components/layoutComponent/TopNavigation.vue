<template>
  <b-container fluid>
    <div class="left">
      <img src="@/static/arrow-left.svg" alt="">
      <div class="left_content">
        <p class="bigger">ФИНАНСОВАЯ МОДЕЛЬ</p>
        <p><span>Проект</span> Строительство общежития </p>
      </div>
    </div>
    <div class="right">
      <p>Способ осуществления ГЧП  <span>Контрактный</span></p>
      <img src="@/static/back_ahead.svg" alt="">
    </div>
  </b-container>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  @import '@/assets/_mixins'
  .container-fluid
    padding: 10px 30px !important
    background-color: white !important
    @include flex
    justify-content: space-between
    .left
      @include flex
      align-items: center
      &_content
        padding-left: 10px
        >p
          font-weight: 500
          font-size: 14px
          span
            color: #9C9C9C
        .bigger
          font-weight: 600
          font-size: 14px
          line-height: 17px
          color: #54D469
    .right
      @include flex
      align-items: center
      p
        font-weight: 500
        font-size: 12px
        line-height: 14px
        padding: 0 10px
        span
          color: #426DE6
    p
      margin: 0
      padding: 0
      
</style>