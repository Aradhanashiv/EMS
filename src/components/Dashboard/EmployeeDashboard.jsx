import CreateTask from "../other/CreateTask"
import AllTask from "../other/AllTask"
import TaskList from "../Task/TaskList"
import TaskListNumber from "../other/TaskListNumber"
import Header from "../other/Header"

const EmployeeDashboard = (props) => {
    return(<>
    {/* <div> */}
    <Header data= {props.data} changeuser={props.changeuser}></Header>
    {/* </div> */}
    <TaskListNumber data= {props.data}></TaskListNumber>

   <TaskList data= {props.data}/>
    </>)
}

export default EmployeeDashboard