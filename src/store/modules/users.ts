import { VuexModule, Module } from 'vuex-module-decorators';
import store from '@/store';
@Module({
    namespaced: true,
    name: 'users',
    store,
})
export default class UsersModule extends VuexModule {

}
