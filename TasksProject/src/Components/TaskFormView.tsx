import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { FunctionComponent, MouseEventHandler } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import { ChangeFormShow } from '../Model/TaskSlice'

const TaskFormView: FunctionComponent = () => {

    const taskstate = useSelector((state: RootState) => state.tasks.tasks)
    const show = useSelector((state: RootState) => state.tasks.formShow)
    const selectedTask = useSelector((state: RootState) => state.tasks.selectedTask)

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(ChangeFormShow({
            tasks: [],
            formShow: false,
            selectedTask: undefined
        }));
    }

    const handleShow: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(ChangeFormShow({
            tasks: [],
            formShow: true,
            selectedTask: undefined
        }));
    }

    return (
        <>
            <Col xs={6} className="mt-1 mb-1">
                <Button
                    variant="primary"
                    onClick={handleShow}
                    style={{ width: '150px' }}>
                    Create task
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >

                    <Modal.Body>
                        {selectedTask}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Save</Button>
                    </Modal.Footer>
                </Modal>
            </Col>
            <Col xs={6} className="mt-1 mb-1 align-item-end">
                <h4>Total tasks: {taskstate.length}</h4>
            </Col>
        </>

    );
}

export default TaskFormView;