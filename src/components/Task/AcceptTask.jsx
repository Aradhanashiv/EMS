const AcceptTask = ({data}) => {
    return(<>
       {/* <div id="tasklist" className="overflow-x-auto h-80 flex items-center justify-center gap-5 flex-nowrap mt-9  p-10"> */}
       <div className="flex-shrink-0 h-full w-[400px] bg-red-400 rounded-2xl p-9">
        <div className="flex justify-between items-center ">
            <h3 className="bg-red-600 rounded px-3 py-1 text-white text-sm ">{data.category}</h3>
            <h4 className="text-white">{data.taskDate}</h4>
        </div>
        <h4 className="text-white font-semifold text-2xl m-3">{data.taskTitle}</h4>
        <p className="text-white text-sm">{data.description}</p>
             <button className="text-white bg-green-500 rounded px-6 py-1 text-sm m-5">Accepted Tasks</button>
             <button className="text-white bg-yellow-500 rounded px-3 py-1 text-sm">Failed Tasks</button>
    </div>
    {/* </div> */}
    
    </>)
    
}

export default AcceptTask