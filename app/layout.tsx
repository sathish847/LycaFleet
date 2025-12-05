import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "@/node_modules/react-modal-video/css/modal-video.css"
import "/public/assets/css/main.css"

const urbanist = Urbanist({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: "--urbanist",
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Lycafleet",
	description: "Lycafleet car rental website",
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
			<body className={`${urbanist.variable}`}>{children}</body>
		</html>
	)
}
