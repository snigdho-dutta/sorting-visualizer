import { AnimationArray, SetState, SortingAlgorithm } from '../../utils/types'
import runAnimations from '../animations/runAnimation'
import bubbleSort from './bubbleSort'
import insertionSort from './insertionSort'
import mergerSort from './mergeSort'
import quickSort from './quickSort'
import selectionSort from './selectionSort'

export default function runSortingAlgorithm(
  array: number[],
  setIsSorting: SetState<boolean>,
  setIsAnimationOver: SetState<boolean>,
  sortingAlgorithm: SortingAlgorithm,
  speed: number
) {
  setIsSorting(true)
  const auxiliaryArray = [...array]
  const animations: AnimationArray = []
  switch (sortingAlgorithm) {
    case 'bubble':
      bubbleSort(auxiliaryArray, animations)
      runAnimations(animations, setIsSorting, setIsAnimationOver, speed)
      break
    case 'selection':
      selectionSort(auxiliaryArray, animations)
      runAnimations(animations, setIsSorting, setIsAnimationOver, speed)
      break
    case 'insertion':
      insertionSort(auxiliaryArray, animations)
      runAnimations(animations, setIsSorting, setIsAnimationOver, speed)
      break
    case 'merge':
      mergerSort(auxiliaryArray, animations)
      runAnimations(animations, setIsSorting, setIsAnimationOver, speed)
      break
    case 'quick':
      quickSort(auxiliaryArray, animations)
      runAnimations(animations, setIsSorting, setIsAnimationOver, speed)
      break
    // case 'heap':
    //   return heapSort(array, setArray, setIsSorting, setIsAnimationOver)
  }
}
