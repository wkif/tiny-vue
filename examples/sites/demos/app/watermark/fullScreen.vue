<script setup lang="ts">
import { Watermark, Button as TinyButton } from '@opentiny/vue'
import { onBeforeMount, ref } from 'vue'
const waterMarkRef = ref()
const removeWatermark = () => {
  console.log('waterMarkRef', waterMarkRef)
  waterMarkRef.value?.unsetWatermark()
}
onBeforeMount(() => {
  console.log('waterMarkRef', waterMarkRef)
  removeWatermark()
})
</script>

<template>
  <div>
    <Watermark
      ref="waterMarkRef"
      id="watermark1"
      markType="image"
      :fullScreen="true"
      image="https://res.hc-cdn.com/tinyui-design-common/1.0.5.20230707170109/assets/opentiny-logo.svg"
      style="height: 200px; width: 100%"
    />
    <TinyButton @click="removeWatermark">移除水印</TinyButton>
  </div>
</template>

<style lang="less" scoped></style>
