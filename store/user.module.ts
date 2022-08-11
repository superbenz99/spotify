import { store } from '@/store'
import {
  Mutation,
  getModule,
  Module,
  VuexModule,
  Action,
} from 'vuex-module-decorators'

const name = 'userModule'

// if (store.state[name]) {
//   store.unregisterModule(name)
// }

@Module({
  dynamic: true,
  name,
  store,
  // preserveState: true,
  // stateFactory: true,
  // namespaced: true,
})
class UserModule extends VuexModule {
  user: any = null

  @Mutation
  SET_USER(user: any) {
    this.user = user
  }

  @Action
  setUser(user: any) {
    this.SET_USER(user)
  }
}

export default getModule(UserModule)
