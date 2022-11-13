import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import tritment from '../../../assets/images/treatment.png';

const Care = () => {
  return (
    <div className="hero mt-16">
      <div className="hero-content md:flex flex-col md:flex-row md:w-8/12">
          <img src={tritment} className="rounded-lg lg:w-1/2 shadow-2xl h-full" alt='' />
          <div>
              <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
              <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
              <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
      </div>
  </div>
  );
};

export default Care;