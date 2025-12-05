'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from "react"

export const dynamic = 'force-dynamic'

interface ServiceData {
	title: string
	description: string
	longDescription: string
	images: string[]
	features: string[]
	duration: string
	price: string
}

function ServiceDetailsContent() {
	const searchParams = useSearchParams()
	const serviceId = searchParams.get('service')

	const [serviceData, setServiceData] = useState<ServiceData | null>(null)

	useEffect(() => {
		// Define service data based on service ID
		const services: Record<string, ServiceData> = {
			'1': {
				title: 'Singapore To Kukup / Pontian',
				description: 'Relaxing seafood trips & golf getaways to Kukup/Pontian with direct pickup from Singapore.',
				longDescription: 'Experience the perfect blend of urban sophistication and coastal tranquility with our direct transfer service from Singapore to Kukup/Pontian. Our professional drivers ensure a comfortable journey, allowing you to enjoy the scenic routes while we handle the logistics. Whether you\'re heading for a seafood feast or a round of golf, we provide door-to-door service with modern, well-maintained vehicles.',
				images: ['/assets/imgs/services/services-list-1/1.jpg'],
				features: ['Door-to-door service', 'Professional drivers', 'Modern vehicles', 'Flexible scheduling', 'Competitive pricing'],
				duration: '2-3 hours',
				price: 'From SGD 100 to 150'
			},
			'2': {
				title: 'Singapore To Tioman Island / Desaru',
				description: 'Beach holidays made easy — direct transfer to Mersing Jetty (Tioman) or Desaru Coast.',
				longDescription: 'Escape to paradise with our seamless transfer service to Tioman Island or Desaru Coast. We provide direct transportation from Singapore to Mersing Jetty, making your island getaway stress-free. Our experienced drivers know the best routes and ensure timely arrivals for your ferry connections.',
				images: ['/assets/imgs/services/services-list-1/2.jpg'],
				features: ['Direct to jetty', 'Timely ferry connections', 'Experienced drivers', 'Comfortable vehicles', 'Island holiday specialists'],
				duration: '3-4 hours',
				price: 'From SGD 100 to 150'
			},
			'3': {
				title: 'Singapore To Kluang / Batu Pahat / Muar',
				description: 'Comfortable rides to Johor\'s heritage towns, famous for food & nature.',
				longDescription: 'Discover Johor\'s rich heritage and culinary delights with our transfer service to Kluang/Batu Pahat or Muar. These charming towns offer authentic Malay culture, delicious local cuisine, and beautiful natural surroundings. Our service ensures you can explore these destinations comfortably and conveniently.',
				images: ['/assets/imgs/services/services-list-1/3.jpg'],
				features: ['Heritage town access', 'Culinary journey', 'Cultural experiences', 'Nature exploration', 'Local expertise'],
				duration: '2-3 hours',
				price: 'From SGD 100 to 150'
			},
			'4': {
				title: 'Singapore To Kuala Lumpur / Malacca',
				description: 'City escapes to KL\'s skyscrapers or historical Malacca with professional drivers.',
				longDescription: 'Experience the vibrant energy of Kuala Lumpur and the historical charm of Malacca with our premium transfer service. From Singapore\'s modern skyline to KL\'s bustling streets or Malacca\'s UNESCO World Heritage sites, we provide comfortable, reliable transportation for your Malaysian adventures.',
				images: ['/assets/imgs/services/services-list-1/4.jpg'],
				features: ['City center access', 'Historical sites', 'Modern amenities', 'Professional service', 'Flexible routes'],
				duration: '5-6 hours',
				price: 'From SGD 100 to 150'
			},
			'5': {
				title: 'Singapore To Port Dickson',
				description: 'Family-friendly beach getaway to Negeri Sembilan\'s sunny coastline.',
				longDescription: 'Create unforgettable family memories at Port Dickson\'s beautiful beaches and resorts. Our transfer service provides a smooth journey from Singapore to this popular coastal destination, perfect for family vacations, water sports, and relaxation. Enjoy the journey while our professional drivers ensure your comfort and safety.',
				images: ['/assets/imgs/services/services-list-1/5.jpg'],
				features: ['Family-friendly', 'Beach access', 'Water sports ready', 'Resort transfers', 'Child-friendly vehicles'],
				duration: '3-4 hours',
				price: 'From SGD 100 to 150'
			},
			'6': {
				title: 'Singapore To Genting Highlands',
				description: 'Cool mountain air, casino & theme park — direct transfer from SG.',
				longDescription: 'Ascend to Genting Highlands for world-class entertainment, gaming, and cooler climates. Our direct transfer service from Singapore takes you to this mountain resort destination featuring theme parks, casinos, and shopping. Experience the thrill of the journey up the mountain with our experienced drivers.',
				images: ['/assets/imgs/services/services-list-1/6.jpg'],
				features: ['Mountain resort access', 'Theme park transfers', 'Casino destination', 'Cool climate escape', 'Entertainment hub'],
				duration: '4-5 hours',
				price: 'From SGD 100 to 150'
			},
			'7': {
				title: 'Singapore To Cameron Highlands',
				description: 'Strawberry farms, tea plantations & cool weather — perfect highland escape.',
				longDescription: 'Discover the refreshing cool climate and agricultural beauty of Cameron Highlands. Our transfer service takes you through scenic routes to tea plantations, strawberry farms, and charming hill stations. Experience Malaysia\'s premier highland destination with comfortable, reliable transportation.',
				images: ['/assets/imgs/services/services-list-1/7.jpg'],
				features: ['Tea plantation tours', 'Strawberry farm visits', 'Cool climate', 'Scenic routes', 'Agricultural tourism'],
				duration: '5-6 hours',
				price: 'From SGD 100 to 150'
			},
			'8': {
				title: 'Singapore To Ipoh / Penang',
				description: 'Food paradise trips — Ipoh\'s white coffee or Penang\'s street food with comfy rides.',
				longDescription: 'Embark on a culinary journey to Ipoh or Penang, Malaysia\'s food capitals. From Ipoh\'s famous white coffee culture to Penang\'s legendary street food scene, our transfer service ensures you can focus on the flavors while we handle the transportation. Discover Malaysia\'s rich culinary heritage.',
				images: ['/assets/imgs/services/services-list-1/8.jpg'],
				features: ['Food tourism', 'Cultural experiences', 'Street food access', 'Local specialties', 'Culinary adventures'],
				duration: '6-7 hours',
				price: 'From SGD 100 to 150'
			},
			'9': {
	title: 'Private VIP Transfers from Johor Bahru',
	description: 'Direct, door-to-door private car & MPV services from Johor Bahru (city, JB Sentral, Legoland, Senai Airport) to all major destinations across Peninsular Malaysia.',
	longDescription: 'Enjoy comfortable and hassle-free VIP private transfers departing from anywhere in Johor Bahru. Whether you\'re at your hotel in JB city centre, JB Sentral CIQ, Legoland Malaysia, Senai International Airport, or Johor Premium Outlets, our professional chauffeurs will pick you up on time and take you directly to your destination in air-conditioned luxury sedans or spacious MPVs. Popular routes include Singapore Changi Airport, Kuala Lumpur (KL City & KLIA/KLIA2), Malacca, Genting Highlands, Cameron Highlands, Penang, Ipoh, Port Dickson, Muar, Batu Pahat and more. Fixed transparent pricing, no hidden fees, 24/7 availability, and complimentary waiting time at airports and stations.',
	images: ['/assets/imgs/services/services-list-1/9.jpg'],
	features: [
		'Pickup from any location in Johor Bahru',
		'JB Sentral, Legoland & Senai Airport specialist',
		'Brand-new sedans & 10–12 seater MPVs',
		'English/Malay-speaking professional drivers',
		'Free waiting time & flight monitoring',
		'Child seats available on request',
		'24/7 customer support'
	],
	duration: 'Varies by destination (1.5 – 10 hours)',
	price: 'Starting from RM 300'
},
			'10': {
				title: 'Mersing To Singapore',
				description: 'Private taxi from Mersing town or hotels directly to any address in Singapore.',
				longDescription: 'Experience seamless travel from Mersing to Singapore with our professional private transfer service. Whether you\'re departing from Mersing town center, hotels, or nearby areas, our experienced drivers ensure a comfortable and timely journey to your destination in Singapore. We provide door-to-door service with modern vehicles, making your transition between these neighboring destinations stress-free and convenient.',
				images: ['/assets/imgs/services/services-list-1/10.jpg'],
				features: ['Door-to-door service from Mersing', 'Professional drivers', 'Modern vehicles', 'Flexible scheduling', 'Direct to Singapore addresses'],
				duration: '2-3 hours',
				price: 'From RM 250'
			},
			'11': {
				title: 'Mersing Jetty To Singapore',
				description: 'Pickup right after your ferry arrives at Mersing Jetty — straight to Singapore.',
				longDescription: 'Perfect for island hoppers! Our service provides immediate pickup from Mersing Jetty right after your ferry arrival from Tioman Island or other nearby islands. No need to wait or arrange separate transportation — our drivers will be ready to take you directly to your Singapore destination. Experience hassle-free connections with our reliable ferry-to-destination service.',
				images: ['/assets/imgs/services/services-list-1/11.jpg'],
				features: ['Immediate jetty pickup', 'Ferry arrival coordination', 'Direct Singapore transfer', 'Island-to-city convenience', 'No waiting time'],
				duration: '2-3 hours',
				price: 'From RM 250'
			},
			'12': {
				title: 'Tioman Island To Singapore',
				description: 'Complete ferry + private car package from Tioman to your doorstep in Singapore.',
				longDescription: 'Enjoy a complete travel package from Tioman Island to Singapore. We coordinate your ferry departure from Tioman, meet you at Mersing Jetty, and provide immediate private transfer to any location in Singapore. This all-inclusive service ensures a smooth transition from your island paradise back to the city, with professional drivers and comfortable vehicles throughout your journey.',
				images: ['/assets/imgs/services/services-list-1/12.jpg'],
				features: ['Complete ferry + transfer package', 'Tioman Island specialist', 'Coordinated ferry connections', 'Door-to-door Singapore service', 'Island holiday convenience'],
				duration: '3-4 hours',
				price: 'From RM 300'
			},
			'13': {
				title: 'Johor Bahru (JB) To Singapore',
				description: 'Fast private transfer from JB city, JB Sentral, hotels or CIQ to Singapore.',
				longDescription: 'Experience quick and comfortable private transfers from Johor Bahru to Singapore. Whether you\'re in JB city center, at JB Sentral station, your hotel, or crossing at the CIQ, our professional drivers provide efficient service to get you to Singapore swiftly. Choose from sedans for individuals or MPVs for groups, with flexible pickup locations throughout Johor Bahru.',
				images: ['/assets/imgs/services/services-list-1/13.jpg'],
				features: ['Multiple JB pickup locations', 'JB Sentral & CIQ specialist', 'Fast Singapore transfers', 'Sedan & MPV options', 'Professional drivers'],
				duration: '1-2 hours',
				price: 'From RM 150'
			},
			'14': {
				title: 'Senai Airport (JHB) To Singapore',
				description: 'Direct pickup from Senai International Airport to any location in Singapore.',
				longDescription: 'Arrive in Johor Bahru and head straight to Singapore with our airport transfer service. We provide direct pickup from Senai International Airport (JHB) terminals, ensuring you can continue your journey immediately after clearing customs. Our drivers monitor flight arrivals and provide comfortable, air-conditioned transportation to your Singapore destination.',
				images: ['/assets/imgs/services/services-list-1/14.jpg'],
				features: ['Direct airport pickup', 'Flight monitoring', 'Terminal-to-destination service', 'Air-conditioned vehicles', 'Immediate transfer'],
				duration: '1.5-2.5 hours',
				price: 'From RM 180'
			},
			'15': {
				title: 'Legoland Malaysia To Singapore',
				description: 'Family-friendly private taxi after your fun day at Legoland straight back to SG.',
				longDescription: 'End your magical day at Legoland Malaysia with a comfortable private transfer back to Singapore. Our family-friendly service provides pickup from the theme park and direct transportation to your Singapore accommodation. With child seats available and experienced drivers familiar with the route, we ensure a pleasant journey home after an exciting day of rides and attractions.',
				images: ['/assets/imgs/services/services-list-1/15.jpg'],
				features: ['Legoland theme park pickup', 'Family-friendly service', 'Child seats available', 'Direct Singapore transfer', 'Post-attraction convenience'],
				duration: '2-3 hours',
				price: 'From RM 200'
			},
			'16': {
				title: 'Desaru To Singapore',
				description: 'Relaxing return from Desaru Coast resorts & waterpark directly to Singapore.',
				longDescription: 'Return from your Desaru Coast getaway in comfort with our private transfer service. Whether you\'ve been relaxing at luxury resorts or enjoying the waterpark, our drivers provide direct pickup and transportation back to Singapore. Experience the convenience of door-to-door service from this popular coastal destination to the city.',
				images: ['/assets/imgs/services/services-list-1/16.jpg'],
				features: ['Desaru Coast resorts pickup', 'Waterpark transfers', 'Direct Singapore service', 'Luxury resort connections', 'Coastal destination specialist'],
				duration: '2-3 hours',
				price: 'From RM 220'
			},
			'17': {
				title: 'Johor Premium Outlets To Singapore',
				description: 'Shop till you drop, then enjoy a comfortable ride back to Singapore.',
				longDescription: 'After a successful shopping spree at Johor Premium Outlets, continue your journey with our comfortable private transfer back to Singapore. Our drivers provide convenient pickup from the outlets and ensure you reach your Singapore destination with all your purchases. Experience stress-free shopping trips with reliable transportation both ways.',
				images: ['/assets/imgs/services/services-list-1/17.jpg'],
				features: ['Premium Outlets pickup', 'Shopping convenience', 'Purchase transport', 'Direct Singapore transfer', 'Retail destination specialist'],
				duration: '1.5-2 hours',
				price: 'From RM 160'
			},
			'18': {
				title: 'Anywhere in Malaysia To Singapore',
				description: 'We pick up from ANY city in Peninsular Malaysia — just tell us where!',
				longDescription: 'Our extensive network covers all of Peninsular Malaysia, providing pickup from any city, town, or location you specify. Whether you\'re in Kuala Lumpur, Penang, Malacca, or any other destination, we can arrange your private transfer to Singapore. Simply tell us your pickup location, and our professional drivers will be there to provide comfortable, reliable transportation.',
				images: ['/assets/imgs/services/services-list-1/18.jpg'],
				features: ['Nationwide Malaysia coverage', 'Any location pickup', 'Custom routing', 'Flexible scheduling', 'Extensive network'],
				duration: 'Varies by location',
				price: 'From RM 150'
			},
			'19': {
				title: 'Kuala Lumpur To Singapore',
				description: 'Comfortable long-distance private transfer from KL city or KLIA to Singapore.',
				longDescription: 'Travel from Malaysia\'s vibrant capital to Singapore with our premium long-distance transfer service. Whether departing from Kuala Lumpur city center or KLIA/KLIA2 airports, our professional drivers ensure a comfortable journey across the border. Choose from sedan or MPV options for individuals, couples, or groups traveling between these major Southeast Asian cities.',
				images: ['/assets/imgs/services/services-list-1/19.jpg'],
				features: ['KL city & airport pickup', 'Long-distance comfort', 'Border crossing expertise', 'Sedan & MPV options', 'Major city connections'],
				duration: '5-6 hours',
				price: 'From RM 450'
			},
			'20': {
				title: 'Malacca To Singapore',
				description: 'Historical city to modern city — private taxi from Malacca straight to Singapore.',
				longDescription: 'Journey from Malacca\'s rich historical sites to Singapore\'s modern skyline with our private transfer service. Our drivers provide pickup from anywhere in Malacca city and ensure a comfortable trip across the straits. Experience the contrast between Malaysia\'s UNESCO World Heritage sites and Singapore\'s contemporary architecture with our reliable transportation service.',
				images: ['/assets/imgs/services/services-list-1/20.jpg'],
				features: ['Malacca city pickup', 'Historical site access', 'UNESCO heritage routes', 'Cross-straits travel', 'Cultural city connections'],
				duration: '3-4 hours',
				price: 'From RM 280'
			}
		}

		setServiceData(services[serviceId || '1'] || services['1'])
	}, [serviceId])

	if (!serviceData) {
		return (
			<Layout footerStyle={1}>
				<div>Loading...</div>
			</Layout>
		)
	}

	return (
			<>
				<Layout footerStyle={1}>
					<div>
						<section className="box-section box-breadcrumb background-body">
							<div className="container">
								<ul className="breadcrumbs">
									<li>
										<Link href="/">Home</Link>
										<span className="arrow-right">
											<svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</span>
									</li>

									<li><span className="text-breadcrumb">{serviceData.title}</span></li>
								</ul>
							</div>
						</section>

						<section className="section-box box-content-tour-detail background-body">
							<div className="container">
								<div className="tour-header">
									<div className="row">
										<div className="col-lg-8">
											<div className="tour-title-main">
												<h4 className="neutral-1000">{serviceData.title}</h4>
												<p className="text-lg-medium neutral-500 mt-3">{serviceData.description}</p>
											</div>
										</div>
									</div>
									<div className="tour-metas">
										{/* <div className="tour-meta-left">
											<p className="text-md-medium neutral-1000 mr-20 tour-location">
												<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<path d="M7.99967 0C4.80452 0 2.20508 2.59944 2.20508 5.79456C2.20508 9.75981 7.39067 15.581 7.61145 15.8269C7.81883 16.0579 8.18089 16.0575 8.38789 15.8269C8.60867 15.581 13.7943 9.75981 13.7943 5.79456C13.7942 2.59944 11.1948 0 7.99967 0ZM7.99967 8.70997C6.39211 8.70997 5.0843 7.40212 5.0843 5.79456C5.0843 4.187 6.39214 2.87919 7.99967 2.87919C9.6072 2.87919 10.915 4.18703 10.915 5.79459C10.915 7.40216 9.6072 8.70997 7.99967 8.70997Z" fill="#101010" />
												</svg>
												Singapore to Malaysia
											</p>
											<Link className="text-md-medium neutral-1000 mr-30" href="/services">Back to Services</Link>
										</div> */}
										{/* <div className="tour-meta-right">
											<Link className="btn btn-share" href="#">
												<svg width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.2729 0.273646C13.4097 0.238432 13.5538 0.24262 13.6884 0.28573L18.5284 1.83572L18.5474 1.84209C18.8967 1.96436 19.1936 2.19167 19.4024 2.4875C19.5891 2.75202 19.7309 3.08694 19.7489 3.46434C19.7494 3.47622 19.7497 3.4881 19.7497 3.49998V15.5999C19.7625 15.8723 19.7102 16.1395 19.609 16.3754C19.6059 16.3827 19.6026 16.39 19.5993 16.3972C19.476 16.6613 19.3017 16.8663 19.1098 17.0262C19.1023 17.0324 19.0947 17.0385 19.087 17.0445C18.8513 17.2258 18.5774 17.3363 18.2988 17.3734L18.2927 17.3743C18.0363 17.4063 17.7882 17.3792 17.5622 17.3133C17.5379 17.3081 17.5138 17.3016 17.4901 17.294L13.4665 16.0004L6.75651 17.7263C6.62007 17.7614 6.47649 17.7574 6.34221 17.7147L1.47223 16.1647C1.46543 16.1625 1.45866 16.1603 1.45193 16.1579C1.0871 16.0302 0.813939 15.7971 0.613929 15.5356C0.608133 15.528 0.602481 15.5203 0.596973 15.5125C0.395967 15.2278 0.277432 14.8905 0.260536 14.5357C0.259972 14.5238 0.259689 14.5119 0.259689 14.5V2.39007C0.246699 2.11286 0.301239 1.83735 0.420015 1.58283C0.544641 1.31578 0.724533 1.10313 0.942417 0.93553C1.17424 0.757204 1.45649 0.6376 1.7691 0.61312C2.03626 0.583264 2.30621 0.616234 2.56047 0.712834L6.56277 1.99963L13.2729 0.273646ZM13.437 1.78025L6.72651 3.50634C6.58929 3.54162 6.44493 3.53736 6.31011 3.49398L2.08011 2.13402C2.06359 2.1287 2.04725 2.12282 2.03113 2.11637C2.00054 2.10413 1.96854 2.09972 1.93273 2.10419C1.91736 2.10611 1.90194 2.10756 1.88649 2.10852C1.88649 2.10852 1.88436 2.10866 1.88088 2.11001C1.8771 2.11149 1.86887 2.11532 1.85699 2.12447C1.81487 2.15686 1.79467 2.18421 1.77929 2.21715C1.76189 2.25446 1.75611 2.28942 1.75823 2.32321C1.7592 2.33879 1.75969 2.35439 1.75969 2.36999V14.4772C1.76448 14.5336 1.78316 14.5879 1.81511 14.6367C1.86704 14.7014 1.90866 14.7272 1.94108 14.7398L6.59169 16.2199L13.3028 14.4937C13.44 14.4584 13.5844 14.4626 13.7192 14.506L17.8938 15.8482C17.9184 15.8537 17.9428 15.8605 17.9669 15.8685C18.0209 15.8865 18.0669 15.8902 18.1034 15.8862C18.1214 15.8833 18.1425 15.8759 18.1629 15.8623C18.1981 15.8309 18.2196 15.8024 18.2346 15.7738C18.2473 15.7399 18.2533 15.7014 18.2511 15.6668C18.2502 15.6512 18.2497 15.6356 18.2497 15.62V3.52464C18.2453 3.48222 18.2258 3.42174 18.1769 3.3525C18.147 3.3102 18.1062 3.2784 18.0582 3.26022L13.437 1.78025Z" fill="#101010" />
												<path fillRule="evenodd" clipRule="evenodd" d="M6.55957 2.01953C6.97375 2.01953 7.30957 2.35532 7.30957 2.76953V16.9195C7.30957 17.3338 6.97375 17.6695 6.55957 17.6695C6.14533 17.6695 5.80957 17.3338 5.80957 16.9195V2.76953C5.80957 2.35532 6.14533 2.01953 6.55957 2.01953Z" fill="#101010" />
												<path fillRule="evenodd" clipRule="evenodd" d="M13.4893 0.330078C13.9035 0.330078 14.2393 0.665862 14.2393 1.08008V15.2301C14.2393 15.6443 13.9035 15.9801 13.4893 15.9801C13.0751 15.9801 12.7393 15.6443 12.7393 15.2301V1.08008C12.7393 0.665862 13.0751 0.330078 13.4893 0.330078Z" fill="#101010" />
											</svg>
											Share
										</Link>
										</div> */}
									</div>
								</div>

								<div className="row mt-30">
									<div className="col-lg-8">
										{/* Service Images */}
										<div className="service-images mb-4">
											<div className="row">
												<div className="col-12">
													<img src={serviceData.images[0]} alt={serviceData.title} className="img-fluid rounded w-100" />
												</div>
											</div>
										</div>

										{/* Service Details */}
										<div className="box-collapse-expand">
											<div className="group-collapse-expand">
												<div className="card card-body">
													<h5 className="text-xl-bold neutral-1000 mb-3">Service Overview</h5>
													<p className="text-md-medium neutral-800 mb-4">{serviceData.longDescription}</p>

													<div className="service-features mb-4">
														<h6 className="text-lg-bold neutral-1000 mb-3">Key Features</h6>
														<ul className="list-checked-green">
															{serviceData.features.map((feature, index) => (
																<li key={index}>{feature}</li>
															))}
														</ul>
													</div>

													<div className="service-info">
														<div className="row">
															<div className="col-md-6">
																<p className="text-md-bold neutral-1000">Duration: <span className="text-md-medium neutral-600">{serviceData.duration}</span></p>
															</div>
															 <div className="col-md-6">
																<p className="text-md-bold neutral-1000">Starting Price: <span className="text-md-medium neutral-600">{serviceData.price}</span></p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-4">
										<div className="sidebar-banner">
											<div className="p-4 background-body border rounded-3">
												<p className="text-xl-bold neutral-1000 mb-4">Book This Service</p>
												<Link href="/reserve-via-whatsapp" className="btn btn-primary w-100 rounded-3 py-3 mb-3">
													Reserve via WhatsApp
													<svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</Link>
												{/*
												<Link href="/contact" className="btn btn-book bg-2">
													Request Quote
													<svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</Link>
												*/}
											</div>
										</div>

										<div className="sidebar-left border-1 background-card mt-4">
											<h6 className="text-xl-bold neutral-1000">Why Choose Us?</h6>
											<div className="box-sidebar-content">
												<div className="box-info-contact">
													<ul className="list-checked-green">
														<li>Professional & experienced drivers</li>
														<li>Modern, well-maintained vehicles</li>
														<li>24/7 customer support</li>
														<li>Flexible scheduling</li>
														<li>Competitive pricing</li>
														<li>Safe & reliable service</li>
													</ul>
												</div>
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

export default function ServiceDetails() {
	return (
		<Suspense fallback={<Layout footerStyle={1}><div>Loading...</div></Layout>}>
			<ServiceDetailsContent />
		</Suspense>
	)
}
