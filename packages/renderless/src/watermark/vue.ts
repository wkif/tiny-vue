import { watermark, unsetWatermark } from './index'
export const api = ['state', 'unsetWatermark']
export const renderless = (props, { toRefs, onMounted, onUnmounted }, { refs }): Record<string, any> => {
  const { id, markType, markText, fullScreen, rotate, zIndex, font, fillStyle, textAlign, image, opacity } =
    toRefs(props)
  onMounted(() => {
    watermark(
      id.value,
      markType.value,
      markText.value,
      refs,
      fullScreen.value,
      rotate.value,
      zIndex.value,
      font.value,
      fillStyle.value,
      textAlign.value,
      image.value,
      opacity.value
    )
  })

  const state = {}
  const api = {
    state,
    unsetWatermark: unsetWatermark({ refs, props })
  }
  return api
}
