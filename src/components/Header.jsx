import React from 'react'
import { getLocalImages } from '../utils/helpers'

export const Header = ({ showMenu }) => {
    return (
        <div
            className="fixed z-20 w-full h-14 bg-base-250 md:hidden flex justify-between p-3"
            onClick={showMenu}
        >
            <img src={getLocalImages('./logo.png')} alt="menu btn" />
            <img src={getLocalImages('./menu.svg')} alt="menu btn" />
        </div>
    )
}
