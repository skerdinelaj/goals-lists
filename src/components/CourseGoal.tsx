import { ReactNode } from "react"

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
        <button onClick={()=>handleDelete(id)} >Delete</button>
    </article>
  )
}
