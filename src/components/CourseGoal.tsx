import { ReactNode } from "react"
import Button from "../ui/Button"

type CourseGoalProps = {
    title: string,
    children: ReactNode,
    id: number,
    handleDelete: (id: number)=> void
}

export default function CourseGoal({title, id, handleDelete, children}: CourseGoalProps) {
    
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <Button onClick={()=>handleDelete(id)} >Delete</Button>
    </article>
  )
}
