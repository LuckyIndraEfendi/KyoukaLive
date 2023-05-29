const index = () => {
    return (
        <div className="w-[90%] m-auto relative mt-5" >
            <div className="md:grid md:grid-cols-6 gap-5 ">
                <div className="md:col-span-1 hidden md:flex md:flex-col gap-4">
                    {/* <img src={item.image} alt="" className='w-full rounded-md' /> */}
                    <div className="h-64 rounded-md bg-slate-400 animate-pulse w-[200px] "></div>
                    <div className="h-6  rounded-md bg-slate-400 animate-pulse w-[200px] "></div>
                </div>
                <div className="md:col-span-5 md:py-3 md:px-2 hidden md:block">
                    {/* <h1 className='text-white text-2xl font-rowdies md:text-4xl mb-6'>{item.title}</h1> */}
                    <div className="h-6 rounded-md bg-slate-400 animate-pulse w-[400px] "></div>

                    <ul className='md:flex md:flex-wrap  md:gap-2 my-3  hidden'>
                        {/* {item.genres.map((ress, i) => (
                        ))} */}
                        <li className="h-5 rounded-full bg-slate-400 animate-pulse w-20 "></li>
                        <li className="h-5 rounded-full bg-slate-400 animate-pulse w-20 "></li>
                        <li className="h-5 rounded-full bg-slate-400 animate-pulse w-20 "></li>
                        <li className="h-5 rounded-full bg-slate-400 animate-pulse w-20 "></li>
                    </ul>
                    <ul className='md:flex md:flex-wrap hidden md:gap-2  my-3'>
                        <li className='bg-slate-400 animate-pulse h-6 w-20 text-slate-900 font-medium text-sm px-3 py-1 rounded-full'></li>
                        <li className='bg-slate-400 animate-pulse h-6 w-20 text-slate-900 font-medium text-sm px-3 py-1 rounded-full'></li>
                        <li className='bg-slate-400 animate-pulse h-6 w-20 text-slate-900 font-medium text-sm px-3 py-1 rounded-full'></li>
                        <li className='bg-slate-400 animate-pulse h-6 w-20 text-slate-900 font-medium text-sm px-3 py-1 rounded-full'></li>
                        <li className='bg-slate-400 animate-pulse h-6 w-20 text-slate-900 font-medium text-sm px-3 py-1 rounded-full'></li>
                        <li className='bg-slate-400 animate-pulse h-6 w-20 text-slate-900 font-medium text-sm px-3 py-1 rounded-full'></li>
                        <li className='bg-slate-400 animate-pulse h-6 w-20 text-slate-900 font-medium text-sm px-3 py-1 rounded-full'></li>
                        <li className='bg-slate-400 animate-pulse h-6 w-20 text-slate-900 font-medium text-sm px-3 py-1 rounded-full'></li>

                    </ul>
                    <div className="h-36 overflow-y-scroll py-3 ">
                        <p className='text-white font-outfits mt-5 text-sm md:text-base h-[100px] w-full rounded-md bg-slate-400 animate-pulse'></p>
                    </div>
                </div>

                <div className="md:hidden">
                    <h1 className='text-white text-2xl py-2 font-rowdies h-6 w-[150px] bg-slate-400 animate-pulse rounded-md '></h1>
                    <ul className='flex flex-wrap gap-3 py-3'>
                        <li className='text-white text-xs h-4 w-12 rounded-full bg-slate-400 animate-pulse'></li>
                        <li className='text-white text-xs h-4 w-12 rounded-full bg-slate-400 animate-pulse'></li>
                        <li className='text-white text-xs h-4 w-12 rounded-full bg-slate-400 animate-pulse'></li>
                        <li className='text-white text-xs h-4 w-12 rounded-full bg-slate-400 animate-pulse'></li>
                        <li className='text-white text-xs h-4 w-12 rounded-full bg-slate-400 animate-pulse'></li>
                    </ul>
                    <p className='text-white font-outfits  text-sm h-[150px] w-full rounded-md bg-slate-400 animate-pulse'></p>
                </div>
            </div>


            <div className="episodeList mt-12">
                <h1 className='mb-10 text-lg font-karla text-white md:px-1 md:text-2xl h-6 bg-slate-400 animate-pulse w-[100px] rounded-md'></h1>
                <div className="eps md:px-1 flex flex-col gap-5 h-[400px] overflow-y-scroll">
                    <a href='' className="bg-slate-400 animate-pulse h-10 rounded-md" ></a>
                    <a href='' className="bg-slate-400 animate-pulse h-10 rounded-md" ></a>
                    <a href='' className="bg-slate-400 animate-pulse h-10 rounded-md" ></a>
                    <a href='' className="bg-slate-400 animate-pulse h-10 rounded-md" ></a>
                    <a href='' className="bg-slate-400 animate-pulse h-10 rounded-md" ></a>
                    <a href='' className="bg-slate-400 animate-pulse h-10 rounded-md" ></a>
                    <a href='' className="bg-slate-400 animate-pulse h-10 rounded-md" ></a>
                </div>
            </div>
            <div className="recomendation mt-10">
                <h1 className='mb-5 text-lg font-karla text-white md:text-2xl h-6 w-[200px] rounded-md bg-slate-400 animate-pulse'></h1>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    <div className="md:h-[250px] h-[150px] w-full bg-slate-400 animate-pulse rounded-md"></div>
                    <div className="md:h-[250px] h-[150px] w-full bg-slate-400 animate-pulse rounded-md"></div>
                    <div className="md:h-[250px] h-[150px] w-full bg-slate-400 animate-pulse rounded-md"></div>
                    <div className="md:h-[250px] md:block hidden h-[150px] w-full bg-slate-400 animate-pulse rounded-md"></div>
                    <div className="md:h-[250px] md:block hidden h-[150px] w-full bg-slate-400 animate-pulse rounded-md"></div>
                    <div className="md:h-[250px] md:block hidden h-[150px] w-full bg-slate-400 animate-pulse rounded-md"></div>

                </div>
            </div>
        </div>
    )
}

export default index