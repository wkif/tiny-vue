export default {
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'watermark' },
      'desc': { 'zh-CN': '给页面的某个区域加上水印。', 'en-US': 'Watermark an area of the page.' },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'markType',
      'name': { 'zh-CN': '水印类型', 'en-US': 'type' },
      'desc': {
        'zh-CN': '设定水印类型，可选值：text/image',
        'en-US': 'Set the type of watermark, the options are text/image'
      },
      'codeFiles': ['markType.vue']
    },
    {
      'demoId': 'fullScreen',
      'name': { 'zh-CN': '全屏显示', 'en-US': 'fullScreen' },
      'desc': {
        'zh-CN': '是否全屏显示',
        'en-US': 'Whether to display full screen'
      },
      'codeFiles': ['fullScreen.vue']
    }
  ],
  apis: [
    {
      'name': 'watermark',
      'type': '组件/指令/其他',
      'properties': [
        {
          'name': 'markType',
          'type': 'String',
          'defaultValue': 'text',
          desc: {
            'zh-CN': '设定水印类型，可选值：text/image',
            'en-US': 'Set the type of watermark, the options are text/image'
          },
          demoId: 'markType'
        },
        {
          'name': 'markText',
          'type': 'String',
          'defaultValue': '水印内容',
          desc: { 'zh-CN': '水印内容', 'en-US': 'Watermark content' },
          demoId: 'markType'
        },
        // image
        {
          'name': 'image',
          'type': 'String',
          'defaultValue': '',
          desc: { 'zh-CN': '水印图片', 'en-US': 'Watermark image' },
          demoId: 'markType'
        },
        {
          'name': 'fullScreen',
          'type': 'Boolean',
          'defaultValue': 'false',
          desc: {
            'zh-CN': '是否全屏显示',
            'en-US': 'Whether to display full screen'
          },
          demoId: 'fullScreen'
        },
        {
          'name': 'rotate',
          'type': 'Number',
          'defaultValue': '15',
          desc: { 'zh-CN': '水印旋转角度', 'en-US': 'Watermark rotation angle' },
          demoId: 'base'
        },
        // zIndex
        {
          'name': 'zIndex',
          'type': 'Number',
          'defaultValue': '0',
          desc: { 'zh-CN': '水印层级', 'en-US': 'Watermark layer' },
          demoId: 'base'
        },
        // font
        {
          'name': 'font',
          'type': 'String',
          'defaultValue': '18px Vedana',
          desc: { 'zh-CN': '水印字体', 'en-US': 'Watermark font' },
          demoId: 'base'
        },
        // fillStyle
        {
          'name': 'fillStyle',
          'type': 'String',
          'defaultValue': 'rgba(200, 200, 200, 0.40)',
          desc: { 'zh-CN': '水印颜色', 'en-US': 'Watermark color' },
          demoId: 'base'
        },
        // textAlign
        {
          'name': 'textAlign',
          'type': 'String',
          'defaultValue': 'center',
          desc: { 'zh-CN': '水印水平位置', 'en-US': 'Watermark horizontal position' },
          demoId: 'base'
        },
        // opacity
        {
          'name': 'opacity',
          'type': 'String',
          'defaultValue': '0.5',
          desc: { 'zh-CN': '水印透明度', 'en-US': 'Watermark transparency' },
          demoId: 'base'
        }
      ],
      'events': [
        {
          name: '事件名',
          type: '事件类型',
          defaultValue: '默认值',
          desc: {
            'zh-CN': '中文简述',
            'en-US': '英文简述'
          },
          demoId: 'demo示例'
        }
      ],
      'slots': [
        {
          'name': '插槽名',
          'type': '类型',
          'defaultValue': '默认值',
          'desc': { 'zh-CN': '中文简述', 'en-US': '英文简述' },
          'demoId': 'demo跳转'
        }
      ]
    }
  ]
}
