import { BsGoogle } from '../../assets/icons'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContextProvider'
import { Link } from 'react-router-dom'

const index = () => {

    const { handleGoogleLogin, value, setValue, handleSignUp } = useAuth()


    return (
        <>
            <div className="w-[90%] mt-6 md:w-[40%] m-auto">
                <div className="flex flex-col  justify-center">
                    <div className="thubmnail flex justify-center">
                        <img src="https://cdn.myanimelist.net/images/anime/5/87048.jpg" alt="" className=' rounded-full w-32 h-32 ring-4 bg-blend-darken opacity-80 shadow-sm shadow-white ring-slate-100' />
                    </div>
                    <form action="" className='flex flex-col gap-5 mt-5' onSubmit={handleSignUp}>
                        <div className="email flex flex-col gap-3">
                            <label htmlFor="email" className='text-white  font-outfits '>Email </label>
                            <input type="text" value={value.email} name="email" id="email" placeholder=' Email address..' className=' py-3 px-4 rounded-md bg-transparent ring-1 ring-gray-600  duration-200 outline-none focus:ring-1 focus:ring-slate-200 text-gray-400 focus:placeholder:text-gray-300 placeholder:text-slate-300 text-base ' required onChange={(e) => setValue({ ...value, email: e.target.value })} />
                        </div>
                        <div className="password flex flex-col gap-3">
                            <label htmlFor="password" className='text-white  font-outfits '>Password </label>
                            <input type="password" value={value.password} name="password" id="password" placeholder='Password' className=' py-3 px-4 rounded-md bg-transparent ring-1 ring-gray-600  duration-200 outline-none focus:ring-1 focus:ring-slate-200 text-gray-400 focus:placeholder:text-gray-300 placeholder:text-slate-300 text-base ' required onChange={(e) => setValue({ ...value, password: e.target.value })} />
                        </div>
                        <div className="confirmPassword flex flex-col gap-3">
                            <label htmlFor="confirmPassword" className='text-white  font-outfits '>Confirm Password </label>
                            <input type="password" value={value.confirmPassword} name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' className=' py-3 px-4 rounded-md bg-transparent ring-1 ring-gray-600  duration-200 outline-none focus:ring-1 focus:ring-slate-200 text-gray-400 focus:placeholder:text-gray-300 placeholder:text-slate-300 text-base ' required onChange={(e) => setValue({ ...value, confirmPassword: e.target.value })} />
                        </div>
                        <div className="rememberMe flex items-center gap-2">
                            <input type="checkbox" />
                            <span className='text-white text-[15px] '>Remember me</span>
                        </div>
                        <div className="btnGroup">
                            <button className="btn text-white w-full px-3 py-3 rounded-md bg-blue-600 font-medium text-base" >Sign Up</button>
                            <p className='text-white mt-2 text-sm py-2'>Already have Account?
                                <Link to='/sign-in' className='text-blue-500 font-medium'> Sign-in</Link>
                            </p>
                        </div>
                    </form>

                    <button className="btn mt-3 text-white w-full px-3 py-3 rounded-md  font-medium text-base bg-red-600 hover:bg-red-700 duration-300" onClick={handleGoogleLogin} >
                        <div className="flex items-center justify-center gap-2">
                            <BsGoogle className='text-lg ' />
                            <span>Sign Up with Google</span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default index