import { AnimationArray } from '../../utils/types'

export default function insertionSort(
  array: number[],
  animationsArray: AnimationArray
) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j - 1] > array[j]) {
      animationsArray.push([[j, j - 1], false])
      animationsArray.push([[j, array[j - 1]], true])
      animationsArray.push([[j - 1, array[j]], true])
      ;[[array[j], array[j - 1]]] = [[array[j - 1], array[j]]]
      j--
    }
  }
}
