import Layout from "@/components/layout/Layout"
import App from "@/components/sections/App"
import Banners from "@/components/sections/Banners"
import Blog1 from "@/components/sections/Blog1"
import Brand1 from "@/components/sections/Brand1"
import CarReview1 from "@/components/sections/CarReview1"
import CarsListing1 from "@/components/sections/CarsListing1"
import CarsListing2 from "@/components/sections/CarsListing2"
import Categories1 from "@/components/sections/Categories1"
import Cta1 from "@/components/sections/Cta1"
import Cta2 from "@/components/sections/Cta2"
import Review2 from "@/components/sections/Review2"
import Hero2 from "@/components/sections/Hero2"
import Cta6 from "@/components/sections/Cta6"
import Banners2 from "@/components/sections/Banners2"
import WhyUs1 from "@/components/sections/WhyUs1"
import Brand2 from "@/components/sections/Brand2"

export default function Home() {


	return (
		<>

			<Layout headerStyle={2} footerStyle={1}>
				<Hero2 />
					<Cta6 />
				{/* <Search1 />
				<CarsListing1 />
				<Categories1 />
				<WhyUs1 />
				<Cta2 />
				<CarsListing2 />
				<Cta3 />
				<Services1 />
				<Banners />
				<Testimonials />
				<CarReview1 />
				<Blog1 />
				<Brand1 />
				<App />
				<Brand2 noBg />
				*/}

				{/* 
				<Cta1 />
				*/}
				
				
				<Review2 />
				<WhyUs1 />
				<Banners2 />
				<Brand2 noBg />
				
				
				
				
				
				
			</Layout>
		</>
	)
}