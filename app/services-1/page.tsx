'use client'
import CounterUp from '@/components/elements/CounterUp'
import Layout from "@/components/layout/Layout"
import { swiperGroup1, swiperGroup3, swiperGroupAnimate } from '@/util/swiperOptions'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Services1() {

	return (
		<>

			<Layout footerStyle={1}>
				<div>
					<div className="page-header pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 img-banner" src="/assets/imgs/page-header/banner.png" alt="Private Transfer" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 translate-middle">
								<h2 className="text-white">Malaysia to Singapore Transfers</h2>
								<span className="text-white text-xl-medium">Comfortable Private Taxi & MPV from Anywhere in Malaysia to Singapore</span>
							</div>
							<div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 @@navigation-page">
								<Link href="/" className="neutral-700 text-md-medium">Home</Link>
								<span><img src="/assets/imgs/template/icons/arrow-right.svg" alt="arrow" /></span>
								
								<Link href="#" className="neutral-1000 text-md-bold">Malaysia To Singapore</Link>
							</div>
						</div>
					</div>

                    <section className="section-box background-body py-96">
	<div className="container">
		<div className="row align-items-end">
			<div className="col-lg-7">
				<h3 className="neutral-1000">Reliable <span className="text-primary">Private Taxi</span> from Malaysia to Singapore</h3>
			</div>
			<div className="col-lg-5">
				<p className="text-lg-medium neutral-500">Door-to-door private car & MPV service from anywhere in Peninsular Malaysia directly to Singapore or Changi Airport.</p>
			</div>
		</div>

		<div className="row mt-50">

			
			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/10.jpg" alt="Mersing to Singapore" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=10">Mersing To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">Private taxi from Mersing town or hotels directly to any address in Singapore.</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=10">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			
			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/11.jpg" alt="Mersing Jetty" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=11">Mersing Jetty To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">Pickup right after your ferry arrives at Mersing Jetty — straight to Singapore.</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=11">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			
			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/12.jpg" alt="Tioman to Singapore" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=12">Tioman Island To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">Complete ferry + private car package from Tioman to your doorstep in Singapore.</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=12">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 4 */}
			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/13.jpg" alt="JB to Singapore" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=13">Johor Bahru (JB) To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">Fast private transfer from JB city, JB Sentral, hotels or CIQ to Singapore.</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=13">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 5 */}
			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/14.jpg" alt="Senai Airport" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=14">Senai Airport (JHB) To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">Direct pickup from Senai International Airport to any location in Singapore.</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=14">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 6 */}
			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/15.jpg" alt="Legoland" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=15">Legoland Malaysia To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">Family-friendly private taxi after your fun day at Legoland straight back to SG.</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=15">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/16.jpg" alt="Desaru" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=16">Desaru To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">Relaxing return from Desaru Coast resorts & waterpark directly to Singapore.</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=16">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/17.jpg" alt="JPO" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=17">Johor Premium Outlets To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">Shop till you drop, then enjoy a comfortable ride back to Singapore.</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=17">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/18.jpg" alt="Malaysia to Singapore" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=18">Anywhere in Malaysia To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">We pick up from ANY city in Peninsular Malaysia — just tell us where!</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=18">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			
			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/19.jpg" alt="KL to Singapore" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=19">Kuala Lumpur To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">Comfortable long-distance private transfer from KL city or KLIA to Singapore.</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=19">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6">
				<div className="card-news background-card hover-up mb-24">
					<div className="card-image">
						<img src="/assets/imgs/services/services-list-1/20.jpg" alt="Malacca to Singapore" />
					</div>
					<div className="card-info">
						<div className="card-title mb-3">
							<Link className="text-xl-bold neutral-1000" href="/service-details?service=20">Malacca To Singapore</Link>
							<p className="text-md-medium neutral-500 mt-2">Historical city to modern city — private taxi from Malacca straight to Singapore.</p>
						</div>
						<div className="card-program">
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=20">View More</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>

					{/* Banner */}
					<section className="section-box-banner-3 banner-3 banner-services-1 background-body">
						<div className="container pt-110 pb-110 position-relative z-1">
							<div className="row justify-content-center">
								<div className="col-auto text-center wow fadeInUp d-flex flex-column align-items-center">
									<h2 className="text-white">Returning to Singapore?</h2>
									<h6 className="text-white">
										Comfortable private transfer from anywhere in Malaysia
										<br />straight to your doorstep or Changi Airport
									</h6>
									<Link className="btn btn-primary rounded-pill btn-lg mt-20" href="/reserve-via-whatsapp">
										Reserve via WhatsApp Now
										<svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
											<path d="M12.5 19L19.5 12L12.5 5M19.5 12L5.5 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</section>

					{/* Rest of sections (testimonials, CTA, stats, blog) remain as you have them */}

				</div>
			</Layout>
		</>
	)
}
