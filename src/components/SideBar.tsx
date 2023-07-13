import { SVGProps, useState } from 'react';
import { Menus } from '../consts';

const SideBar = () => {
    const [open, setOpen] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("open");
        const initialValue = JSON.parse(saved? saved : "true");
        return initialValue;
    });
    const [subMenuOpen, setSubMenuOpen] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("subMenuOpen");
        const initialValue = JSON.parse(saved? saved : "false");
        return initialValue;
      });

    return (
        <>
            <div className={`bg-dark-purple flex-none min-h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
                <MdiArrowLeft className={`bg-light-white text-dark-purple rounded-full text-5xl hover:text-6xl absolute -right-7 top-9 p-1 cursor-pointer ${!open && "-rotate-180"} duration-500`} onClick={() => {
                    localStorage.setItem("open", JSON.stringify(!open));
                    localStorage.setItem("subMenuOpen", JSON.stringify(false));
                    setOpen(!open);
                    setSubMenuOpen(false);
                }} />
                <div className="inline-flex mb-8">
                    <MdiOmega className={`bg-slate-400 text-3xl rounded mr-4 duration-500 ${open && "rotate-[360deg]"}`}/>
                    <span className={`text-white font-bold text-xl duration-300 ${!open && "scale-y-0"}`}>Thomas_Delapart</span>
                </div>

                <ul className='pt-2'>
                    {Menus.map((menu, index) => (
                        <>
                            <li key={index} className={`text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md ${menu.spacing? "mt-9" : "mt-2"}`} onClick={() => {menu.href && !menu.submenu ? location.href=menu.href : {}}}>
                                <span  className="text-2xl block float-left" onClick={() => {menu.href ? location.href=menu.href : location.href="/"}}> {menu.icon ? menu.icon : <MdiViewDashboard/> }</span>
                                <span className={`text-base font-medium duration-300 ${!open && "scale-y-0"}`} onClick={() => {menu.href ? location.href=menu.href : location.href="/"}}>{menu.title}</span>
                                {menu.submenu && open && (
                                    <div className=''>
                                        <div className='bg-gray-400 ml-auto w-0.5 h-1'></div>
                                        <div className='ml-auto w-0.5 h-1   '></div>
                                        <div className='bg-gray-400 ml-auto w-0.5 h-1'></div>
                                        <div className='ml-auto w-0.5 h-1'></div>
                                        <div className='bg-gray-400 ml-auto w-0.5 h-1'></div>
                                    </div>
                                )}
                                {menu.submenu && open && (
                                    <MdiChevronDown className={`text-xl ml-auto duration-200 ${subMenuOpen && "rotate-180"}`} onClick={() => {
                                        localStorage.setItem("subMenuOpen", JSON.stringify(!subMenuOpen));
                                        setSubMenuOpen(!subMenuOpen);
                                    }}/>
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


export function BiCaretDown(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M3.204 5h9.592L8 10.481L3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"></path></svg>
    )
  }

export function MdiArrowLeft(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z"></path></svg>
    )
}

export function MdiChevronDown(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"></path></svg>
    )
  }

export function MdiViewDashboard(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10Z"></path></svg>
    )
}

export function MdiOmega(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19.15 19h-5.76v-2.13c2.11-1.62 3.2-3.63 3.2-6.03c0-1.5-.43-2.68-1.27-3.55C14.47 6.42 13.37 6 12.03 6c-1.35 0-2.46.42-3.32 1.3c-.87.87-1.3 2.07-1.3 3.58c0 2.38 1.09 4.38 3.2 5.99V19H4.85v-2.13h3.56c-2.37-1.55-3.56-3.64-3.56-6.27c0-2.1.65-3.74 1.96-4.94c1.31-1.21 3.03-1.81 5.16-1.81c2.18 0 3.92.6 5.22 1.79c1.31 1.19 1.96 2.86 1.96 4.94c0 2.63-1.2 4.73-3.6 6.29h3.6V19Z"></path></svg>
    )
}