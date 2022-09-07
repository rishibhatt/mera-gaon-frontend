import React, { useState } from 'react';
import './Navbar.css'
const Navbar = () => {
    const [menuBar, setMenuBar] = useState(false);
    const [menuIcon,setMenuIcon] = useState( <i className="fa-solid fa-bars" />);
    const toggleBtn = () => {
        if(menuBar==false)
        {
            setMenuBar(true);
            setMenuIcon(<i class="fa-solid fa-xmark"></i>);
        }
        else
        {
            setMenuBar(false);
            setMenuIcon(<i class="fa-solid fa-bars"></i>);

        }
        
    
    }
    return (
        <>
            <div className='nav-container shadow-slate-900'>
                <div className='p-7 text-black flex flex-row justify-between'>
                    <h1 className='brand-name font-bold font-rubik text-xl sm:text-3xl pl-5'>MERA <span className='bg-black text-white p-1' >GAON</span></h1>

                    <button className='menu-bar xs:hidden' onClick={toggleBtn}>
                       {menuIcon}
                    </button>

                    {
                        menuBar ? <div className='mobile-nav absolute right-5 top-7 p-5'>
                            <h3>
                                Home
                            </h3>
                            <h3>
                                Services
                            </h3>
                            <h3>
                                About us
                            </h3>
                            <h3>
                                FAQ
                            </h3>
                            <h3>
                                Careers
                            </h3>

                        </div> : null
                    } 


                    <div className='nav-items hidden xs:flex flex-row p-2'>
                        <a href='#' className='hover:underline underline-offset-4 decoration-4 decoration-black hover:ease-in hover:duration-500'><h3>
                            Home
                        </h3></a>
                        <a href='#' className='hover:underline underline-offset-4 decoration-4 decoration-black hover:ease-in hover:duration-500'>
                        <h3>
                            Services
                        </h3>
                        </a>
                        
                        <a href='#' className='hover:underline underline-offset-4 decoration-4 decoration-black hover:ease-in hover:duration-500'>
                        <h3>
                            About us
                        </h3>
                        </a>
                        
                        <a href='#' className='hover:underline underline-offset-4 decoration-4 decoration-black hover:ease-in hover:duration-500'>
                        <h3>
                            FAQ
                        </h3>
                        </a>
                        
                        <a href='#' className='hover:underline underline-offset-4 decoration-4 decoration-black hover:ease-in hover:duration-500'>
                        <h3>
                            Careers
                        </h3>
                        </a>
                        
                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar