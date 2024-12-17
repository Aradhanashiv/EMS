import Login from './components/Auth/Login'
import './App.css'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './components/other/Header'
import TaskListNumber from './components/other/TaskListNumber'
import TaskList from './components/Task/TaskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect, useState } from 'react'
import { setLocalStorage } from './Utilis/localStorage'
import { getLocalStorage } from './Utilis/localStorage'
import AuthProviderContext from './context/Authcontext'
import { useContext } from 'react'
import { AuthContext } from './context/Authcontext'
import AcceptTask from './components/Task/AcceptTask'
import AllTask from './components/other/AllTask'
import CreateTask from './components/other/CreateTask'

const App = () => {

  const [user , setuser] = useState(null);
  const [usercreden,setusercreden] = useContext(AuthContext);
  const [loggedinuserdata , setloggedinuserdata] = useState(null);
  // console.log(authdata);

  useEffect(()=>{
    const loggedinuser = localStorage.getItem("loggedinuser");
    if(loggedinuser){
      const userdata = JSON.parse(loggedinuser);
      setuser(loggedinuser.role);
      setloggedinuserdata(userdata.data)
    }

  } , [usercreden])


  const handlelogin = (email , password) =>{
    if (email == 'admin@example.com' && password == '123') {
        setuser('admin');
        localStorage.setItem('loggedinitem' , JSON.stringify({role:'admin'}))
        // setloggedinuserdata(admin);
    }
      else if(usercreden){
        const employee = usercreden.find((e) => email == e.email && password == e.password)
        if(employee){
         setuser('employee');
         localStorage.setItem('loggedinitem' , JSON.stringify({role:'employee'}))
         setloggedinuserdata(employee);
        } 
    }
    else{ 
      alert('invalid creditanls');
    }
    
    }
  
 

  return (
    <>
    {!user ? <Login handlelogin = {handlelogin}/> : ''}
     {user == 'admin' ?  <AdminDashboard changeuser={setuser} data={loggedinuserdata}/> :( (user == 'employee') ?<EmployeeDashboard changeuser={setuser} data={loggedinuserdata}/>: null)}
     {/* <EmployeeDashboard></EmployeeDashboard> */}
     {/* <Header></Header> */}
     {/* <TaskListNumber></TaskListNumber> */}
     {/* <TaskList></TaskList> */}
     {/* <AdminDashboard></AdminDashboard> */}
     {/* <AcceptTask></AcceptTask> */}
     {/* <AllTask></AllTask> */}
     {/* <CreateTask></CreateTask> */}
    </>
  )
}

export default App
