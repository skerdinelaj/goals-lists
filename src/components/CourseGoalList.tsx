import { CourseGoal as CourseGoalProps } from "../App"
import CourseGoal from "./CourseGoal"

type CourseGoalListProps={
    goals: CourseGoalProps[]
    onDelete: (id: number)=>void
}
export default function CourseGoalList({goals, onDelete}: CourseGoalListProps) {
  return (
    <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} handleDelete={onDelete} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        )
        )}
      </ul>
  )
}
