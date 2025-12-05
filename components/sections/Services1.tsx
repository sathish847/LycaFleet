'use client'
import Link from "next/link"

export default function Services1() {
	return (
		<>

			<section className="section-box services-split-section background-body py-96 position-relative overflow-hidden">
				{/* Animated Background Shapes */}
				<div className="bg-shape-primary position-absolute top-0 end-0 opacity-8" />
				<div className="bg-shape-secondary position-absolute bottom-0 start-0 opacity-6" />
				<div className="floating-shapes">
					<div className="shape shape-1" />
					<div className="shape shape-2" />
					<div className="shape shape-3" />
				</div>

				<div className="container position-relative z-1">
					{/* Section Header */}
					<div className="text-center mb-80 wow fadeInUp">
						<div className="badge-modern bg-primary-light text-primary px-4 py-2 rounded-pill d-inline-flex align-items-center mb-4">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="me-2">
								<path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" fill="currentColor"/>
							</svg>
							What Services We Provide
						</div>
						<h1 className="display-4 fw-bold text-gradient mb-4">
							Premium Private Transportation<br />
							<span className="text-primary">Singapore ↔ Malaysia</span>
						</h1>
						<p className="lead text-muted max-w-700 mx-auto fs-5">
							Experience seamless cross-border travel with our MOTAC-registered private transportation service, featuring modern fleet and professional drivers
						</p>
					</div>

					{/* Services Split Cards */}
					<div className="row g-4">
						{/* Singapore to Malaysia */}
						<div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
							<div className="service-split-card position-relative overflow-hidden rounded-4 shadow-lg h-100">
								{/* Image Section - Top Half */}
								<div className="service-image-section position-relative">
									<div className="image-overlay position-absolute w-100 h-100">
										<img
											src="/assets/imgs/services/services-1/img-1.png"
											alt="Singapore to Malaysia Transfer"
											className="w-100 h-100 object-fit-contain"
										/>
										<div className="image-gradient position-absolute top-0 start-0 w-100 h-100" />
										<div className="service-badge position-absolute top-20 start-20 bg-white rounded-pill px-3 py-2 shadow-sm">
											<span className="text-primary fw-bold fs-6">Most Popular</span>
										</div>
									</div>
									<div className="direction-indicator position-absolute top-50 end-20 translate-middle-y">
										<div className="direction-arrow bg-primary rounded-circle d-flex align-items-center justify-content-center shadow">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</div>
									</div>
								</div>

								{/* Content Section - Bottom Half */}
								<div className="service-content-section bg-white p-4 p-lg-5">
									<div className="content-header mb-4">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<h3 className="service-title h2 mb-0 text-dark fw-bold">
												Singapore <span className="text-primary">→</span> Malaysia
											</h3>
											<div className="service-rating d-flex align-items-center">
												<div className="stars me-2">
													{[...Array(5)].map((_, i) => (
														<svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FFD700">
															<path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z"/>
														</svg>
													))}
												</div>
												<span className="text-muted small">4.9/5</span>
											</div>
										</div>
										<p className="service-description text-muted mb-4 fs-6">
											Comfortable door-to-door private taxi services to every popular destination including Johor Bahru, Legoland Malaysia, Desaru, Johor Premium Outlets (JPO), Malacca, Kuala Lumpur, Genting Highlands, Cameron Highlands, Ipoh and Penang.
										</p>
									</div>

									{/* Features Grid */}
									<div className="features-grid mb-4">
										<div className="row g-3">
											<div className="col-6">
												<div className="feature-item d-flex align-items-center">
													<div className="feature-icon me-3">
														<div className="icon-bg bg-primary-light rounded-circle d-flex align-items-center justify-content-center">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="#0066CC">
																<path d="M8 2C6.89543 2 6 2.89543 6 4V6H4V4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V6H10V4C10 2.89543 9.10457 2 8 2Z"/>
																<path d="M2 8C2 6.89543 2.89543 6 4 6H12C13.1046 6 14 6.89543 14 8V14C14 15.1046 13.1046 16 12 16H4C2.89543 16 2 15.1046 2 14V8Z"/>
															</svg>
														</div>
													</div>
													<span className="feature-text small fw-medium">Professional Drivers</span>
												</div>
											</div>
											<div className="col-6">
												<div className="feature-item d-flex align-items-center">
													<div className="feature-icon me-3">
														<div className="icon-bg bg-success-light rounded-circle d-flex align-items-center justify-content-center">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="#10B981">
																<path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.29289L7.70711 10.2929C7.31658 10.6834 6.68342 10.6834 6.29289 10.2929L4.29289 8.29289C3.90237 7.90237 3.90237 7.26921 4.29289 6.87868C4.68342 6.48816 5.31658 6.48816 5.70711 6.87868L7 8.17157L10.2929 4.87868C10.6834 4.48816 11.3166 4.48816 11.7071 4.87868C12.0976 5.26921 12.0976 5.90237 11.7071 6.29289Z"/>
															</svg>
														</div>
													</div>
													<span className="feature-text small fw-medium">Modern Fleet</span>
												</div>
											</div>
											<div className="col-6">
												<div className="feature-item d-flex align-items-center">
													<div className="feature-icon me-3">
														<div className="icon-bg bg-warning-light rounded-circle d-flex align-items-center justify-content-center">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="#F59E0B">
																<path d="M8 2C6.89543 2 6 2.89543 6 4V6H4V4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V6H10V4C10 2.89543 9.10457 2 8 2Z"/>
																<path d="M2 8C2 6.89543 2.89543 6 4 6H12C13.1046 6 14 6.89543 14 8V14C14 15.1046 13.1046 16 12 16H4C2.89543 16 2 15.1046 2 14V8Z"/>
															</svg>
														</div>
													</div>
													<span className="feature-text small fw-medium">Travel Insurance</span>
												</div>
											</div>
											<div className="col-6">
												<div className="feature-item d-flex align-items-center">
													<div className="feature-icon me-3">
														<div className="icon-bg bg-info-light rounded-circle d-flex align-items-center justify-content-center">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="#06B6D4">
																<path d="M8 0L9.09 3.26L12.5 3.5L10 6L10.82 9.49L8 8L5.18 9.49L6 6L3.5 3.5L6.91 3.26L8 0Z"/>
															</svg>
														</div>
													</div>
													<span className="feature-text small fw-medium">Fixed Pricing</span>
												</div>
											</div>
										</div>
									</div>

									{/* CTA Button */}
									<Link href="/services" className="btn btn-primary w-100 py-3 fw-bold fs-5">
										Know More
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>

						{/* Malaysia to Singapore */}
						<div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
							<div className="service-split-card position-relative overflow-hidden rounded-4 shadow-lg h-100">
								{/* Image Section - Top Half */}
								<div className="service-image-section position-relative">
									<div className="image-overlay position-absolute w-100 h-100">
										<img
											src="/assets/imgs/services/services-1/img-2.png"
											alt="Malaysia to Singapore Transfer"
											className="w-100 h-100 object-fit-contain"
										/>
										<div className="image-gradient position-absolute top-0 start-0 w-100 h-100" />
										<div className="service-badge position-absolute top-20 start-20 bg-white rounded-pill px-3 py-2 shadow-sm">
											<span className="text-danger fw-bold fs-6">Express Service</span>
										</div>
									</div>
									<div className="direction-indicator position-absolute top-50 end-20 translate-middle-y">
										<div className="direction-arrow bg-danger rounded-circle d-flex align-items-center justify-content-center shadow">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</div>
									</div>
								</div>

								{/* Content Section - Bottom Half */}
								<div className="service-content-section bg-white p-4 p-lg-5">
									<div className="content-header mb-4">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<h3 className="service-title h2 mb-0 text-dark fw-bold">
												Malaysia <span className="text-danger">→</span> Singapore
											</h3>
											<div className="service-rating d-flex align-items-center">
												<div className="stars me-2">
													{[...Array(5)].map((_, i) => (
														<svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FFD700">
															<path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z"/>
														</svg>
													))}
												</div>
												<span className="text-muted small">4.8/5</span>
											</div>
										</div>
										<p className="service-description text-muted mb-4 fs-6">
											Return journeys made effortless with express border processing. Popular routes include Senai Airport to Singapore, Mersing/Mersing Jetty to Singapore, and Tioman Island ferry pickup straight back to Singapore.
										</p>
									</div>

									{/* Features Grid */}
									<div className="features-grid mb-4">
										<div className="row g-3">
											<div className="col-6">
												<div className="feature-item d-flex align-items-center">
													<div className="feature-icon me-3">
														<div className="icon-bg bg-danger-light rounded-circle d-flex align-items-center justify-content-center">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="#DC2626">
																<path d="M8 2C6.89543 2 6 2.89543 6 4V6H4V4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V6H10V4C10 2.89543 9.10457 2 8 2Z"/>
																<path d="M2 8C2 6.89543 2.89543 6 4 6H12C13.1046 6 14 6.89543 14 8V14C14 15.1046 13.1046 16 12 16H4C2.89543 16 2 15.1046 2 14V8Z"/>
															</svg>
														</div>
													</div>
													<span className="feature-text small fw-medium">Professional Drivers</span>
												</div>
											</div>
											<div className="col-6">
												<div className="feature-item d-flex align-items-center">
													<div className="feature-icon me-3">
														<div className="icon-bg bg-success-light rounded-circle d-flex align-items-center justify-content-center">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="#10B981">
																<path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.29289L7.70711 10.2929C7.31658 10.6834 6.68342 10.6834 6.29289 10.2929L4.29289 8.29289C3.90237 7.90237 3.90237 7.26921 4.29289 6.87868C4.68342 6.48816 5.31658 6.48816 5.70711 6.87868L7 8.17157L10.2929 4.87868C10.6834 4.48816 11.3166 4.48816 11.7071 4.87868C12.0976 5.26921 12.0976 5.90237 11.7071 6.29289Z"/>
															</svg>
														</div>
													</div>
													<span className="feature-text small fw-medium">Modern Fleet</span>
												</div>
											</div>
											<div className="col-6">
												<div className="feature-item d-flex align-items-center">
													<div className="feature-icon me-3">
														<div className="icon-bg bg-info-light rounded-circle d-flex align-items-center justify-content-center">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="#06B6D4">
																<path d="M8 2C6.89543 2 6 2.89543 6 4V6H4V4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V6H10V4C10 2.89543 9.10457 2 8 2Z"/>
																<path d="M2 8C2 6.89543 2.89543 6 4 6H12C13.1046 6 14 6.89543 14 8V14C14 15.1046 13.1046 16 12 16H4C2.89543 16 2 15.1046 2 14V8Z"/>
															</svg>
														</div>
													</div>
													<span className="feature-text small fw-medium">24/7 Support</span>
												</div>
											</div>
											<div className="col-6">
												<div className="feature-item d-flex align-items-center">
													<div className="feature-icon me-3">
														<div className="icon-bg bg-warning-light rounded-circle d-flex align-items-center justify-content-center">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="#F59E0B">
																<path d="M8 0L9.09 3.26L12.5 3.5L10 6L10.82 9.49L8 8L5.18 9.49L6 6L3.5 3.5L6.91 3.26L8 0Z"/>
															</svg>
														</div>
													</div>
													<span className="feature-text small fw-medium">Travel Insurance</span>
												</div>
											</div>
										</div>
									</div>

									{/* CTA Button */}
									<Link href="/services-1" className="btn btn-primary w-100 py-3 fw-bold fs-5">
										Know More
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>

					
				</div>
			</section>

			<style jsx>{`
				/* Modern Typography */
				.display-4 {
					font-size: 3.5rem;
					font-weight: 800;
					line-height: 1.1;
				}

				.lead {
					font-size: 1.25rem;
					line-height: 1.6;
				}

				.text-gradient {
					background: linear-gradient(135deg, #0066CC 0%, #DC2626 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
				}

				/* Badge Styles */
				.badge-modern {
					font-weight: 600;
					font-size: 0.875rem;
					letter-spacing: 0.025em;
				}

				/* Service Split Cards */
				.service-split-card {
					transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
					border: none;
					box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
				}

				.service-split-card:hover {
					transform: translateY(-8px) scale(1.02);
					box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2);
				}

				/* Image Section */
				.service-image-section {
					height: 280px;
					position: relative;
					overflow: hidden;
				}

				.image-gradient {
					background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%);
				}

				.service-badge {
					backdrop-filter: blur(10px);
					border: 1px solid rgba(255, 255, 255, 0.2);
				}

				.direction-arrow {
					width: 50px;
					height: 50px;
					transition: all 0.3s ease;
				}

				.service-split-card:hover .direction-arrow {
					transform: scale(1.1);
				}

				/* Content Section */
				.service-content-section {
					min-height: 400px;
				}

				.service-title {
					font-size: 1.75rem;
					line-height: 1.2;
				}

				/* Stars Rating */
				.stars {
					display: flex;
					gap: 2px;
				}

				/* Feature Icons */
				.icon-bg {
					width: 36px;
					height: 36px;
				}

				.bg-primary-light { background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%); }
				.bg-danger-light { background: linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%); }
				.bg-success-light { background: linear-gradient(135deg, #E8F5E8 0%, #C8E6C9 100%); }
				.bg-warning-light { background: linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%); }
				.bg-info-light { background: linear-gradient(135deg, #E0F2FE 0%, #B3E5FC 100%); }

				/* Button Animations */
				.btn:hover .btn-bg-animation {
					opacity: 1;
				}

				.btn-bg-animation {
					transition: opacity 0.3s ease;
				}

				/* Background Shapes */
				.bg-shape-primary {
					width: 400px;
					height: 400px;
					background: radial-gradient(circle, rgba(0, 102, 204, 0.08) 0%, transparent 70%);
					border-radius: 50%;
					top: -200px;
					right: -200px;
				}

				.bg-shape-secondary {
					width: 350px;
					height: 350px;
					background: radial-gradient(circle, rgba(220, 38, 38, 0.06) 0%, transparent 70%);
					border-radius: 50%;
					bottom: -175px;
					left: -175px;
				}

				/* Floating Shapes Animation */
				.floating-shapes {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					pointer-events: none;
				}

				.shape {
					position: absolute;
					border-radius: 50%;
					background: linear-gradient(45deg, rgba(0, 102, 204, 0.1), rgba(220, 38, 38, 0.1));
					animation: float 6s ease-in-out infinite;
				}

				.shape-1 {
					width: 80px;
					height: 80px;
					top: 10%;
					left: 10%;
					animation-delay: 0s;
				}

				.shape-2 {
					width: 60px;
					height: 60px;
					top: 60%;
					right: 10%;
					animation-delay: 2s;
				}

				.shape-3 {
					width: 100px;
					height: 100px;
					bottom: 20%;
					left: 20%;
					animation-delay: 4s;
				}

				@keyframes float {
					0%, 100% { transform: translateY(0px) rotate(0deg); }
					50% { transform: translateY(-20px) rotate(180deg); }
				}

				/* Trust Indicators */
				.trust-item {
					padding: 1rem 1.5rem;
					background: rgba(255, 255, 255, 0.8);
					backdrop-filter: blur(10px);
					border-radius: 12px;
					border: 1px solid rgba(255, 255, 255, 0.2);
					transition: all 0.3s ease;
				}

				.trust-item:hover {
					transform: translateY(-2px);
					box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
				}

				/* Responsive Design */
				@media (max-width: 768px) {
					.display-4 {
						font-size: 2.5rem;
					}

					.service-image-section {
						height: 200px;
					}

					.service-content-section {
						min-height: 350px;
					}

					.bg-shape-primary,
					.bg-shape-secondary,
					.floating-shapes {
						display: none;
					}

					.trust-indicators .col-auto {
						flex: 0 0 100%;
						max-width: 100%;
						margin-bottom: 1rem;
					}
				}

				@media (max-width: 576px) {
					.service-title {
						font-size: 1.5rem;
					}

					.lead {
						font-size: 1.1rem;
					}
				}

				/* Utility Classes */
				.max-w-700 {
					max-width: 700px;
				}

				.bg-primary-dark {
					background-color: #004499;
				}

				.bg-danger-dark {
					background-color: #B91C1C;
				}

				.object-fit-cover {
					object-fit: cover;
				}

				.top-20 {
					top: 20px;
				}

				.end-20 {
					right: 20px;
				}

				.opacity-8 {
					opacity: 0.08;
				}

				.opacity-6 {
					opacity: 0.06;
				}
			`}</style>
		</>
	)
}
