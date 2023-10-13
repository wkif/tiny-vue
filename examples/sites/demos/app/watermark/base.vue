<script setup lang="ts">
import { Watermark } from '@opentiny/vue'
</script>

<template>
  <div>
    <Watermark
      id="waterMark"
      markType="image"
      image="https://res.hc-cdn.com/tinyui-design-common/1.0.5.20230707170109/assets/opentiny-logo.svg"
      style="height: 200px; width: 100%"
    />
  </div>
</template>

<style lang="less" scoped></style>
