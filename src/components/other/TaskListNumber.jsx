const TaskListNumber = ({data}) => {
    return(<>
         <div className="flex mt-10 justify-between gap-5 screen ">
            <div className=" rounded-2xl flex mt-5 bg-red-400 w-[45%] rounded-xl py-6 px-9">
                <h2 className="text-white text-3xl font-semibold">{data.taskCounts.active}</h2>
                <h3 className="text-white text-3xl font-medium">Active Tasks</h3>
            </div>

            <div className=" rounded-2xl flex mt-5 bg-yellow-400 w-[45%] rounded-xl py-6 px-9">
                <h2 className="text-white text-3xl font-semibold">{data.taskCounts.newTask}</h2>
                <h3 className="text-white text-3xl font-medium">New Tasks</h3>
            </div>

            <div className=" rounded-2xl flex mt-5 bg-blue-400 w-[45%] rounded-xl py-6 px-9">
                <h2 className="text-white text-3xl font-semibold">{data.taskCounts.completed}</h2>
                <h3 className="text-white text-3xl font-medium">completed Tasks</h3>
            </div>

            <div className=" rounded-2xl flex mt-5 bg-green-400 w-[45%] rounded-xl py-6 px-9">
                <h2 className="text-white text-3xl font-semibold">{data.taskCounts.failed}</h2>
                <h3 className="text-white text-3xl font-medium">Failed Tasks</h3>
            </div>

         </div>
    </>)
    
}

export default TaskListNumber