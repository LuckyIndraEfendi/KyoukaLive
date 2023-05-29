import React from 'react'
import { FaFilter, BsFillTrash3Fill, AiFillStar } from '../../assets/icons'
import { getSearchAnime } from '../../hooks/api'
// import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const index = () => {
    let { animeName } = useParams()
    const [showFilter, setShowFilter] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [animeSearch, setAnimeSearch] = React.useState([])
    const [searchAnime, setSearchAnime] = React.useState(animeName)
    const [orderBy, setOrderBy] = React.useState('')

    React.useEffect(() => {
        getSearchAnime(animeName, orderBy).then((ress) => {
            setAnimeSearch(ress)
            setLoading(false)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = `/search/${searchAnime}?order_by=${orderBy || 'recent'}`
    }
    const handleOrder = (e) => {
        setOrderBy(e.target.value)
    }

    let arr = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <div className="w-[90%] m-auto mt-5">
                <div className="">
                    <div className="flex  justify-between gap-3 items-center ">
                        <form action="" onSubmit={handleSubmit}>
                            <input type="search" value={searchAnime} className='w-full md:w-96 px-4 py-2 rounded-md bg-[#23242b] flex outline-none text-slate-200 ' placeholder='Search Anime here...' onChange={(e) => setSearchAnime(e.target.value)} required />
                        </form>
                        <div className="boxFilter bg-[#23242b] md:w-full px-4 py-3 rounded-md hover:bg-[#353641]" onClick={() => setShowFilter(!showFilter)}>
                            <FaFilter className='text-white' />
                        </div>
                        <div className="trashFilter boxFilter bg-[#23242b] hover:bg-[#353641] px-4 py-3 rounded-md">
                            <BsFillTrash3Fill className='text-red-400 ' onClick={() => window.location.reload()} />
                        </div>
                    </div>
                    <div className={`showModalFilter   duration-400  ${showFilter ? 'flex flex-col gap-2 mt-4 px-1 ' : 'hidden'}`}>
                        <div className="grid grid-cols-2 items-center">
                            <h1 className='text-white uppercase text-lg font-karla font-light'>Order by</h1>
                            <select name="genre" id="" className='px-3 py-2 rounded-md bg-[#23242b] text-white w-full appearance-none' onChange={handleOrder}>
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                                <option value="recent">Recent</option>
                                <option value="popular ">Popular</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="most_viewed">Most Viewed</option>
                                <option value="updated">Updated</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* 
                <header>
                    <h1 className='text-xl font-rowdies text-white'>Looking For : <span className='font-italic font-medium'>Naruto</span></h1>
                </header> */}

                <div className="cardMenu grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-6">
                    {loading ? arr.map((ress, i) => (
                        <div className="flex flex-col gap-3">
                            <a href={``} className="cardItem h-[150px] bg-[#ddd] rounded-md w-full animate-pulse" key={i}>
                            </a>
                            <span className=' h-3 rounded-full bg-[#ddd] w-full animate-pulse'></span>
                        </div>
                    ))
                        : animeSearch.data && animeSearch.data.map((anime, i) => (
                            <a href={`/details${anime.animeId}`} className="cardItem" key={i}>
                                <div className="images relative">
                                    <LazyLoadImage src={anime.image} effect="blur" delayTime='500' className="rounded-md" />
                                    <span className='bg-[#e94513] font-medium absolute bottom-0 text-sm px-2 py-[2px] text-white rounded-[4px] block'>TV</span>
                                    <span className='bg-[#e94513] font-medium absolute  top-0 right-0 text-[12px] px-2 py-[2px] text-white rounded-[4px] '>
                                        <div className="flex items-center gap-1">
                                            <AiFillStar className='' />
                                            <span className='text-[13px] block'>{anime.ratings}</span>
                                        </div>
                                    </span>
                                </div>
                                <div className="title">
                                    <h1 className='text-white font-karla font-light mt-1'>{anime.title.length > 20 ? anime.title.slice(0, 10) + '...' : anime.title}</h1>
                                </div>
                            </a>
                        ))}
                </div>
            </div>
        </>
    )
}

export default index