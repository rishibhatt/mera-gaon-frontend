import React from 'react'
import './Cards.css'
const Cards = () => {
    return (
        <>

            <div className='bg-black h-24 w-full  xs:h-32'>
                <h2 className='text-white p-5 text-center font-rubik xs:text-2xl xs:pt-12'>Stay connected to your village online in a safe and secure environment  ✨ </h2>
            </div>

            <h1 className='font-bold font-mono text-center text-3xl mt-10 sm:text-5xl'>Related Articles</h1>

            <div className='blog-sup pb-5 md:ml-10 flex-wrap sm:flex sm:flex-row'>
                <div className='blog-container border border-black flex flex-col justify-center items-center w-72 bg-white ml-12 mt-20 p-3 xs:w-96'>
                    <div className='blog-img'>
                        <img className='' src='https://images.pexels.com/photos/3831847/pexels-photo-3831847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    </div>
                    <div className='blog-title mt-4 p-3'>
                        <h2 className='font-bold font-serif text-xl'>Fire up your motivation</h2>
                    </div>

                    <div className='blog-content p-3'>
                        <p>Motivation flows from the heart, it does not rain down upon you. To gain motivation, first link to what you feel strongly about. Tap into an idea or goal that excites you and fires up your imagination.</p>
                    </div>

                    <div className='blog-btn mt-4 pb-5'>
                        <button className='bg-black p-3 text-white hover:bg-white hover:border hover:text-black hover:border-black'>Check-out blog</button>
                    </div>

                </div>
                <div className='blog-container flex flex-col justify-center items-center w-72 bg-white ml-12 mt-20 p-3 xs:w-96'>
                    <div className='blog-img'>
                        <img className='' src='https://images.pexels.com/photos/3831847/pexels-photo-3831847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    </div>
                    <div className='blog-title mt-4 p-3'>
                        <h2 className='font-bold font-serif text-xl'>Fire up your motivation</h2>
                    </div>

                    <div className='blog-content p-3'>
                        <p>Motivation flows from the heart, it does not rain down upon you. To gain motivation, first link to what you feel strongly about. Tap into an idea or goal that excites you and fires up your imagination.</p>
                    </div>

                    <div className='blog-btn mt-4 pb-5'>
                        <button className='bg-black p-3 text-white hover:bg-white hover:border hover:text-black hover:border-black'>Check-out blog</button>
                    </div>

                </div>
                <div className='blog-container flex flex-col justify-center items-center w-72 bg-white ml-12 mt-20 p-3  xs:w-96'>
                    <div className='blog-img'>
                        <img className='' src='https://images.pexels.com/photos/3831847/pexels-photo-3831847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    </div>
                    <div className='blog-title mt-4 p-3'>
                        <h2 className='font-bold font-serif text-xl'>Fire up your motivation</h2>
                    </div>

                    <div className='blog-content p-3'>
                        <p>Motivation flows from the heart, it does not rain down upon you. To gain motivation, first link to what you feel strongly about. Tap into an idea or goal that excites you and fires up your imagination.</p>
                    </div>

                    <div className='blog-btn mt-4 pb-5'>
                        <button className='bg-black p-3 text-white hover:bg-white hover:border hover:text-black hover:border-black'>Check-out blog</button>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Cards