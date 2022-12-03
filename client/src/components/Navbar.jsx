//----------imported required icons---------
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import React,{useState} from 'react';
//navbar item component made so that the same code could be reused
const NavbarItem =({title,classProps})=>{
    return(
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}
const Navbar = ()=>{
    //toggleMenu is a variable with initial state false and state changing function setToggleMenu
    const [toggleMenu,setToggleMenu]=React.useState(false);
    return(
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["Market","Exchange","Tutorials","Wallets"].map((item,index)=>(
                    <NavbarItem key={item+index} title={item}/>
                ))}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>
            <div className='flex relative'>
                {/* the following type of consitional statement is called a conditional(ternary ) operator */}
                    {toggleMenu
                    //if toggle menu is true
                    ?<AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer " onClick={()=>setToggleMenu(false)}/> 
                    //if toggle menu is false
                    :<HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer " onClick={()=>setToggleMenu(true)}/>}
                    {toggleMenu && (
                        <ul
                            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list:none
                                flex flex-col justify-start items-end rounded-end rounded-md blue-glassmorphism text-white animate-slide-in
                            ">
                            <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={()=>{setToggleMenu(false)}}/>
                            </li>
                            {["Market","Exchange","Tutorials","Wallets"].map((item,index)=>(
                            <NavbarItem key={item+index} title={item} classProps="my-2 text-lg"/>
                            ))}
                        </ul>
                    )}
            </div>
        </nav>
        );
}
export default Navbar;