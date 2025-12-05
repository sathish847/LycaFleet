'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Cta1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="box-cta-1 background-100 py-96">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 pe-lg-5 wow fadeInUp">
							<div className="card-video">
								<div className="card-image">{/* <a className="btn btn-play popup-youtube" onClick={() => setOpen(true)} /> */}<img src="/assets/imgs/cta/cta-1/1.jpg" alt="Carento" /></div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-4">
							<span className="btn btn-signin bg-white text-dark mb-4 wow fadeInUp">Who We Are</span>
							<h4 className="mb-4 neutral-1000 wow fadeInUp">Seamless Cross-Border Transportation Between Singapore & Malaysia</h4>
							<p className="text-lg-medium neutral-500 mb-4 wow fadeInUp">LycaFleet provides premium private transportation services for effortless travel between Singapore and Malaysia. Our MOTAC-registered service offers door-to-door transfers to popular destinations with professional drivers and modern, sanitized vehicles.</p>
							<div className="row">
								<div className="col-md-6">
									<ul className="list-ticks-green">
										<li className="neutral-1000 wow fadeInUp" data-wow-delay="0.1s">Door-to-Door Private Transfers</li>
										<li className="neutral-1000 wow fadeInUp" data-wow-delay="0.2s">Modern Fleet: Toyota Innova, Hyundai Starex, Toyota Alphard</li>
										<li className="neutral-1000 wow fadeInUp" data-wow-delay="0.3s">MOTAC-Registered & Licensed</li>
									</ul>
								</div>
								<div className="col-md-6">
									<ul className="list-ticks-green wow fadeInUp">
										<li className="neutral-1000 wow fadeInUp" data-wow-delay="0.1s">24/7 Customer Support</li>
										<li className="neutral-1000 wow fadeInUp" data-wow-delay="0.2s">Transparent Fixed Pricing</li>
										<li className="neutral-1000 wow fadeInUp" data-wow-delay="0.3s">Sanitized & Comfortable Vehicles</li>
									</ul>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col-12">
									<div className="d-flex gap-3 wow fadeInUp">
										<Link className="btn btn-primary" href="/about-us">
											Know More
											<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
										<Link className="btn btn-primary bg-transparent text-primary border-primary hover-up" href="/reserve-via-whatsapp">
											Reserve via WhatsApp
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
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
