import { Dispatch, SetStateAction } from "react"

export type SortingAlgorithm =
  | 'bubble'
  | 'selection'
  | 'insertion'
  | 'merge'
  | 'quick'

export type AlgorithmInfo = {
  title: string
  description: string
  worstCase: string
  bestCase: string
  averageCase: string
}

export type SortingAlgorithms = {
  [key in SortingAlgorithm]: AlgorithmInfo
}

export type AnimationSpeed = 'slow' | 'normal' | 'fast' | 'lightning'

export type SelectOptionsType = {
  label: string
  value: string
}

export type AnimationArray = [number[], boolean][]

export type SetState<T> = Dispatch<SetStateAction<T>>
