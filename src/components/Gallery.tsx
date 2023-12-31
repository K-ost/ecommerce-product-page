import { useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import prev from "../assets/icon-previous.svg"
import Fancybox from "./Fancy"
import GallerySkelets from "./GallerySkelets"

interface IGallery {
  imgs: string[] | undefined
}

// Styles
const GalleryContainer = styled.div`
  margin: 0 0 30px;
  min-width: 0;
`
const GalleryTop = styled.div`
  margin: 0 0 30px;
  img { border-radius: 12px; display: block; }
  .swiper-button-prev, .swiper-button-next {
    background: var(--color-white) url(${prev}) 12px center no-repeat;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: none;
    &::after { content: none; display: none; }
  }
  .swiper-button-prev { left: 15px; }
  .swiper-button-next { right: 15px; transform: matrix(-1,0,0,1,0,0); }
  @media screen and (max-width: 900px) {
    img { border-radius: 0; }
    .swiper-button-prev, .swiper-button-next { display: block; }
  }
`
const GalleryThumbs = styled.div`
  min-width: 0;
  .swiper-slide {
    cursor: pointer;
    display: block;
    position: relative;
    &::after {
      background: rgba(255,255,255,0.75);
      border-radius: 10px;
      content: '';
      display: block;
      bottom: 0;
      right: 0;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: var(--animate);
    }
    &:hover::after { opacity: 0.5; }
    &-thumb-active::after { box-shadow: inset 0 0 0 2px var(--color-orange); opacity: 1 !important; }
  }
  img { border-radius: 10px; display: block; }
  @media screen and (max-width: 900px) {
    display: none;
  }
`

const Gallery: React.FC<IGallery> = ({ imgs }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  if (!imgs) {
    return <GallerySkelets /> 
  }
  
  return (
    <GalleryContainer>
      <GalleryTop>
        <Fancybox>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Thumbs, Navigation]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            navigation
          >
            {imgs.map((img, index) => (
              <SwiperSlide key={index}>
                <a href={img} data-fancybox="group" aria-label={`Photo-${index}`}><img src={img} alt="" /></a>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fancybox>
      </GalleryTop>
      <GalleryThumbs>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
        >
          {imgs.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </GalleryThumbs>
    </GalleryContainer>
  )
}

export default Gallery
