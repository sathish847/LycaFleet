'use client'
import CarCard1 from '@/components/elements/carcard/CarCard1'
import HeroSearch from '@/components/elements/HeroSearch'
import SortCarsFilter from '@/components/elements/SortCarsFilter'
import ByPagination from '@/components/Filter/ByPagination'
import Layout from "@/components/layout/Layout"
import rawCarsData from "@/util/cars.json"
import useCarFilter from '@/util/useCarFilter'
import Link from "next/link"
import Marquee from 'react-fast-marquee'

const carsData = rawCarsData.map(car => ({
	...car,
	rating: parseFloat(car.rating as string)
}))

export default function CarsList3() {
	const {
		filter,
		setFilter,
		sortCriteria,
		setSortCriteria,
		itemsPerPage,
		setItemsPerPage,
		currentPage,
		setCurrentPage,
		uniqueNames,
		uniqueFuelTypes,
		uniqueAmenities,
		uniqueLocations,
		uniqueRatings,
		uniqueCarTypes,
		filteredCars,
		sortedCars,
		totalPages,
		startIndex,
		endIndex,
		paginatedCars,
		handleCheckboxChange,
		handleSortChange,
		handlePriceRangeChange,
		handleItemsPerPageChange,
		handlePageChange,
		handlePreviousPage,
		handleNextPage,
		handleClearFilters,
		startItemIndex,
		endItemIndex,
	} = useCarFilter(carsData)

	return (
		<>

			<Layout footerStyle={1}>
				<div>
					<div className="page-header-2 pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 img-fluid img-banner" src="/assets/imgs/page-header/banner7.png" alt="LycaFleet" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 pb-70 translate-middle text-center">
								
								<h2 className="text-white mt-4">Our Modern & Luxurious Fleet</h2>
								<span className="text-white text-lg-medium">Door-to-door comfort • Fully sanitized • Professional chauffeurs</span>
							</div>
							<div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 d-none d-md-flex">
								<Link href="/" className="neutral-700 text-md-medium">Home</Link>
								<span>
									<img src="/assets/imgs/template/icons/arrow-right.svg" alt="LycaFleet" />
								</span>
								<Link href="/fleet" className="neutral-1000 text-md-bold">Vehicle Gallery</Link>
							</div>
						</div>
					</div>
					
					{/* Fleet Section */}
					<section className="section-box pt-50 background-body">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-9 mb-30 wow fadeInUp">
									<h4 className="title-svg neutral-1000 mb-15">Our Vehicle Fleet</h4>
									<p className="text-lg-medium text-bold neutral-500">
										Travel in style and comfort with our premium MPVs & luxury vans – perfect for families, groups, and business travelers.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="box-section block-content-tourlist background-body">
						<div className="container">
							<div className="box-content-main pt-20">
								<div className="content-right">
									<div className="box-filters mb-25 pb-5 border-bottom border-1">
										<SortCarsFilter
											itemsPerPage={itemsPerPage}
											handleItemsPerPageChange={handleItemsPerPageChange}
											handleClearFilters={handleClearFilters}
											startItemIndex={startItemIndex}
											endItemIndex={endItemIndex}
											sortedCars={sortedCars}
										/>
									</div>
									<div className="box-grid-tours wow fadeIn">
										<div className="row">
											{paginatedCars.map((car) => (
												<div className="col-lg-4 col-md-6" key={car.id}>
													<CarCard1 car={car} />
												</div>
											))}
										</div>
									</div>
									<ByPagination
										handlePreviousPage={handlePreviousPage}
										totalPages={totalPages}
										currentPage={currentPage}
										handleNextPage={handleNextPage}
										handlePageChange={handlePageChange}
									/>
								</div>

								{/* Sidebar kept exactly as-is, only text updated for LycaFleet */}
								<div className="content-left order-lg-first d-none">
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Show on map</h6>
												<div className="box-collapse scrollFilter mb-15">
													<div className="pt-0">
														<div className="box-map-small">
															<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815918360887!2d103.747963!3d1.343745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sJohor%20Bahru!5e0!3m2!1sen!2smy!4v1711728202093!5m2!1sen!2smy" width="100%" height={160} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* All other sidebar filters remain structurally identical – only text updated where needed */}
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Filter Price</h6>
												{/* ... same as original */}
											</div>
										</div>
									</div>

									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Vehicle Type</h6>
												<div className="box-collapse scrollFilter">
													<ul className="list-filter-checkbox">
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">All Vehicles</span><span className="checkmark" /> </label><span className="number-item">12</span></li>
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Toyota Innova</span><span className="checkmark" /> </label><span className="number-item">4</span></li>
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Hyundai Starex / Staria</span><span className="checkmark" /> </label><span className="number-item">5</span></li>
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Toyota Alphard</span><span className="checkmark" /> </label><span className="number-item">2</span></li>
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Toyota Vellfire</span><span className="checkmark" /> </label><span className="number-item">1</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>

									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Passenger Capacity</h6>
												<div className="box-collapse scrollFilter">
													<ul className="list-filter-checkbox">
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">1–5 Passengers</span><span className="checkmark" /> </label></li>
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">6–8 Passengers</span><span className="checkmark" /> </label></li>
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">9–10 Passengers</span><span className="checkmark" /> </label></li>
													</ul>
												</div>
											</div>
										</div>
									</div>

									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Popular Routes</h6>
												<div className="box-collapse scrollFilter">
													<ul className="list-filter-checkbox">
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Singapore To Johor Bahru</span><span className="checkmark" /> </label></li>
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Singapore To Kuala Lumpur</span><span className="checkmark" /> </label></li>
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Singapore To Melaka</span><span className="checkmark" /> </label></li>
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Singapore To Legoland</span><span className="checkmark" /> </label></li>
														<li><label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Singapore To Desaru</span><span className="checkmark" /> </label></li>
													</ul>
												</div>
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
