import { AnimationArray } from '../../utils/types'

export default function mergerSort(
  array: number[],
  animations: AnimationArray
) {
  if (array.length <= 1) {
    return
  }
  const mid = Math.floor(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid, array.length)
  mergerSort(left, animations)
  mergerSort(right, animations)
  merge(left, right, array, animations)
}

function merge(
  left: number[],
  right: number[],
  array: number[],
  animations: AnimationArray
) {
  let i = 0
  let j = 0
  let k = 0
  while (i < left.length && j < right.length) {
    animations.push([[i, j], false])
    if (left[i] <= right[j]) {
      animations.push([[k, left[i]], true])
      array[k++] = left[i++]
    } else {
      animations.push([[k, right[j]], true])
      array[k++] = right[j++]
    }
  }
  while (i < left.length) {
    // Copy remaining elements of left
    animations.push([[i, left[i]], false])
    animations.push([[k, left[i]], true])
    array[k++] = left[i++]
  }
  while (j < right.length) {
    // Copy remaining elements of right
    animations.push([[j, right[j]], false])
    animations.push([[k, right[j]], true])
    array[k++] = right[j++]
  }
}
