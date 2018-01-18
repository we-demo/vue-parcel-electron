import App from './com/App'
import Store from './Store'
import svd from 'simple-virtual-dom'
import throttle from 'lodash.throttle'

let root = document.querySelector('#root')
let dom = null
let cached = null
let store = new Store()
let wait = 100

function render () {
  let tree = App(store.state)
  dom = tree.render()
  root.appendChild(dom)
  cached = tree
}
render()

function rerender () {
  let tree = App(store.state)
  let patches = svd.diff(cached, tree)
  if (!patches) return
  svd.patch(dom, patches)
  cached = tree
}

let _rerender = throttle(rerender, wait, {
  leading: true,
  trailing: true
})

function dispatch (type, ...args) {
  let mutated = store.mutate(type, args) !== false
  if (mutated) _rerender()
}
window.dispatch = dispatch

if (module.hot) {
  console.log('module.hot')
  module.hot.dispose(() => {
    console.log('dispose')
    // module is about to be replaced

    // todo: save previous store.state
    // localStorage.setItem()
    root.innerHTML = ''
  })

  module.hot.accept(() => {
    console.log('accept')
    // module or one of its dependencies was just updated

    // todo: apply previous store.state
    // localStorage.getItem()
    // store.state
  })
}
