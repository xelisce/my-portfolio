'use client';
import Link from "next/link";
import React from "react";

const Navigation = () => (
	<header className="sticky top-0 bg-gray-900 py-4 border-b border-gray-700 flex justify-center z-20">
		<nav>
			<ul className="flex gap-12 text-lg">
				<li><Link href="#about" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">About</Link></li>
				<li><Link href="#projects" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">Projects</Link></li>
				<li><Link href="#education" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">Education</Link></li>
				<li><Link href="#experiences" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">Work Experiences</Link></li>
				<li><Link href="#awards" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">Awards</Link></li>
				<li><Link href="#contact" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">Contact</Link></li>
			</ul>
		</nav>
	</header>
);

export default Navigation