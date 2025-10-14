import { types, Instance } from 'mobx-state-tree'

const Counter = types
  .model('Counter', {
    value: types.optional(types.number, 0),
  })
  .actions((self) => ({
    inc() { self.value += 1 },
    dec() { self.value -= 1 },
  }))

export const RootStore = types.model('RootStore', {
  counter: types.optional(Counter, {}),
})

export type RootInstance = Instance<typeof RootStore>

export const createStore = () => RootStore.create({})
