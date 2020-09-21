import Vue, { DirectiveBinding } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import '../assets/custom-prism-theme.css'
import { app } from '../main'

export default {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    // TODO: check if el contains pre and code element.
    const elementDOM = el.children[0].children[0] || el.children[0]
    let hightlightDOM = Prism.highlight(elementDOM.outerHTML, Prism.languages[binding.value || 'html'] , binding.value || 'html')

    if (!binding.value || binding.value === 'html') {
      hightlightDOM = hightlightDOM.replace(/div/g,'vue-flip')
      .replace(/<\/span>p<\/span>/, '</span>template v-slot:front</span>')
      .replace(/<\/span>p<\/span>/, '</span>template</span>')
      .replace(/<\/span>p<\/span>/, '</span>template v-slot:back</span>')
      .replace(/<\/span>p<\/span>/, '</span>template</span>')
      .replace(/active-hover/, ':active-hover')
      .replace(/model/, 'v-model')
    }

    el.children[0].outerHTML = hightlightDOM
  }
}