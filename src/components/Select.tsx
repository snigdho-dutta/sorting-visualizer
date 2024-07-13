import { ChangeEventHandler } from 'react'
import { SelectOptionsType } from '../utils/types'

type Props = {
  options: SelectOptionsType[]
  value: string
  onChange: ChangeEventHandler<HTMLSelectElement>
  isDisabled?: boolean
}

const Select = ({ options, value, onChange, isDisabled }: Props) => {
  return (
    <div className='inline-block relative w-48'>
      <select
        disabled={isDisabled}
        value={value}
        onChange={onChange}
        className='block sm:appearance-auto appearance-none h-8 w-full bg-system-purple10 border-system-purple20 border px-4 py-1 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-gray-300'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
        <svg
          className='fill-gray-300 h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  )
}

export default Select
