<template>
  <div class="blocks" :class="item.id==0?'':'other'">
      <div :class="item.id==0?'blocks__notSkewed':'blocks__skewed'"></div>
      <div class="blocks__configure">
          <span :class="item.check ? 'new':'free'">{{ item.title }}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:[
        'item'
    ],
    data(){
        return{
            img:'@/static/Vector.svg'
        }
    },
    mounted(){
        if(this.item.id % 2) this.img = '@/static/arrow.svg'
    }
}
</script>

<style scoped lang="sass">
body
    font-family: Roboto
@mixin transition($s)
    transition: $s
    --webkit-transition: $s
    --moz-transition: $s
@mixin absoluting()
    position: absolute
    width: 100%
    height: 100%
    bottom: 0
    left: 0
.other
    left: -10px
    &::after
        @include absoluting
        @include transition(0.3s)
        content: ''
        width: 0%
        transform: skew(-10deg)
        z-index: 1000
        background-color: white
    &:hover::after
        width: 100% !important
.blocks
    position: relative   
    cursor: pointer
    display: flex
    align-items: center
    z-index: 1
    padding: 0 2%
    text-transform: uppercase
    font-size: 13px

    &__notSkewed
        background-color: #678DF9
        transform: skew(0deg)
        @include absoluting()
        + .blocks__configure
            span
                color: white
        
    &__skewed
        transform: skew(-10deg)
        background: linear-gradient(270deg, #F2F2F2 0.34%, rgba(255, 255, 255, 0) 100%),#FFFFFF
        @include absoluting()
    &__configure
        display: flex
        align-items: center
        justify-content: space-between
        z-index: 1001
        padding:  10px
        .new
            color: #54D469

</style>

