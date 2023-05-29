import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAnime } from "../hooks/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const AnimeSlider = ({ names }) => {
    const [popularAnime, setPopularAnime] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        getAnime(names).then((ress) => {
            setPopularAnime(ress)
            setLoading(false)
        })
    }, [])

    const loaderCount = [1, 2, 3, 4, 5, 6,]
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper"
            >
                {loading ? loaderCount.map((ress, i) => (
                    <SwiperSlide key={i}>
                        <div className=" bg-[#b3b3b3] animate-pulse h-[130px] sm:h-[250px] rounded-md">

                        </div>
                    </SwiperSlide>
                )) : popularAnime.map((ress, i) => (
                    <SwiperSlide key={i}>
                        <div className="cardItem ">
                            <a href={`/details${ress.animeId}`}>
                                <LazyLoadImage src={ress.image} effect="blur" delayTime='500' className="rounded-md" />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}

export default AnimeSlider