import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../../node_modules/swiper/swiper.css";
import "../../node_modules/swiper/modules/pagination.css";
import "../../node_modules/swiper/modules/navigation.css";

const videos = [
	{ id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
	{ id: 2, src: "https://www.w3schools.com/html/movie.mp4" },
	{ id: 3, src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },
];

function VideoSlider() {
	return (
		<Swiper
			spaceBetween={10}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			modules={[Navigation, Pagination]}
		>
			{videos.map((video) => (
				<SwiperSlide key={video.id}>
					<video width="100%">
						<source src={video.src} type="video/mp4" />
						<track
							kind="captions"
							src={video.src}
							srcLang="en"
							label="English Captions"
							default
						/>
						Your browser does not support the video tag.
					</video>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default VideoSlider;
