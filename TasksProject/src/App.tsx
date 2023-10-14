import './App.css'
import { Container, Row } from 'react-bootstrap';
import TaskListView from './Components/TaskListView';
import TaskFormView from './Components/TaskFormView';


function App() {
  return (
    <Container fluid>
      <Row>
        <TaskFormView />
      </Row>
      <Row>
        <TaskListView />
      </Row>
    </Container>
  )
}

export default App
