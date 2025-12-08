import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ReserveViaWhatsApp() {

	return (
		<>

			<Layout footerStyle={1}>
				<div>
					<div className="page-header pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 rounded-12 img-banner" src="/assets/imgs/page-header/22620.jpg" alt="Carento" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 translate-middle">
								<h2 className="text-white">Reserve via WhatsApp</h2>
							</div>
						</div>
					</div>
					<section className="box-section box-contact-form background-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 mb-30">
									<h2 className="neutral-1000 mb-25">Book Your Car Reservation</h2>
									<div className="form-contact">
										<div className="row">
											<div className="col-lg-6">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Full Name *</label>
													<input className="form-control username" type="text" placeholder="First Name" />
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Email Address *</label>
													<input className="form-control username" type="text" placeholder="Last Name" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Phone Number *</label>
													<input className="form-control email" type="email" placeholder="email@domain.com" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Preferred Car Model</label>
													<select className="form-control">
														<option>Select a car model</option>
														<option>BMW X5</option>
														<option>Mercedes-Benz C-Class</option>
														<option>Audi Q7</option>
														<option>Toyota Camry</option>
														<option>Honda Civic</option>
														<option>Ford Mustang</option>
														<option>Tesla Model 3</option>
														<option>Other</option>
													</select>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Pickup Date *</label>
													<input className="form-control phone" type="date" />
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Return Date *</label>
													<input className="form-control phone" type="date" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Pickup Location</label>
													<input className="form-control phone" type="text" placeholder="Enter pickup location" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Additional Requests</label>
													<textarea className="form-control" rows={6} placeholder="Any special requests or additional information..." />
												</div>
											</div>
											<div className="box-remember-forgot">
												<div className="form-group">
													<div className="remeber-me">
														<label className="text-sm-medium neutral-500"> <input className="cb-remember" type="checkbox" />Agree to our <Link className="text-sm-medium neutral-1000" href="/term">Terms of service </Link>and <Link className="text-sm-medium neutral-1000" href="/privacy">Privacy Policy</Link> </label>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<button className="btn btn-book">
													
													Send via WhatsApp
													<svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mb-30">
									<div className="ps-lg-5">
										<h4 className="neutral-1000">Why Choose WhatsApp Booking?</h4>
										<p className="neutral-500 mb-30">Get instant responses from our team, personalized service, and seamless communication for your car rental needs.</p>
										<div className="mb-30">
											<div className="d-flex align-items-start mb-3">
												<div className="icon me-3">
													<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="#25D366"/>
													</svg>
												</div>
												<div>
													<h6 className="neutral-1000 mb-1">Instant Communication</h6>
													<p className="neutral-500 small">Get immediate responses from our expert team</p>
												</div>
											</div>
											<div className="d-flex align-items-start mb-3">
												<div className="icon me-3">
													<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													</svg>
												</div>
												<div>
													<h6 className="neutral-1000 mb-1">Personalized Service</h6>
													<p className="neutral-500 small">Tailored recommendations for your specific needs</p>
												</div>
											</div>
											<div className="d-flex align-items-start">
												<div className="icon me-3">
													<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													</svg>
												</div>
												<div>
													<h6 className="neutral-1000 mb-1">Best Rates Guaranteed</h6>
													<p className="neutral-500 small">Competitive pricing with no hidden fees</p>
												</div>
											</div>
										</div>
										<div className="contact-info">
											<h6 className="neutral-1000 mb-3">Need Help?</h6>
											<p className="neutral-500 small mb-2">Call us directly or send us a message</p>
											<Link href="/" className="text-primary fw-semibold">+60 12-345-67-89</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}
