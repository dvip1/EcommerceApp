import { NavLink } from "react-router-dom"

let SignForm=()=>{
    return(
        <div className="form-parent flex justify-evenly  bg-white h-40v">
<form>
<div className="flex flex-col justify-evenly items-center h-full">
<input type="text" placeholder="Enter Your Username" className="border border-black"></input>
<input type="email" className="border border-black" placeholder="Enter Your Email"></input>
<input type="password" className="border border-black" placeholder="Password"></input>
<input type="password" className="border border-black" placeholder="Confirm Password"></input>
<input type="submit" value="Submit" className="cursor-pointer border border-black bg-red-700 text-white h-10 rounded-md  " ></input>
</div>

<div className="flex justify-center">
   
</div>
</form>
        </div>
    )
}

export default SignForm