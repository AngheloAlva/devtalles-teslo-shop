"use client"

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperObject } from "swiper"
import { useState } from "react"
import Image from "next/image"

import "swiper/css/navigation"
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import "./slideshow.css"
import "swiper/css"

export default function ProductSlideshow({
	images,
	title,
	className,
}: ProductSlideshowProps): React.ReactElement {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>()

	return (
		<div className={className}>
			<div className="">
				<Swiper
					// style={
					// 	{
					// 		"--swiper-navigation-color": "#fff",
					// 		"--swiper-pagination-color": "#fff",
					// 	} as React.CSSProperties
					// }
					spaceBetween={10}
					navigation={true}
					autoplay={{ delay: 2500 }}
					thumbs={{
						swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
					}}
					modules={[FreeMode, Navigation, Thumbs, Autoplay]}
					className="mySwiper2 max-h-[60dvh] sm:max-h-[70dvh] md:max-h-full"
				>
					{images.map((image) => (
						<SwiperSlide key={image}>
							<Image
								src={`/products/${image}`}
								alt={title}
								width={1024}
								height={800}
								className="rounded-lgo object-fill"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="mt-5 hidden sm:block">
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={4}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper"
				>
					{images.map((image) => (
						<SwiperSlide key={image}>
							<Image
								src={`/products/${image}`}
								alt={title}
								width={300}
								height={300}
								className="rounded-lg object-fill"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

interface ProductSlideshowProps {
	images: string[]
	title: string
	className?: string
}
