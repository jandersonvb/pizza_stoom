import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface PizzaProps {
  image?: string
  points?: number
  dough?: string
  ingredients?: string
  size?: string
  price?: number
}

interface PizzaContextData {
  pizza: PizzaProps
  points: number
  massa: string
  total: number
  imagePizza: string
  setMassa: (massa: string) => void
  setIngredients: (ingredients: string) => void
  setTamanho: (size: string) => void
  setImage: (image: string) => void
  setPrice: (price: number) => void
  handlePizza: (pizza: PizzaProps) => void
  sumPoints: (value: number) => void
  sumTotal: (value: number) => void
  clearProperties: () => void
}

export const PizzaContext = createContext({} as PizzaContextData)

export function PizzaContextProvider({ children }: { children: ReactNode }) {
  const [pizza, setPizza] = useState<PizzaProps>()
  const [total, setTotal] = useState<number>(0)

  const [points, setPoints] = useState<number>(0)
  const [imagePizza, setImagePizza] = useState<string>('')

  useEffect(() => {
    const points = localStorage.getItem('@pizzaria:points')

    setPoints(Number(points))
  }, [])

  function sumPoints(value: number) {
    const sum = value + points

    localStorage.setItem('@pizzaria:points', String(sum))

    setPoints(sum)
  }

  function sumTotal(number: number) {
    const newTotal = total + number

    setTotal(newTotal)
  }

  function setPrice(price: number) {
    const sum = price + (pizza?.price ?? 0)

    setPizza({ ...pizza, price: sum })
  }

  function setMassa(dough: string) {
    setPizza({ ...pizza, dough })
  }

  function setTamanho(size: string) {
    setPizza({ ...pizza, size })
  }

  function setImage(image: string) {
    setImagePizza(image)
  }

  function setIngredients(ingredients: string) {
    setPizza({ ...pizza, ingredients })
  }

  function handlePizza(item: PizzaProps) {
    setPizza(item)
  }

  function clearProperties() {
    setTotal(0)
    setImagePizza('')
    setPizza({} as PizzaProps)
  }

  return (
    <PizzaContext.Provider
      value={{
        pizza: pizza || ({} as PizzaProps),
        setMassa,
        setTamanho,
        setImage,
        setIngredients,
        handlePizza,
        setPrice,
        sumTotal,
        total,
        sumPoints,
        points,
        imagePizza,
        clearProperties,
        massa: '',
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}

export const usePizza = () => useContext(PizzaContext)
