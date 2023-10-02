import { Link } from "react-router-dom";


const Login = () => {
    return (
      <div className="flex justify-center items-center">
      <div className="shadow-lg p-10 rounded-lg" >
          <div>
              <h1 className="text-center font-medium text-3xl text-blue-600 mb-6 uppercase"> Login Site</h1>
          </div>

          {/* form */}

          <form>

          <div className="relative">
          <input type= "email"
           placeholder="enter your email..." name="email" required className="input input-bordered input-primary w-[400px] max-w-xs" /> <br />


          <input type = "password" placeholder="enter your password" required name="password" className="input input-bordered input-primary w-[400px] mt-5 max-w-xs"/>
           <br />
          
          


          <h1 className="mt-3 cursor-pointer text-blue-700">Forgot password ? </h1>


           {/* button  */}
          <input type="submit" value= "Login" className=" btn w-[400px] mt-5 font-bold bg-blue-600 text-white max-w-xs hover:bg-gray-600" />
          </div>
          </form>

          {/* form end */}

          {/* others content show here please */}


          <div className="mt-5">
              <p>New to this website ? Please <Link to='/registration' className="text-bold text-blue-700 text-md uppercase underline">Register</Link></p>
          </div>

          <div className="mt-5 flex justify-between">
              <button className="btn-small btn-primary rounded-lg py-1 px-4 text-white font-bold">Google SignIn</button>

              <button className="btn-small btn-primary rounded-lg py-1 px-4 text-white font-bold">GitHub SignIn</button>
          </div>

      </div>
  </div>
    );
};

export default Login;