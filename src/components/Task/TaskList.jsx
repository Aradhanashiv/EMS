import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
    // console.log(data)
    return(<>
   
<div id="tasklist" className=" overflow-x-auto h-80 flex items-center justify-start gap-5 flex-nowrap mt-9  p-10">
    {/* <div className="flex-shrink-0 h-full w-[400px] bg-red-400 rounded-2xl">
        <div className="flex justify-between items-center mx-8">
            <h3 className="bg-red-600 rounded px-3 py-1 text-white text-sm">High</h3>
            <h4 className="text-white">20 feb 2024</h4>
        </div>
        <h4 className="text-white font-semifold text-xl">Make Your Task Complete</h4>
        <p className="text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta ab alias nobis autem quia?</p>
    </div>
    <div className="flex-shrink-0 h-full w-[400px] bg-yellow-400 rounded-2xl">
        <div className="flex justify-between items-center m-4">
            <h3 className="bg-red-600 rounded px-3 py-1 text-white text-sm">High</h3>
            <h4 className="text-white">20 feb 2024</h4>
        </div>
        <h4 className="text-white font-semifold text-xl">Make Your Task Complete</h4>
        <p className="text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta ab alias nobis autem quia?</p>
    </div>
    <div className="flex-shrink-0 h-full w-[400px] bg-green-400 rounded-2xl">
        <div className="flex justify-between items-center m-4">
            <h3 className="bg-red-600 rounded px-3 py-1 text-white text-sm">High</h3>
            <h4 className="text-white">20 feb 2024</h4>
        </div>
        <h4 className="text-white font-semifold text-xl">Make Your Task Complete</h4>
        <p className="text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta ab alias nobis autem quia?</p>
    </div>
    <div className="flex-shrink-0 h-full w-[400px] bg-blue-400 rounded-2xl">
        <div className="flex justify-between items-center m-4">
            <h3 className="bg-red-600 rounded px-3 py-1 text-white text-sm">High</h3>
            <h4 className="text-white">20 feb 2024</h4>
        </div>
        <h4 className="text-white font-semifold text-xl">Make Your Task Complete</h4>
        <p className="text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta ab alias nobis autem quia?</p>
    </div> */}
   {data.tasks.map(item => {
    if(item.active){
        return  <AcceptTask data= {item}/>
    }
    if(item.completed){
        return  <CompleteTask data= {item}/>
    }
    if(item.failedTask){
        return  <FailedTask data= {item}/>
    }
    if(item.newTask){
        return  <NewTask data= {item}/>
    }
   }
    )}
    
 
{/* <AcceptTask></AcceptTask>
<CompleteTask></CompleteTask>
<FailedTask/>
<NewTask/> */}
</div>
    </>)

}

export default TaskList