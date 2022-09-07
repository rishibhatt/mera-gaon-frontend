import React from 'react'
import FooterImage from '../Images/FooterImage.svg';
import './Footer.css'
const Footer = () => {
  return (
    <>

      <div className='footer-container bg-gray-800 w-full p-10 mt-20 flex flex-col justify-between xs:flex-row'>
        <div className='flex flex-col  text-center  xs:flex-col'>
          <h2 className='text-white text-lg xs:text-2xl underline underline-offset-2 decoration-sky-500'>Contacts</h2>
          <ul className='text-slate-400 text-sm mt-2'>
            <li>
            <i className="fa-brands fa-facebook text-white xs:text-lg "></i>
            </li>
            <li>
            <i className="fa-brands fa-twitter text-white xs:text-lg "></i>
            </li>
            <li>
            <i className="fa-brands fa-linkedin text-white xs:text-lg "></i>
            </li>
          </ul>
         
        </div>
        <div className='mt-5 xs:mt-0 justify-between text-center '>
          <h2 className='text-white text-lg xs:text-2xl underline underline-offset-2 decoration-sky-500'>Services</h2>
          <ul className='text-slate-400 text-sm mt-2'>
            <li>
              Marketing
            </li>
            <li>
              Sales
            </li>
            <li>
              Support
            </li>
          </ul>
        </div>
        <div className='justify-between text-center '>
          <h2 className='text-white mt-5 xs:mt-0 text-lg xs:text-2xl underline underline-offset-2 decoration-sky-500'>Abouts</h2>
          <ul className='text-slate-400 text-sm mt-2'>
            <li>
              FAQ
            </li>
            <li>
              Staff
            </li>
            <li>
              Board
            </li>
          </ul>
        </div>
        <div className='justify-between text-center'>
          <h2 className='text-white mt-5 text-lg  underline underline-offset-2 decoration-sky-500 xs:text-2xl xs:mt-0'>Career</h2>
          <ul className='text-slate-400 text-sm mt-2'>
            <li>
              Frontend Dev
            </li>
            <li>
              Backend Dev
            </li>
            <li>
              Sales staff
            </li>
          </ul>
        </div>
        <div className='text-center'>
          <h3 className='text-white mt-5 text-lg  underline underline-offset-2 decoration-sky-500 xs:text-2xl xs:mt-0'>
            Reach to us 
          </h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865834.7893525945!2d115.40109928006991!3d-32.03766691973529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4da094b006123b2b%3A0xaa132b61b00e982e!2sApple%20Headquaters!5e0!3m2!1sen!2sin!4v1662527807524!5m2!1sen!2sin" className='mt-1 p-5'  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='footer-image w-32 xs:w-40 mt-5 xs:mt-0 justify-between text-center '>
          <img src={FooterImage} />
        </div>


      </div>

    </>
  )
}

export default Footer