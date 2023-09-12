import React from 'react'
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import {GiHamburgerMenu} from 'react-icons/gi';

const navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState);
    };
  
  return (
    <div className='bg-[#131313]'>
        <div className=''>
        <div>
        <div className="flex justify-between fixed top-6 w-full max-w-[1250px]   items-center pb-16">
              <img className="pl-16" src="/om3.svg" alt="" />
              <div className="text-3xl pr-12 lg:pr-5  text-white" onClick={toggleDrawer}>
                <GiHamburgerMenu />
              </div>
            </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        className="bla bla bla"
        
      >
        <div className='bg-[#131313] '>
          
          <div className="flex px-5 lg:flex-nowrap flex-wrap   justify-between  pt-20 pb-[223px] ">
            <div>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px] pb-6">
                Team
              </p>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px] pb-6">
                Partners
              </p>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px] pb-6">
                How We do it
              </p>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px] pb-6">
                QA
              </p>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px]">
                Contact
              </p>
            </div>
            <div>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px] pb-6">
                News
              </p>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px] pb-6">
                Jobs
              </p>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px] pb-6">
                Reference
              </p>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px] pb-6">
                E-Commerce
              </p>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px] pb-6">
                System Integration
              </p>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px]">
                Online Marketing
              </p>
            </div>
            <div>
              <p className="font-normal text-2xl text-[#F0F0F0] tracking-[-0.72px] pb-6">
                en de
              </p>
              <img
                className="max-w-[150px] h-[30px]"
                src="/facebook.png"
                alt=""
              />
            </div>
          </div>
          <p className=" font-normal text-2xl text-center text-[#F0F0F0] tracking-[-0.72px] pb-[80px]">
            Term of Use and Privacy
          </p>
        </div>
      </Drawer>
    </div>
        </div>

    </div>
  )
}

export default navbar