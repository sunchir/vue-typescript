<template>
  <div class="footer">
      <bar-click @click-item="changeItem" v-for="(dataitem, index) in footerData" :key="index" :dataItem = "dataitem"></bar-click>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import barClick from '../fundamental/barClick.vue';
import { ListData } from '@/interface/data/models.d.ts';
import { footerImg } from '@/utile/imgFile';

@Component({
  components: {
    barClick,
  },
})
export default class Appfooter extends Vue {

 private imgSrc: any = {
   homeblue: footerImg('home-blue'),
   hotblue: footerImg('hot-blue'),
   phoneblue: footerImg('phone-blue'),
   homegray: footerImg('home-gray'),
   hotgray: footerImg('hot-gray'),
   phonegray: footerImg('phone-gray'),
 };
 private footerData: Array<(ListData)> = [
   {
    listId: 'home',
    listLabal: '首页',
    listImage: this.imgSrc[`homegray`],
    listColor: '#DFE0E1',
    listClick: () => {
      this.routerPush({name: 'home'});
    },
  },
  {
    listId: 'hot',
    listLabal: '优惠',
    listImage:  this.imgSrc[`hotgray`],
    listColor: '#DFE0E1',
    listClick: () => {
      this.routerPush({name: 'hot'});
    },
  },
  {
    listId: 'phone',
    listLabal: '电话',
    listImage:  this.imgSrc[`phonegray`],
    listColor: '#DFE0E1',
    listClick: () => {
      this.routerPush({name: 'contact'});
    },
  },
 ];
 private routerPush(param: object) {
   this.$router.push(param);
 }

 private changeItem(clickItemId: string): void {
    this.footerData.forEach((item: ListData) => {
      if (item.listId === clickItemId) {
        item.listColor = 'blue';
        item.listImage = this.imgSrc[`${item.listId}blue`];
      } else {
        item.listColor = '#DFE0E1';
        item.listImage = this.imgSrc[`${item.listId}gray`];
      }
    });
 }
}
</script>

<style lang="stylus">
.footer 
 display flex
 position fixed
 width 100vw
 bottom 0
 background-color white
 padding-top 0.1rem
</style>

