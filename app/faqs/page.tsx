'use client'
import CounterUp from '@/components/elements/CounterUp'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Faqs() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>

			<Layout footerStyle={1}>
				<div>
                    <section className="box-section background-2 py-96">
  <div className="container">
    <div className="text-center mb-40">
      <div className="background-body px-3 py-2 rounded-12 border d-flex gap-3 d-inline-flex">
        <Link href="/" className="neutral-700 text-md-medium">Home</Link>
        <span>
          <img src="/assets/imgs/template/icons/arrow-right.svg" alt="LycaFleet" />
        </span>
        <Link href="/faqs" className="neutral-1000 text-md-bold">FAQs</Link>
      </div>
      <h3 className="my-3 neutral-1000">Frequently Asked Questions</h3>
      <p className="text-xl-medium neutral-500">
        Traveling between Singapore and Malaysia? Here are the answers to our most common questions.
      </p>
    </div>

    <div className="row mt-60">
      {/* Account & General */}
      <div className="col-lg-3 col-sm-6 mb-4">
        <div className="card-contact h-100">
          <div className="card-image">
            <div className="card-icon background-card border rounded-2 border-dark d-flex align-items-center justify-content-center">
              <span className="material-icons" style={{fontSize: '28px', color: '#000'}}>account_circle</span>
            </div>
          </div>
          <div className="card-info">
            <div className="card-title">
              <Link href="/faqs/account" className="title text-lg-bold">Account & General</Link>
              <p className="text-xs-medium neutral-500 mt-2">
                Registration, login, managing bookings, and general inquiries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking and Reservations */}
      <div className="col-lg-3 col-sm-6 mb-4">
        <div className="card-contact h-100">
          <div className="card-image">
            <div className="card-icon background-card border rounded-2 border-dark d-flex align-items-center justify-content-center">
              <span className="material-icons" style={{fontSize: '28px', color: '#000'}}>event_available</span>
            </div>
          </div>
          <div className="card-info">
            <div className="card-title">
              <Link href="/faqs/booking" className="title text-lg-bold">Booking & Reservations</Link>
              <p className="text-xs-medium neutral-500 mt-2">
                How to book, payment methods, instant confirmation, child seats & modifications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle & Fleet */}
      <div className="col-lg-3 col-sm-6 mb-4">
        <div className="card-contact h-100">
          <div className="card-image">
            <div className="card-icon background-card border rounded-2 border-dark d-flex align-items-center justify-content-center">
              <span className="material-icons" style={{fontSize: '28px', color: '#000'}}>drive_eta</span>
            </div>
          </div>
          <div className="card-info">
            <div className="card-title">
              <Link href="/faqs/vehicle" className="title text-lg-bold">Vehicles & Fleet</Link>
              <p className="text-xs-medium neutral-500 mt-2">
                Toyota Innova, Hyundai Starex, Alphard/Vellfire, luggage space, child seats
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Border & Customs */}
      <div className="col-lg-3 col-sm-6 mb-4">
        <div className="card-contact h-100">
          <div className="card-image">
            <div className="card-icon background-card border rounded-2 border-dark d-flex align-items-center justify-content-center">
              <span className="material-icons" style={{fontSize: '28px', color: '#000'}}>description</span>
            </div>
          </div>
          <div className="card-info">
            <div className="card-title">
              <Link href="/faqs/customs" className="title text-lg-bold">Cross-Border & Customs</Link>
              <p className="text-xs-medium neutral-500 mt-2">
                Tuas & Woodlands checkpoints, waiting time, passport rules, VEP/RFID
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cancellations and Refunds */}
      <div className="col-lg-3 col-sm-6 mb-4">
        <div className="card-contact h-100">
          <div className="card-image">
            <div className="card-icon background-card border rounded-2 border-dark d-flex align-items-center justify-content-center">
              <span className="material-icons" style={{fontSize: '28px', color: '#000'}}>cancel</span>
            </div>
          </div>
          <div className="card-info">
            <div className="card-title">
              <Link href="/faqs/cancellation" className="title text-lg-bold">Cancellations & Refunds</Link>
              <p className="text-xs-medium neutral-500 mt-2">
                Cancellation policy, refund timeline, no-show charges
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Payment */}
      <div className="col-lg-3 col-sm-6 mb-4">
        <div className="card-contact h-100">
          <div className="card-image">
            <div className="card-icon background-card border rounded-2 border-dark d-flex align-items-center justify-content-center">
              <span className="material-icons" style={{fontSize: '28px', color: '#000'}}>credit_card</span>
            </div>
          </div>
          <div className="card-info">
            <div className="card-title">
              <Link href="/faqs/payment" className="title text-lg-bold">Pricing & Payment</Link>
              <p className="text-xs-medium neutral-500 mt-2">
                Toll fees, midnight charges, waiting time policy, payment options
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety & Insurance */}
      <div className="col-lg-3 col-sm-6 mb-4">
        <div className="card-contact h-100">
          <div className="card-image">
            <div className="card-icon background-card border rounded-2 border-dark d-flex align-items-center justify-content-center">
              <span className="material-icons" style={{fontSize: '28px', color: '#000'}}>security</span>
            </div>
          </div>
          <div className="card-info">
            <div className="card-title">
              <Link href="/faqs/safety" className="title text-lg-bold">Safety & Insurance</Link>
              <p className="text-xs-medium neutral-500 mt-2">
                COVID-19 measures, vehicle disinfection, insurance coverage, driver screening
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Support */}
      <div className="col-lg-3 col-sm-6 mb-4">
        <div className="card-contact h-100">
          <div className="card-image">
            <div className="card-icon background-card border rounded-2 border-dark d-flex align-items-center justify-content-center">
              <span className="material-icons" style={{fontSize: '28px', color: '#000'}}>contact_support</span>
            </div>
          </div>
          <div className="card-info">
            <div className="card-title">
              <Link href="/contact" className="title text-lg-bold">Contact & Support</Link>
              <p className="text-xs-medium neutral-500 mt-2">
                WhatsApp 24/7, emergency hotline, live chat, email response time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
					{/* FAQs 4 */}
					<section className="section-faqs-2 pt-80 pb-80 border-bottom background-body">
						<div className="container">
							<div className="text-start mb-40">
								<h2 className="my-3 neutral-1000">General</h2>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<div className="accordion">
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(1)} >
													<p className="text-lg-bold neutral-1000 pe-4">What is LycaFleet?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse01" className={`collapse ${isAccordion == 1 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">LycaFleet is a fully MOTAC-registered premier private transportation and tour service provider, proudly specializing in seamless and luxurious cross-border travel between Singapore and Malaysia. We are committed to the highest standards of punctuality, safety, cleanliness, and personalized service, making every journey truly effortless and VIP-worthy.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(2)} >
													<p className="text-lg-bold neutral-1000 pe-4">What services does LycaFleet offer?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse02" className={`collapse ${isAccordion == 2 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">We offer door-to-door transfers from your home, hotel, airport, shopping mall, theme park, or any location across Singapore, Johor Bahru, and beyond. Our professional, friendly, and highly experienced drivers provide convenient transfers with zero long queues at customs, no crowded buses, and no luggage struggles. Enjoy complete peace of mind with our meticulously maintained modern fleet—including the comfortable Toyota Innova, spacious Hyundai Starex/Staria, and luxurious Toyota Alphard/Vellfire—each vehicle thoroughly cleaned and disinfected before every trip.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(3)} >
													<p className="text-lg-bold neutral-1000 pe-4">What types of vehicles does LycaFleet provide?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse03" className={`collapse ${isAccordion == 3 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">Our meticulously maintained modern fleet includes the comfortable Toyota Innova, spacious Hyundai Starex/Staria, and luxurious Toyota Alphard/Vellfire, each vehicle thoroughly cleaned and disinfected before every trip.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(4)} >
													<p className="text-lg-bold neutral-1000 pe-4">How do I book a service with LycaFleet?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse04" className={`collapse ${isAccordion == 4 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">You can book our services through our website or via WhatsApp. From the moment you book until you reach your destination, we ensure a smooth, stress-free experience.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(5)} >
													<p className="text-lg-bold neutral-1000 pe-4">What destinations does LycaFleet serve?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse05" className={`collapse ${isAccordion == 5 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">We serve destinations including Johor Bahru, Melaka, Kuala Lumpur, Desaru, Genting Highlands, Mersing Jetty for Tioman Island, and anywhere else in Malaysia. Choose LycaFleet for reliable, safe, sanitized, and luxurious private transport that transforms every trip into pure convenience and delight.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(6)} >
													<p className="text-lg-bold neutral-1000 pe-4">What are LycaFleet's standards for safety and cleanliness?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse6" className={`collapse ${isAccordion == 6 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">We are committed to the highest standards of punctuality, safety, cleanliness, and personalized service, making every journey truly effortless and VIP-worthy. Our vehicles are meticulously maintained and thoroughly cleaned and disinfected before every trip.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(7)} >
													<p className="text-lg-bold neutral-1000 pe-4">Do you provide travel insurance?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse7" className={`collapse ${isAccordion == 7 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">Yes, we offer free comprehensive travel insurance for all our trips.</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mt-lg-0 mt-2">
									<div className="accordion">
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(8)} >
													<p className="text-lg-bold neutral-1000 pe-4">How do I search for hotels on your website?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapseSevent" className={`collapse ${isAccordion == 8 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(9)} >
													<p className="text-lg-bold neutral-1000 pe-4">In the event that I need to modify or cancel my reservation, what are the policies in place?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapseEight" className={`collapse ${isAccordion == 9 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(10)} >
													<p className="text-lg-bold neutral-1000 pe-4">Is breakfast included in the room rate?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapseNine" className={`collapse ${isAccordion == 10 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(11)} >
													<p className="text-lg-bold neutral-1000 pe-4">Are pets allowed in the hotels?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapseTen" className={`collapse ${isAccordion == 11 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(12)} >
													<p className="text-lg-bold neutral-1000 pe-4">
														How do I contact customer support if I have a question or <br />
														issue?
													</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapseEleven" className={`collapse ${isAccordion == 12 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.</p>
											</div>
										</div>
										<div className="mb-2 card border">
											<div className="px-0 card-header border-0 bg-gradient-1 background-card">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(13)} >
													<p className="text-lg-bold neutral-1000 pe-4">
														Are there any loyalty programs or rewards for frequent <br />
														guests?
													</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapseTwelve" className={`collapse ${isAccordion == 13 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body background-body">Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-faqs-2 pt-80 pb-80 background-body">
						<div className="container">
							<div className="text-start mb-40">
								<h2 className="my-3 neutral-1000">Payments</h2>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<div className="accordion">
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(14)} >
													<p className="text-lg-bold neutral-1000 pe-4">What is LycaFleet's pricing policy?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse14" className={`collapse ${isAccordion == 14 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">We offer transparent fixed pricing with no hidden fees, at highly competitive rates.</p>
											</div>
										</div>
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(15)} >
													<p className="text-lg-bold neutral-1000 pe-4">What payment methods are accepted?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse15" className={`collapse ${isAccordion == 15 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">We accept various payment methods including credit/debit cards and digital wallets to ensure convenient transactions.</p>
											</div>
										</div>
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(16)} >
													<p className="text-lg-bold neutral-1000 pe-4">Can you specify the types of credit/debit cards, digital wallets, or other online payment methods accepted?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse16" className={`collapse ${isAccordion == 16 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">We accept major credit and debit cards (Visa, MasterCard, American Express), as well as popular digital wallets like PayPal and mobile payment options for your convenience.</p>
											</div>
										</div>
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(17)} >
													<p className="text-lg-bold neutral-1000 pe-4">What payment methods do you accept?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse17" className={`collapse ${isAccordion == 17 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">We accept various payment methods including credit/debit cards and digital wallets to ensure convenient transactions.</p>
											</div>
										</div>
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(18)} >
													<p className="text-lg-bold neutral-1000 pe-4">Can I modify or cancel my reservation?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse18" className={`collapse ${isAccordion == 18 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">Yes, you can modify or cancel your reservation. Please contact our customer support team at least 24 hours in advance for changes or cancellations.</p>
											</div>
										</div>
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(19)} >
													<p className="text-lg-bold neutral-1000 pe-4">Do you offer discounts for group bookings?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse19" className={`collapse ${isAccordion == 19 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">Yes, we offer special discounts for group bookings. Contact our team for group rates and customized packages.</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mt-lg-0 mt-2">
									<div className="accordion">
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(20)} >
													<p className="text-lg-bold neutral-1000 pe-4">How do I contact customer support?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse20" className={`collapse ${isAccordion == 20 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">You can contact our 24/7 customer support team via WhatsApp, phone, or email. We're here to assist you with any questions or concerns.</p>
											</div>
										</div>
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(21)} >
													<p className="text-lg-bold neutral-1000 pe-4">What is your cancellation policy?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse21" className={`collapse ${isAccordion == 21 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">Cancellations are accepted up to 24 hours before your scheduled pickup time. Please contact us directly for cancellations or modifications.</p>
											</div>
										</div>
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(22)} >
													<p className="text-lg-bold neutral-1000 pe-4">Do you provide airport transfers?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse22" className={`collapse ${isAccordion == 22 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">Yes, we provide convenient airport transfers from Singapore Changi Airport and other major airports to your destination in Malaysia.</p>
											</div>
										</div>
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(23)} >
													<p className="text-lg-bold neutral-1000 pe-4">Are your drivers licensed and insured?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse23" className={`collapse ${isAccordion == 23 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">Yes, all our drivers are professionally licensed, experienced, and our vehicles are fully insured for your safety and peace of mind.</p>
											</div>
										</div>
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(24)} >
													<p className="text-lg-bold neutral-1000 pe-4">How do I contact customer support if I have a question or issue?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse24" className={`collapse ${isAccordion == 24 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">You can reach our 24/7 customer support team via WhatsApp, phone, or email. We're always ready to help with any questions or concerns.</p>
											</div>
										</div>
										<div className="mb-2 card border rounded-3">
											<div className="px-0 card-header border-0 bacground-body">
												<a className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center" onClick={() => handleAccordion(25)} >
													<p className="text-lg-bold neutral-1000 pe-4">Do you offer loyalty programs or rewards for frequent customers?</p>
													<span className="ms-auto arrow me-2">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapse25" className={`collapse ${isAccordion == 25 ? 'show' : ''} `} data-bs-parent=".accordion">
												<p className="pt-0 pb-4 card-body">Yes, we offer special rates and loyalty rewards for our frequent customers. Contact our team to learn about our loyalty program benefits.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 wow fadeInUp mt-4">
									<div className="d-flex justify-content-start gap-2">
										<Link className="btn btn-gray2" href="/contact">
											Contact Us
											<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
										<Link className="btn btn-primary rounded-3" href="/reserve-via-whatsapp">
											Reserve via WhatsApp
											<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Static 1 
					<section className="section-static-1 background-body background-2 pt-80 pb-80">
						<div className="container">
							<div className="row">
								<div>
									<div className="wow fadeIn">
										<div className="d-flex align-items-center justify-content-around flex-wrap">
											<div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
												<div className="d-flex justify-content-center justify-content-md-start">
													<h3 className="count neutral-1000"><CounterUp count={45} /></h3>
													<h3 className="neutral-1000">+</h3>
												</div>
												<div className="text-md-start text-center">
													<p className="text-lg-bold neutral-1000">Global</p>
													<p className="text-lg-bold neutral-1000">Branches</p>
												</div>
											</div>
											<div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
												<div className="d-flex justify-content-center justify-content-md-start">
													<h3 className="count neutral-1000"><CounterUp count={29} /></h3>
													<h3 className="neutral-1000">K</h3>
												</div>
												<div className="text-md-start text-center">
													<p className="text-lg-bold neutral-1000">Destinations</p>
													<p className="text-lg-bold neutral-1000">Collaboration</p>
												</div>
											</div>
											<div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
												<div className="d-flex justify-content-center justify-content-md-start">
													<h3 className="count neutral-1000"><CounterUp count={20} /></h3>
													<h3 className="neutral-1000">+</h3>
												</div>
												<div className="text-md-start text-center">
													<p className="text-lg-bold neutral-1000">Years</p>
													<p className="text-lg-bold neutral-1000">Experience</p>
												</div>
											</div>
											<div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
												<div className="d-flex justify-content-center justify-content-md-start">
													<h3 className="count neutral-1000"><CounterUp count={168} /></h3>
													<h3 className="neutral-1000">K</h3>
												</div>
												<div className="text-md-start text-center">
													<p className="text-lg-bold neutral-1000">Happy</p>
													<p className="text-lg-bold neutral-1000">Customers</p>
												</div>
											</div>
											<div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
												<div className="d-flex justify-content-center justify-content-md-start">
													<h3 className="count neutral-1000"><CounterUp count={15} /></h3>
													<h3 className="neutral-1000">M</h3>
												</div>
												<div className="text-md-start text-center">
													<p className="text-lg-bold neutral-1000">User</p>
													<p className="text-lg-bold neutral-1000">Account</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>  */}
				</div>

			</Layout>
		</>
	)
}
