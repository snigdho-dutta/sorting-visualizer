import { MouseEventHandler } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { RxReset } from 'react-icons/rx'

type Props = {
  requiresReset: boolean
  isDisabled: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

const PlayButton = ({ onClick, requiresReset, isDisabled }: Props) => {
  return (
    <button
      className='h-8 w-8 flex items-center justify-center rounded-full bg-system-green60 text-'
      onClick={onClick}
      disabled={isDisabled}
    >
      {requiresReset ? (
        <RxReset className='h-8 2-8 text-gray-400' />
      ) : (
        <BsFillPlayFill className='h-8 2-8 text-gray-400' />
      )}
    </button>
  )
}

export default PlayButton
