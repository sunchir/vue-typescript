<template>
   <div class="footer-item">
      <div @click="clickItem" class="footer-item-box">
        <img class="footer-item-img" :src="dataItem.listImage"  />
        <span :style="`color:${dataItem.listColor}`" class="footer-item-text">{{dataItem.listLabal}}</span>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { ListData } from '@/interface/data/models.d.ts';

@Component
export default class BarClick extends Vue {
  @Prop() private dataItem?: ListData;
  @Emit()
  private clickItem(): string | void {
    if (this.dataItem) {
      this.dataItem.listClick();
      return this.dataItem.listId;
    }
  }
}
</script>

<style lang="stylus">
.footer 
 &-item
  flex 1
  height 1rem
  &-img
   height 0.5rem
  &-text
   font-size 0.3rem
  &-box
   display flex
   flex-direction column
   justify-content space-between
   align-items center
</style>

