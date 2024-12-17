import { useState } from "react";

const Login = ({handlelogin}) => {


    const [userEmail , setuserEmail] = useState('');
    const [ userPass, setuserPass] = useState('');

    const handleonsubmit = (e) => {
         e.preventDefault();
         handlelogin(userEmail, userPass);
        //  console.log(userEmail);
        //  console.log(userPass);

         setuserEmail("");
         setuserPass("");
    }

    return (<> 
    <div className="flex  items-center justify-center h-screen">
        <div className="border-2 border-[#059669]-600 p-20 border-emerald-600 rounded-xl">
            <form className="flex flex-col items-center justify-center"
              onSubmit={handleonsubmit}>
                <input required type="email" placeholder="Enter your Email"
                 className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full 
                 " value={userEmail} onChange={(e) => {setuserEmail(e.target.value)}}/>
                <input required type="password" placeholder="Enter Your password"
                 className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full"
                  value={userPass} onChange={(e) => {setuserPass(e.target.value)}}  />
                <button className="text-white outline-none bg-[#059669] border-2 border-transparent-600 text-xl py-3 px-5 mt-3 rounded-full ">
                Submit</button>
            </form>
        </div>

    </div>
    
    </>)
}

export default Login;