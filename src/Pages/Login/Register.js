import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hook/useToken';




const Register = () => {
  const { createUser, updateUser,googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate('/');
    }

 
    const handleSignUp = (data) => {
        setLoginError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            });
    }

    const saveUser = (name, email) =>{
        const user ={name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }




      const handleGoogleSignIn =  () => {
        googleSignIn() 
            .then(result => {
              const user = result.user;
              console.log(user);
              navigate(from, {replace: true});
          })
          .catch(error => {
              console.log(error.message)
              setLoginError(error.message);
          });
      }


 

    


  return (
    <div className='h-[800px] flex justify-center items-center'>
    <div className='w-96 p-7 border-2'>
        <h2 className='text-xl text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Name</span></label>
                <input type="text" {...register("name", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Email</span></label>
                <input type="email" {...register("email", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Password</span></label>
                <input type="password" {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be 6 characters long" },
                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*.])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                })} className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>
            <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
            {loginError && <p className='text-red-600'>{loginError}</p>}
        </form>
        <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
        <div className="divider">OR</div>

        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

    </div>
</div>
  );
};

export default Register;