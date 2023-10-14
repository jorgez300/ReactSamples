import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Task } from './Task'
import { TaskService } from './TaskService'

// Define a type for the slice state
interface TaskState {
  tasks: Task[],
  formShow: boolean,
  selectedTask?: number 
}

// Define the initial state using that type
const initialState: TaskState = {
  tasks: TaskService.GetTasks(),
  formShow: false,
  selectedTask: undefined
}

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    Add: (state) => {
      state
    },
    Delete: (state) => {
      state
    },
    ChangeFormShow: (state, action: PayloadAction<TaskState>) => {
      state.formShow = action.payload.formShow
      state.selectedTask = action.payload.selectedTask

    },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // Edit: (state, action: PayloadAction<Task>) => {
    //   state.push(action)
    // },
  },
})

export const { Add, Delete, ChangeFormShow } = TaskSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: Task[]) => state.length

export default TaskSlice.reducer