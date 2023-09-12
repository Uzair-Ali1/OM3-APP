import React from 'react'
import {BiPlus} from 'react-icons/bi'; 

const question = () => {
  return (
    <div className='bg-[#BCED22]'>
        <div className="container">
            <div className='py-[126px]'>
            <p className='text-[#131313] text-4xl text-center font-normal pb-[30px]'>Quesions and Answers</p>
          <div className='bg-black py-6 px-5 sm:ml-0 mx-4'>
            <div className='flex justify-between  border-b items-center border-white  '>
                <p className='text-white sm:text-2xl text-lg font-normal pb-5  '>What is e-commerce?</p>
                <div className='text-white sm:text-2xl text-lg  '> 
                    <BiPlus/>
                </div>
            </div>
            <div className='flex justify-between border-b items-center border-white  '>
                <p className='text-white sm:text-2xl text-lg font-normal py-5  '>How much can I earn with an online shop?</p>
                <div className='text-white sm:text-2xl text-lg '> 
                    <BiPlus/>
                </div>
            </div>
            <div className='flex justify-between border-b items-center border-white  '>
                <p className='text-white sm:text-2xl text-lg font-normal py-5  '>How do I get started with e-commerce?</p>
                <div className='text-white sm:text-2xl text-lg  '> 
                    <BiPlus/>
                </div>
            </div>
            <div className='flex justify-between border-b items-center border-white  '>
                <p className='text-white sm:text-2xl text-lg  font-normal py-5  '>Are e-commerce websites safe?</p>
                <div className='text-white sm:text-2xl text-lg '> 
                    <BiPlus/>
                </div>
            </div>
            <div className='flex justify-between border-b items-center border-white  '>
                <p className='text-white sm:text-2xl text-lg  font-normal py-5  '>Which shop systems are there?What is e-commerce?</p>
                <div className='text-white sm:text-2xl text-lg  '> 
                    <BiPlus/>
                </div>
            </div>

          </div>
            </div>
        </div>
    </div>
  )
}

export default question