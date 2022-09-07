import React from 'react'

const Content = () => {
    return (
        <>
            <div className='content-container justify-center flex flex-wrap lg:flex-nowrap flex-col sm:flex-row bg-white'>
                <div className='content-text mt-10 p-20'>
                    <p className='text-lg font-rubik text-gray-900 sm:text-3xl sm:tracking-widest'>
                    Village residents, local businesses and local public institutions can sign up for their village's own private network and interact with each other regarding matters concerning the local community.<br /><br/>
                    These range from residents communicating about their daily social and work life like the birth of a child in the family or their surplus perishable agriculture output, to an agri store advertising new stock availability before the sowing season, to a health center sharing information on a Covid 19 vaccination camp.<br /><br />
                    Get a chance to increase your business through Mera Gaon


Whether you have a new business or you want to advertise your goods and share about discounts, you can share all this information to your village quickly and widely using Mera Gaon.
                    </p>
                    
                </div>
                <div className='content-card ml-20 bg-white flex flex-col items-center p-4 shadow-lg rounded-2xl w-60 mb-10  sm:mr-20 sm:mt-16 '>
                    <div className='card-image '>
                        <img alt='profile' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg' />
                    </div>

                    <div className='card-name text-gray-800 text-2xl font-medium mt-4'>
                        <p>Rishab Bhatt</p>
                    </div>

                    <div className='username text-gray-500'>
                        <p>bhattrishu07@gmail.com</p>
                    </div>
                    <div className='text-gray-800 font-rubik font-semibold underline-offset-2 underline decoration-sky-500 mt-4'>
                        <h3>Send me a message</h3>
                    </div>
                    <div className='mt-4 ml-2 font-medium'>
                        <input className='mt-4 p-2 border border-black' type="text" placeholder="Subject" />
                        <textarea rows='5'  cols = '20' className='mt-4 p-2 border border-black' placeholder='Message'/>
                    </div>
                    <button className='bg-sky-500 text-white p-2 mt-4 w-32 hover:bg-pink-500'>Send</button>
                </div>
            </div>

        </>
    )
}

export default Content