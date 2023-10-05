import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex text-main my-5 mx-2 items-center rounded border-slate-400 backdrop-blur-sm bg-white/5'>
            < Link href={"/"} > <h1 className='text-5xl p-5 max-sm:text-2xl '>{"<"}Tom R/{">"}</h1></Link>
            {/* <p className='flav-text'> 16y/o hobby dev</p> */}

            <div className='text-2xl mx-20 max-sm:text-base mx-5' >
                <div className='space-x-10'>
                    <Link href={"/contact"}><span> Contact </span></Link>
                    <Link href={"/about"}><span> About </span></Link>
                    {/* <Link><a> Portfolio </a></Link> */}
                </div>
            </div >

        </div >
    )
}

export default Header