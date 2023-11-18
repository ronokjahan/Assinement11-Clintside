import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "./Authprovider";


const Login = () => {
 
  const {login,google}=useContext(Authcontext)

  
  const handellogin=event=>{
    event.preventDefault()
    const from=event.target 
    const email=from.email.value 
    const password=from.password.value
    const all={email,password }

    console.log(all);
    login(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });



  }
    return (
        <div className=" hero min-h-screen bg-base-200">
  <div className="hero-content flex-col mb-2">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handellogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      
      <Link to='/regstion'><p>Don,t have a account Regstion   </p></Link>
      <p className="text-center text-2xl "><button ><span className="bg-red-900">G</span></button></p>
    </div>
  </div>
</div>
    );
};

export default Login;