const projectsData = {

	// can also add radio projects, epp projects

	"Robotics Projects": [

		{
			slug: "miniauv",
			title: "MiniAUV",
			src: "/projects/miniauv/banner.jpg",
			description: "An autonomous underwater vehicle designed for complex underwater tasks for the RoboSub Competition.",
			start: "May 2025",
			end: "Aug 2025",
			techStack: ["Jetson Orin Nano", "Pixhawk", "ArduSub", "MAVRos", "DVL"],
			skills: ["ROS2", "Python", "C++", "OpenCV"],
			blocks: [
				{
					type: "header3",
					text: "Role: Software"
				},
				{
					type: "paragraph", 
					text: `This project made use of Pixhawk 6x to control the AUV, with ArduSub firmware. The high level planning and computer vision was done on the Jetson Orin Nano, using ROS2 Humble. The vehicle is equipped with a DVL for better state estimation underwater.`
				},
			]
		},

		{
			slug: "sauvc",
			title: "HornetX AUV",
			src: "/projects/hornet/banner.jpg",
			description: "An autonomous underwater vehicle designed for complex underwater tasks.",
			start: "July 2024",
			end: "April 2025",
			techStack: ["Jetson Orin NX"],
			skills: ["ROS2", "Python", "C++", "OpenCV", "Solidworks"],
			blocks: [
				{
					type: "header3",
					text: "Role: Software IC, Controls Engineer, OS Comms Focus"
				},
				{
					type: "paragraph", 
					text: `This project was made from ground up to compete in the SAUVC 2025 competition. The vehicle is designed to be highly modular and easily maintainable, with a focus on software reliability and robustness. The vehicle is equipped with a Jetson Orin NX for high level planning and computer vision, and uses ROS2 Humble as the main software framework. Additional sensors include an IMU and depth sensor for state estimation. PID was done on the 6DoF AUV for depth and heading and position control`
				},
			]
		},


		{
			slug: "robocup-robot",
			title: "RoboCup Rescue Robot",
			src: "/projects/robocup-robot/banner2.jpg",
			description: "A robot made to navigate a line and obstacle track, to simulate search and rescue operations.",
			start: "Jan 2022",
			end: "June 2023",
			techStack: ["Arduino", "Raspberry Pi SBC (4, 4B)", "RPi Pico", "Teensy 4.1"],
			skills: ["PCB Design", "Python", "C++", "OpenCV", "Fusion 360", "3D Printing"],
			blocks: [
				{
					type: "header3",
					text: "Role: Team Leader, Software & Electronics Engineer"
				},
				{
					type: "paragraph", 
					text: `This project explores the use of computer vision in robotics, and includes the full stack of robotics from software to firmware to electronics to hardware. It was iteratively done over the course of 3 phases, over multiple Robocup competitions:`
				},

				{ 
					type: "header3", 
					text: "1. 2022 National Champions" 
				},
				{
					type: "list",
					items: [
						"Using OpenCV on Raspberry Pi 4B to detect and navigate a line and obstacles.",
						"PCB (only THT) custom ordered to act as a base.",
						"Arduino Mega for motor control and sensor readings.",
						"Mechanical design using Fusion 360 and 3D printing."
					]
				},

				{ 
					type: "header3", 
					text: "2. 2022 Regional Champions" 
				},
				{
					type: "list",
					items: [
						"Upgraded to Teensy 4.1 as microcontroller",
						"Iterated on OpenCV method by exploring different functions.",
						"Created and added a light sensor array PCB on top of the camera to improve line detection in different lighting conditions."
					]
				},

				{ 
					type: "header3", 
					text: "3. 2023 National Champions" 
				},
				{
					type: "list",
					items: [
						"PCB revised to include SMT components.",
						"Another camera (top down) was added to improve depth perception and victim detection.",
						"3D Printed gearbox for a mechanical 2 motor but 4 wheel drive was created to reduce footprint and improve reliability in navigating through narrow spaces. (e.g. entrance).",
						"Created and 3D Printed Omniwheels to improve turning on the rectangular speed bumps.",
						"Added more TOF sensors for better victim, obstacle detection and wall tracking in the rescue area."
					]
				},

				{ type: "header1", text: "First Robot" },
				{
					type: "image",
					src: "/projects/robocup-robot/first_robot.jpg",
					alt: "Picture of the first robot iteration"
				},
				{
					type: "paragraph",
					text: "This was the first iteration of the robot, featuring a simple design and basic functionality. This robot went on to win the Robocup Rescue Open Singapore U19 Rescue Line category with more than x4 points of the second place winner."
				},




				{ type: "header1", text: "Second Robot" },
				{
					type: "paragraph",
					text: "This robot went on to win the Robocup Rescue Open Asia Pacific U19 Rescue Line category, sweeping Champion, Best Educational Value and Judges' Award."
				},



				
				{ type: "header1", text: "Final Robot" },
				{
					type: "image",
					src: "/projects/robocup-robot/final_robot.jpg",
					caption: "Model of the final robot",
				},
				{
					type:"files",
					files: [
						{ name: "Final Report.pdf", href: "/projects/robocup-robot/Robocup Rescue TDP.pdf" }
					]
				},


				{ type: "header2", text: "Subsection" },
				{ type: "header3", text: "Sub-subsection" },
				// { type: "video", src: "/projects/robocup-robot/experience/hi.mp4", caption: "Demo video" }
				// { type: "image", src: "/projects/safmc_banner.jpg", alt: "Drone in flight" },
				// { type: "quote", text: "The sky is not the limit.", author: "Celeste" },
			],
		},

		{
			slug: "autonomous-drone",
			title: "SAFMC (Cat E) Swarm Drones",
			src: "/projects/autonomous-drone/banner.png",
			description: "An autonomous swarm of drones detect and rescue victims in an unknown search area.",
			start: "July 2025",
			end: "Current",
			techStack: ["Crazyflie", "Integrated FC", "Teensy 4.0", ],
			skills: ["Computer Vision", "ROS2", "Python", "Drone Control"],
			blocks: [
				{
					type: "header3",
					text: "Role: Team Leader & Software & Electronics & Mechanical Engineer"
				},
				{ type: "paragraph", text: "This project explores building autonomous swarm drones using on the Crazyflie platform." },
				// { type: "quote", text: "The sky is not the limit.", author: "Celeste" },
			],
		},

		{
			slug: "wro",
			title: "World Robotics Olympiad (& NRC) Robot",
			src: "/projects/wro/banner.jpg",
			description: "A robot made to complete specific tasks in a standard platform (Lego) competition setting.",
			start: "June 2022",
			end: "Dec 2022",
			techStack: ["Lego Mindstorms EV3"],
			skills: ["EV3-G", "Mechanical Design"],
			blocks: [
				{
					type: "header3",
					text: "Role: Software & Mechanical"
				},
				{
					type: "paragraph", 
					text: `This project was done as part of the World Robotics Olympiad (WRO) 2022 and National Robotics Competition (NRC) 2022. The robot was built using the Lego Mindstorms EV3 kit, and was programmed using the EV3-G programming language. The robot was designed to complete a series of tasks on a standard WRO/NRC mat, including navigating a course, picking up and placing objects, and completing specific challenges. The robot went on to win Champion in NRC Singapore RoboMission Tertiary 2022, and placed 12th internationally at WRO 2022 Robomission Tertiary (in France, Bordeaux).`
				},
				{
					type: "files",
					files: [
						{ name: "Pamphlet.pdf", href: "/projects/wro/Pamphlet.pdf" }
					]
				},


				{
					type: "header1",
					text: "Hardware Features"
				},
				{
					type: "image",
					src: "/projects/wro/cam.jpg",
					caption: "Cam used in lifting the arm"
				},


				{
					type: "header1",
					text: "Software Features"
				},
				{
					type: "video",
					src: "/projects/wro/correction.mp4",
					caption: "Extremely fast correction from a very bad position"
				}


			],
		},

		// { src: "/.jpg", title: "RoboCup Rescue Robot", description: "A robot made to navigate a line and obstacle track" },
		// { src: "/project4.jpg", title: "Project 2", description: "A description of the computer engineering project." },
		// { src: "/project4.jpg", title: "Project 3", description: "A description of the computer engineering project." },
		// { src: "/project4.jpg", title: "Project 4", description: "A description of the computer engineering project." }
	],

	"Electrical Engineering Projects": [
		{
			slug: "ee2026",
			title: "EE2026: FPGA Project",
			src: "/projects/ee2026/banner.jpg",
			description: "4 player fighting game with a keyboard controls and monitor and speaker output, implemented on 2 FPGA boards.",
			start: "March 2022",
			end: "March 2023",
			techStack: ["FPGA", "Digilent Basys 3"],
			skills: ["Verilog"],
			blocks: [
				// {
				// 	type: "header3",
				// 	text: "Role: Digital Design Engineer"
				// },
				{ 
					type: "paragraph", 
					text: `This Four Player fighting GAme on the FPGAs was done as part of the EE2026 Digital Design course at NUS. The characters are balanced with different speeds, healths, attack rates, and movement speeds. After a character dies, they are replaced with a tombstone until there is one left standing, in which case, the game ends. The 2 FPGAs communicate with each other in real time to send information about character actions over, including their ultimate and attacks.`
				},
				{
					type: "image",
					src: "/projects/ee2026/closeup.jpg",
					alt: "Close up of the feedback screens",
					caption: "The information on the Basys boards for ultimate status, health, and character."
				}
			],
		},
		{
			slug: "reflectarray",
			title: "Reflectarray Antenna Design",
			src: "/projects/reflectarray/banner.jpg",
			description: "The reflectarray was created using our rectangular phoenix cell design. Done as part of a DSO internship (YDSP Programme)",
			start: "March 2022",
			end: "March 2023",
			techStack: [],
			skills: ["CST Studio Suite", "PCB Fabrication", "Antenna Design"],
			blocks: [
				{
					type: "header3",
					text: "Role: Team Leader & Engineer"
				},
				{ 
					type: "paragraph", 
					text: `This project went on to win Gold in Singapore Science and Engineering Fair (SSEF) 2023, and then Silver at ASEAN Student Science Project Competition (ASPC) 2023.`
				},
				{
					type: "paragraph",
					text: `The phoenix cell comprises of three elements - an inner rectangle, an inner ring and an outer ring. The inner ring starts its cycle as part of the inner rectangle and ends its cycle as part of the outer ring, giving it a full 360 degree phase shift. This cell is meant to be etched on a 0.5mm FR4 material with a 6mm air gap between it and the ground copper plate. The rectangular phoenix cell shows desirable properties in several areas. Firstly, due to the linearity of its phase curve, it allows for greater tolerance during fabrication should there be any slight errors. Secondly, it achieves a wideband from 12.1GHz to 13.9GHz. The reflectarray design was generated using progressive phase distribution equations automated using Python. After simulation using CST Studio Suite, the entire setup was fabricated using the in house milling machine in NUS T-Labs, with the horn placed then measured in the NUS antenna chamber. The simulated results were verified by the measured results. Further improvement analysis was done and it was found the feed horn could have been placed at a more optimal angle and height.`
				},
				// {
				// 	type: "files",
				// 	files: [
				// 		{ name: "Project Report.pdf", href: "/projects/reflectarray/Reflectarray Antenna Report.pdf" }
				// 	]
				// }

			],
		},
	],


	"Software Engineering Projects": [
		{
			slug: "viawiki",
			title: "VIAWiki",
			src: "/projects/viawiki/banner.png",
			description: "A centralised database of Singapore student-led service projects.",
			start: "Jan 2023",
			end: "June 2024",
			techStack: ["MongoDB", "AWS S3", "Vercel", "Trello", "Git"],
			skills: ["Next", "Typescript", "HTML", "Tailwind", "CSS"],
			blocks: [
				{
					type: "header3",
					text: "Role: Tech Lead & Full-Stack Developer"
				},
				{ 
					type: "paragraph", 
					text: `VIAWiki is a web application that serves as a centralised database for student-led service projects in Singapore. It aims to make it easier for students to find and join service projects, as well as for project leaders to manage their projects and volunteers.`
				},
				{
					type: "embedLink",
					href: "https://viawiki.org",
					text: "VIAWiki",
					description: "A centralised database for student-led service projects in Singapore.",
					image: "/projects/viawiki/banner.png"   // optional, will show instead of icon if present
				}


			],
		},
		{
			slug: "orbital",
			title: "Dungeon Duality",
			src: "/projects/orbital/banner.png",
			description: "A 2-player Dungeon Crawler Co-op game, made during the NUS Orbital Programme.",
			start: "May 2025",
			end: "July 2025",
			techStack: ["Unity", "Netcode for GameObjects"],
			skills: ["Git", "C#"],
			blocks: [
				{
					type: "header3",
					text: "Role: Game Developer & Software Engineer & Networking"
				},
				{ 
					type: "paragraph", 
					text: `Dungeon Duality is a 2-player co-op game where players must work together to navigate through a series of challenging dungeons. Each player has unique abilities, and they must communicate and strategize to overcome obstacles and defeat enemies.`
				},
				{
					type: "embedLink",
					href: "https://github.com/ByteSized-Bugs/orbital",
					text: "Dungeon Duality",
					description: "A 2-player Dungeon Crawler Co-op game, made during the NUS Orbital Programme.",
					image: "/projects/orbital/banner.png"   // optional, will show instead of icon if present
				},
				{
					type: "files",
					files: [
						{ name: "Game Design Document.pdf", href: "/projects/orbital/Report.pdf" },
						{ name: "Poster.png", href: "/projects/orbital/Poster.png" }
					]
				}

			],
		},

		{
			slug: "einstein",
			title: "Operation Einstein's App",
			src: "/projects/einstein/banner.jpg",
			description: "Operation Einstein is a non profit organisation that seeks to educate young children in STEM through different teaching methods.",
			start: "Sept 2025",
			end: "Current",
			techStack: [],
			skills: [],
			blocks: [
				{
					type: "header3",
					text: "Role: Software Engineer"
				},
				{ 
					type: "paragraph", 
					text: `This project is a web application that serves as a platform for Operation Einstein to manage their events, volunteers, and resources. It aims to make it easier for the organisation to coordinate their efforts and reach more students.`
				},
				{
					type: "paragraph",
					text: `The project is currently in the early stages of development.`
				}


			],
		},
		{
			slug: "espresso",
			title: "CS2113: Espresso",
			src: "/projects/espresso/banner.png",
			description: "A CLI app to help you manage your tasks and deadlines.",
			start: "Aug 2025",
			end: "Current",
			techStack: [],
			skills: ["Java", "Git"],
			blocks: [
				{
					type: "header3",
					text: "Role: Software Engineer"
				},
				{ 
					type: "paragraph", 
					text: `This is a CLI app that helps you manage your tasks and deadlines. It is built using Java and follows the principles of Object-Oriented Programming (OOP). The project is currently in the early stages of development. More updates coming soon.`
				},

			],
		},
	// 	{ src: "/project1.jpg", title: "VIAWiki", description: "A centralised database of Singapore student-led service projects" },
	// 	{ src: "/project2.jpg", title: "Project 2", description: "A description of the software engineering project." }
// { type: "files", files: [
// 						{ name: "Project Report.pdf", href: "/projects/robocup-robot/report.pdf" },
// 						{ name: "Source Code.zip", href: "/projects/robocup-robot/source.zip" }
// 					]
// 				}	
	],
};

export default projectsData;