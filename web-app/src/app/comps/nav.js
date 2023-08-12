"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react"
import logo from '@/app/public/w3_logo_f.png'


const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleScroll = (e) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };





    return(
            <header className="fixed backdrop-blur-lg w-screen h-max  sm:h-[5rem] z-10 ">
            
            <div className="flex  px-8 w-screen justify-between  items-center py-2  space-y-2 sm:space-x-[8rem] sm:py-[1rem] mb-2 mx-auto sm:mb-[3rem] ">

                <div className="flex text-slate-100 text-[2rem] items-center justify-between">

                    <Image src={logo} alt="logo" className="w-[5rem] h-[5rem]" />
                </div>

                <div id="hamburger" className=" flex flex-col gap-y-1 cursor-pointer md:hidden" onClick={(() => setMenuOpen(open => !open))}>
                    <div id="hamburger1" className="h-[2px] w-8 bg-black "></div>
                    <div id="hamburger2" className="h-[2px] w-8 bg-black"></div>
                    <div id="hamburger3" className="h-[2px] w-8 bg-black"></div>
                </div>

                <div className="w-1/2 md:flex items-center space-x-12  mb-12 hidden px-4 ">

                    <Link href={`#home`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.5rem] hover:text-slate-950 duration-200 peer text-lg" >Home
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                    <Link href={`#about`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.5rem] hover:text-950 duration-200 peer text-lg" >About
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                    <Link href={`#events`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.5rem] hover:text-950 duration-200 peer text-lg" >Events
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                    <Link href={`#team`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.5rem] hover:text-950 duration-200 peer text-lg" >Our Team
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                    <Link href={`#partners`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.5rem] hover:text-950 duration-200 peer text-lg" >Partners
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                    <Link href={`#contact`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.5rem] hover:text-950 duration-200 peer text-lg" >Contact Us
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>


                </div>




            </div>
            {menuOpen &&
                <div className="h-[100vh] w-screen flex flex-col mt-[5rem] items-center space-y-10  md:hidden">

<Link href={`#home`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.6rem] hover:text-slate-950 duration-200 peer text-lg" >Home
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                    <Link href={`#about`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.6rem] hover:text-950 duration-200 peer text-lg" >About
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                    <Link href={`#events`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.6rem] hover:text-950 duration-200 peer text-lg" >Events
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                    <Link href={`#team`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.6rem] hover:text-950 duration-200 peer text-lg" >Our Team
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                    <Link href={`#partners`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.6rem] hover:text-950 duration-200 peer text-lg" >Partners
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                    <Link href={`#contact`} onClick={handleScroll}>
                        <button className="text-slate-800 text-[1.6rem] hover:text-950 duration-200 peer text-lg" >Contact Us
                        </button>
                        <div className="w-0 h-[2px] bg-blue-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                    </Link>

                </div>}










        </header>

    )
}

export default Nav;