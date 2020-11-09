<template>
  <div class="content_table" 
    :style="computedColor.backgroundStyle">
      <div v-for="(item,i) in datas.arr" 
        :key="i"
        class="content_table_card"
        :style="computedColor.borderStyle">
          <span :style="`color : ${datas.header ? 'white':'#606060'}`">
              {{ item }}
          </span>
      </div>
  </div>
</template>

<script>
export default {
  name:'SpinnerContentTable',
  props:[
    'datas'
  ],
  data(){
    return{
      colorArr:{},
      
    }
  },
  computed:{
    computedColor(){
      if(this.datas.header) this.colorArr["colors"]=["#678DF9","#457AF2"]
      else this.colorArr["colors"] = ["white","#E6E6E6"]
      let borderStyle = {
        borderRight: `1px solid ${this.colorArr.colors[1]}`,
        borderBottom: `1px solid ${this.colorArr.colors[1]}`
      };
      let backgroundStyle = {
        backgroundColor: `${this.colorArr.colors[0]}`
      }
      return {"borderStyle":borderStyle,"backgroundStyle":backgroundStyle}
    }
  }
}
</script>

<style scoped lang="sass">
    @import '@/assets/mixins'
    .content_table
        @include flex  
        flex-wrap: nowrap
        justify-content: space-between
        &_card:nth-last-child(11)
          width: 50% !important
        &_card
            width: 30%
            text-align: center
            @include flex
            align-items: center
            justify-content: center
            span
                display: inline-block
                padding: 20px
                line-height: 14px
                color: #606060
                font-weight: 500

            
</style>