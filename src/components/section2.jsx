import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const section2 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="bg-black ">
        <div className="max-w-[600px] mx-auto  sm:pl-8  text-center sm:text-left">
          <div>
           
            <div className="py-60">
              <p className="text-[#F0F0F0]  text-base sm:text-xl font-normal pb-5">
                Your successful entry into
              </p>
              <p className="text-[#F0F0F0] text-2xl sm:text-4xl font-normal  pb-[30px] tracking-[-1.08px]">
                eCommerce
              </p>
              <p className="text-[#BCED22]  text-2xl sm:text-4xl font-normal pb-[30px] tracking-[-1.08px]">
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
            <p className="text-[#131313] text-lg sm:text-2xl  max-w-[350px] m-auto sm:m-0   font-medium tracking-[-0.72px] leading-[140%]">
              Optimal integration into business processes
            </p>
            <p className="text-[#131313] sm:text-lg text-base m-auto sm:m-0  px-3 max-w-[470px] py-5 font-normal ">
              Web stores becomes increasingly complex. <br /> <br /> Their planning,
              development and implementation is now the task of experts who, in
              addition to programming, graphics, functionality and other
              indispensable features, must also master the integration of online
              stores.
            </p>
            <p className="text-white bg-black text-center rounded-[15px] sm:m-0 m-auto py-1  max-w-[169px] text-xl  font-normal tracking-[-0.6px]">
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;
