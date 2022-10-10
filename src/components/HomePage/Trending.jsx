import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fullSizeImg, trending, TRENDING } from "../../config/config";
import Button from "../Sub/Button";


const Trending = () => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`${TRENDING}${process.env.REACT_APP_API_KEY}`);
        setContent(data.results);
    }

    useEffect(() => {

        fetchTrending()
        setTimeout(() => { viewData() }, 500)

    }, [])

    const viewData = () => {
        console.log(content)
    }

    return (
        <div className="text-white">

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={5000}
                centerMode={false}
                className="hover:cursor-grab active:cursor-grabbing relative"
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={trending}
                rewind
                rewindWithAnimation={true}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                transitionDuration={500}
            >

                {content?.map((each, index) => (
                    <div key={index} className="text-white bg-cover bg-top" Style={`background-image: url(${fullSizeImg}${each?.backdrop_path})`} >

                        <div className="flex flex-col justify-center h-[30vh] sm:h-[60vh] backdrop-blur-[1px] backdrop-brightness-[80%] bg-gradient-to-b from-transparent to-[#18181b] gap-5">
                            <div className="flex flex-col gap-5 px-16 sm:px-[15rem]">
                                <h1 className="text-2xl sm:text-[3rem] font-bold">{each?.title || each?.name}</h1>
                                <p className="hidden sm:block">{each?.overview}</p>
                                <Button media_type={each?.media_type} id={each?.id}>
                                    <button className="p-2 rounded-lg w-fit bg-transparent border-2 border-yellow-300"> View more</button>
                                </Button>

                            </div>

                        </div>

                    </div>
                ))}

            </Carousel>


        </div>
    )
}

export default Trending
