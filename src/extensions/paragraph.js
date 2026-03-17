import Paragraph from '@tiptap/extension-paragraph'

export default Paragraph.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      contentEditable: {
        default: null,
        parseHTML: (element) => {
          const editable = element.getAttribute('contenteditable')
          if (editable === 'false') {
            return false
          }
          return null
        },
        renderHTML: (attributes) => {
          if (attributes.contentEditable === false) {
            return { contenteditable: 'false' }
          }
          return {}
        },
      },
    }
  },
})
