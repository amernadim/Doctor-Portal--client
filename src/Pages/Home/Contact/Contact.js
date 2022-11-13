import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/appointment.png';

const Contact = () => {
  return (
    <div className='py-4' style={
      {
        background : `url(${bg})`
      }
    }>
      <div className='text-center mb-6'>
                <p className='text-xl font-bold text-primary'>Our Services</p>
                <h2 className='text-3xl text-white'>Services We Provide</h2>
      </div>
      <form className='mx-auto flex flex-col gap-1 md:w-1/3 px-2'>
      <input type="email" placeholder="Email" className="input input-bordered w-full " />
      <br />
      <input type="text" placeholder="Subject" className="input input-bordered w-full" />
      <br />
      <textarea className="textarea textarea-bordered" rows="4" placeholder="Your Massage"></textarea>
      <br />
      <button 
        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
      </form>
      
    </div>
  );
};

export default Contact;