import PlayButton from './components/PlayButton'
import Select from './components/Select'
import Slider from './components/Slider'
import { useSortingSontext } from './hooks/useSortingContext'
import runSortingAlgorithm from './lib/algorithms/runSortingAlgorithm'
import resetArray from './lib/methods/resetArray'
import {
  ALGORITHM_CHOICES,
  MAX_ANIMATION_SPEED,
  MIN_ANIMATION_SPEED,
} from './utils/consts'
import { SortingAlgorithm } from './utils/types'

function App() {
  const {
    isSorting,
    setIsSorting,
    array,
    sortingAlgorithm,
    isAnimationOver,
    setIsAnimationOver,
    setSortingAlgorithm,
    animationSpeed,
    setArray,
    setAnimationSpeed,
  } = useSortingSontext()

  const handlePlayOrReset = () => {
    if (!isSorting && isAnimationOver) {
      // Reset
      resetArray(setArray, setIsSorting, setIsAnimationOver)
    } else if (!isSorting && !isAnimationOver) {
      // Play
      runSortingAlgorithm(
        array,
        setIsSorting,
        setIsAnimationOver,
        sortingAlgorithm,
        animationSpeed
      )
    }
  }

  return (
    <main className='w-screen h-screen bg-[#000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px]'>
      <div className='flex h-full w-full justify-center items-center'>
        <div
          id='content-container'
          className='flex max-w-[1020px] w-full flex-col lg:px-0 px-4'
        >
          <div className='h-[66px] relative flex items-center justify-between w-full'>
            <h1 className='text-gray-300 text-2xl font-light hidden md:flex'>
              Sorting Visualizer
            </h1>
            <div className='flex'>
              <div className='flex items-center justify-center gap-4'>
                <Slider
                  min={MIN_ANIMATION_SPEED}
                  max={MAX_ANIMATION_SPEED}
                  onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                  value={animationSpeed}
                />
                <Select
                  isDisabled={isSorting}
                  options={ALGORITHM_CHOICES}
                  value={sortingAlgorithm}
                  onChange={({ target: { value } }) =>
                    setSortingAlgorithm(value as SortingAlgorithm)
                  }
                />
                <PlayButton
                  isDisabled={isSorting}
                  requiresReset={!isSorting && isAnimationOver}
                  onClick={handlePlayOrReset}
                />
              </div>
            </div>
          </div>
          <div className='relative h-[calc(100vh-66px)] w-full'>
            <div
              className='absolute bottom-[32px] w-full mx-auto left-0 right-0 flex justify-center items-end'
              id='array-lines'
            >
              {array.map((height, idx) => (
                <div
                  key={idx}
                  id={`line-${idx}`}
                  className='w-[4px] relative mx-0.5 shadow-lg opacity-70 line-inactive'
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
