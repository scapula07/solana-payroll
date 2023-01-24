import React from 'react'
import SearchBar from '../../components/SearchBar'
import {BiFilter} from "react-icons/bi"


export default function Employees() {
  return (
    <div>
        <div className='flex text-black justify-between'>
            <div className='flex space-x-10 items-center'>
                <h5 className='text-2xl font-semibold'>Staff</h5>
                <SearchBar />
            </div>
            <div className='flex bg-slate-300 rounded-lg items-center space-x-4 px-4 '>
              <BiFilter />
              <h5>Filter</h5>
            </div>

        </div>

    </div>
  )
}
