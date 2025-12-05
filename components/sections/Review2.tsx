'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"
import { swiperGroup1 } from '@/util/swiperOptions'

export default function Review2() {
	return (
		<>

			<section className="background-body pt-80 pb-50">
				<div className="container">
					<div className="text-center mb-50">
						<span className="text-primary text-md-bold">OUR SERVICES</span>
						<h3 className="mt-20 mb-20 neutral-1000">
							What Services We Provide
						</h3>
						<p className="text-lg-medium neutral-500">Experience seamless cross-border transportation between Singapore and Malaysia with our premium private transfer services.</p>
					</div>
					<div className="box-swiper">
						<Swiper {...swiperGroup1} className="swiper-container swiper-group-1 position-relative">
							<div className="swiper-wrapper">
								<SwiperSlide>
									<div className="item-banner-slide-review d-flex align-items-center rounded-12">
										<div className="ps-md-5 ps-2 position-relative z-1">
											<span className="text-primary text-md-bold">SINGAPORE TO MALAYSIA</span>
											<h3 className="mt-20 mb-20 color-white">
												Singapore to Johor Bahru <br className="d-none d-md-block" />
												& Popular Destinations
											</h3>
											<p className="text-lg-medium color-white">Door-to-door private transfers to Johor Bahru, Legoland Malaysia, Desaru, Johor Premium Outlets (JPO), Kukup, Pontian, Kluang, Batu Pahat, Muar, Mersing Jetty & Tioman Island.</p>
											<Link href="/services" className="btn btn-primary mt-30">
												Know More
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
													<path d="M12 19.5L19 12.5L12 5.5M19 12.5L5 12.5" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="item-banner-slide-review banner-3 d-flex align-items-center rounded-12">
										<div className="ps-md-5 ps-2 position-relative z-1">
											<span className="text-primary text-md-bold">MALAYSIA TO SINGAPORE</span>
											<h3 className="mt-20 mb-20 color-white">
												Malacca, Kuala Lumpur, <br className="d-none d-md-block" />
												& Return Transfers
											</h3>
											<p className="text-lg-medium color-white">Convenient return transfers from Malacca, Kuala Lumpur, Port Dickson, Genting Highlands, Cameron Highlands, Ipoh and Penang back to Singapore.</p>
											<Link href="/services-1" className="btn btn-primary mt-30">
												Know More
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
													<path d="M12 19.5L19 12.5L12 5.5M19 12.5L5 12.5" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</div>
									</div>
								</SwiperSlide>
							</div>
							<div className="position-absolute end-0 bottom-0 p-40">
								<div className="box-button-slider box-button-slider-team justify-content-end">
									<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-2" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-9c1b729b91027a37b">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
									<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-2" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-9c1b729b91027a37b">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
								</div>
							</div>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
