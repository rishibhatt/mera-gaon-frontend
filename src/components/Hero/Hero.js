import React from 'react'
import './Hero.css';
import  HeroImage  from '../Images/HeroImage.jpg';


const Hero = () => {
    return (
        <>
            <div className='hero-container flex flex-row flex-wrap mt-20'>
                <div className='hero-text w-3/4 xs:w-1/2 xs:mt-20'>
                    <h1 className='hero-title font-rubik font-bold text-2xl p-2 xs:mt-16  xs:text-8xl'>MERA <span className='bg-black p-1 xs:p-2'>GAON</span> </h1>
                    <h4 className='hero-subtitle font-rubik xs:text-3xl xs:mt-8'>Community of, for and by Rural India</h4>
                </div>
                <div className='hero-image p-5 xs:mt-26' >
                    <img src={HeroImage} className='imagee'/>
                </div>

            </div>

        </>
    )
}

export default Hero