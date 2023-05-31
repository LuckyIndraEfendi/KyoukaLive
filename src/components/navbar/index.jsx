
import React from "react"
import { FiSearch, AiOutlineInfoCircle, IoIosLogOut, BiMenu, AiOutlineHome, FiUser } from "../../assets/icons"
import { Link } from 'react-router-dom'
import { useAuth } from "../../context/AuthContextProvider"
const Navbar = () => {
    const isLogin = localStorage.getItem('isLogin')
    const [searchAnime, setSearchAnime] = React.useState('')
    const [menuShow, setMenuShow] = React.useState(false)

    const { handleLogOut } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = `/search/${searchAnime}`
    }

    const handleMenuShow = () => {
        setMenuShow(!menuShow)
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
                            {isLogin ? (
                                <a href="/account" className='text-white text-sm font-medium hover:text-[#f07e5c] duration-200  rounded-md'>Account</a>

                            ) : (
                                <a href="/sign-in" className='text-white text-sm font-medium hover:text-[#f07e5c] duration-200 ring-1 ring-[#f07e5c] px-3 py-2 rounded-md'>Sign in</a>

                            )}
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit} className='relative group w-[-200px]' >
                        <input type="text" placeholder='Search Anime' className='px-5 group-hover:pr-10 group-hover:w-[200px] md:duration-500 ring-1 outline-none text-sm py-2 group-hover:placeholder:text-slate-500 duration-500 text-gray-800 w-0 rounded-md' onChange={(e) => setSearchAnime(e.target.value)} />
                        <FiSearch className='absolute top-[8px] right-3 flex text-lg text-slate-500 group-hover:text-slate-600' />
                    </form>
                </div>
            </nav>

            <div id="navbarForMobile" className="flex sm:hidden z-50 items-center gap-2  fixed right-6 bottom-10">
                <div className={`${menuShow ? 'flex' : 'hidden'} gap-4 bg-[#272931] text-xs items-center  py-2 px-4 rounded-md`}>
                    <a href="/" className="flex flex-col items-center gap-1 font-medium">
                        <AiOutlineHome className="text-white text-xl" />
                        <span className="text-white text-[13px] block">Home</span>
                    </a>
                    <a href="/about" className="flex flex-col items-center gap-1 font-medium">
                        <AiOutlineInfoCircle className="text-white text-xl" />
                        <span className="text-white text-[13px] block">About</span>
                    </a>
                    <a href="/account" className="flex flex-col items-center gap-1 font-medium">
                        <FiUser className="text-white text-xl" />
                        <span className="text-white text-[13px] block">Account</span>
                    </a>
                    <a href="#" className="flex flex-col items-center gap-1 font-medium" onClick={handleLogOut}>
                        <IoIosLogOut className="text-white text-xl" />
                        <span className="text-white text-[13px] block">Logout</span>
                    </a>
                </div>
                <div className="hamburgerMenu px-2 py-2 rounded-md bg-[#272931]" onClick={handleMenuShow}>
                    <BiMenu className="text-4xl text-[#f07e5c]" />
                </div>
            </div>

        </>
    )
}

export default Navbar