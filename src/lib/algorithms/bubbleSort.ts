import { AnimationArray } from '../../utils/types'

export default function bubbleSort(
  array: number[],
  animationsArray: AnimationArray
) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animationsArray.push([[j, j + 1], false])
      if (array[j] > array[j + 1]) {
        // const temp = array[j]
        animationsArray.push([[j, array[j + 1]], true])
        animationsArray.push([[j + 1, array[j]], true])
        // array[j] = array[j + 1]
        // array[j + 1] = temp
        ;[[array[j], array[j + 1]]] = [[array[j + 1], array[j]]]
      }
    }
  }
}
