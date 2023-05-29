
import React from "react"
import { FiSearch } from "../../assets/icons"
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [searchAnime, setSearchAnime] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = `/search/${searchAnime}`
    }

    return (
        <>
            <nav className=' '>
                <div className="w-[90%] md:w-[80%] m-auto flex justify-between items-center  md:h-[150px] py-6 md:py-2">
                    <div className="logo md:flex items-center md:justify-evenly md:gap-5">
                        <Link to='/'>
                            <h1 className='font-outfits md:text-4xl font-black text-3xl text-[#f07e5c]'>kyouka</h1>
                        </Link>
                        <div className="menu hidden md:flex justify-evenly items-center w-[400px]">
                            <a href="" className='text-white text-sm font-medium hover:text-[#f07e5c] duration-200'>This Season</a>
                            <a href="" className='text-white text-sm font-medium hover:text-[#f07e5c] duration-200'>Manga</a>
                            <a href="" className='text-white text-sm font-medium hover:text-[#f07e5c] duration-200'>Anime</a>
                            <a href="" className='text-white text-sm font-medium hover:text-[#f07e5c] duration-200 ring-1 ring-[#f07e5c] px-3 py-2 rounded-md'>Sign in</a>
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit} className='relative group w-[-200px]'>
                        <input type="text" placeholder='Search Anime' className='px-5 group-hover:pr-10 group-hover:w-[200px] md:duration-500 ring-1 outline-none text-sm py-2 group-hover:placeholder:text-slate-500 duration-500 text-gray-800 w-0 rounded-md' onChange={(e)=>setSearchAnime(e.target.value)} />
                        <FiSearch className='absolute top-[8px] right-3 flex text-lg text-slate-500 group-hover:text-slate-600' />
                    </form>
                </div>
            </nav>

        </>
    )
}

export default Navbar