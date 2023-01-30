import { NavLink } from "react-router-dom"

let Form=()=>{
    return(
        <div className="form-parent flex justify-evenly  bg-white h-40v">
<form>
<div className="flex flex-col justify-evenly items-center h-full">
<input type="email" className="border border-black" placeholder="Enter Your Email"></input>
<input type="password" className="border border-black" placeholder="Password"></input>
<input type="submit" value="Submit" className="cursor-pointer border border-black bg-red-700 text-white h-10 rounded-md  " ></input>
</div>

<div className="flex justify-center">
    <p className="m-3">New here?</p>
    <NavLink className="bg-red-700 text-white h-10 rounded-md cursor-pointer flex justify-center items-center" to="/signupform">Sign-Up</NavLink>
</div>
</form>
        </div>
    )
}

export default Form