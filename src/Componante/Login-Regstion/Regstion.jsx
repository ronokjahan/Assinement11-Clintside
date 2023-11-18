import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "./Authprovider";


const Regstion = () => {
  const {singup}=useContext(Authcontext)
const handelregstion=event=>{
    event.preventDefault()
    const from=event.target
    const email=from.email.value
    const password=from.password.value
    const cpassword=from.cpassword.value
   const all={email,password,cpassword}
   console.log(all);
   singup(email,password)
   .then((userCredential) => {
   
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
            <h1 className="text-5xl font-bold">Regstion now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelregstion} className="card-body">
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
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confarm Password</span>
                </label>
                <input type="password" name="cpassword" placeholder="Confarm-password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Regstion</button>
              </div>
            </form>
            <Link className="text-rose-800	text-xl" to='/login'>Login Now</Link>
          </div>
        </div>
      </div>
    );
};

export default Regstion;