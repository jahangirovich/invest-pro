<template>
  <div class="main__content">
    <b-container fluid>
      <b-row>
        <b-col md="12" xl="12" sm="12" cols="12" class="main__content_block">
          <div class="main__content_block_descr" style="border: 2px solid #54D469; box-sizing: border-box; border-radius: 8px;">
            <div class="main__content_block_descr__wrap">
              <div class="main__content_block_descr__wrap_img">
                <img src="@/static/content_bg.svg" style="border-right: 2px solid #54D469; border-radius: 8px;" alt="">
                <div class="rating">
                  <h3>А+</h3>
                </div>
                  <div class="subrating">
                  <h3>ГЧП</h3>
                </div>
              </div>
              <div class="main__content_block_descr__wrap_text">
                <h3>Разработка портала</h3>
                <span>Осталось 17 дней 12 часов</span>
                <div class="main__content_block_descr__wrap_text_inner">
                  <h3>Бюджет проекта   3 700 000 ₸</h3>
                  <div class="progress_bar"></div>
                  <div class="progress_sum">
                    <h3>Cобрано 3 200 000 ₸</h3>
                    <h3>Ещё собрать 500 000 ₸</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="main__content_block_descr__result">
              <div class="main__content_block_descr__result_top">
                <h3>Срок займа <strong>4 месяца</strong></h3>
                <h3>Процентная ставка <strong>8%</strong></h3>
              </div>
              <div class="main__content_block_descr__result_wrap">
                <div class="main__content_block_descr__result_bottom">
                  <a href="javascript:void(0);">
                    <span>Доход ₸</span>
                    <h3>1300000</h3>
                    <img src="@/static/result.svg" alt="">
                  </a>
                </div>
                <div class="main__content_block_descr__result_favorite">
                  <a href="javascript:void(0);" @click="favorite = !favorite">
                    <img v-if="!favorite" class="favorite" src="@/static/favorite.svg" alt="">
                    <img v-else class="favorite_active" src="@/static/favorite_active.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="12" xl="12" sm="12" cols="12" class="main__content_block">
          <div class="main__content_block_descr">
            <div class="main__content_block_descr__wrap">
              <div class="main__content_block_descr__wrap_img">
                <img src="@/static/content_bg.svg" alt="">
                <div class="rating" style="background: #678DF9!important">
                  <h3>B+</h3>
                </div>
                <!-- <div class="subrating">
                  <h3>ГЧП</h3>
                </div> -->
              </div>
              <div class="main__content_block_descr__wrap_text">
                <h3>Разработка портала</h3>
                <span>Осталось 17 дней 12 часов</span>
                <div class="main__content_block_descr__wrap_text_inner">
                  <h3>Бюджет проекта   3 700 000 ₸</h3>
                  <div class="progress_bar"></div>
                  <div class="progress_sum">
                    <h3>Cобрано 3 200 000 ₸</h3>
                    <h3>Ещё собрать 500 000 ₸</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="main__content_block_descr__result">
              <div class="main__content_block_descr__result_top">
                <h3>Срок займа <strong>4 месяца</strong></h3>
                <h3>Процентная ставка <strong>8%</strong></h3>
              </div>
              <div class="main__content_block_descr__result_wrap">
                <div class="main__content_block_descr__result_bottom">
                  <a href="javascript:void(0);">
                    <span>Доход ₸</span>
                    <h3>1300000</h3>
                    <img src="@/static/result.svg" alt="">
                  </a>
                </div>
                <div class="main__content_block_descr__result_favorite">
                  <a href="javascript:void(0);" @click="favorite = !favorite">
                    <img v-if="!favorite" class="favorite" src="@/static/favorite.svg" alt="">
                    <img v-else class="favorite_active" src="@/static/favorite_active.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="12" xl="12" sm="12" cols="12" class="main__content_block">
          <div class="main__content_block_descr" >
            <div class="main__content_block_descr__wrap">
              <div class="main__content_block_descr__wrap_img">
                <img src="@/static/content_bg.svg"  alt="">
                <div class="rating">
                  <h3>А+</h3>
                </div>
                  <!-- <div class="subrating">
                  <h3>ГЧП</h3>
                </div> -->
              </div>
              <div class="main__content_block_descr__wrap_text">
                <h3>Разработка портала</h3>
                <span>Осталось 17 дней 12 часов</span>
                <div class="main__content_block_descr__wrap_text_inner">
                  <h3>Бюджет проекта   3 700 000 ₸</h3>
                  <div class="progress_bar"></div>
                  <div class="progress_sum">
                    <h3>Cобрано 3 200 000 ₸</h3>
                    <h3>Ещё собрать 500 000 ₸</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="main__content_block_descr__result">
              <div class="main__content_block_descr__result_top">
                <h3>Срок займа <strong>4 месяца</strong></h3>
                <h3>Процентная ставка <strong>8%</strong></h3>
              </div>
              <div class="main__content_block_descr__result_wrap">
                <div class="main__content_block_descr__result_bottom">
                  <a href="javascript:void(0);">
                    <span>Доход ₸</span>
                    <h3>1300000</h3>
                    <img src="@/static/result.svg" alt="">
                  </a>
                </div>
                <div class="main__content_block_descr__result_favorite">
                  <a href="javascript:void(0);" @click="favorite = !favorite">
                    <img v-if="!favorite" class="favorite" src="@/static/favorite.svg" alt="">
                    <img v-else class="favorite_active" src="@/static/favorite_active.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="12" xl="12" sm="12" cols="12" class="main__content_block">
          <div class="main__content_block_descr" style="border: 2px solid #678DF9; box-sizing: border-box; border-radius: 8px;">
            <div class="main__content_block_descr__wrap">
              <div class="main__content_block_descr__wrap_img">
                <img src="@/static/content_bg.svg" style="border-right: 2px solid #678DF9; border-radius: 8px;" alt="">
                <div class="rating" style="background: #678DF9">
                  <h3>B+</h3>
                </div>
                  <div class="subrating" style="background: #678DF9">
                  <h3>ГЧП</h3>
                </div>
              </div>
              <div class="main__content_block_descr__wrap_text">
                <h3>Разработка портала</h3>
                <span>Осталось 17 дней 12 часов</span>
                <div class="main__content_block_descr__wrap_text_inner">
                  <h3>Бюджет проекта   3 700 000 ₸</h3>
                  <div class="progress_bar"></div>
                  <div class="progress_sum">
                    <h3>Cобрано 3 200 000 ₸</h3>
                    <h3>Ещё собрать 500 000 ₸</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="main__content_block_descr__result">
              <div class="main__content_block_descr__result_top">
                <h3>Срок займа <strong>4 месяца</strong></h3>
                <h3>Процентная ставка <strong>8%</strong></h3>
              </div>
              <div class="main__content_block_descr__result_wrap">
                <div class="main__content_block_descr__result_bottom">
                  <a href="javascript:void(0);">
                    <span>Доход ₸</span>
                    <h3>1300000</h3>
                    <img src="@/static/result.svg" alt="">
                  </a>
                </div>
                <div class="main__content_block_descr__result_favorite">
                  <a href="javascript:void(0);" @click="favorite = !favorite">
                    <img v-if="!favorite" class="favorite" src="@/static/favorite.svg" alt="">
                    <img v-else class="favorite_active" src="@/static/favorite_active.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorite: false,
    }
  }

}
</script>

<style lang="scss">
  .favorite {
    border: 3px solid #F4F4F4;
    box-sizing: border-box;
    border-radius: 50%;
    padding: 11px;
  }
  .favorite_active {
    border: 3px solid rgba(99, 140, 255, 0.34);
    box-sizing: border-box;
    border-radius: 50%;
    padding: 11px;
  }
</style>