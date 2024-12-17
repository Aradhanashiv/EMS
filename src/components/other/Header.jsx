// import { CgHello } from "react-icons/cg";

// import { useState } from "react"

const Header = (props) => {

    //   const [username , setusername] = useState('');
    //   if(!data){
    //     setusername('Admin');
    //   }
    //   else{
    //     setusername(data.firstName);
    //   }

    const logoutuser = ()=>{
        localStorage.setItem('loggedinuser' , '');
        // window.location.reload();
        props.changeuser('');
    }

    return(<>
    <h1></h1>
    <div className="flex items-end justify-between p-20 bg-[#1C1C1C] ">
        <h1 className="text-white text-2xl">Hello, </h1>
        <button onClick={logoutuser} className="text-2xl text-white bg-red-500 px-5 py-2 rounded-sm">LogOut</button>
    </div>
    
    </>)
}

export default Header