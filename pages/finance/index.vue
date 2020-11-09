<template>
    <div >
        <Source :data="querySpinnerHeader" />
    </div>
</template>

<script>
import Source from '@/components/financeModel/Source.vue'
import {mapGetters} from 'vuex'
export default {
    layout: 'main',
    components:{
        Source
    },
    computed:{
        ...mapGetters([
            'querySpinnerHeader'
        ])
    }
}
</script>

<style lang="sass">
    .nav_up
        display: block !important
</style>