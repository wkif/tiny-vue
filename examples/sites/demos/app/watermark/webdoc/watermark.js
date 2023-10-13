export default {
  demos: [
    {
      'demoId': 'watermark',
      'name': { 'zh-CN': '中文名', 'en-US': '英文名' },
      'desc': { 'zh-CN': '中文介绍', 'en-US': '英文介绍' },
      'codeFiles': ['base.vue']
    }
  ],
  apis: [
    {
      'name': '组件名',
      'type': '组件/指令/其他',
      'properties': [
        {
          'name': '名称',
          'type': '类型',
          'defaultValue': '默认值',
          desc: {
            'zh-CN': '中文介绍',
            'en-US': '英文介绍'
          },
          demoId: 'demo示例'
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
