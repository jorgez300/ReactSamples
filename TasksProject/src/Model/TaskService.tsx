import { Task } from "./Task"

export class TaskService { 

    static GetTasks = (): Task[] => { 

        const TaskList = [];

        for (let x = 0; x < 10; x++) { 

            TaskList.push({
                Id: x,
                Title: "TaskTitle" + x,
                Description: "Task" + x,
                CreationDate: "",
                State: "Active"
            })
        }
        return TaskList;

    }




}