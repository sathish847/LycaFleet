'use client'
import CounterUp from '@/components/elements/CounterUp'
import Layout from "@/components/layout/Layout"
import { swiperGroup1, swiperGroup3, swiperGroupAnimate } from '@/util/swiperOptions'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Services() {

	return (
		<>

			<Layout footerStyle={1}>
				<div>
					<div className="page-header pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 img-banner" src="/assets/imgs/page-header/banner7.png" alt="Carento" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 translate-middle">
								<h2 className="text-white">Our Transfer Services</h2>
								<span className="text-white text-xl-medium">Reliable Private Car & MPV Transfers from Singapore & Johor Bahru</span>
							</div>
							<div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 @@navigation-page">
								<Link href="/" className="neutral-700 text-md-medium">Home</Link>
								<span>
									<img src="/assets/imgs/template/icons/arrow-right.svg" alt="ento" />
								</span>
								
								<Link href="#" className="neutral-1000 text-md-bold">Singapore To Malaysia</Link>
							</div>
						</div>
					</div>

					{/* services list */}
					<section className="section-box background-body py-96">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-lg-7">
									<h3 className="neutral-1000">Comfortable <span className="text-primary">Private Transfers</span> Across Malaysia</h3>
								</div>
								<div className="col-lg-5">
									<p className="text-lg-medium neutral-500">Door-to-door private car & MPV services from Singapore or Johor Bahru to popular destinations in Peninsular Malaysia.</p>
								</div>
							</div>
							<div className="row mt-50">

								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24">
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/1.jpg" alt="ento" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="/service-details?service=1">Singapore To Kukup / Pontian</Link>
												<p className="text-md-medium neutral-500 mt-2">Relaxing seafood trips & golf getaways to Kukup and Pontian with direct pickup from Singapore.</p>
											</div>
											<div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=1">View More</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24">
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/2.jpg" alt="ento" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="/service-details?service=2">Singapore To Tioman Island / Desaru</Link>
												<p className="text-md-medium neutral-500 mt-2">Beach holidays made easy — direct transfer to Mersing Jetty (Tioman) or Desaru Coast.</p>
											</div>
											<div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=2">View More</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24">
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/3.jpg" alt="ento" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="/service-details?service=3">Singapore To Kluang / Batu Pahat / Muar</Link>
												<p className="text-md-medium neutral-500 mt-2">Comfortable rides to Johor’s heritage towns, famous for food & nature.</p>
											</div>
											<div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=3">View More</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24">
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/4.jpg" alt="ento" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="service-details?service=4">Singapore To KL / Malacca</Link>
												<p className="text-md-medium neutral-500 mt-2">City escapes to KL’s skyscrapers or historical Malacca with professional drivers.</p>
											</div>
											<div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=4">View More</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24">
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/5.jpg" alt="ento" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="service-details?service=5">Singapore To Port Dickson</Link>
												<p className="text-md-medium neutral-500 mt-2">Family-friendly beach getaway to Negeri Sembilan’s sunny coastline.</p>
											</div>
											<div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=5">View More</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24">
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/6.jpg" alt="ento" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="/service-details?service=6">Singapore To Genting Highlands</Link>
												<p className="text-md-medium neutral-500 mt-2">Cool mountain air, casino & theme park — direct transfer from SG.</p>
											</div>
											<div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=6">View More</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24">
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/7.jpg" alt="ento" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="/service-details?service=7">Singapore To Cameron Highlands</Link>
												<p className="text-md-medium neutral-500 mt-2">Strawberry farms, tea plantations & cool weather — perfect highland escape.</p>
											</div>
											<div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=7">View More</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24">
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/8.jpg" alt="ento" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="/service-details?service=8">Singapore To Ipoh / Penang</Link>
												<p className="text-md-medium neutral-500 mt-2">Food paradise trips — Ipoh’s white coffee & Penang’s street food with comfy rides.</p>
											</div>
											<div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=8">View More</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24">
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/9.jpg" alt="ento" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="/service-details?service=9">Johor Bahru Pickup Available</Link>
												<p className="text-md-medium neutral-500 mt-2">All the above routes also available with pickup from Johor Bahru city, Legoland, or JB Sentral.</p>
											</div>
											<div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/service-details?service=9">View More</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</section>

					{/* Rest of your sections (banner, testimonials, CTA, stats, blog) can stay as-is or be updated similarly */}
					{/* I kept unchanged for brevity — just replace texts if you want */}

					{/* Example update for banner */}
					<section className="section-box-banner-3 banner-2 background-body">
						<div className="container pt-110 pb-110 position-relative z-1">
							<div className="row justify-content-center">
								<div className="col-auto text-center wow fadeInUp justify-content-center d-flex flex-column align-items-center">
									<h2 className="text-white">Best Private Transfer Deals</h2>
									<h6 className="text-white">
										From Singapore with comfort, to Malaysia with ease
									</h6>
									<Link className="btn btn-primary rounded-pill btn-lg mt-20" href="/reserve-via-whatsapp">
										Reserve via Whatsapp
										<svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
											<path d="M12.5 19L19.5 12L12.5 5M19.5 12L5.5 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</section>

					{/* Testimonials, CTA, Stats, Blog sections remain unchanged unless you want them updated too */}
					{/* ... rest of the original code ... */}

                    

					
				</div>
			</Layout>
		</>
	)
}
