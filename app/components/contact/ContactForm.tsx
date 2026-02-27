"use client";

import React, { useState } from "react";
import { Mail, Headphones, ArrowRight, Play } from "lucide-react";

export default function RavellaContactSection() {
	const [formData, setFormData] = useState({
		fullName: "",
		username: "",
		phone: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		setSuccessMessage("");
		setErrorMessage("");

		try {
			const response = await fetch(
				"https://api.ravellaultrasolution.com/api/v1/contact",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: formData.fullName,
						user_name: formData.username,
						email: formData.email,
						phone: formData.phone,
						message: formData.message,
					}),
				},
			);

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Something went wrong");
			}

			if (data.status === "success") {
				setSuccessMessage(data.message);

				// Reset form
				setFormData({
					fullName: "",
					username: "",
					phone: "",
					email: "",
					message: "",
				});
			}
		} catch (error) {
			setErrorMessage(error.message || "Failed to submit form");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20">
			<div className="grid lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12">
				{/* Left Side - Contact Information */}
				<div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8">
					{/* General Communication */}
					<div className="bg-[#F5F5F5] rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8">
						<div className="flex items-center gap-2 mb-2 xs:mb-3 sm:mb-4">
							<Mail className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#FF9801]" />
							<h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#FF9801]">
								General Communication
							</h3>
						</div>

						<p className="text-muted-foreground font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-relaxed max-w-md">
							We’re always here to support you. Reach out to our
							dedicated team anytime, and we’ll get back to you
							promptly with the help, answers, or guidance you
							need.
						</p>

						<div className="inline-block bg-white border border-gray-300 rounded-md xs:rounded-lg sm:rounded-xl px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3">
							<a
								href="mailto:hello@ravellaultrasolution.com"
								className="text-[#653424] font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl break-all"
							>
								hello@ravellaultrasolution.com
							</a>
						</div>
					</div>

					{/* Help & Support */}
					<div className="bg-[#F5F5F5] rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8">
						<div className="flex items-center gap-2 mb-2 xs:mb-3 sm:mb-4">
							<Headphones className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#FF9801]" />
							<h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#FF9801]">
								Help & support
							</h3>
						</div>

						<p className="text-muted-foreground font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-relaxed max-w-md">
							Ask product questions, report issues, or share
							feedback. We resolve every query — anytime, any day.
						</p>

						<div className="inline-block bg-white border border-gray-300 rounded-md xs:rounded-lg sm:rounded-xl px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3">
							<a
								href="mailto:support@ravellaultrasolution.com"
								className="text-[#653424] font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl break-all"
							>
								support@ravellaultrasolution.com
							</a>
						</div>
					</div>
				</div>

				{/* Right Side - Contact Form */}
				<div className="bg-[#F5F5F5] rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8">
					<form onSubmit={handleSubmit}>
						<div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
							{/* Full Name */}
							<div>
								<label
									htmlFor="fullName"
									className="block text-[#525252] text-xs xs:text-sm sm:text-base mb-1 xs:mb-2"
								>
									Full name*
								</label>
								<input
									type="text"
									id="fullName"
									name="fullName"
									value={formData.fullName}
									onChange={handleChange}
									placeholder="Oluwafemi Samson"
									required
									className="w-full px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 bg-white border border-[#A3A3A3] rounded-md xs:rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition placeholder:text-[#A3A3A3]"
								/>
							</div>

							{/* Username */}
							<div>
								<label
									htmlFor="username"
									className="block text-[#525252] text-xs xs:text-sm sm:text-base mb-1 xs:mb-2"
								>
									Username*
								</label>
								<input
									type="text"
									id="username"
									name="username"
									value={formData.username}
									onChange={handleChange}
									placeholder="@username"
									required
									className="w-full px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 bg-white border border-[#A3A3A3] rounded-md xs:rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition placeholder:text-[#A3A3A3]"
								/>
							</div>

							{/* Phone */}
							<div>
								<label
									htmlFor="phone"
									className="block text-[#525252] text-xs xs:text-sm sm:text-base mb-1 xs:mb-2"
								>
									Phone number*
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									placeholder="08012345678"
									required
									className="w-full px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 bg-white border border-[#A3A3A3] rounded-md xs:rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition placeholder:text-[#A3A3A3]"
								/>
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor="email"
									className="block text-[#525252] text-xs xs:text-sm sm:text-base mb-1 xs:mb-2"
								>
									Email*
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="name@email.com"
									required
									className="w-full px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 bg-white border border-[#A3A3A3] rounded-md xs:rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition placeholder:text-[#A3A3A3]"
								/>
							</div>

							{/* Message */}
							<div>
								<label
									htmlFor="message"
									className="block text-[#525252] text-xs xs:text-sm sm:text-base mb-1 xs:mb-2"
								>
									How can we help?
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="I'm interested in Ravella for my team..."
									rows={4}
									className="w-full px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 bg-white border border-[#A3A3A3] rounded-md xs:rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none placeholder:text-[#A3A3A3]"
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={loading}
								className="w-full bg-[#653424] text-white text-sm xs:text-base sm:text-lg md:text-xl font-semibold py-2 xs:py-2.5 sm:py-3 md:py-4 px-4 xs:px-5 sm:px-6 rounded-md xs:rounded-lg sm:rounded-xl hover:bg-amber-900 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
							>
								{loading ? "Submitting..." : "Submit form"}
								{!loading && (
									<Play className="w-4 h-4 text-[#A3A3A3] fill-current" />
								)}
							</button>

							{/* Feedback Messages */}
							{successMessage && (
								<p className="text-green-600 text-sm mt-2">
									{successMessage}
								</p>
							)}

							{errorMessage && (
								<p className="text-red-600 text-sm mt-2">
									{errorMessage}
								</p>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
