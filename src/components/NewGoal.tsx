import { FormEvent, useRef } from "react"
type NewGoalProps = {
    onAddGoal: (goal: string, summary: string)=>void
}
export default function NewGoal({onAddGoal}: NewGoalProps) {
    const goalRef = useRef<HTMLInputElement>(null)
    const summaryRef = useRef<HTMLInputElement>(null)
    
    function handleSubmit (e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const goal = goalRef.current!.value
        const summary = summaryRef.current!.value
        e.currentTarget.reset()
        onAddGoal(goal,summary)
    }
  
    return (
    <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="goal">Your Goal</label>
          <input type="text" id="goal" name="goal" ref={goalRef}/>
        </p>
        <p>
          <label htmlFor="summary">Short summary</label>
          <input type="text" id="summary" name="summary" ref={summaryRef}/>
        </p>
        <button>Add Goal</button>
      </form>
  )
}
