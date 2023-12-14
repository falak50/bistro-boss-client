import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
   const {register,handleSubmit,formState: { errors }} = useForm(); 
   const {createUser,updateUserProfile} = useContext(AuthContext)
   const onSubmit = data => {
    console.log(data);
    createUser(data.email,data.password)
    .then(results => {
        console.log('in the createUSER')
        const loggedUsed = results.user;
        console.log(loggedUsed);
        console.log('signup->createuser->then->name,url',data.name,data.photoURL)
        
        updateUserProfile(data.name,data.photoURL)
        .then(()=>{
          console.log('user profile info updated')
          // reset(); import in usefrom ,handleSubmit,reset
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(error=>console.log(error))
    })
   };


    return (
       <>
            <Helmet>
            <title>Bistro Boss | Sing Up</title>
           </Helmet>
           <h1>123aA@</h1>
       <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name",{ required: true })}  name="name" placeholder="Name" className="input input-bordered"  />
                 {errors.name && <span className="text-red-600">Name field is required</span>}
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL",{ required: true })}  placeholder="Photo URL" className="input input-bordered"  />
                 {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true })}   name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{ 
                    required: true,
                    minLength:6,
                    maxLength:20,
                    pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })}  placeholder="password" className="input input-bordered"  />
                {errors.password?.type === "required" && (
                  <p role="alert">password is required</p>)}
                {errors.password?.type === "minLength" && (
                  <p role="alert">password minLength must be more then 5</p>)}
                {errors.password?.type === "maxLength" && (
                  <p role="alert">password maxLength must be less than 20 characters</p>)}
                {errors.password?.type === "pattern" && (
                  <p role="alert">password must have one upper case , one lower case , one speacial characters , one digit</p>)}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sing Up"/>
              </div>
            </form>
            <p><small>Already have an acount <Link to="/login">Login</Link> </small></p>
          </div>
        </div>
      </div>
       </>
    );
};

export default SignUp;