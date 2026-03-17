<template>
  <div class="examples">
    <div class="box">
      <umo-editor ref="editorRef" v-bind="options"></umo-editor>
    </div>
    <!-- <div class="box">
      <umo-editor editor-key="testaaa" :toolbar="{ defaultMode: 'classic' }" />
    </div> -->
  </div>
</template>

<script setup>
import { shortId } from '@/utils/short-id'

const editorRef = $ref(null)
  setTimeout(() => {
  editorRef.setContent({
    "type": "doc",
    "content": [
        {
            "type": "heading",
            "attrs": {
                "wordWrap": "normal",
                "indent": null,
                "textAlign": null,
                "lineHeight": 1.75,
                "id": "pe20g7cdsc",
                "data-toc-id": "pe20g7cdsc",
                "margin": {
                    "top": "50"
                },
                "level": 2
            },
            "content": [
                {
                    "type": "text",
                    "text": "№. "
                },
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "bold"
                        }
                    ],
                    "text": "Umo Editor"
                }
            ]
        },
        {
            "type": "heading",
            "attrs": {
                "wordWrap": "normal",
                "indent": null,
                "textAlign": null,
                "lineHeight": 1.75,
                "id": "g6a64sci85",
                "data-toc-id": "g6a64sci85",
                "margin": {
                    "top": "25"
                },
                "level": 3
            },
            "content": [
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "bold"
                        }
                    ],
                    "text": "♯ 基本介绍"
                }
            ]
        },
        {
            "type": "paragraph",
            "attrs": {
                "wordWrap": "normal",
                "indent": null,
                "textAlign": "justify",
                "lineHeight": 1.75,
                "margin": null,
                "contentEditable": false
            },
            "content": [
                {
                    "type": "text",
                    "text": "Umo Editor 是一个基于 Vue3 和 Tiptap3 的本土化开源文档编辑器，提供类似于 Microsoft Word 的在线编辑功能和浏览体验，专为国人用户设计。它提供了强大的文档编辑能力和 AI 创作功能，支持分页模式和普通 Web 模式、Markdown 语法、富文本编辑、多种格式的节点插入、页面样式设置、文档导出与打印等功能。"
                }
            ]
        },
        {
            "type": "paragraph",
            "attrs": {
                "wordWrap": "normal",
                "indent": null,
                "textAlign": "justify",
                "lineHeight": 1.75,
                "margin": null,
                "contentEditable": null
            },
            "content": [
                {
                    "type": "text",
                    "text": "此外，Umo Editor 还支持自定义扩展、多语言设置和暗色主题。同时我们提供了单独的文本预览组件 "
                },
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "link",
                            "attrs": {
                                "href": "https://github.com/umodoc/viewer",
                                "target": "_blank",
                                "rel": "noopener noreferrer nofollow",
                                "class": null,
                                "title": null
                            }
                        }
                    ],
                    "text": "Umo Viewer"
                },
                {
                    "type": "text",
                    "text": "，用户可以在项目中使用该组件来预览文档。"
                }
            ]
        },
        {
            "type": "paragraph",
            "attrs": {
                "wordWrap": "normal",
                "indent": null,
                "textAlign": "justify",
                "lineHeight": 1.75,
                "margin": null,
                "contentEditable": null
            },
            "content": [
                {
                    "type": "text",
                    "text": "Umo Editor 最大的特点是代码完全开源且自主可控，支持私有部署，您可以内网环境中使用，而无需担心数据安全问题。同时 Umo Editor 基于 Vue3 和 Tiptap3，两者都有丰富的生态系统和社区支持，在遇到问题时可以迅速得到解决。"
                }
            ]
        }
    ]
})
}, 1000)
const templates = [
  {
    title: '工作任务',
    description: '工作任务模板',
    content:
      '<h1>工作任务</h1><h3>任务名称：</h3><p>[任务的简短描述]</p><h3>负责人：</h3><p>[执行任务的个人姓名]</p><h3>截止日期：</h3><p>[任务需要完成的日期]</p><h3>任务详情：</h3><ol><li>[任务步骤1]</li><li>[任务步骤2]</li><li>[任务步骤3]...</li></ol><h3>目标：</h3><p>[任务需要达成的具体目标或结果]</p><h3>备注：</h3><p>[任何额外信息或注意事项]</p>',
  },
  {
    title: '工作周报',
    description: '工作周报模板',
    content:
      '<h1>工作周报</h1><h2>本周工作总结</h2><hr /><h3>已完成工作：</h3><ul><li>[任务1名称]：[简要描述任务内容及完成情况]</li><li>[任务2名称]：[简要描述任务内容及完成情况]</li><li>...</li></ul><h3>进行中工作：</h3><ul><li>[任务1名称]：[简要描述任务当前进度和下一步计划]</li><li>[任务2名称]：[简要描述任务当前进度和下一步计划]</li><li>...</li></ul><h3>问题与挑战：</h3><ul><li>[问题1]：[描述遇到的问题及当前解决方案或需要的支持]</li><li>[问题2]：[描述遇到的问题及当前解决方案或需要的支持]</li><li>...</li></ul><hr /><h2>下周工作计划</h2><h3>计划开展工作：</h3><ul><li>[任务1名称]：[简要描述下周计划开始的任务内容]</li><li>[任务2名称]：[简要描述下周计划开始的任务内容]</li><li>...</li></ul><h3>需要支持与资源：</h3><ul><li>[资源1]：[描述需要的资源或支持]</li><li>[资源2]：[描述需要的资源或支持]</li><li>...</li></ul>',
  },
]
const options = $ref({
  // theme: 'auto',
  // skin: 'modern',
  toolbar: {
    // defaultMode: 'classic',
    // menus: ['base'],
  },
  document: {
    title: '测试文档',
    content: localStorage.getItem('document.content') || '<p>测试文档</p>',
    // structure: 'heading block*',
  },
  page: {
    layouts: ['page', 'web'],
    showBookmark: true,
  },
  templates,
  cdnUrl: 'https://cdn.umodoc.com',
  shareUrl: 'https://www.umodoc.com',
  file: {
    // allowedMimeTypes: [
    //   'application/pdf',
    //   'image/svg+xml',
    //   'video/mp4',
    //   'audio/*',
    // ],
  },
  user: {
    id: 'umoeditor',
    label: 'Umo Editor',
    avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
  },
  users: [
    { id: 'umodoc', label: 'Umo Team' },
    { id: 'Cassielxd', label: 'Cassielxd' },
    { id: 'Goldziher', label: "Na'aman Hirschfeld" },
    { id: 'SerRashin', label: 'SerRashin' },
    { id: 'ChenErik', label: 'ChenErik' },
    { id: 'china-wangxu', label: 'china-wangxu' },
    { id: 'Sherman Xu', label: 'xuzhenjun130' },
    { id: 'testuser', label: '测试用户' },
  ],
  // https://dev.umodoc.com/cn/docs/options/extensions#disableextensions
  disableExtensions: [],
  async onSave(content, page, document) {
    // 将文档和评论线程保存到 localStorage
    localStorage.setItem('document.content', content.html)
    // 模拟保存等待过程
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('onSave', { content, page, document })
        resolve('文档保存成功')
      }, 2000)
    })
  },
  async onFileUpload(file) {
    if (!file) {
      throw new Error('没有找到要上传的文件')
    }
    console.log('onUpload', file)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return {
      id: shortId(),
      url: file.url || URL.createObjectURL(file),
      name: file.name,
      type: file.type,
      size: file.size,
    }
  },
  onFileDelete(id, url, type) {
    console.log(id, url, type)
  },
})
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
.examples {
  margin: 20px;
  display: flex;
  height: calc(100vh - 40px);
}
.box {
  border: solid 1px #ddd;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
}

html,
body {
  height: 100vh;
  overflow: hidden;
}
</style>
