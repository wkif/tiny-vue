<template>
  <div ref="waterMarkRef"></div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/watermark/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [
    ...props,
    'markType',
    'modelValue',
    'markText',
    'fullScreen',
    'rotate',
    'zIndex',
    'font',
    'fillStyle',
    'textAlign',
    'image',
    'opacity'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
