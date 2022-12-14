import React, { ReactElement, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { useMain } from "@/src/hooks/useMain";
import { TodoEntity } from "@/src/entities/todo.entity";
import useIsMounted from './hooks/useIsMounted'

interface Props {
  todo: TodoEntity
  onInputChange: (value: string) => void
  onCheckboxChange: (checked: boolean) => void
  onSubmit?: () => void
  onDelete?: () => void
  onShare?: () => void
  readonly?: boolean
  taskId: string;
}

const Input = ({
  todo,
  onInputChange,
  onCheckboxChange,
  onSubmit,
  onDelete,
  onShare,
  readonly,
  taskId,
}: Props): ReactElement => {
  const { theme } = useTheme()
  const isMounted = useIsMounted()
  const updateInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value)
  }, [onInputChange])

  const updateChecked = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(e.target.checked)
  }, [onCheckboxChange])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit()
    }
  }, [onSubmit])

  if (!isMounted || !todo) return <div></div>

  return (
    <div
      className={`
        relative group
        ${readonly ? 'border-b-1 border-light_veryLightGreyBlue dark:border-dark_veryDarkGreyBlue' : ''}
      `}
    >
      <div className="absolute top-3 sm:top-4 left-5">
        <div className="relative">
          <input
            type="checkbox"
            aria-label="Complete Todo"
            className={`
            form-checkbox
            dark:border-dark_veryDarkGreyBlue
            dark:bg-dark_veryDarkDesaturatedBlue
            border
            rounded-full
            focus:outline-none
            h-6
            w-6
            cursor-pointer
            transition
            ease-linear
            !rounded-0
            ${theme === 'dark' ? 'form-checkbox-dark' : ''}
          `}
            checked={todo.done}
            onChange={updateChecked}
          />
          <img
            className={`
            absolute
            top-2
            left-1.5
            pointer-events-none
            ${todo.done ? '' : 'invisible'}
          `}
            src="https://todoappt.netlify.app/images/icon-check.svg"
            alt="Checkbox image for checkbox input"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`
          text-sm
          sm:text-base
          overflow-ellipsis
          w-full
          focus:outline-none
          py-4
          sm:py-4.5
          pr-8
          pl-14
          sm:pl-16
          dark:bg-dark_veryDarkDesaturatedBlue
          cursor-pointer
          transition
          ease-linear
          ${todo.done ? 'line-through text-light_lightGreyBlue dark:text-dark_darkGreyBlue' : 'text-light_veryDarkGreyBlue dark:text-dark_lightGreyBlue'}
        `}
          placeholder="Create a new todo.."
          value={todo.name}
          onChange={updateInput}
          maxLength={125}
          aria-label="Todo"
        />
      </form>
      <a id={`delete-${todo.id}`} className="absolute top-0 right-0" onClick={onDelete}>
        <img
          src="https://todoappt.netlify.app/images/icon-cross.svg"
          className={`
          cursor-pointer
          sm:w-14.5
          sm:h-14.5
          sm:p-5
          w-12
          h-12
          p-4.5
          hover:filter-black
          dark:hover:filter-white
          hover:animate-spin-fast
          visible
          xl:invisible
          ${onDelete ? 'group-hover:visible' : 'invisible'}
        `}
          alt="Delete Todo"
        />
      </a>
    </div>
  )
}

export default Input
