import React, { ChangeEventHandler } from 'react'

type Props = {
  min: number
  max: number
  value: number
  step?: number
  onChange: ChangeEventHandler<HTMLInputElement>
  isDisabled?: boolean
}

const Slider = ({ min, max, value, step = 1, onChange, isDisabled }: Props) => {
  return (
    <div className='flex gap-2 items-center justify-center'>
      <span className='text-center text-gray-300'>Slow</span>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={onChange}
        disabled={isDisabled}
        style={{
          backgroundSize: `${((value - min) / (max - min)) * 100}% 100%`,
        }}
        className='w-full h-2 rounded-lg cursor-pointer'
      />
      <span className='text-center text-gray-300'>Fast</span>
    </div>
  )
}

export default Slider
