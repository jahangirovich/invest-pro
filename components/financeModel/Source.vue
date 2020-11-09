<template>
    <div class="spinner">
        <div v-for="(item,i) in data" 
            :key="i"
            >
            <div class="head" @click="addClass(i)">
                <b-container fluid> 
                    <div class="spinner_header">
                        <div class="icon">
                            <img src="../../static/arrow_top.svg" alt="">
                        </div>
                        <p>{{ item }}</p>
                    </div>
                </b-container>
            </div>
            <SpinnerContent :id="i"/>
        </div>
    </div>
</template>

<script>
import SpinnerContent from "@/components/financeModel/SpinnerContent.vue"
export default {
    props:['data'],
    components:{
        SpinnerContent
    },
    data(){
        return{
            itemsHeight:[]
        }
    },
    methods:{
        addClass(id){
            let  item = document.getElementsByClassName(`spinner_content`)
            this.itemsHeight[id] = item[id].clientHeight!=0?item[id].clientHeight:this.itemsHeight[id]
            item[id].style.height = `${item[id].clientHeight}px`
            if(item[id].clientHeight != 0) item[id].style.height = '0'
            else item[id].style.height = `${this.itemsHeight[id]}px`
        }
    }
}
</script>


<style scoped lang="sass" >
    @import '@/assets/_mixins'

    .spinner
        font-size: 14px
        .head 
            background-color: #EAEAEA
            &:hover
                background-color: white
        &_header
           width: 100% 
           display: block
           padding: 15px 25px
           display: flex
           align-items: center
           cursor: pointer
           p
               padding-left: 20px
               margin: 0
        
           
</style>