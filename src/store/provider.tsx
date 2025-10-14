import React, { createContext, useContext, useMemo } from 'react'
import { RootInstance, createStore } from './root'
import { useLocalObservable } from 'mobx-react-lite'

const StoreContext = createContext<RootInstance | null>(null)

export const StoreProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // Using mobx-react-lite's useLocalObservable to host MST instance
  const store = useLocalObservable(createStore as any) as RootInstance
  const value = useMemo(() => store, [store])
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('StoreProvider missing')
  return ctx
}
