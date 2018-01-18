import { h } from '../vdom'

let Item = n => {
  return h('li', `Item ${n}`)
}

export default (arr, append) => {
  return h('ul', [
    ...arr.map(Item),
    ...append
  ])
}
