<template>
  <b-container fluid>
    <b-row>
      <b-col md="12" style="padding: 0;">
        <div class="passport">
          <div class="passport__number">1</div>
          <div class="passport__title">Паспорт проекта (общие сведения)</div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8" style="padding: 0;">

      </b-col>
      <b-col md="4" style="padding: 0;">

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: 'main',
}
</script>

<style lang="scss">
@import "../../assets/text.scss";
  .passport {
    font-family: 'Roboto';
    min-height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    transition: all .5s;
    padding-top: get-vw-1440(50px);
    padding-left: get-vw-1440(50px);
    padding-right: get-vw-1440(50px);
    padding-bottom: get-vw-1440(32px);
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background: #E4E4E4;
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
      background: #54D469;
    }
  }
</style>
