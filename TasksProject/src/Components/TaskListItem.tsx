import { Button, Card, Col } from "react-bootstrap";
import { Task } from "../Model/Task";
import { useDispatch } from "react-redux";
import { ChangeFormShow } from "../Model/TaskSlice";
import { MouseEventHandler } from "react";

interface TaskListItemProps {

    task: Task

}

const TaskListItem = (props: TaskListItemProps) => {

    const dispatch = useDispatch()

    const handleShow: MouseEventHandler<HTMLButtonElement> = (e)  => { 
        dispatch(ChangeFormShow({
            tasks: [],
            formShow: true,
            selectedTask: Number.parseInt(e.currentTarget.value)
        }));
    }

    return (
        <Col xs={3}>
            <Card style={{ width: '18rem' }} className="mt-1 mb-1">
                <Card.Body>
                    <Card.Title>{props.task.Title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.task.CreationDate}</Card.Subtitle>
                    <Card.Text>
                        {props.task.Description}
                    </Card.Text>
                    <Button
                        value={props.task.Id}
                        variant="primary"
                        onClick={handleShow} 
                        style={{ width: '150px' }}>
                        Edit task
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default TaskListItem;