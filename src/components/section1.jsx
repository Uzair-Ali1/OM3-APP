import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const section1 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="bg-black ">
        <div className="lg:max-w-[600px] mx-auto sm:pl-8  text-center sm:text-left">
          <div>
           
            <div className="py-60">
              <p className="text-[#F0F0F0] text-base sm:text-xl font-normal pb-5">
                Your successful entry into
              </p>
              <p className="text-[#BCED22] text-2xl sm:text-4xl font-normal  pb-[30px] tracking-[-1.08px]">
                eCommerce
              </p>
              <p className="text-[#F0F0F0] text-2xl sm:text-4xl font-normal pb-[30px] tracking-[-1.08px]">
                System Integration
              </p>
              <p className="text-[#F0F0F0] text-2xl sm:text-4xl font-normal pb-[30px] tracking-[-1.08px]">
                Online Marketing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#BCED22]">
        <div className="max-w-[600px] mx-auto sm:pl-8  text-center sm:text-left">
          
        
        <div className=" py-60">
          <p className="text-[#131313] text-lg sm:text-2xl  max-w-[350px] pb-5 m-auto sm:m-0  px-4 font-medium tracking-[-0.72px] leading-[140%]">Do you want to sell your products or services online?</p>
          <p className="text-[#131313] sm:text-lg text-base max-w-[600px] pb-16 px-4 font-normal ">
            Then you will face a series of questions essential to the success of
            your web business crucial are...
          </p>
          <p className="text-white bg-black text-center rounded-[15px] py-1  max-w-[169px] text-xl  font-normal tracking-[-0.6px] sm:m-0 m-auto">Read More</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default section1;
