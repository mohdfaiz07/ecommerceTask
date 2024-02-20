import React from 'react'

const Footer = () => {
  return (
    
    <div className='flex  justify-around text-base text-gray-400 font-normal cursor-pointer pb-10'>
        <ul> 
        <h1 className='text-sm font-bold mb-4 text-black'>Online Shopping</h1>
        <li>men</li>
        <li>women</li>
        <li>Home&living</li>
        <li>Beauty</li>
        <li>Studio</li>
        <li>Gift Cards</li>
        </ul>

        <ul> 
        <h1 className='text-sm font-bold mb-4 text-black'>CUSTOMER POLICIES</h1>
        <li>Contact us</li>
        <li>Faq</li>
        <li>Term of use</li>
        <li>Track order</li>
        </ul>

        <ul> 
        <h1 className='text-sm font-bold mb-4 text-black' >USEFUL LINKS</h1>
        <li>Blog</li>
        <li>Career</li>
        <li>Site map</li>
        <li>Corporate information</li>
        <li>Help</li>
        </ul>
    </div>
    
    )
}

export default Footer