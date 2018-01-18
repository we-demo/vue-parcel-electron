import List from './List'
import { h } from '../vdom'

export default ({ title, arr, input }) => {
  return h('div', [
    h('h1', title),
    List(arr, [
      h('li', [
        h('input', {
          type: 'text',
          value: input,
          onchange: `dispatch('change', this.value)`
        }),
        h('button', {
          onclick: `dispatch('add')`
        }, 'Add')
      ]),
      h('li', [
        h('button', {
          onclick: `dispatch('test')`
        }, 'Test')
      ])
    ])
  ])
}
