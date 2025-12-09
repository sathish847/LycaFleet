
import Link from "next/link"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Cta6() {
	return (
		<>

			<section className="section-cta-6 background-body py-96">
				<div className="box-cta-6">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5">
								<span className="btn btn-signin bg-2 text-dark mb-4" data-aos="fade-up">Who We Are</span>
								<h4 className="mb-4 neutral-1000" data-aos="fade-up">Seamless Cross-Border Transportation Between Singapore & Malaysia</h4>
								<p className="text-lg-medium neutral-500 mb-4" data-aos="fade-up">LycaFleet provides premium private transportation services for effortless travel between Singapore and Malaysia. Our MOTAC-registered service offers door-to-door transfers to popular destinations with professional drivers and modern, sanitized vehicles.</p>
								<div className="row">
									<div className="col">
										<ul className="list-ticks-green list-ticks-green-2" data-aos="fade-up">
											<li className="neutral-1000 pe-0">Door-to-Door Private Transfers</li>
											<li className="neutral-1000 pe-0">Modern Fleet: Toyota Innova, Hyundai Starex, Toyota Alphard</li>
											<li className="neutral-1000 pe-0">MOTAC-Registered & Licensed</li>
											
										</ul>
									</div>
								</div>
								<div className="d-flex gap-3 mt-2" data-aos="fade-up">
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
							<div className="col-lg-6 offset-lg-1 position-relative z-1 mt-lg-0 mt-4">
								<div className="position-relative">
									<div className="row align-items-center">
										<div className="col-sm-6">
											<img className="bdrd8 w-100 mb-15" data-aos="fade-up" src="/assets/imgs/hero/hero-2/about1.jpg" alt="Carento" />
											<img className="bdrd8 w-100 mb-15" data-aos="fade-up" src="/assets/imgs/hero/hero-2/about2.jpg" alt="Carento" />
										</div>
										<div className="col-sm-6 mt-md-50">
											<img className="bdrd8 w-100 mb-15" data-aos="fade-up" src="/assets/imgs/hero/hero-2/about3.jpg" alt="Carento" />
											<img className="bdrd8 w-100" data-aos="fade-up" src="/assets/imgs/hero/hero-2/about4.jpg" alt="Carento" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill" />
				</div>
			</section>
		</>
	)
}
