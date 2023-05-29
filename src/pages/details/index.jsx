import React from 'react'
import { getDetailsAnime } from '../../hooks/api'
import { useParams } from "react-router-dom";
import AnimeSlider from '../../lib/AnimeSlider';
import LoadingDetails from "../../helpers/LoadingDetails"

const Details = () => {
    const { animeId, animeName, epsId } = useParams();

    const [details, setDetails] = React.useState([])
    const [loading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        getDetailsAnime(animeId, animeName, epsId).then((ress) => {
            setDetails(ress)
            setIsLoading(false)
            localStorage.setItem('details', JSON.stringify(ress[0]))
        })
    }, [])

    return (
        <>

            <div className="">
                {/* <div className="banner w-full h-64 md:h-72 bg-no-repeat bg-blend-exclusion opacity-30   bg-cover bg-center " style={{ backgroundImage: `url(https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg)` }}>

                </div> */}
                {loading ? <LoadingDetails /> : details.map((item, i) => (
                    <div className="w-[90%] m-auto relative mt-5" key={i}>
                        <div className="md:grid md:grid-cols-6 gap-5 ">
                            <div className="md:col-span-1 hidden md:flex md:flex-col ">
                                <img src={item.image} alt="" className='w-full rounded-md' />
                                <button className='bg-[#f0683e] text-white text-sm py-1 mt-3 rounded-sm font-medium'>Add to List</button>
                            </div>
                            <div className="md:col-span-5 md:py-3 md:px-2 hidden md:block">
                                <h1 className='text-white text-2xl font-rowdies md:text-4xl mb-6'>{item.title}</h1>
                                <ul className='md:flex md:flex-wrap  md:gap-2 my-3  hidden'>
                                    {item.genres.map((ress, i) => (
                                        <li className='bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full' key={i}>{ress}</li>
                                    ))}
                                </ul>
                                <ul className='md:flex md:flex-wrap hidden md:gap-2  my-3'>
                                    <li className='bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full'>{item.totalEps} Episodes</li>
                                    <li className='bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full'>{item.status}</li>
                                    <li className='bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full'>{item.season}</li>
                                    <li className='bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full'>{item.duration}</li>
                                    <li className='bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full'>{item.adaptation}</li>
                                    <li className='bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full'>{item.studio}</li>
                                    <li className='bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full'>{item.peminat}</li>
                                    <li className='bg-[#35ddff] text-slate-900 font-medium text-sm px-3 py-1 rounded-full'>{item.skors}</li>

                                </ul>
                                <div className="h-36 overflow-y-scroll py-3 ">
                                    <p className='text-white font-outfits mt-5 text-sm md:text-base'>{item.synopsis}</p>
                                </div>
                            </div>

                            <div className="md:hidden">
                                <h1 className='text-white text-2xl py-2 font-rowdies'>{item.title}</h1>
                                <ul className='flex flex-wrap gap-1 py-3'>
                                    {item.genres.map((ress, i) => (
                                        <li className='text-white text-xs px-3 py-1 rounded-full bg-slate-800' key={i}>{ress}</li>
                                    ))}
                                </ul>
                                <div className="h-36 overflow-y-scroll py-3 ">
                                    <p className='text-white font-outfits  text-sm'>{item.synopsis}</p>
                                </div>
                            </div>
                        </div>


                        <div className="episodeList mt-12">
                            <h1 className='mb-10 text-lg font-karla text-white md:px-1 md:text-2xl'>Episodes</h1>
                            <div className="eps md:px-1 flex flex-col h-[400px] overflow-y-scroll">
                                {item.episode.map((ress, i) => (
                                    // visited:text-[#f0683e]
                                    <a href={`/watch${ress.episodeId}`} className="epsList text-white border-b-2  ring-slate-400 px-2 py-4 w-full text-sm md:text-lg " key={i}>Episode - {ress.epsTitle}</a>

                                ))}
                            </div>
                        </div>
                        <div className="recomendation mt-10">
                            <h1 className='mb-5 text-lg font-karla text-white md:text-2xl'>Recomendation</h1>
                            <div className="card">
                                <AnimeSlider names='recent?order_by=most_viewed' />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Details