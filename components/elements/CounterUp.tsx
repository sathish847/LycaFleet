'use client'
import dynamic from 'next/dynamic'
import React, { useEffect, useRef, useState } from 'react'

const Odometer = dynamic(() => import('react-odometerjs'), {
	ssr: false,
	loading: () => <span>0</span>,
})

interface CounterUpProps {
	count: number,
	duration?: number
}

const CounterUp: React.FC<CounterUpProps> = ({ count }) => {
	const [isVisible, setIsVisible] = useState(false)
	const [currentValue, setCurrentValue] = useState(0)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true)
					// Delay the counting animation slightly for better visual effect
					setTimeout(() => {
						setCurrentValue(count)
					}, 300)
				}
			},
			{ threshold: 0.1 }
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [count, isVisible])

	return (
		<div ref={ref}>
			<Odometer value={currentValue} className="odometer" duration={4000} animation='count' />
		</div>
	)
}

export default CounterUp
