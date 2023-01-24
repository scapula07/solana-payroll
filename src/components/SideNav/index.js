import React from 'react'
import {AiFillHome,AiFillWechat} from "react-icons/ai"
import {BsPeopleFill} from "react-icons/bs"
import {FaWallet} from "react-icons/fa"
import {RiSettings3Fill} from "react-icons/ri"

export default function SideNavs() {
  return (
    <div className='text-black flex    space-y-14 flex-col justify-center fixed content-between '>
         <div>
            <h5 className='flex flex-col'>
              <span className='font-bold text-lg'>Payroll </span>
            </h5>
            

            <div className=' space-y-14 mt-9 flex flex-col justify-center items-center w-full'>
            <main className=' rounded-full flex justify-center p-2 '>
                 <AiFillHome className='text-xl'/>
              </main>

               <main className='py-4 space-y-8 px-4 flex flex-col rounded-full '>
                  <BsPeopleFill className='text-2xl' />
                  <AiFillWechat className='text-2xl'/>
                  <FaWallet  className='text-2xl'/>
                  {/* <GiTeacher  className='text-2xl' /> */}
               </main>

               <main className='flex flex-col  space-y-4'>
                <RiSettings3Fill className='text-2xl'  />
                  {/* <AiOutlineHistory className='text-2xl' />
                  <AiFillHome className='text-2xl'/> */}
               </main>
            </div>
         </div>


        <div>

                    
        </div>

        
    </div>
  )
}
