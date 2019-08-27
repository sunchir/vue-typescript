import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { ListContent } from '../models';
@Module({
    namespaced: true,
    name: 'shop',
    store,
})

@Module
export default class ShopMoudle extends VuexModule {
    private shopList: ListContent[] = [];
    private shopDetail: ListContent = {
        imgName: '',
        itemName: '',
    };

    @Mutation
    private setShopList(value: ListContent[]) {
        this.shopList = value;
    }
    @Mutation
    private setShopDetail(value: ListContent) {
        this.shopDetail = value;
    }
}
