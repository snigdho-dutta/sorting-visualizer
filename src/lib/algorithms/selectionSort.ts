import { AnimationArray } from '../../utils/types'

export default function selectionSort(
  array: number[],
  animations: AnimationArray
) {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i
    for (let j = i + 1; j < array.length; j++) {
      animations.push([[j, minIdx], false])
      if (array[j] < array[minIdx]) {
        minIdx = j
      }
    }
    animations.push([[i, array[minIdx]], true])
    animations.push([[minIdx, array[i]], true])
    ;[[array[i], array[minIdx]]] = [[array[minIdx], array[i]]]
  }
}
