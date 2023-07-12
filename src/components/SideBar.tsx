import { PiArrowLeftBold } from 'react-icons/pi';
import { TbOmega, TbChevronDown } from 'react-icons/tb';
import { MdDashboard } from 'react-icons/md';
import { useState } from 'react';
import { Menus } from '../consts';

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <>
            <div className={`bg-dark-purple flex-none min-h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
                <PiArrowLeftBold className={`bg-light-white text-dark-purple rounded-full text-5xl hover:text-6xl absolute -right-7 top-9 p-1 cursor-pointer ${!open && "-rotate-180"} duration-500`} onClick={() => {setOpen(!open);setSubMenuOpen(false)}} />
                
                <div className="inline-flex mb-8">
                    <TbOmega className={`bg-slate-400 text-3xl rounded mr-4 duration-500 ${open && "rotate-[360deg]"}`}/>
                    <span className={`text-white font-bold text-xl duration-300 ${!open && "scale-y-0"}`}>Thomas_Delapart</span>
                </div>

                <ul className='pt-2'>
                    {Menus.map((menu, index) => (
                        <>
                            <li key={index} className={`text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md ${menu.spacing? "mt-9" : "mt-2"}`} onClick={() => {menu.href ? location.href=menu.href : {}}}>
                                <span  className="text-2xl block float-left" onClick={() => {location.href=menu.href}}> {menu.icon ? menu.icon : <MdDashboard/> }</span>
                                <span className={`text-base font-medium duration-300 ${!open && "scale-y-0"}`} onClick={() => {location.href=menu.href}}>{menu.title}</span>
                                {menu.submenu && open && (
                                    <TbChevronDown className={`text-xl ml-auto duration-200 ${subMenuOpen && "rotate-180"}`} onClick={() => setSubMenuOpen(!subMenuOpen)} />
                                )}
                            </li>
                            {menu.submenu && subMenuOpen && open && (
                                <ul>
                                    {menu.submenuItems.map((submenuItem, index) => (
                                        <li key={index} className={`text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-blue-900 rounded-md ${menu.spacing? "mt-9" : "mt-2"}`} onClick={() => {location.href=submenuItem.href}}>
                                            {submenuItem.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SideBar;