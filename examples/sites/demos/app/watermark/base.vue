<script setup lang="ts">
import { Watermark, Button as TinyButton } from '@opentiny/vue'
import { onUnmounted, ref } from 'vue'
const waterMarkRef = ref()
const buttRef = ref()
onUnmounted(() => {
  console.log('waterMarkRef', waterMarkRef)
  // waterMarkRef.value.removeWatermark()
})
const removeWatermark = () => {
  console.log('waterMarkRef', waterMarkRef)
  waterMarkRef.value.unsetWatermark()
}
</script>

<template>
  <div>
    <Watermark
      ref="waterMarkRef"
      markType="image"
      :markText="['kif', 'tinyvue', 'kif1']"
      image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
      fullScreen
      style="height: 200px; width: 500px"
    />
    <TinyButton ref="buttRef" @click="removeWatermark">移除水印</TinyButton>
  </div>
</template>

<style lang="less" scoped></style>
