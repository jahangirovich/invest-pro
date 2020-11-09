<template>
    <div :class="`spinner_content obj`" >
        <b-container fluid>
            <div class="spinner_content_input_content" v-if="id===0">
                <SpinnerContentInput 
                v-for="(item,i) in queryQueryInput"
                :key="i"
                :object="item"
                />
            </div>
            <div class="spinner_content_table_content" v-if="id != 0">
                <SpinnerContentTable
                    v-for="(item,i) in queryTableDate"
                    :key="i"
                    :datas="item"
                    >
                    <div>
                        <p>ASdka</p>
                    </div>
                </SpinnerContentTable>
            </div>
        </b-container>
    </div>
</template>

<script>
import SpinnerContentInput from '@/components/financeModel/SpinnerContentInput'
import SpinnerContentTable from '@/components/financeModel/SpinnerContentTable'
import {mapGetters} from 'vuex'
export default {
    props:['id'],
    components:{
        SpinnerContentInput,
        SpinnerContentTable
    },
    computed:{
        ...mapGetters([
            'queryQueryInput',
            'queryTableDate'
        ]),
    }
}
</script>

<style scoped lang="sass">
    @import '@/assets/_mixins'
    .hidden
        height: 0 !important
    .spinner_content
        overflow: hidden
        position: relative
        @include transition(0.3s)
        .container-fluid
            margin: 0
            padding: 30px
        &_input_content
            @include flex
            flex-wrap: wrap
        &_table_content
            border-radius: 10px
            display: block
            overflow: hidden
</style>