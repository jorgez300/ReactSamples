import { useSelector } from "react-redux";
import { RootState } from "../store";
import TaskListItem from "./TaskListItem";
import { FunctionComponent } from "react";

const TaskListView: FunctionComponent = () => {

    const taskstate = useSelector((state: RootState) => state.tasks.tasks)

    return (
        <>
            {taskstate.map((item) => { return <TaskListItem task={item} /> })}
        </>
    );
}

export default TaskListView;