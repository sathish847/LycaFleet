import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "@/node_modules/react-modal-video/css/modal-video.css"
import "/public/assets/css/main.css"
import MouseTrail from "@/components/elements/MouseTrail"
import AOSInitializer from "@/components/elements/AOSInitializer"

const urbanist = Urbanist({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: "--urbanist",
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Lycafleet - Premium Car Booking Services",
	description: "Experience premium car booking services with Lycafleet. Book luxury vehicles for your travel needs with competitive rates and excellent customer service.",
	icons: {
		icon: "/assets/imgs/logo/fav.png",
	},
	openGraph: {
		title: "Lycafleet - Premium Car Booking Services",
		description: "Experience premium car booking services with Lycafleet. Book luxury vehicles for your travel needs with competitive rates and excellent customer service.",
		url: "https://lycafleet.netlify.app", // Replace with your actual Netlify URL
		siteName: "Lycafleet",
		images: [
			{
				url: "/assets/imgs/hero/hero-2/banner.png",
				width: 1200,
				height: 630,
				alt: "Lycafleet Car Booking Services",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Lycafleet - Premium Car Booking Services",
		description: "Experience premium car booking services with Lycafleet. Book luxury vehicles for your travel needs with competitive rates and excellent customer service.",
		images: ["/assets/imgs/hero/hero-2/banner.png"],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			</head>
			<body className={`${urbanist.variable}`}>
				<AOSInitializer />
				<MouseTrail />
				{children}
			</body>
		</html>
	)
}
