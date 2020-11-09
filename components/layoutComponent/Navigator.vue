<template>
    <div class="nav_up">
        <div class="navigator">
            <span> < </span>
            <span > > </span>
            <navigatorItem 
                v-for="(item,id) in items" 
                :item="item"
                :key="id">
            </navigatorItem>
        </div>
    </div>
</template>

<script>
import navigatorItem from '@/components/financeModel/navigator/NavigatorItem.vue'

export default {
    layout: 'main',
    data(){
        return{
            items:[],
        }
    },
    mounted(){
        for(let x = 0;x < 10;x++) {
            let vals = {};
            if(x % 2 == 1)  vals = {"check":true}
            else    vals = {"check":false}
            vals["title"]= "cole"+x;
            vals["id"] = x;
            this.items.push(vals);
        }
    },
    components: {
        navigatorItem
    }
}
</script>

<style scoped lang="sass">
    .navigator
        display: flex
        left: 0
        span
            padding: 10px
            background-color: #1B4BD2
            color: #A4BCFF
            cursor: pointer
            transition: 0.3s
            -webkit-transition: 0.3s
            --moz-animation: 0.3s
        span:hover 
            color: white
            background-color: #0A3ABF
</style>