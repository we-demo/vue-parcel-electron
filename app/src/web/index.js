import App from './com/App'
import Store from './Store'
import svd from 'simple-virtual-dom'
import throttle from 'lodash.throttle'

let root = document.querySelector('#root')
let dom = null
let cached = null

let state = {
  title: 'Hello World! <a href="1">123</a>',
  input: '',
  arr: [1, 2, 3, 4, '<style>span { color: red }</style>', '<a href="1">123</a>', '<script>console.log(1)</script>']
}
let store = new Store(state)
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
  module.hot.dispose(() => {
    // module is about to be replaced

    // todo: save previous store.state
    // localStorage.setItem()
    root.innerHTML = ''
  })

  module.hot.accept(() => {
    // module or one of its dependencies was just updated

    // todo: apply previous store.state
    // localStorage.getItem()
    // store.state
  })
}
