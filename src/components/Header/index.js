import React from 'react'
import {MdNotifications} from "react-icons/md"

export default function Header() {
  return (

    <div className=' text-black w-full'>
       <div className='flex justify-between'>
         <main className='w-3/5'>

          
         </main>
         <main className='w-2/5 flex items-center justify-between'>
            <div>Documents</div>
            <div>Connect Wallet</div>

            <div>
                <MdNotifications />

            </div>
     
         </main>



       </div>

    </div>
  )
}
