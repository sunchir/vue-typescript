<template>
  <div class="hot">
    <img :src="hotImg" />
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Hot extends Vue {
    private hotImg: string = require('@/assets/image/hot/hot.png');
}

</script>

<style lang="stylus">
.hot
 height calc(100vh - 1rem)
 width 100vw
 overflow hidden
 img 
  height 100%
  width 100%
</style>


