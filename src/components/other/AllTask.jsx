import { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";

const AllTask = () => {
        const [usercreden,setusercreden] = useContext(AuthContext);
        // console.log(authdata.employees);


    return(
    <> 
     <div id= "alltask" className="bg-[#1c1c1c] p-5 overflow-auto">
         <div className="bg-red-400 py-2 px-4 flex justify-between rounded text-white text-2xl ">
            <h2>FirstName</h2>
            <h3>New Task</h3>
            <h3>Completed Task</h3>
            <h3>Active Task</h3>
            <h3>Failed</h3>
        </div>
       
</div>
    <div id= "alltask" className="overflow-auto">
        {usercreden.map(item => 
         <div key={item.id} className="w-full border-2 border-emerald-600 py-2 px-4 flex justify-between rounded text-white mt-5">
            <h2>{item.firstName}</h2>
            <h3>{item.taskCounts.active}</h3>
            <h5>{item.taskCounts.newTask}</h5>
            <h5>{item.taskCounts.completed}</h5>
            <h5>{item.taskCounts.failed}</h5>
        </div>
    )}
       
</div>
    
    </>)
     
}

export default AllTask