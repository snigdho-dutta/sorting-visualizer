import { AnimationArray } from '../../utils/types'

export default function quickSort(array: number[], animations: AnimationArray) {
  quickSortHelper(array, 0, array.length - 1, animations)
}

function quickSortHelper(
  array: number[],
  left: number,
  right: number,
  animations: AnimationArray
) {
  if (left < right) {
    const pivot = partition(array, left, right, animations)
    quickSortHelper(array, left, pivot - 1, animations)
    quickSortHelper(array, pivot + 1, right, animations)
  }
}

function partition(
  array: number[],
  left: number,
  right: number,
  animations: AnimationArray
) {
  const pivot = array[right]
  let i = left - 1

  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i++
      animations.push([[i, j], false])
      animations.push([[i, array[j]], true])
      animations.push([[j, array[i]], true])
      ;[[array[i], array[j]]] = [[array[j], array[i]]]
    }
  }

  animations.push([[i + 1, right], false])
  animations.push([[i + 1, array[right]], true])
  animations.push([[right, array[i + 1]], true])
  ;[[array[i + 1], array[right]]] = [[array[right], array[i + 1]]]
  return i + 1
}
