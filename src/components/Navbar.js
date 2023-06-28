"use client"
import Link from "next/link";
import Login from '../components/login/index.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
        
    
    return (
        <nav className="navbar--container flex flex-row justify-between px-10 py-10 mx-auto bg-slate-900 items-center ">
            <div>
                <Link href="/" classname=''>
                    OIO Dev
                </Link>
            </div>
            {/* Default view */}
            <div onClick={handleNav} className="flex sm:hidden">
                <FontAwesomeIcon className="w-5" icon={faBars} />
            </div>
            <div className="navbar--routeLinks hidden gap-4 items-center sm:flex">
                <Link href="/" className='hover:text-blue-400'>
                    Home
                </Link>
                <Link href ="/services" className='hover:text-blue-400'>
                    Services
                </Link>
                <Link href ="/dashboard" className='hover:text-blue-400'>
                    Dashboard
                </Link>
                <Link  className="w-5 gap-4" href ="/login">
                    <FontAwesomeIcon icon={faRightToBracket} />
                </Link>     
                <Link className="w-5" href="/login">
                    <FontAwesomeIcon icon={faUser} />
                </Link>               
            </div>
            {/* Mobile view */}

            <div className={nav ? "absolute" : "hidden"}>
                <div className="flex flex-col gap-5">
                    <Link href="/" className='hover:text-blue-400'>
                        Home
                    </Link>
                    <Link href="/services" className='hover:text-blue-400'>
                        Services
                    </Link>
                    <Link href="/dashboard" className='hover:text-blue-400'>
                        Dashboard
                    </Link>
                    <Link className="w-5 gap-4" href="/login">
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </Link>
                    <Link className="w-5" href="/login">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}