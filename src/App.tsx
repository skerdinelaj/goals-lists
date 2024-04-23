import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
export type CourseGoal = {
  title: string,
  description: string,
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])
  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: CourseGoal = {
      title: goal,
      description: summary,
      id: Math.random()
    }
    setGoals(prevGoals =>[...prevGoals, newGoal])
    
  }
  const handleDelete = (id: number) => {
    setGoals(prevGoals=> prevGoals.filter(goal=>{
      return (
        goal.id !== id
      )
    }))
    
  }


  return (
    <main>
      <Header image={{ src: goalsImg, alt: "img" }}>
        <h1>Your course goal</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDelete={handleDelete}/>
    </main>
  )
}
