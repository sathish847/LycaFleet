import Link from 'next/link'

export default function CarCard1({ car }: any) {
	return (
		<>
			<div className="card-journey-small background-card hover-up">
					<div className="card-image">
						<img src={`/assets/imgs/cars-listing/cars-listing-6/${car.image}`} alt="Carento" />
					</div>
					<div className="card-info p-4 pt-30">
						<div className="card-title"><span className="text-lg-bold neutral-1000 text-nowrap">{car.name}</span></div>
						<div className="card-program">
							<div className="card-location">
								<p className="text-location text-sm-medium neutral-500">Singapore ↔ Malaysia</p>
							</div>
							<div className="card-facitlities">
								<p className="card-miles text-md-medium">25,100 miles</p>
								<p className="card-gear text-md-medium">Automatic</p>
								<p className="card-fuel text-md-medium">Diesel</p>
								<p className="card-seat text-md-medium">7 seats</p>
							</div>
							<div className="endtime">
								<div className="card-button"><Link className="btn btn-gray" href="/reserve-via-whatsapp">Reserve via WhatsApp</Link></div>
							</div>
						</div>
					</div>
				</div>
		</>
	)
}
