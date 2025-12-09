'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"
import { swiperGroup1 } from '@/util/swiperOptions'
import HeroSearch from '../elements/HeroSearch'
import { useEffect } from 'react'
import AOS from 'aos'

export default function Hero2() {
	useEffect(() => {
		// Refresh AOS after component mounts to handle swiper slides
		const timer = setTimeout(() => {
			AOS.refresh()
		}, 100)

		return () => clearTimeout(timer)
	}, [])

	return (
		<>

			<section className="section-box box-banner-home7 background-body">
				<div className="container-banner-home7 position-relative">
					<div className="box-swiper">
						<Swiper
							{...swiperGroup1}
							className="swiper-container swiper-group-1"
							onSlideChange={() => {
								// Refresh AOS when slide changes
								setTimeout(() => {
									AOS.refresh()
								}, 100)
							}}
							onSwiper={(swiper) => {
								// Refresh AOS when swiper is initialized
								setTimeout(() => {
									AOS.refresh()
								}, 100)
							}}
						>
							<div className="swiper-wrapper">
								<SwiperSlide>
									<div className="item-banner-slide banner-1">
										<div className="container">
											{/* <span className="btn background-brand-2 px-3 py-3 rounded-12 text-sm-bold text-dark">LycaFleet Excellence</span> */}
											<h1 className="mt-20 mb-20 color-white animate-fade-in-up">Seamless Cross-Border Travel</h1>
											<h6 className="color-white heading-6-medium pb-lg-0 pb-4 animate-fade-in-up-delay-1">
												Experience premium private transportation between Singapore and Malaysia <br />
												with professional drivers and modern fleet
											</h6>

											<div className="mt-4 animate-fade-in-up-delay-2">
												<Link href="/reserve-via-whatsapp" className="btn btn-primary px-4 py-3 rounded-12 text-sm-bold">
													<svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
														<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
													</svg>
													Reserve via WhatsApp
												</Link>
											</div>
											
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="item-banner-slide banner-2">
										<div className="container">
											{/* <span className="btn background-brand-2 px-3 py-3 rounded-12 text-sm-bold text-dark">MOTAC-Registered Service</span> */}
											<h1 className="mt-20 mb-20 color-white animate-fade-in-up">Luxury Private Transfers</h1>
											<h6 className="color-white heading-6-medium animate-fade-in-up-delay-1">
												Choose from Toyota Innova, Hyundai Starex, or Toyota Alphard for your journey, <br />
												with 24/7 support and transparent pricing
											</h6>

											<div className="mt-4 animate-fade-in-up-delay-2">
												<Link href="/reserve-via-whatsapp" className="btn btn-primary px-4 py-3 rounded-12 text-sm-bold">
													<svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
														<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
													</svg>
													Reserve via WhatsApp
												</Link>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</div>
						</Swiper>
					</div>
				</div>
				{/* <div className="container-search-advance">
					<div className="container">
						<div className="box-search-advance background-card wow fadeInUp mb-5">
							<div className="box-top-search">
								<div className="left-top-search">
									<Link className="category-link text-sm-bold btn-click active" href="#">All cars</Link>
									<Link className="category-link text-sm-bold btn-click" href="#">New cars</Link>
									<Link className="category-link text-sm-bold btn-click" href="#">Used cars</Link>
								</div>
								<div className="right-top-search d-none d-md-flex">
									<Link className="text-sm-medium need-some-help" href="/contact">Need help?</Link>
								</div>
							</div>
							<HeroSearch />
						</div>
						<div className="align-items-center justify-content-between pt-40 d-none d-lg-flex">
							<span className="text-lg-medium color-white">Get 5% discount when <Link className="text-primary" href="#install-app">Ordering via APP</Link></span>
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
					</div>
				</div> */}
			</section>
		</>
	)
}
