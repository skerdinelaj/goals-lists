import { useRef } from "react"
import Input from "../ui/Input"
import Button from "../ui/Button"
import Form, {FormHandle} from "../ui/Form"
type NewGoalProps = {
    onAddGoal: (goal: string, summary: string)=>void
}
export default function NewGoal({onAddGoal}: NewGoalProps) {
  const costumRef = useRef<FormHandle>(null)
    
    function handleSubmit (data: unknown){
        const extractedData = data as {goal: string, summary: string}
        onAddGoal(extractedData.goal,extractedData.summary)
        costumRef.current?.clear()
    }
  
    return (
      <Form onSave={handleSubmit} ref={costumRef}>
        <Input id="goal" label="Your Goal" required/>
        <Input id="summary" label="Short summary" required/>
        <p>
          <Button>Add Goal</Button>
        </p>
    </Form>
  )
}
