"use client";

import { Button } from "@/app/components/ui/button";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroSlides = [
	{
		image: "/hero-img.png",
		badge: "Reliable Solutions for Everyday Care",
		title: (
			<>
				Health, Wealth,
				<br />
				and Community
				<br />
				<span className="text-[#FF9801]">Together with Ravella</span>
			</>
		),
		description:
			"We promote wellness and build sustainable income with multiple earning opportunities. Live healthy. Earn massively. Share effortlessly. Grow globally.",
	},
	{
		image: "/hero-image.png",
		badge: "Premium Wellness Products",
		title: (
			<>
				Transform Your Health
				<br />
				with Natural
				<br />
				<span className="text-[#FF9801]">Herbal Solutions</span>
			</>
		),
		description:
			"Experience the power of nature with our carefully crafted herbal remedies. Proven formulas for digestive health, vitality, and overall wellness.",
	},
	{
		image: "/hero-image-one.png",
		badge: "Join 50,000+ Active Members",
		title: (
			<>
				Build Your Legacy
				<br />
				Through Community
				<br />
				<span className="text-[#FF9801]">& Collaboration</span>
			</>
		),
		description:
			"Join a thriving network of entrepreneurs earning sustainable income. Multiple bonus structures, transparent tracking, and weekly withdrawals.",
	},
];

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
		}, 6000); // Change slide every 6 seconds

		return () => clearInterval(timer);
	}, []);

	const slide = heroSlides[currentSlide];

	return (
		<section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-t from-[#814C31]/70 via-[#32241B]/30 to-transparent backdrop-blur-[6px]">
			{/* Background image carousel */}
			<AnimatePresence mode="sync">
				<motion.div
					key={currentSlide}
					initial={{ x: "100%", scale: 1.05 }}
					animate={{ x: 0, scale: 1 }}
					exit={{ x: "-100%", scale: 1.05 }}
					transition={{ duration: 0.7, ease: "easeInOut" }}
					className="absolute inset-0"
				>
					<img
						src={slide.image}
						alt="Ravella hero background"
						className="h-full w-full object-cover"
					/>

					{/* Bottom blur / fade */}
					<div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-t from-black/70 via-black/30 to-transparent backdrop-blur-[6px]" />
				</motion.div>
			</AnimatePresence>

			{/* Content */}
			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-32">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSlide}
						initial={{ y: 40 }}
						animate={{ y: 0 }}
						exit={{ y: -40 }}
						transition={{ duration: 0.9, ease: "easeOut" }}
					>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8"
						>
							<span className="h-2 w-2 rounded-full bg-[#FF9801] animate-pulse" />
							<span className="text-xs sm:text-sm text-white font-display">
								{slide.badge}
							</span>
						</motion.div>

						{/* Copy */}
						<div className="max-w-3xl">
							<motion.h1
								initial={{ x: -40 }}
								animate={{ x: 0 }}
								transition={{ delay: 0.3, duration: 0.8 }}
								className="text-white leading-[1.05] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6"
							>
								{slide.title}
							</motion.h1>

							<motion.p
								initial={{ x: -20 }}
								animate={{ x: 0 }}
								transition={{ delay: 0.3, duration: 0.8 }}
								className="max-w-xl text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8"
							>
								{slide.description}
							</motion.p>

							{/* CTAs */}
							<motion.div
								initial={{ y: 30 }}
								animate={{ y: 0 }}
								transition={{ delay: 0.6, duration: 0.8 }}
								className="flex flex-col sm:flex-row gap-3 sm:gap-4"
							>
								<Button
									size="lg"
									className="gap-2 bg-[#5A2D1B] text-white hover:bg-[#5A2D1B]/90 font-display text-sm sm:text-base w-full sm:w-auto"
								>
									<Play className="h-4 w-4 fill-current text-white/80" />
									Explore Products
								</Button>

								<Button
									size="lg"
									variant="outline"
									className="gap-2 bg-white text-[#2B160E] hover:bg-white/90 font-display text-sm sm:text-base w-full sm:w-auto"
								>
									Join Now
									<Play className="h-4 w-4 fill-current text-gray-400/70" />
								</Button>
							</motion.div>
						</div>
					</motion.div>
				</AnimatePresence>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.8 }}
					className="relative mt-16 sm:mt-20 lg:mt-24 font-display"
				>
					<div className="relative flex flex-wrap justify-between max-w-3xl gap-8 sm:gap-12 lg:gap-16 border-t border-white/20 pt-6 sm:pt-8">
						<div>
							<p className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl">
								15+
							</p>
							<p className="text-white/70 text-xs sm:text-sm mt-1 font-light font-sans">
								Earning Opportunities
							</p>
						</div>

						<div>
							<p className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl">
								50K+
							</p>
							<p className="text-white/70 text-xs sm:text-sm mt-1 font-light font-sans">
								Active Members
							</p>
						</div>

						<div>
							<p className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl">
								98%
							</p>
							<p className="text-white/70 text-xs sm:text-sm mt-1 font-light font-sans">
								Satisfaction Rate
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;

// {/* Carousel indicators */}
// <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ delay: 1.2, duration: 0.6 }}
//   className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20"
// >
//   {heroSlides.map((_, index) => (
//     <button
//       key={index}
//       onClick={() => setCurrentSlide(index)}
//       className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === currentSlide
//           ? "w-8 sm:w-12 bg-[#FF9801]"
//           : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/60"
//         }`}
//       aria-label={`Go to slide ${index + 1}`}
//     />
//   ))}
// </motion.div>
