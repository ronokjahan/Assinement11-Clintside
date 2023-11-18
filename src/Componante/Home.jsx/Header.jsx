import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Login-Regstion/Authprovider";


const Header = () => {
  const{user, logout}=useContext(Authcontext)

  const handellogout=()=>{
    logout()
    .then(() => {
      
    })
    .catch((error) => {
    console.log(error);
    });
  }
  const all=<>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/cartoys'>All Toys</Link></li>
  <li><Link >Add Toys</Link></li>
  
 { user?.email? <><li><Link to='/orders'>My Orders</Link></li>
 
 <li><button onClick={handellogout}>LogOut</button></li>
  </> :
  
  <li><Link to='/login'>Login </Link></li>}
  </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {all}
            </ul>
          </div>
          <button className="btn btn-ghost normal-case text-2xl tex- bg-red-600 ">CAR TOYS</button>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className=""><a>{all}</a></li>
          
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}
        </div>
      </div>
    );
};

export default Header;