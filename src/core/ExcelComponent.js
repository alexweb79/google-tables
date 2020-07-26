import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscrubers = []

    this.prepare()
  }

  // Настраиваем наш компонен до init
  prepare() {}

  // Возвращаем шаблон компонента
  toHTML() {
    return ''
  }

  // Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscrubers.push(unsub)
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  // Инициализируем компоненты
  // Добавляем DOM слушателей
  init() {
    this.initDOMListener()
  }

  // Удаляем копонент
  // Чистим слушателей
  destroy() {
    this.removeDOMListener()
    this.unsubscrubers.forEach(unsub => unsub())
  }
}
