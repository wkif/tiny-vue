import { getmark } from './index'
export const api = ['state']
export const renderless = (props, { toRefs, onMounted, onUnmounted }, { refs }): Record<string, any> => {
  const { markType, markText, fullScreen, rotate, zIndex, font, fillStyle, textAlign, image, opacity } = toRefs(props)
  onMounted(() => {
    const { watermark } = getmark()
    watermark(
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
    state
  }
  return api
}
