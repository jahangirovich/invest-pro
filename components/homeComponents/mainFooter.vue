<template>
  <div class="main__footer">
    <div class="pagination">
      <b-container fluid>
        <b-row>
          <b-col xl="1" lg="1" md="2" cols="3" class="pagination_arrows">
            <a href="javascript:void(0);" class="pagination__prev">
              <img src="@/static/arrow_white_prev.svg" alt="">
            </a>
          </b-col>
          <b-col xl="9" lg="9" md="8" cols="6">
            <div class="pagination__numbers">
              <ul>
                <li><a href="javascript:void(0);">1</a></li>
                <li><a href="javascript:void(0);">2</a></li>
                <li><a href="javascript:void(0);">3</a></li>
              </ul>
            </div>
          </b-col>
          <b-col xl="2" lg="2" md="2" cols="3" class="pagination_arrows">
            <a href="javascript:void(0);"  class="pagination__next">
              <img src="@/static/arrow_white.svg" alt="">
            </a>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss">
.main__footer {
  margin-bottom: 50px;
}
  .pagination {
    &_arrows {
      display: flex;
      justify-content: center;
    }
    &__prev {
      margin-left: 15px;
    }
    &__next {
      margin-left: 55px;
    }
    &__prev, &__next {
      width: 50px;
      height: 50px;
      background: #426DE6;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__numbers {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        list-style-type: none;
        margin: 0 auto;
        padding: 0;
        width: 20%;
        li {
          a {
            border: 1px solid #426DE6;
            box-sizing: border-box;
            border-radius: 8px;
            font-family: 'Roboto';
            font-weight: bold;
            font-size: 13px;
            line-height: 16px;
            width: 50px;
            height: 50px;
            color: #426DE6;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          &:hover {
            background: #426DE6;
            border-radius: 8px;
            a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
</style>