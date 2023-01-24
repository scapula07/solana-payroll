import React from 'react'
import SideNavs from '../components/SideNav'
import Header from '../components/Header'


export default function Layout({children}) {
  return (
    <div className="layout text-black bg-white h-screen text-white px-8  py-4 overflow-x-hidden">
         <div className='w-full flex h-full  space-x-32'>
                <main className='width-sidenavs'>
                   <SideNavs />
                </main>

                <main className='w-10/12'>
                    <Header />
                    <div className="page  px-10 py-12 ">
                    {children}

                
                    </div>
        
             </main>

         </div>

    </div>
  )
}
