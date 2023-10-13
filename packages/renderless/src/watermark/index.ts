// const id = 'ZxqkLTN5ZgQLauJKxTjz86Gr5y'

export const watermark = (
  id: string,
  markType: string,
  str: string,
  refs: Ref<HTMLElement>,
  fullScreen: boolean,
  rotate: number,
  zIndex: string,
  font: string,
  fillStyle: string,
  textAlign: CanvasTextAlign,
  image: string,
  opacity: string
) => {
  setWatermark(id, refs, markType, str, fullScreen, rotate, zIndex, font, fillStyle, textAlign, image, opacity)
  window.onresize = () => {
    setWatermark(id, refs, markType, str, fullScreen, rotate, zIndex, font, fillStyle, textAlign, image, opacity)
  }
}

export const removeWatermark = (id: string, refs: Ref<HTMLElement>, fullScreen: boolean) => {
  console.log('id', id)

  if (document.getElementById(id) !== null) {
    if (fullScreen) {
      document.body.removeChild(document.getElementById(id)!)
    } else {
      refs.waterMarkRef.removeChild(document.getElementById(id)!)
    }
  }
}

const setWatermark = (
  id: string,
  refs: Ref<HTMLElement>,
  markType: string,
  str: string,
  fullScreen: boolean,
  rotate: number,
  zIndex: string,
  font: string,
  fillStyle: string,
  textAlign: CanvasTextAlign,
  image: string,
  opacity: string
) => {
  if (!refs) {
    return
  }
  const can = document.createElement('canvas')
  can.width = 150
  can.height = 120
  const cans = can.getContext('2d')!
  cans.rotate((rotate * Math.PI) / 180)
  if (markType === 'text') {
    cans.font = font
    cans.fillStyle = fillStyle
    cans.textAlign = textAlign
    if (Array.isArray(str)) {
      str.forEach((item, index) => {
        cans.fillText(item, can.width / 8, (can.height / str.length + 1) * (index + 1))
      })
    } else {
      cans.fillText(str, can.width / 8, can.height / 2)
    }
    draw(refs, can, id, zIndex, fullScreen, opacity)
  }
  if (markType === 'image') {
    let img = new Image()
    img.src = image + '?v=' + Math.random() // 处理缓存
    img.crossOrigin = '*' // 支持跨域图片
    img.onload = function () {
      cans.clearRect(0, 0, can.width, can.height)
      cans.drawImage(img, 0, 0, img.width, img.height, 0, 50, img.width * 0.6, img.height * 0.6)
      draw(refs, can, id, zIndex, fullScreen, opacity)
    }
  }
}

const draw = (
  refs: Ref<HTMLElement>,
  can: HTMLElement,
  id: string,
  zIndex: string,
  fullScreen: boolean,
  opacity: string
) => {
  removeWatermark(id, refs, fullScreen)
  const div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.zIndex = zIndex
  div.style.opacity = opacity
  if (fullScreen) {
    div.style.top = '30px'
    div.style.left = '0px'
    div.style.position = 'fixed'
    div.style.width = document.documentElement.clientWidth + 'px'
    div.style.height = document.documentElement.clientHeight + 'px'
    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
    document.body.appendChild(div)
  } else {
    div.style.width = refs.waterMarkRef.style.width
    div.style.height = refs.waterMarkRef.style.height
    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
    refs.waterMarkRef.appendChild(div)
  }
}

export const unsetWatermark =
  ({ refs, props }) =>
  (event: MouseEvent) => {
    window.onresize = () => {}
    console.log('props', props)
    removeWatermark(props.id, refs, props.fullScreen)
  }
