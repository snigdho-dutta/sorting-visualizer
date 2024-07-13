import { useContext } from 'react'
import { SortingContext } from '../context/sortingContext'

export const useSortingSontext = () => {
  const ctx = useContext(SortingContext)
  if (!ctx) {
    throw new Error(
      'useSortingContext must be used within a SortingContextProvider'
    )
  }
  return ctx
}
