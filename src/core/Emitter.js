export class Emitter {
  constructor() {
    this.listeners = {}
  }

  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// Example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('anySubscribe', data => console.log('data: ', data))
// emitter.emit('313123', 111)
//
// setTimeout( () => {
//   emitter.emit('anySubscribe', 'after 2 second')
// }, 2000)
//
// setTimeout( () => {
//   unsub()
// }, 3000)
//
// setTimeout( () => {
//   emitter.emit('anySubscribe', 'after 4 second')
// }, 4000)
