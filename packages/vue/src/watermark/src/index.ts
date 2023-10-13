import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'
import MobileTemplate from './mobile.vue'
const $constants = {}

const template = (mode) => {
  return 'mobile-first' === (process.env.TINY_MODE || mode) ? MobileTemplate : PCTemplate
}

export default defineComponent({
  name: $prefix + 'Watermark',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String,
    id: {
      type: String,
      default: ''
    },
    markType: {
      type: String,
      default: 'text'
    },
    markText: {
      type: String || Array<String>,
      default: 'tiny-vue'
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: Number,
      default: -15
    },
    zIndex: {
      type: String,
      default: '100000'
    },
    font: {
      type: String,
      default: '18px Vedana'
    },
    fillStyle: {
      type: String,
      default: 'rgba(200, 200, 200, 0.40)'
    },
    textAlign: {
      type: String,
      default: 'left'
    },
    image: {
      type: String,
      default: ''
    },
    opacity: {
      type: String,
      default: '0.5'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
