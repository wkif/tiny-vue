<script setup lang="ts">
import { Watermark } from '@opentiny/vue'
</script>

<template>
  <div class="div">
    <div class="item">
      文字水印：
      <Watermark id="watermark1" markType="text" :markText="['tiny vue']" style="height: 200px; width: 100%" />
    </div>
    <div class="item">
      图片水印：
      <Watermark
        id="watermark2"
        markType="image"
        image="https://res.hc-cdn.com/tinyui-design-common/1.0.5.20230707170109/assets/opentiny-logo.svg"
        style="height: 200px; width: 100%"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.div {
  display: flex;
  .item {
    width: 50%;
  }
}
</style>
