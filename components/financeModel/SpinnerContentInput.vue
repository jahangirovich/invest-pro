<template>
  <div class="input_content" >
      <p>{{ object }}</p>
      <div class="input">
          <input type="number">
      </div>
  </div>
</template>

<script>
export default {
    props:["object"]
}
</script>

<style scoped lang="sass">
    @import '@/assets/mixins'
    .input_content
        @include flex
        width: 50%
        align-items: center
        padding: 1% 1%
        p
            margin: 0
            width: 20%
            font-size: 14px
        .input
            width: 80%
            input
                border-radius: 8px
                width: 80%
                font-size: 14px
                padding: 10px
                color: #54D469
                border: 1px solid white
                outline: none
                &:focus
                    border: 1px solid #54D469
</style>