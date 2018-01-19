export default class Store {
  constructor (state) {
    this.state = state || {
      title: '',
      input: '',
      arr: []
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
