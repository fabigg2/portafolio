import React from 'react'
import { Loading } from './ui/load/loiding'

export const CharginModal = ({children}) => {
  return (
    <div className='fixed top-0 left-0 z-30 w-screen h-screen bg-[#ffffff90] flex justify-center items-center'>
        {children}
    </div>
  )
}
