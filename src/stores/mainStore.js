import { observable, action } from 'mobx'

class MainStore {
  @observable data = {}
  @observable testText = '123456'

  @action
  updateMainStore = (target, val) => {
    this[target] = val
  }
}

const mainStore = new MainStore()

export default mainStore
