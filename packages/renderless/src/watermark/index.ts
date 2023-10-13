export const getmark = () => {
  const setWatermark = (
    refs: any,
    markType: string,
    str: any,
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
    const id = 'ZxqkLTN5ZgQLauJKxTjz86Gr5y'

    if (document.getElementById(id) !== null) {
      if (fullScreen) {
        document.body.removeChild(document.getElementById(id)!)
      } else {
        refs.waterMarkRef.removeChild(document.getElementById(id)!)
      }
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
      //设置在绘制文本时使用的当前文本基线
      // cans.textBaseline = "Middle";
      //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
      // cans.fillText(str, can.width / 8, can.height / 2)
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

    return id
  }
  const draw = (refs, can, id, zIndex, fullScreen, opacity) => {
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

  const watermark = (
    markType: string,
    str: string,
    refs: any,
    fullScreen: boolean,
    rotate: number,
    zIndex: string,
    font: string,
    fillStyle: string,
    textAlign: CanvasTextAlign,
    image: string,
    opacity: string
  ) => {
    let id = setWatermark(refs, markType, str, fullScreen, rotate, zIndex, font, fillStyle, textAlign, image, opacity)
    setInterval(() => {
      if (id && document.getElementById(id) === null) {
        id = setWatermark(refs, markType, str, fullScreen, rotate, zIndex, font, fillStyle, textAlign, image, opacity)
      }
    }, 500)
    window.onresize = () => {
      setWatermark(refs, markType, str, fullScreen, rotate, zIndex, font, fillStyle, textAlign, image, opacity)
    }
  }
  return { watermark }
}

// export const watermark = (
//   markType: string,
//   str: string,
//   refs: any,
//   fullScreen: boolean,
//   rotate: number,
//   zIndex: string,
//   font: string,
//   fillStyle: string,
//   textAlign: CanvasTextAlign,
//   image: string,
//   opacity: string
// ) => {
//   let id = setWatermark(refs, markType, str, fullScreen, rotate, zIndex, font, fillStyle, textAlign, image, opacity)
//   setInterval(() => {
//     if (id && document.getElementById(id) === null) {
//       id = setWatermark(refs, markType, str, fullScreen, rotate, zIndex, font, fillStyle, textAlign, image, opacity)
//     }
//   }, 500)
//   window.onresize = () => {
//     setWatermark(refs, markType, str, fullScreen, rotate, zIndex, font, fillStyle, textAlign, image, opacity)
//   }
// }

// export const removeWatermark = (refs: any, id: string, fullScreen: boolean) => {
//   if (document.getElementById(id) !== null) {
//     if (fullScreen) {
//       document.body.removeChild(document.getElementById(id)!)
//     } else {
//       refs.waterMarkRef.removeChild(document.getElementById(id)!)
//     }
//   }
// }

// const setWatermark = (
//   refs: any,
//   markType: string,
//   str: any,
//   fullScreen: boolean,
//   rotate: number,
//   zIndex: string,
//   font: string,
//   fillStyle: string,
//   textAlign: CanvasTextAlign,
//   image: string,
//   opacity: string
// ) => {
//   if (!refs) {
//     return
//   }
//   const id = 'ZxqkLTN5ZgQLauJKxTjz86Gr5y'

//   removeWatermark(refs, id, fullScreen)

//   const can = document.createElement('canvas')
//   can.width = 150
//   can.height = 120
//   const cans = can.getContext('2d')!
//   cans.rotate((rotate * Math.PI) / 180)
//   if (markType === 'text') {
//     cans.font = font
//     cans.fillStyle = fillStyle
//     cans.textAlign = textAlign
//     //设置在绘制文本时使用的当前文本基线
//     // cans.textBaseline = "Middle";
//     //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
//     // cans.fillText(str, can.width / 8, can.height / 2)
//     if (Array.isArray(str)) {
//       str.forEach((item, index) => {
//         cans.fillText(item, can.width / 8, (can.height / str.length + 1) * (index + 1))
//       })
//     } else {
//       cans.fillText(str, can.width / 8, can.height / 2)
//     }
//     draw(refs, can, id, zIndex, fullScreen, opacity)
//   }
//   if (markType === 'image') {
//     let img = new Image()
//     img.src = image + '?v=' + Math.random() // 处理缓存
//     img.crossOrigin = '*' // 支持跨域图片
//     img.onload = function () {
//       cans.clearRect(0, 0, can.width, can.height)
//       cans.drawImage(img, 0, 0, img.width, img.height, 0, 50, img.width * 0.6, img.height * 0.6)
//       draw(refs, can, id, zIndex, fullScreen, opacity)
//     }
//   }

//   return id
// }

// const draw = (refs, can, id, zIndex, fullScreen, opacity) => {
//   const div = document.createElement('div')
//   div.id = id
//   div.style.pointerEvents = 'none'
//   div.style.zIndex = zIndex
//   div.style.opacity = opacity
//   if (fullScreen) {
//     div.style.top = '30px'
//     div.style.left = '0px'
//     div.style.position = 'fixed'
//     div.style.width = document.documentElement.clientWidth + 'px'
//     div.style.height = document.documentElement.clientHeight + 'px'
//     div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
//     document.body.appendChild(div)
//   } else {
//     div.style.width = refs.waterMarkRef.style.width
//     div.style.height = refs.waterMarkRef.style.height
//     div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
//     refs.waterMarkRef.appendChild(div)
//   }
// }
