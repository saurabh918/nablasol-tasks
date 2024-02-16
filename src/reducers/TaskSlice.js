import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  taskItems : [
    "Marketing Website Design",
    "Branding Design",
    "UI/UX Fundamentals",
    "Wireframe and Prototyping",
    "Style Guide",
    "UX Research and Flows",
    "Layout Design",
    "Visual Communication Strategies",
    "Interactive Design Principles",
    "Typography Mastery",
    "Color Theory and Application",
    "User-Centered Design Techniques",
    "Mobile App Design Essentials",
    "Design Thinking Process",
    "Information Architecture Basics",
    "Responsive Web Design",
    "Illustration Techniques for Designers"
  ]
}

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state,action) => {
      if(state.taskItems.find(task => task.toLowerCase() !== action.payload.toLowerCase())) {
        return {
          ...state,
          taskItems: [...state.taskItems, action.payload]
        }
      }
    },
    removeTask: (state,action) => {
      return {
        ...state,
        taskItems: state.taskItems.filter((task,index) => index !== action.payload)
      }
    }
  }
})

export const {addTask,removeTask} = TaskSlice.actions
export default TaskSlice.reducer