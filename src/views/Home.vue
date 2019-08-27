<template>
  <div class="home">
    <div class="home-head">
      <img src="../assets/image/home/headImg.jpg" alt="高三农资放心店">
      <div class="home-head-title">
         <span >化肥概览：</span>
      </div>
    </div>
    <div  class="home-body">
       <div v-for="(item, key) in shopList" :key="key" class="home-body-item">
         <img :src="`/source/${item.imgName}/titleImg/img.jpg`" @click="clickProduct(item)"  alt="肥料图">
       </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace,
} from 'vuex-class';
import { ListContent } from '@/interface/data/models';
import List from '@/data/shop-list';

const shopStore = namespace('shop');

@Component({
  components: {
  },
})
export default class App extends Vue {
 private shopList: ListContent[] = List;
 @shopStore.Mutation('setShopList') private setShopList: any;
 @shopStore.Mutation('setShopDetail') private setShopDetail: any;
 private mounted() {
   this.setShopList(List);
 }
 private clickProduct(item: ListContent) {
    this.setShopDetail(item);
    this.$router.push({name: 'detail'});
 }
}
</script>

<style lang="stylus">
.home
 height 100vh
 &-head 
  height 38vh
  position relative
  width 100vw
  overflow hidden
  img 
   width 100vw
   height 35vh
   position absolute
   left 0
  &-title
    height 10vh
    background-color white
    position absolute
    width calc(100% - 2px)
    left 0
    bottom 0
    border-top-left-radius 0.3rem
    border-top-right-radius 0.3rem
    border 1px solid gray 
    border-bottom-style none
    text-align left 
    span 
     font-size 0.4rem
     display inline-block
     margin-left 0.3rem
 &-body
  min-height 62vh
  margin-bottom 1rem
  border 1px solid gray
  background-color white
  border-top-style none
  border-bottom-style none
  width calc(100% - 2px) 
  display flex
  flex-flow row wrap
  justify-content space-between
  overflow-x hidden
  &-item
   margin 0.2rem
   margin-left 0.25rem
   margin-right  0.2.5rem
   width calc(50vw - 0.6rem)
   text-align center
   border 1px solid gray 
   border-radius 0.1rem 
   height 4rem
   display block
   box-shadow 5px 5px 10px rgba(0, 0, 0, 0.349019607843137), 2px 2px 10px 0px rgba(102, 102, 102, 0.349019607843137) inset
   img 
    width 2.6rem
    vertical-align middle
    height 3.5rem
    margin-top 0.25rem
    border-radius 0.1rem
</style>

