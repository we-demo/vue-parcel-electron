export default class Store {
  constructor () {
    this.state = {
      input: '',
      arr: [1, 2, 3, 4, '<style>span { color: red }</style>', '<a href="1">123</a>', '<script>console.log(1)</script>'],
      title: 'Hello World! <a href="1">123</a>'
    }
  }

  mutate (type, args) {
    let { state } = this
    if (type === 'change') {
      state.input = args[0]
    } else if (type === 'add') {
      if (state.input) {
        state.arr.push(state.input)
        state.input = ''
      }
    } else if (type === 'test') {
      state.arr.push(Math.random())
    } else {
      console.error(`unknown mutation type: ${type}`)
      return false
    }
  }
}
