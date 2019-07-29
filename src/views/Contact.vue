<template>
    <div class="contact">
        <div class="contact-head">
            <img :src="headImg" alt="">
        </div>
        <div class="contact-body">
            <div class="contact-body-wechat">
                <div class="head">
                    <img :src="wechatImgs" alt="">
                </div>
                <div class="wechat-box">
                    <div class="item">
                        <img :src="gaoImgt" alt="">
                        <p>高三</p>
                    </div>
                    <div class="item">
                        <img :src="liuImg" alt="">
                        <p>刘姐</p>
                    </div>
                </div>
            </div>
            <div class="contact-body-phone">
                <div class="head">
                    <img :src="phoneImg" alt="">
                </div>
                <div class="contact-box">
                    <p>高三：    13540620583</p>
                    <p>瑶姐：    13980516152</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component
export default class Contact extends Vue  {
    private headImg: string = require('@/assets/image/contact/head.png');
    private gaoImgt: string = require('@/assets/image/contact/gao.png');
    private liuImg: string = require('@/assets/image/contact/liu.png');
    private phoneImg: string = require('@/assets/image/contact/phone.png');
    private wechatImgs: string = require('@/assets/image/contact/wechat.png');
}
</script>

<style lang="stylus">
.contact
 width 100vw
 height (100vh - 1rem)
 overflow hidden
 background-color rgba(65, 113, 156, 1)
 &-body
  width 100vw
  &-phone
   .contact-box 
    p 
     font-size 0.4rem
     margin 0
     color white
   width 100vw
   margin-top 0.3rem
   .head 
    width 100vw
    text-align left 
    padding-left 0.5rem
    img
     width 0.8rem
  &-wechat
   width 100vw
   margin-top 0.3rem
   .wechat-box
    display: flex;
    margin-left 1rem
    margin-right 1rem
    justify-content space-between
    width calc(100vw - 2rem )
    .item
     img 
      height 2.2rem
     p 
      font-size 0.4rem
      color white
      margin 0
   .head 
    width 100vw
    text-align left 
    padding-left 0.5rem
    img
     width 0.8rem
 &-head 
  width 100vw
  height 30vh
  background white
  overflow hidden
  border-radius 0.3rem
  img 
   width 100vw
   margin-top -2rem
   
</style>

