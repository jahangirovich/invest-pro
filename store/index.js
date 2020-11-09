import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      burger: false,
      inputData:["Net CF","NPV","IRR","Период окупаемости","PI"],
      spinnerHeader:[
        "Показатели финансовой эффективности",
        "Остаток денежных средств на начало",
        "Результат операционной деятельности",
        "Результат инвестиционной деятельности"],
      tableData:[
        {
          arr:["Введите данные по зарплате сотрудника в год или по месячно (₸)","Всего (тыс. тг)","2022","2023","2024","2025","2026","2027","2028","2029","2030"],
          header: true
        },
        {
          arr:["Остаток денежных средств на начало","23 000","23 000","23 000","23 000","23 000","23 000","23 000","23 000","23 000","23 000"],
          header: false
        },
        {
          arr:["Остаток денежных средств на начало","23 000","23 000","23 000","23 000","23 000","23 000","23 000","23 000","23 000","23 000"],
          header: false
        },
        {

        }
      ]
    },
    mutations: {
      burgerAcc(state, burger) {
        state.burger = burger
      }
    },
    getters: {
      burgerBool(state) {
        return state.burger
      },
      queryQueryInput(state){
        return state.inputData
      },
      querySpinnerHeader(state){
        return state.spinnerHeader
      },
      queryTableDate(state){
        return state.tableData
      }
    },
    actions: {

    },

  })

export default store