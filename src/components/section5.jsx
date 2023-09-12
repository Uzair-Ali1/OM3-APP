import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const section5 = () => {
  return (
    <div className="bg-[#BCED22]">
      <div className="container">
       
        <p className="text-[#131313] text-4xl pt-5 font-normal  text-center tracking-[ -1.08px] ">
          Our Team
        </p>
        <div className="flex lg:flex-nowrap flex-wrap gap-12 py-10 justify-center">
          <div className=" mx-4 sm:mx-0 ">
            <img className="w-[397px]" src="/ganja.png" alt="" />
            <div className="bg-black px-6">
              <p className="pt-5 text-[#F0F0F0] text-base font-normal tracking-[ -0.32px] ">
                eCommerce Manager
              </p>
              <p className=" text-[#F0F0F0] text-2xl font-normal tracking-[ -0.72px] pb-4 ">
                Thomas Weber
              </p>
              <p className=" text-[#F0F0F0] text-lg self-stretch font-normal pb-14 max-w-[350px]">
                Focusing is on project management, conception and implementation
                of software solutions.
              </p>
            </div>
          </div>
          <div className="mx-4 sm:mx-0  ">
            <img className="w-[397px]" src="/larka.png" alt="" />
            <div className="bg-black px-6">
              <p className="pt-5 text-[#F0F0F0] text-base font-normal tracking-[ -0.32px] ">
                Online Marketing Manager
              </p>
              <p className=" text-[#F0F0F0] text-2xl font-normal tracking-[ -0.72px] pb-4 ">
                Andreas Reimer
              </p>
              <p className=" text-[#F0F0F0] text-lg self-stretch font-normal pb-7 max-w-[350px]">
                Focus on technical implementation as well as Search Engine
                Optimization and Online Marketing Measures.
              </p>
            </div>
          </div>
          <div className=" mx-4 sm:mx-0 ">
            <img className="w-[397px]" src="/aunty.png" alt="" />
            <div className="bg-black px-6">
              <p className="pt-5 text-[#F0F0F0] text-base font-normal tracking-[ -0.32px] ">
                Marketing
              </p>
              <p className=" text-[#F0F0F0] text-2xl font-normal tracking-[ -0.72px] pb-4 ">
                Claudia Gmelin Larbi{" "}
              </p>
              <p className=" text-[#F0F0F0] text-lg font-normal self-stretch pb-7 max-w-[350px]">
                OM3’s smile for you on the phone. Taking care of the
                administration and communication. <br /> Let's make an
                appointment!
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap gap-12 pb-10 ">
          <div className=" mx-4 sm:mx-0 ">
            <img className="w-[385px]" src="/boy.png" alt="" />
            <div className="bg-black px-[18px]">
              <p className="pt-5 text-[#F0F0F0] text-base font-normal tracking-[ -0.32px] ">
                Designer
              </p>
              <p className=" text-[#F0F0F0] text-2xl font-normal tracking-[ -0.72px] pb-4 ">
                Peter Reimer
              </p>
              <p className=" text-[#F0F0F0] text-lg   self-stretch font-normal pb-9 max-w-[350px]">
                Experience design and branding. Experience in UI and UX
                Design.Know-How in user-centric experiences and inclusive
                design.
              </p>
            </div>
          </div>
          <div className=" mx-4 sm:mx-0  ">
            <img className="w-[385px]" src="/uncle.png" alt="" />
            <div className="bg-black px-[18px]">
              <p className="pt-5 text-[#F0F0F0] text-base font-normal tracking-[ -0.32px] ">
                Performance Ads Specialist
              </p>
              <p className=" text-[#F0F0F0] text-2xl font-normal tracking-[ -0.72px] ">
                Manuel Eberhard
              </p>
              <p className=" text-[#F0F0F0] text-lg self-stretch font-normal py-3 max-w-[350px]">
                With his experience from over 100 successful projects, Manuel
                takes care of the setup, monitoring, and optimization of the
                performance ads for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section5;
