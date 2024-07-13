import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { SortingAlgorithm } from '../utils/types'
import { MAX_ANIMATION_SPEED } from '../utils/consts'
import resetArray from '../lib/methods/resetArray'

type SetState<T> = Dispatch<SetStateAction<T>>

export const SortingContext = createContext<{
  array: number[]
  setArray: SetState<number[]>
  isSorting: boolean
  setIsSorting: SetState<boolean>
  isAnimationOver: boolean
  setIsAnimationOver: SetState<boolean>
  sortingAlgorithm: SortingAlgorithm
  setSortingAlgorithm: SetState<SortingAlgorithm>
  animationSpeed: number
  setAnimationSpeed: SetState<number>
} | null>(null)

const SortingContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [animationSpeed, setAnimationSpeed] =
    useState<number>(MAX_ANIMATION_SPEED)
  const [sortingAlgorithm, setSortingAlgorithm] =
    useState<SortingAlgorithm>('bubble')
  const [array, setArray] = useState<number[]>([40, 23.231, 11])
  const [isSorting, setIsSorting] = useState(false)
  const [isAnimationOver, setIsAnimationOver] = useState(false)
  useEffect(() => {
    resetArray(setArray, setIsSorting, setIsAnimationOver)
    window.addEventListener(
      'resize',
      resetArray.bind(null, setArray, setIsSorting, setIsAnimationOver)
    )
  }, [sortingAlgorithm])

  return (
    <SortingContext.Provider
      value={{
        array,
        setArray,
        isSorting,
        setIsSorting,
        sortingAlgorithm,
        setSortingAlgorithm,
        animationSpeed,
        setAnimationSpeed,
        isAnimationOver,
        setIsAnimationOver,
      }}
    >
      {children}
    </SortingContext.Provider>
  )
}

export default SortingContextProvider
