import { selector } from 'recoil'

import todoState from '../atoms/todo'

interface TodoStats {
  totalNum: number
  totalUncompletedNum: number
}

const todoStatsState = selector<TodoStats>({
  key: `todoStatsState`,
  get: ({ get }) => {
    const todos = get(todoState)
    const totalNum = todos.length
    const totalUncompletedNum = totalNum - todos.filter((item) => item.done).length

    return {
      totalNum,
      totalUncompletedNum
    }
  }
})

export default todoStatsState
