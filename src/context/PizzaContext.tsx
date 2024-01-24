import { createContext, ReactNode, useContext, useState } from 'react'

interface PizzaContextData {
  massa: string
  recheio: string
  tamanho: string
}

export const PizzaContext = createContext({})

export function PizzaContextProvider({ children }: { children: ReactNode }) {
  const [pizza, setPizza] = useState<PizzaContextData>({
    massa: '',
    recheio: '',
    tamanho: '',
  })

  return (
    <PizzaContext.Provider value={{ pizza: 'Pizza media' }}>
      {children}
    </PizzaContext.Provider>
  )
}

export const usePizza = () => useContext(PizzaContext)
