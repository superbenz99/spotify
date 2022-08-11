import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import UserModule from '~/store/user.module'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({})

export const store = new Vuex.Store<any>({
  plugins: [vuexLocal.plugin],
})
