import { ReactNode } from "react"
import { CourseGoal as CourseGoalProps } from "../App"
import CourseGoal from "./CourseGoal"
import InfoBox from "./InfoBox"

type CourseGoalListProps={
    goals: CourseGoalProps[]
    onDelete: (id: number)=>void
}
export default function CourseGoalList({goals, onDelete}: CourseGoalListProps) {
    if (goals.length === 0) {
        return(
            <InfoBox mode="hint">You have no goals.</InfoBox>
        )
        
    }
    let warningBox: ReactNode
    if (goals.length>=3 && goals.length <=6) {
        warningBox = <InfoBox severity="low" mode="warning">You have a few goals.</InfoBox>
    } else if(goals.length>=7 && goals.length <=10) {
        warningBox = <InfoBox severity="medium" mode="warning">You are collecting a lot of goals.</InfoBox>
    }else if( goals.length >=10){
        warningBox = <InfoBox severity="high" mode="warning">You wont be eable to handle this many goals.</InfoBox>
    }
  return (
    <>
        {warningBox}
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
    </>
  )
}
