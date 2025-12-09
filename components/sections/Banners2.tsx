
import Link from "next/link"

export default function Banners2() {
	return (
		<>

			<section className="section-box-banner-2 background-body py-96" style={{marginTop:'-150px'}}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="box-banner-1 px-5 position-relative rounded-12 overflow-hidden" data-aos="fade-right">
								<div className="banner-info position-relative z-1 py-5">
									<div className="banner-title">
										<h5 className="text-white">Experience Seamless Cross-Border Travel</h5>
									</div>
									<p className="banner-text text-white text-md-regular py-3">
										Book your private transfer between Singapore and Malaysia <br className="d-none d-lg-block" />
										with LycaFleet's premium transportation service
									</p>
									<div className="banner-button pt-3">
										<Link className="btn btn-primary background-brand-2" href="/reserve-via-whatsapp">
											Reserve via WhatsApp
											<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="box-banner-2 px-5 position-relative rounded-12 overflow-hidden mt-lg-0 mt-4" data-aos="fade-left" data-aos-delay="200">
								<div className="banner-info position-relative z-1 py-5">
									<div className="banner-title">
										<h5 className="text-white">Premium Luxury Fleet with 24/7 Customer Support</h5>
									</div>
									<p className="banner-text text-white text-md-regular py-3">
										Travel in comfort with our modern Toyota Alphard, Innova, <br className="d-none d-lg-block" />
										and Hyundai Starex vehicles with dedicated customer support
									</p>
									<div className="banner-button pt-3">
										<Link className="btn btn-primary bg-white" href="/about-us">
											Learn More About Us
											<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
