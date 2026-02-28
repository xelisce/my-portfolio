const projectsData = {

	// can also add radio projects, epp projects, cg2271 project

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
					text:
						"This vehicle uses a Pixhawk 6X running ArduSub for deterministic low-level control while a Jetson Orin Nano executes all high-level autonomy and perception within ROS2 Humble. The separation ensures that navigation, vision, and mission logic cannot introduce timing jitter into the control loop, which is critical for stable underwater flight where hydrodynamic damping hides but does not eliminate control latency issues."
				},
				{
					type: "paragraph",
					text:
						"State estimation underwater is fundamentally limited by the absence of GPS and the rapid drift of inertial sensors. To address this, a Doppler Velocity Log (DVL) is integrated to provide velocity measurements relative to the seabed. These measurements are fused with IMU data in the state estimator, significantly reducing positional drift during long-duration tasks and enabling repeatable waypoint execution."
				},
				{
					type: "paragraph",
					text:
						"All high-level planning, perception, and mission sequencing are implemented as ROS2 nodes. MAVROS provides the bridge between the Pixhawk and the ROS2 ecosystem, allowing position setpoints, mode changes, and telemetry to be exchanged while maintaining the safety guarantees of the flight controller. This architecture allows rapid iteration of autonomy algorithms without reflashing the control stack."
				}
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
					text:
						"HornetX was designed as a fully modular AUV for SAUVC 2025, with a strong emphasis on software reliability and maintainability. The Jetson Orin NX runs ROS2 Humble and hosts all perception, planning, and mission logic, while the control stack implements closed-loop PID control across all six degrees of freedom. Depth, heading, and position controllers were tuned to account for buoyancy offsets and asymmetric drag, which are dominant disturbances in low-speed underwater manoeuvres."
				},
				{
					type: "paragraph",
					text:
						"A key focus of my role was operating system and inter-process communication reliability. The autonomy stack was decomposed into independent ROS2 nodes with clear message contracts, allowing individual subsystems to be restarted without collapsing the entire vehicle software. This significantly improved debugging efficiency during pool testing and reduced recovery time after sensor or driver faults."
				},
				{
					type: "paragraph",
					text:
						"The vehicle uses IMU and depth sensing for state estimation. Because these sensors alone drift over time, control laws were tuned to be robust to slowly varying bias rather than assuming perfect state knowledge. This resulted in stable hover and repeatable heading control even under sensor noise and minor buoyancy changes caused by battery discharge."
				}
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
				{ type: "header3", text: "Role: Team Leader, Software & Electronics Engineer" },

				{
					type: "paragraph",
					text:
						"This platform was developed across three competition seasons and evolved from a simple vision-guided line follower into a tightly integrated multi-sensor rescue robot. The architecture separates high-level perception on a Raspberry Pi from real-time motor control and sensor polling on a microcontroller, ensuring deterministic actuation while running computationally heavy vision pipelines. Please refer to the Technical Design Paper for the best possible information. The information on this website is meant to be a brief overview only."
				},
				{
					type: "files",
					files: [
						{ name: "Technical Design Paper", href: "/projects/robocup-robot/Robocup Rescue TDP.pdf" },
						{ name: "Engineering Logbook", href: "/projects/robocup-robot/Engineering Journal.pdf" }
					]
				},

				{
					type: "header1",
					text: "Competition Results"
				},
				{
					type: "paragraph",
					text:
						"The robot achieved:"
				},
				{
					type: "list",
					items: [
						"National Champion in RoboCup Rescue Singapore 2022",
						"Champion in RoboCup Asia Pacific 2022",
						"Best Educational Value in RoboCup Asia Pacific 2022",
						"Judges' Award in RoboCup Asia Pacific 2022",
						"National Champion again in RoboCup Rescle Singapore 2023"
					]
				},

				{ type: "header1", text: "Perception and Vision System" },

				{
					type: "image",
					src: "/projects/robocup-robot/algorithm.png",
					alt: "Line tracking algorithm",
					caption: "Line tracking algorithm"
				},

				{
					type: "paragraph",
					text:
						"The primary navigation modality is camera-based line tracking using OpenCV. The pipeline performs adaptive thresholding followed by morphological filtering to remove noise and contour extraction to isolate the line geometry. This allows the robot to maintain stable tracking through intersections, gaps, and partial occlusions. A secondary top-down camera was later introduced to improve victim detection reliability and provide additional spatial context when entering the rescue zone."
				},
				{
					type: "paragraph",
					text:
						"Lighting variation was a major source of failure in early iterations. To address this, a custom reflectance sensor array was mounted above the camera and fused with the vision estimate. This provided a lighting-invariant signal that stabilised the controller when the camera exposure was saturated or when the line contrast was reduced by shadows."
				},

				{ type: "header1", text: "Control Architecture" },

				{
					type: "paragraph",
					text:
						"Line following is implemented using a PID controller operating on a fused error signal derived from both vision and reflectance data. A finite state machine governs transitions between line tracking, obstacle avoidance, rescue zone behaviour, and return navigation. Running this logic on a Teensy 4.1 ensured consistent loop timing and eliminated latency spikes observed when control was executed on the SBC."
				},

				{ type: "header1", text: "Electronics and PCB Evolution" },

				{
					type: "image",
					src: "/projects/robocup-robot/Schematic_body_plate.png",
					alt: "Body Plate PCB Schematics",
					caption: "Body Plate PCB Schematics"
				},
				{
					type: "image",
					src: "/projects/robocup-robot/body_plate_pcb_layout.png",
					alt: "Body Plate PCB Layout",
					caption: "Body Plate PCB Layout"
				},
				{
					type: "paragraph",
					text:
						"The electronics stack evolved from a through-hole prototyping board to a compact surface-mount PCB integrating power distribution, sensor breakout, and microcontroller support. Moving to SMT reduced footprint and improved electrical reliability while enabling a modular stacked architecture that allowed rapid iteration between competition seasons."
				},
				{
					type: "image",
					src: "/projects/robocup-robot/bottom_plate_pcb.png",
					alt: "Bottom Plate PCB Layout",
					caption: "Bottom Plate PCB Layout"
				},

				{ type: "header1", text: "Mechanical Design" },

				{
					type: "paragraph",
					text:
						"A custom gearbox was designed to drive four wheels using two motors, reducing overall width while maintaining torque for obstacle traversal. Omniwheels were later introduced to stabilise turning on rectangular speed bumps, reducing lateral slip that previously caused controller oscillations. The mechanical layout was optimised for narrow entrance navigation and repeatable wall tracking in the rescue zone."
				},

				{ type: "header1", text: "Robot Evolution" },
				{ 
					type: "header3", 
					text: "1. 2022 National Champions" 
				},
				{
					type: "image",
					src: "/projects/robocup-robot/first_robot.jpg",
					alt: "Picture of the first robot iteration"
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
					type: "image",
					src: "/projects/robocup-robot/final_robot.jpg",
					caption: "Model of the final robot",
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
				}

			// 	{ type: "header1", text: "First Robot" },
			// 	
			// 	{
			// 		type: "paragraph",
			// 		text: "This was the first iteration of the robot, featuring a simple design and basic functionality. This robot went on to win the Robocup Rescue Open Singapore U19 Rescue Line category with more than x4 points of the second place winner."
			// 	},




			// 	{ type: "header1", text: "Second Robot" },
			// 	{
			// 		type: "paragraph",
			// 		text: "This robot went on to win the Robocup Rescue Open Asia Pacific U19 Rescue Line category, sweeping Champion, Best Educational Value and Judges' Award."
			// 	},



				
				// { type: "header1", text: "Final Robot" },
				// {
				// 	type: "image",
				// 	src: "/projects/robocup-robot/final_robot.jpg",
				// 	caption: "Model of the final robot",
				// },
				// {
				// 	type:"files",
				// 	files: [
				// 		{ name: "Final Report.pdf", href: "/projects/robocup-robot/Robocup Rescue TDP.pdf" }
				// 	]
				// },


				// { type: "header2", text: "Subsection" },
				// { type: "header3", text: "Sub-subsection" },
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
				{ type: "header3", text: "Role: Team Leader" },

				{
					type: "paragraph",
					text:
						"This project develops a micro-drone capable of autonomous indoor victim search with distributed swarm mapping. The design is constrained primarily by mass and energy, so the airframe, sensing, and compute stack were co-optimised to maximise flight time while maintaining sufficient perception fidelity for SLAM and obstacle avoidance."
				},

				{ type: "header1", text: "Flight Control and Autonomy Separation" },

				{
					type: "paragraph",
					text:
						"Low-level stabilisation runs on the integrated flight controller with tuned PID loops, while high-level autonomy is executed on a companion microcontroller. This guarantees deterministic control timing even when mapping and communication workloads fluctuate, preventing perception latency from destabilising the vehicle."
				},

				{ type: "header1", text: "ToF Array and Custom Multiplexer PCB" },

				{
					type: "paragraph",
					text:
						"Indoor mapping requires full azimuth coverage at short range, which is achieved using an array of eight time-of-flight sensors mounted around the airframe. A custom multiplexer PCB was developed to schedule each sensor in a deterministic time slice, preventing I2C contention while maintaining a fixed update rate for occupancy grid fusion."
				},
				{
					type: "paragraph",
					text:
						"Surface-mount implementation minimised mass and allowed local decoupling at each sensor to isolate them from motor-induced voltage ripple. The selected sensor provides an 8×8 depth grid per module, enabling direct spatial updates without mechanical scanning while remaining within the power budget."
				},

				{ type: "header1", text: "State Estimation" },

				{
					type: "paragraph",
					text:
						"Velocity is estimated using optical flow fused with IMU data to reduce drift in GPS-denied environments. The optical flow module is mechanically isolated from the propulsion frame to suppress high-frequency vibration that would otherwise corrupt the velocity estimate and degrade SLAM performance."
				},

				{ type: "header1", text: "Powertrain Trade Study" },

				{
					type: "paragraph",
					text:
						"Motor and battery selection was performed using a coupled performance model rather than independent component choice. The analysis computes thrust-to-weight ratio, hover throttle, hover current, and projected flight time while accounting for the mass of both motors and batteries. This reveals the point where additional battery capacity reduces endurance due to increased hover power."
				},
				{
					type: "paragraph",
					text:
						"The final configuration operates within the motor’s peak efficiency region at hover, reducing thermal load and preserving control authority for avoidance manoeuvres. The model also incorporates the power draw of the sensing and compute stack, ensuring autonomy features remain within the electrical budget."
				},

				{
					type: "paragraph",
					text:
						"Full propulsion trade study:"
				},
				
				{
					type: "files",
					files: [
						{ name: "Motors and Batteries Study.xlsx", href: "/projects/autonomous-drone/Motors and Batteries Sheet.xlsx" }
					]
				},

				{ type: "header1", text: "Swarm Mapping and Ground Station" },

				{
					type: "paragraph",
					text:
						"Each drone builds a local occupancy grid using its depth array and transmits compressed map updates to a ROS2 ground station where a global map is assembled. This distributes computation across the swarm while maintaining shared situational awareness for coordinated search."
				},

				{
					type: "header1",
					text: "Full Run Validation"
				},
				{
					type: "paragraph",
					text:
						"The system has completed full autonomous runs including take-off, indoor navigation, obstacle avoidance, and mapping passes under competition conditions. These tests validated the sensor scheduling strategy, power budget, and state estimation pipeline during sustained flight."
				}
			]
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
				{ type: "header3", text: "Role: Software & Mechanical Design" },

				{
					type: "paragraph",
					text:
						"This robot was designed for high-speed execution on the standard WRO field, where total run time is dominated by recovery from large positional errors rather than nominal line tracking. The control loop was therefore tuned for aggressive correction while maintaining stability at high speed."
				},

				{
					type: "files",
					files: [{ name: "Design Pamphlet", href: "/projects/wro/Pamphlet.pdf" }]
				},

				{
					type: "header1",
					text: "Results"
				},
				{
					type: "paragraph",
					text:
						"The robot achieved Champion at NRC Singapore RoboMission Tertiary 2022 and placed 12th internationally at WRO 2022 in Dortmund, Germany, with consistent full-run completions under time constraints."
				},

				{ type: "header1", text: "Control Strategy" },

				{
					type: "paragraph",
					text:
						"A high-frequency control loop was implemented to reduce latency in the EV3 environment. The PID controller dynamically scales speed based on error magnitude, allowing maximum velocity on straights while automatically reducing speed before sharp curvature. This prevents overshoot and minimises time lost to recovery."
				},

				{
					type: "video",
					src: "/projects/wro/correction.mp4",
					caption: "Recovery from extreme line deviation"
				},

				{
					type: "paragraph",
					text:
						"The robot was able to recover from extreme line loss without manual intervention, which was critical for maintaining consistent run times under competition conditions."
				},

				{ type: "header1", text: "Mechanical Design" },

				{
					type: "image",
					src: "/projects/wro/cam.jpg",
					caption: "Cam mechanism for arm actuation"
				},

				{
					type: "paragraph",
					text:
						"The arm uses a cam-based mechanism that converts continuous motor rotation into a repeatable lift profile. This ensures consistent object handling without requiring precise positional control from the motor, reducing software complexity and improving reliability at speed."
				},

				{
					type: "header1",
					text: "Video"
				},

				{ type: "video", src: "/projects/wro/full_run_wro.mp4", caption: "Full run at x2 speed" },

				
			]
			// blocks: [
			// 		{ type: "header3", text: "Role: Software & Mechanical Design" },

			// 		{
			// 			type: "paragraph",
			// 			text:
			// 				"Built a high-speed EV3 competition robot optimised for fast line tracking, precise object manipulation, and rapid recovery from large positional errors."
			// 		},

			// 		{ type: "header1", text: "Control System" },

			// 		{
			// 			type: "list",
			// 			items: [
			// 				"High-frequency control loop in EV3-G for reduced latency",
			// 				"PID line following tuned for both straights and tight curvature",
			// 				"Dynamic speed scaling based on line error magnitude",
			// 				"Fast line reacquisition after large disturbances"
			// 			]
			// 		},

			// 		{ type: "header1", text: "Mechanical Design" },

			// 		{
			// 			type: "list",
			// 			items: [
			// 				"Low centre-of-gravity chassis for high-speed stability",
			// 				"Cam-based arm mechanism for reliable object lifting",
			// 				"Sensor placement optimised for curvature anticipation"
			// 			]
			// 		},

			// 		{ type: "header1", text: "Results" },

			// 		{
			// 			type: "list",
			// 			items: [
			// 				"Champion – NRC Singapore RoboMission Tertiary 2022",
			// 				"12th Place – WRO 2022 RoboMission Tertiary (Bordeaux, France)"
			// 			]
			// 		},

			// 		{ type: "image", src: "/projects/wro/cam.jpg", caption: "Cam mechanism for arm actuation" },

			// 		{ type: "video", src: "/projects/wro/correction.mp4", caption: "Recovery from extreme line deviation" },

			// 		{
			// 			type: "files",
			// 			files: [{ name: "Design Pamphlet", href: "/projects/wro/Pamphlet.pdf" }]
			// 		}
			// 	]



			// blocks: [
			// 	{
			// 		type: "header3",
			// 		text: "Role: Software & Mechanical"
			// 	},
			// 	{
			// 		type: "paragraph", 
			// 		text: `This project was done as part of the World Robotics Olympiad (WRO) 2022 and National Robotics Competition (NRC) 2022. The robot was built using the Lego Mindstorms EV3 kit, and was programmed using the EV3-G programming language. The robot was designed to complete a series of tasks on a standard WRO/NRC mat, including navigating a course, picking up and placing objects, and completing specific challenges. The robot went on to win Champion in NRC Singapore RoboMission Tertiary 2022, and placed 12th internationally at WRO 2022 Robomission Tertiary (in France, Bordeaux).`
			// 	},
			// 	{
			// 		type: "files",
			// 		files: [
			// 			{ name: "Pamphlet.pdf", href: "/projects/wro/Pamphlet.pdf" }
			// 		]
			// 	},


			// 	{
			// 		type: "header1",
			// 		text: "Hardware Features"
			// 	},
			// 	{
			// 		type: "image",
			// 		src: "/projects/wro/cam.jpg",
			// 		caption: "Cam used in lifting the arm"
			// 	},


			// 	{
			// 		type: "header1",
			// 		text: "Software Features"
			// 	},
			// 	{
			// 		type: "video",
			// 		src: "/projects/wro/correction.mp4",
			// 		caption: "Extremely fast correction from a very bad position"
			// 	}


			// ],
		},

		// { src: "/.jpg", title: "RoboCup Rescue Robot", description: "A robot made to navigate a line and obstacle track" },
		// { src: "/project4.jpg", title: "Project 2", description: "A description of the computer engineering project." },
		// { src: "/project4.jpg", title: "Project 3", description: "A description of the computer engineering project." },
		// { src: "/project4.jpg", title: "Project 4", description: "A description of the computer engineering project." }
	],

	"Electrical and Computer Engineering Projects": [
		{
			slug: "cg3207",
			title: "CG3207: RISC-V CPU on FPGA",
			src: "/projects/cg3207/banner.jpg",
			description: "A 5-stage pipelined RISC-V CPU with hazard detection, forwarding, and 2-bit dynamic branch prediction implemented in Verilog on a Nexys 4 FPGA.",
			start: "Aug 2025",
			end: "Nov 2025",
			techStack: ["FPGA", "Nexys 4"],
			skills: ["Verilog", "Computer Architecture", "Digital Design"],
			blocks: [

				{
					type: "header3",
					text: "Role: Digital Design Engineer (Pair Project)"
				},

				{
					type: "paragraph",
					text: `Designed and implemented a 32-bit RISC-V processor in Verilog as part of the CG3207 Computer Architecture course at NUS. The processor was deployed on a Nexys 4 FPGA and follows a standard 5-stage pipeline architecture: Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory (MEM), and Writeback (WB).`
				},

				{
					type: "header1",
					text: "Pipeline Architecture"
				},

				{
					type: "paragraph",
					text: `The processor uses a fully pipelined datapath with registers between all stages. A hardware hazard unit was implemented to handle both forwarding and stalling. Forwarding resolves data hazards whenever possible, while load-use hazards and multi-cycle operations trigger pipeline stalls, allowing programs to run correctly without manual NOP insertion.`
				},

				{
					type: "list",
					items: [
						"Standard 5-stage pipeline: IF, ID, EX, MEM, WB",
						"Pipeline registers between all stages",
						"Hardware hazard detection and control",
						"Forwarding paths for ALU and memory results",
						"Automatic pipeline stalling for unresolved hazards",
						"Program execution without manual NOP insertion"
					]
				},

				{
					type: "header1",
					text: "Branch Prediction"
				},

				{
					type: "paragraph",
					text: `Implemented dynamic branch prediction using a Branch History Table (BHT) with 12-bit indexing (4096 entries) and a Branch Target Buffer (BTB). Each BHT entry uses a 2-bit saturating counter to predict branch direction. Since only 12 bits of the PC are used for indexing, multiple instructions can map to the same entry. Predicted targets are supplied during the fetch stage, and mispredictions trigger pipeline flush and recovery in the execute stage.`
				},

				{
					type: "list",
					items: [
						"2-bit saturating counter branch prediction",
						"BHT indexed by lower 12 bits of PC (4096 entries)",
						"Branch Target Buffer for predicted targets",
						"Prediction performed in fetch stage",
						"Misprediction detection in execute stage",
						"Automatic pipeline flush on misprediction"
					]
				},

				{
					type: "header1",
					text: "Multi-Cycle Arithmetic Unit"
				},

				{
					type: "paragraph",
					text: `Hardware multiplication is implemented using a dedicated multi-cycle execution unit with Booth's algorithm for signed multiplication. The processor stalls automatically while multi-cycle operations are in progress. Division instructions were not implemented.`
				},

				{
					type: "list",
					items: [
						"Dedicated multi-cycle execution unit",
						"Booth's algorithm for signed multiplication",
						"Supports signed and unsigned multiplication",
						"Processor stall control using Busy signal",
						"Division instructions not implemented"
					]
				},

				{
					type: "header1",
					text: "Processor Components"
				},

				{
					type: "list",
					items: [
						"Register file with 32 general-purpose registers",
						"ALU supporting arithmetic and logical operations",
						"Control unit and instruction decoder",
						"Hazard detection and forwarding unit",
						"Branch prediction unit",
						"Pipeline registers between all stages"
					]
				},

				{
					type: "header1",
					text: "Instruction Support"
				},

				{
					type: "paragraph",
					text: `Supports the RV32I base instruction set along with multiplication instructions. Assembly programs were written to verify the correctness of the pipeline, hazard handling, and branch prediction mechanisms.`
				},

				{
					type: "header1",
					text: "Final Version"
				},

				{ type: "files", files: [
						{ name: "Source code.zip", href: "/projects/cg3207/cg3207_final_project.zip" }
					]
				}

			]
		},
		
		{
			slug: "ee2026",
			title: "EE2026: FPGA Project",
			src: "/projects/ee2026/banner.jpg",
			description: "4 player fighting game with a keyboard controls and monitor and speaker output, implemented on 2 FPGA boards.",
			start: "Feb 2025",
			end: "May 2025",
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
		}
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
			end: "Oct 2025",
			techStack: [],
			skills: ["Java", "Git"],
			blocks: [
				{
					type: "header3",
					text: "Solo Project"
				},
				{ 
					type: "paragraph", 
					text: `This is a CLI app that helps you manage your tasks and deadlines, done as part of the course CS2113 Software Engineering. It is built using Java and follows the principles of Object-Oriented Programming (OOP).`
				},
				{
					type: "embedLink",
					href: "https://github.com/xelisce/ip",
					text: "Espresso Code & Releases",
					description: "A CLI app to help you manage your tasks and deadlines.",
					image: "/projects/espresso/banner.png"   // optional, will show instead of icon if present
				},
				{ 
					type: "paragraph", 
					text: `The documentation can be found here:`
				},
				{
					type: "embedLink",
					href: "https://xelisce.github.io/ip/",
					text: "Espresso Documentation",
					description: "A CLI app to help you manage your tasks and deadlines.",
					image: "/projects/espresso/banner.png"   // optional, will show instead of icon if present
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