import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { halfSizeImg, imgNotAvailable } from '../../../config/config'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../../Sub/Button';

const CardBig = ({ content, media_type }) => {
    return (
        <ScrollContainer className="px-4 sm:px-10 flex gap-3 overflow-hidden">

            {content?.filter(eachContent => eachContent.profile_path !== null).map((eachItem, index) => (

                <Button media_type={media_type} id={eachItem.id} >
                    <div key={index}
                        className="flex flex-col gap-2 w-[11rem] sm:w-[15rem] relative">

                        {eachItem.gender === undefined &&

                            <div className="absolute text-xs sm:text-sm bg-black/70 rounded-md p-1 mt-[0.5rem] right-0 mr-[0.5rem] z-10">
                                <p>{eachItem.first_air_date?.slice(0, 4) || eachItem.release_date?.slice(0, 4) || "N/A"}</p>
                            </div>

                        }

                        <div className="flex w-[11rem] sm:w-[15rem] overflow-hidden rounded-md hover:cursor-pointer">
                            <img className="object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-[2/3]"
                                src={eachItem.profile_path === null ? imgNotAvailable : `${halfSizeImg}${eachItem.poster_path || eachItem.profile_path}`}
                                alt="Reload Page"
                                loading="lazy">
                            </img>
                        </div>

                        <p className="text-xs sm:text-base truncate">{eachItem.title || eachItem.name}</p>
                    </div>
                </Button>
            ))}



        </ScrollContainer>
    )
}

export default CardBig