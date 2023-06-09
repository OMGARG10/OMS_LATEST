import React from 'react'
import Footer from './Footer'
import MyNavbar from './Navbar'

const AboutUs = () => {
  return (
    <>
    <MyNavbar/>
    <div className='w-full mt-4 justify-center items-center'>
        <p className=''>
        {/* <img className=' w-screen pt-10 h-[40rem]' src="./images/aboutus.png" alt="" /> */}
        <img className=' w-full object-cover h-screen' src="./images/aboutus.png" alt="" />
        <div className='absolute left-20 top-1/3 right-20 text-white text-justify text-6xl font-bold space-y-2'>
        <h1>Who Are We</h1>
        Designers , <br /> thinkers , <br /> Collaborators
        </div>
        </p>
    </div>
    <div className='bg-white border-solid border-2 border-black h-auto m-2'>
        <h1 className='font-bold text-center text-4xl italic'>Our Team</h1>
        <hr className='h-1 bg-black'/>
        <hr className='h-1 bg-black'/>
        <div className='flex justify-center items-center'>
            <div className='w-48 m-10 border-solid border-2 border-black p-2 justify-center items-center transform transition duration-500 hover:scale-110'>
                <img className='border-solid border-2 border-black h-20 rounded-full ml-12' src="./images/boy.png" alt="" />
                <hr className='h-1 bg-black mt-1'/>
                <h1 className='font-bold text-xl text-center'>Aniket Gupta</h1>
                <hr className='h-1 bg-black'/>
                <p className='text-left'>
                    <p className='font-bold'>Education:</p><p>Bachelor in Computer Engineering </p>        
                    <p className='font-bold'>Role:</p><p> Group Leader</p>
                    <p className='font-bold'>Skills :</p><p>C++, Front End Web Development, Flutter</p>
                    <p className='font-bold'>College:</p><p>Shree L.R Tiwari College Of Engineering</p>
                </p>
            </div>
            <div className='w-48 m-10 border-solid border-2 border-black p-2 justify-center items-center transform transition duration-500 hover:scale-110'>
                <img className='border-solid border-2 border-black h-20 rounded-full ml-12' src="./images/boy.png" alt="" />
                <hr className='h-1 bg-black mt-1'/>
                <h1 className='font-bold text-xl text-center'>Nilesh Gupta</h1>
                <hr className='h-1 bg-black'/>
                <p className='text-left'>
                <p className='font-bold'>Education:</p><p>Bachelor in Computer Engineering </p>        
                    <p className='font-bold'>Role:</p><p> Group Member</p>
                    <p className='font-bold'>Skills :</p><p>Python, Android Development, Blockchain</p>
                    <p className='font-bold'>College:</p><p>Shree L.R Tiwari College Of Engineering</p>
                </p>
            </div>
            <div className='w-48 m-10 border-solid border-2 border-black p-2 justify-center items-center transform transition duration-500 hover:scale-110'>
                <img className='border-solid border-2 border-black h-20 rounded-full ml-12' src="./images/boy.png" alt="" />
                <hr className='h-1 bg-black mt-1'/>
                <h1 className='font-bold text-xl text-center'>Om Garg</h1>
                <hr className='h-1 bg-black'/>
                <p className='text-left'>
                <p className='font-bold'>Education:</p><p>Bachelor in Computer Engineering </p>        
                    <p className='font-bold'>Role:</p><p> Group Member</p>
                    <p className='font-bold'>Skills :</p><p>Java, Front End Web Development</p>
                    <p className='font-bold'>College:</p><p>Shree L.R Tiwari College Of Engineering</p>
                </p>
            </div>
            <div className='w-48 m-10 border-solid border-2 border-black p-2 justify-center items-center transform transition duration-500 hover:scale-110'>
                <img className='border-solid border-2 border-black h-20 rounded-full ml-12' src="./images/boy.png" alt="" />
                <hr className='h-1 bg-black mt-1'/>
                <h1 className='font-bold text-xl text-center'>Atharva Ahirekar</h1>
                <hr className='h-1 bg-black'/>
                <p className='text-left'>
                <p className='font-bold'>Education:</p><p>Bachelor in Computer Engineering </p>        
                    <p className='font-bold'>Role:</p><p> Group Member</p>
                    <p className='font-bold'>Skills :</p><p>Java,  Flutter</p>
                    <p className='font-bold'>College:</p><p>Shree L.R Tiwari College Of Engineering</p>
                </p>
            </div>

        </div>
    </div>
    <Footer/> 
    </>
  )
}

export default AboutUs