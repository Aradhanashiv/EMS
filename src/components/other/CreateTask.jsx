import { useContext, useState } from "react"
import Header from "../other/Header"
import { AuthContext } from "../../context/Authcontext";

const CreateTask = () => {

  const [usercreden,setusercreden] = useContext(AuthContext);    

      const [taskTitle, setTaskTitle] = useState('')
      const [description, setdescription] = useState('')
      const [taskDate, setTaskDate] = useState('')
      const [asignTo, setAsignTo] = useState('')
      const [category, setCategory] = useState('')

       const [task , settask] =useState({});

const handleonsubmit = (e) => {
     e.preventDefault();

     settask({taskTitle, description, taskDate, category, active: false, newTask: true, failedTask: false, completed: false });

    //  const data = JSON.parse(localStorage.getItem('employees'));
    const data = usercreden;

     console.log(data);
     
     data.forEach(function (item){
       if(asignTo == item.firstName){
        item.tasks.push(task)
        item.taskCounts.task = item.taskCounts.task + 1
      //  console.log(data)
       }
     });
     setTaskTitle('')
     setCategory('')
     setAsignTo('')
     setTaskDate('')
     setdescription('')


}



    return(<>
     <form onSubmit={(e) =>{handleonsubmit(e)}}>
        <div className="flex items-evenly justify-center w-full py-7">
        <div id="main">
        <div>
       <h3 className="text-white">Task Title</h3>
       <input type="text" placeholder="Enter Task" className="text-white" id="inputt" 
       value={taskTitle} onChange={(e) =>{setTaskTitle(e.target.value)}}/>
       </div>
        <div>
       <h3 className="text-white">Date</h3>
       <input type="date" placeholder="Date" id="inputt" value={taskDate} onChange={(e) =>{setTaskDate(e.target.value)}}/>
       </div>
      <div>
      <h3 className="text-white">Employee Name</h3>
      <input type="text" placeholder="Employee Name" id="inputt" value={asignTo} onChange={(e) =>{setAsignTo(e.target.value)}}/>
      </div>
      <div>
      <h3 className="text-white">Task</h3>
      <input type="text" placeholder="Design, dev, etc" id="inputt" value={category} onChange={(e) =>{setCategory(e.target.value)}}/>
      </div>
        </div>
       <div id="main">
       <div>
       <h3 className="text-white">Description</h3>
       <textarea name="" cols={50} rows={8} id="inputt" value={description} onChange={(e) =>{setdescription(e.target.value)}}></textarea>
       </div>
       <div>
     <button className="w-full font-medium py-3 px-5 text-white rounded-sm bg-[#059669]">Create Task</button>
      </div>
      </div>
      </div>
    </form>
    
    
    </>)

    }

    export default CreateTask