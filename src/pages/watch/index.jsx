import React from 'react'
import { BsBookmarks, } from "../../assets/icons"
import { useParams } from 'react-router-dom'
import { getWatchingAnime } from "../../hooks/api"
const Watch = () => {
    // const styles = useSelector((state) => state.changeDescription)
    let { animeId, animeName, epsId } = useParams();
    const [watching, setWatching] = React.useState([])
    const [watching2, setWatching2] = React.useState([])

    const nextEpisodeId = parseInt(epsId) + 1;
    const prevEpisodeId = parseInt(epsId) - 1;
    const detailsWatch = JSON.parse(localStorage.getItem('details'))


    React.useEffect(() => {
        async function watchingAnime() {
            try {
                const response = await getWatchingAnime(animeId, animeName, epsId)
                setWatching2(response.data)
                setWatching(response)
            } catch (err) {
                console.log(err)
            }
        }
        watchingAnime()
    }, [epsId])

    const handleEpisode = (e) => {
        window.location.href = `/watch${e.target.value}`
    }

    return (
        <div className="w-[95%] md:w-[90%] m-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
                <div className="leftBar md:col-span-4">
                    <div className="aspectVideo mb-">
                        <div className="mb-3">
                            <video width='100%' controls>
                                {watching.episodeUrl && watching.episodeUrl.map((ress, i) => (
                                    <source src={ress.episode} type={ress.type} sizes={ress.size} key={i} />
                                ))}
                            </video>
                        </div>
                        <div className="px-3 py-3 flex  justify-between">
                            <div className="episodeTitle">
                                <h1 className='text-white text-lg font-semibold font-outfits md:text-xl '>{detailsWatch.title}</h1>
                                <p className='font-karla text-sm md:text-base mt-2 font-light text-[#dbdcdd]'>Episode {epsId}</p>
                            </div>

                            <div className="flex flex-col gap-3 ">
                                <div className="relative order-2">
                                    <select
                                        name=""
                                        id=""
                                        className="pr-7 pl-3 flex px-4 gap-4 py-2 rounded-md text-sm font-outfits bg-[#232329] font-medium text-slate-200 appearance-none"
                                        onChange={handleEpisode}

                                    >
                                        {watching2.map((ress, i) => (
                                            <option value={ress.episodeId} key={i}>
                                                Episode - {ress.episodeText}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-200">
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M6 8l4 4 4-4z"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <div className="selectOption flex gap-1 justify-between w-full">
                                    <div className="prev ">
                                        {prevEpisodeId >= 1 && (
                                            <a href={`/watch/anime/${animeId}/${animeName}/episode/${prevEpisodeId}`} className='bg-[#232329] rounded-md px-3 py-2 font-outfits text-sm font-medium text-slate-200'>Prev</a>
                                        )}
                                    </div>

                                    <div className="next ">
                                        {nextEpisodeId <= watching2.length && (
                                            <a href={`/watch/anime/${animeId}/${animeName}/episode/${nextEpisodeId}`} className='bg-[#232329] text-sm rounded-md px-3 py-2 font-outfits font-medium text-slate-200'>Next</a>
                                        )}
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <span className='line h-[1px] rounded-full w-full bg-gray-500 mt-3 block'></span>

                    <div className="watchDetail">
                        <div className="flex md:px-2 py-4 justify-between">
                            <div className=" flex gap-5 items-center">
                                <img src={detailsWatch.image} alt="" className='w-40 md:w-44 rounded-md' />
                                <div className="flex flex-col gap-4 md:gap-6 ">
                                    <div className="leading-8">
                                        <h5 className='text-gray-400 font-roboto font-light md:text-base'>Studios</h5>
                                        <h1 className='text-slate-100 md:text-lg'>{detailsWatch.studio}</h1>
                                    </div>

                                    <div className="leading-8">
                                        <h5 className='text-gray-400 font-roboto font-light md:text-base'>Status</h5>
                                        <h1 className='text-slate-100 md:text-lg'>{detailsWatch.status}</h1>
                                    </div>

                                    <div className="leading-8">
                                        <h5 className='text-gray-400 font-roboto font-light md:text-base'>Titles</h5>
                                        <h1 className='text-slate-100 md:text-lg'>{detailsWatch.title}</h1>
                                    </div>
                                </div>
                            </div>
                            <BsBookmarks className='text-white text-3xl cursor-pointer' />
                        </div>
                        <div className="genre">
                            <ul className='flex flex-wrap gap-4 mt-3'>
                                {detailsWatch.genres.map((ress, i) => (
                                    <li className='ring-1 ring-[#f0683e] py-1 px-3 text-center  rounded-md text-white text-base' key={i}>{ress}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="synopsis h-52 md:h-full overflow-y-scroll md:overflow-auto mt-10 bg-[#232329] px-6 py-5 rounded-md">
                            <p className='text-white text-sm font-roboto md:text-[15px]  font-light'>{detailsWatch.synopsis}</p>
                        </div>
                    </div>
                </div>
                <div className="sideBar md:col-span-2">
                    <div className="">
                        <h1 className='text-white text-xl'>Up Next</h1>
                        <div className="episodeList  px-1 md:px-3 py-5 mt-5 flex flex-col gap-4 md:gap-5 ">
                            {watching2.map((ress, i) => (
                                <a href={`/watch${ress.episodeId}`} className='bg-[#232329] px-3 py-3 rounded-md text-white ring-2 ring-[#f0683e] cursor-pointer md:py-4' key={i}  >Episode - {ress.episodeText}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Watch