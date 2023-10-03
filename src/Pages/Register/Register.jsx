import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

const {createRegister, userUpdate} = useContext(AuthContext);

const navigate = useNavigate();

const handleRegister = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createRegister(email, password)
    .then(result => {
        console.log(result.user);

        userUpdate(name, email)
        .then(() => {
           alert('User updated successfully');
           navigate('/');
        })
        .catch(error => {
            alert(error.message);
        })
    })
    .catch(error => {
        console.log(error);
    })
}

    return (
        <div>

           <div className="flex justify-center items-center">
         <div className="shadow-lg p-10 rounded-lg" >
            <div>
                <h1 className="text-center font-medium text-3xl text-blue-600 mb-6"> Registration please</h1>
            </div>

            {/* form */}

            <form onSubmit={handleRegister}>

            <div className="relative">

            <input type= "text"
             placeholder="enter your name..." name="name" required className="input input-bordered input-primary w-[400px] max-w-xs" /> <br />

            <input type= "email"
             placeholder="enter your email..." name="email" required className="input input-bordered input-primary w-[400px] max-w-xs mt-5" /> <br />


            <input type="password" placeholder="enter your password" required name="password" className="input input-bordered input-primary w-[400px] mt-5 max-w-xs" /> <br />


            {/* <h1 className="mt-3">Forgot password ? </h1> */}

            <input type="checkbox" name="terms" id="terms" className="mt-5" />
            <label htmlFor="terms" className="ml-2">Accepted our <a href="" className="text-blue-500">terms and conditions</a></label> <br />

             {/* button  */}
            <input type="submit" value= "Registration" className=" btn w-[400px] mt-5 font-bold bg-blue-600 text-white max-w-xs hover:bg-gray-600" />
            </div>

            </form>

            {/* form end */}

            <div className="mt-5">
              <p>Already have an account ? Please <Link to='/login' className="text-bold text-blue-700 text-md uppercase underline">Login</Link></p>
            </div>
        </div>
    </div>
            
        </div>
    );
};

export default Register;