import Header from "../other/Header"
import CreateTask from "../other/CreateTask"
import AllTask from "../other/AllTask"

const AdminDashboard = (props) => {
    return(<>
    <div className="p-7">
    <Header changeuser={props.changeuser}></Header>
    </div>
   <CreateTask></CreateTask>
   <AllTask></AllTask>

    </>)
    
}

export default AdminDashboard