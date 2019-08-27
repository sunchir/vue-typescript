
<template>
    <div class="detail">
        <div class="detail-head">
            <div class="loop">
            <div class="wrap">
              <ul class="slider">
                <li><img :src="pageDetail.head.img1" alt=""></li>
                <li><img :src="pageDetail.head.img2"></li>
                <li><img :src="pageDetail.head.img3"></li>
              </ul>
            </div> 
            <div class="swiper-box">
                <input type="radio" name="swiper" class="first" >
                <input type="radio" name="swiper" class="second" >
                <input type="radio" name="swiper" class="third" >
            </div> 
        </div>
        </div>
        <div class="detail-body">
            <div class="detail-body-price">
              <div class="price-title">参考价：</div>
              <div class="price-mount">
                <span class="icon">￥</span>
                <span class="text">{{pageDetail.price}}</span>
              </div>
            </div>
            <div class="detail-body-product">
              <div class="product-title">产品介绍：</div>
              <div class="product-text">
                <span>
                  {{pageDetail.content}}
                </span>
              </div>
            </div>
            <div class="detail-body-img">
              <div class="img-title">使用效果：</div>
              <div class="img-result">
                <img v-for="(item, key) in pageDetail.footer" :key="key" :src="item" alt="">
              </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace,
} from 'vuex-class';
import { ListContent } from '@/interface/data/models';

const shopList = namespace('shop');

@Component
export default class Detail extends Vue {
  private pageDetail: any = {
    head: {
          img1: '',
          img2: '',
          img3: '',
      },
      price: '',
      content: ``,
      footer: [
         '',
      ],
  };
  @shopList.State('shopDetail') private shopDetail!: ListContent;
  private mounted() {
    const path: string = this.shopDetail.imgName;
    this.pageDetail = require(`../../public/source/${path}/index`).default;
  }
}
</script>
<style lang="stylus" scoped>
* 
  margin 0
  padding 0
ul 
  list-style none
.loop 
  position relative
  width 100vw
  height 35vh
.swiper-box 
  width 100vw
  text-align center
  position absolute
  bottom 0
.detail-head 
 height 35vh
 width 100vw
 overflow hidden
[name="swiper"] 
  width 0.5rem
  height 0.1rem
  appearance none
  position relative
  z-index 2
[name="swiper"]:before 
  content ''
  width 0.5rem
  height 0.1rem
  border 1px solid #20243f
  display inline-block
  vertical-align middle
[name="swiper"]:checked 
  &:before 
    content ''
    width 0.5rem
    height 0.1rem
    border 1px solid #20243f
    display inline-block
    vertical-align middle
  &:after 
    content ''
    width 0.5rem
    height 0.1rem
    background #20243f
    display inline-block
    position absolute
    top 0.1rem
.wrap 
  position relative
  width 100vw
  height 35vh
  border 1px solid #9cc5ef
  overflow hidden
.slider 
  width 300vw
  height 35vh
  font 100px/400px Microsoft Yahei
  text-align center
  color #fff
  margin-left 0
  -webkit-animation slide1 5s ease-out infinite
  li 
    float left
    width 100vw
    height 35vh
  img 
    width 100vw
    height 35vh
/*创建三种动画策略*/
/*当我们点击对应按钮时显示对应的动画*/
.first 
  &:checked 
    .slider 
      -webkit-animation-name slide1
  &:active 
    .slider 
      -webkit-animation-name none
      margin-left 0
.second 
  &:checked 
    .slider 
      background-color red
          -webkit-animation-name slide2
  &:active 
    .slider 
      -webkit-animation-name none
      margin-left -100vw
.third 
  &:checked 
    .slider 
      -webkit-animation-name slide3
  &:active 
    .slider 
      -webkit-animation-name none
      margin-left -200vw
/*短暂地取消动画名称，模拟重启动画*/
@keyframes slide1 {
          0% { margin-left:0;}
          23% { margin-left:0;}
          33% { margin-left:-100vw;}
          56% { margin-left:-100vw;}
          66% { margin-left:-200vw;}
          90% { margin-left:-200vw;}
          100% {margin-left:0;}
}

@keyframes slide2 {
          0% { margin-left:-100vw;}
          23% { margin-left:-100vw;}
          33% { margin-left:-200vw;}
          56% { margin-left:-200vw;}
          66% { margin-left:0;}
          90% { margin-left:0;}
          100% {margin-left:-100vw;}
        }

@keyframes slide3 {
          0% { margin-left:-200vw;}
          23% { margin-left:-200vw;}
          33% { margin-left:0;}
          56% { margin-left:0;}
          66% { margin-left:-100vw;}
          90% { margin-left:-100vw;}
          100% {margin-left:-200vw;}
}

.detail-body
 background-color white
 min-height 60vh
 margin 0.4rem
 margin-bottom 0rem
 border 1px solid gray 
 border-radius 0.2rem
 border-bottom-left-radius 0
 border-bottom-right-radius 0
 border-bottom-style none 
 padding 0.3rem 
 padding-bottom  1rem
 &-price
  text-align left  
  .price-title
   font-size 0.3rem
   color gray
  .price-mount
   border 1px solid black
   border-block-start-style none 
   border-left-style none 
   border-right-style none
   height 1rem
   position relative
   .icon
    width 0.6rem
    height 0.7rem
    background-color black
    display inline-block
    bottom 0
    position absolute
    color white
    font-size 0.5rem
    text-align center
   .text
    font-size 0.6rem
    margin-left 0.7rem
 &-product
  margin-top 0.5rem
  text-align left  
  .product-title
   font-size 0.3rem
   color gray
  .product-text
   width 100%
   background-color rgba(204, 204, 255, 0.517647058823529)
   margin-top 0.2rem
   border-radius 0.3rem
   span 
    font-size 0.4rem
    display inline-flex
    margin 0.2rem
 &-img
  margin-top 0.5rem
  text-align left  
  .img-title
   font-size 0.3rem
   color gray
  .img-result
   margin-top 0.2rem
   img
    width 100%
    border-radius 0.3rem
</style>

