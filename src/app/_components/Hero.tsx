'use client';
import React from "react";

const Hero = () => (
<section
	className="h-screen bg-cover bg-center relative"
	style={{ backgroundImage: "url('/hero_pic.jpg')",
		backgroundAttachment: 'fixed',  // This creates the parallax effect
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		}}
	>
	<div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
	<div className="relative z-10 flex flex-col justify-center items-center text-center px-6 h-full">
			<h1 className="text-6xl font-extrabold text-green-500 mb-4 opacity-0 animate-fadeIn">Celeste Tan</h1>
			<p className="text-2xl text-gray-400 mb-6 opacity-0 animate-fadeIn delay-200">Computer Engineering</p>
			<div className="flex gap-6">
			<a href="#projects" className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:opacity-70 transition-opacity duration-300">View Projects</a>
			<a href="#contact" className="px-6 py-3 border border-green-500 text-green-500 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white hover:opacity-70 transition-all duration-300">Contact Me</a>
			</div>
	</div>
	</section>
);

export default Hero;