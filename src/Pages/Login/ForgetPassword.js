import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const ForgetPassword = () => {
      const {forgetPass} = useContext(AuthContext);

       const handleForgetPassword = (event) => {
        event.preventDefault()
        const email = event.target.email.value ;
        forgetPass(email)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);
          // ..
        });
       }
  return (
    <form onSubmit={handleForgetPassword} className='flex justify-center items-center mt-9'>
      <div className="w-full max-w-xs ">
    <label className="label"> <span className="label-text">Email</span></label>
    <input type="email" name='email' className="input input-bordered w-full max-w-xs" required/>
   <input className='btn btn-accent w-full mt-2' value="Submit" type="submit" />
   </div>
    </form>
  );
};

export default ForgetPassword;