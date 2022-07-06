// import { FC } from 'react'
// import { useQueryTasks } from '../hooks/useQueryTasks'
// import { Spinner } from './Spinner'
// import { TaskItem } from './TaskItem'

// export const TaskList: FC = () => {
//   const { data: tasks, status } = useQueryTasks()
//   if (status === 'loading') return <Spinner />
//   if (status === 'error') return <p>{'error'}</p>
//   return (
//     <ul className="my-2">
//       {tasks?.map(
//         (task) => (
//           console.log(task),

//           (<TaskItem key={task.id} id={task.id} title={task.title} />)
//         )
//       )}
//     </ul>
//   )
// }

import { VFC } from 'react'
import { useQueryTasks } from '../hooks/useQueryTasks'
import { Spinner } from './Spinner'
import { TaskItem } from './TaskItem'

export const TaskList: VFC = () => {
  const { data: tasks, status } = useQueryTasks()
  if (status === 'loading') return <Spinner />
  if (status === 'error') return <p>{'Error'}</p>

  return (
    <ul className="my-2">
      {tasks?.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title} />
      ))}
    </ul>
  )
}
