import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../contexts/ThemeContext";
import projectsData from "../constants/projects";
import hallmark from "../constants/hallmark";
import services from "../constants/services";
import experiences from "../constants/experience";
import { tools, toolsLegend } from "../constants/tools";
import logo from "../assets/images/myLogoNoCrown.png";
import myProfilePic from "../assets/images/myProfile.png";
import icms from "/logos/icms.jpg";
import kuhis from "/logos/kuhis-logo.jpg";
import mest from "/logos/mest-logo.png";
import uenr from "/logos/uenrLogo.png";
import myPassportPic from "../assets/images/myPassportPic-noBG.png";
import {
	Award,
	BookCheck,
	BriefcaseBusiness,
	ChevronLeft,
	ChevronRight,
	ChevronUp,
	Clock,
	Codepen,
	Facebook,
	Github,
	Info,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Menu,
	Moon,
	MoveUpRight,
	Phone,
	Sun,
	Trophy,
	Twitter,
	UserCheck,
	Users2,
} from "lucide-react";

const LandingPageMain = () => {
	const { theme, toggleTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isExpanded, setIsExpanded] = useState({}); // using an object to track the expanded state of each experience, since using a boolean affects all states...
	const [currentImageIndex, setCurrentImageIndex] = useState({}); // track images per the projectID...

	const iconComponents = {
		Award,
		BookCheck,
		BriefcaseBusiness,
		Trophy,
		UserCheck,
		Users2,
	};

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const toggleExpanded = (id) => {
		setIsExpanded((prevState) => ({
			...prevState,
			[id]: !prevState[id], // this toggles a particular experience by it&apos;s id...
		}));
	};

	const handlePrevImage = (id, imagesLength) => {
		setCurrentImageIndex((prev) => ({
			...prev,
			[id]: prev[id] === 0 ? imagesLength - 1 : (prev[id] || 0) - 1,
		}));
	};

	const handleNextImage = (id, imagesLength) => {
		setCurrentImageIndex((prev) => ({
			...prev,
			[id]: prev[id] === imagesLength - 1 ? 0 : (prev[id] || 0) + 1,
		}));
	};

	return (
		<section className="bg-slate-200 dark:bg-neutral-900 text-slate-800 dark:text-slate-200">
			{/* Navbar... */}
			<header
				id="navbar-section"
				className="fixed top-0 left-0 z-50 w-full flex md:justify-around items-center justify-between px-8 md:px-0 backdrop-blur-md border-b-[0.1px] border-slate-300 dark:border-slate-600 py-1"
			>
				<div className="flex justify-center gap-1">
					<img
						src={logo}
						className="p-1 lg:h-14 md:h-12 h-11 self-center"
						alt="logo"
					/>
					{/* <div className="2xl:text-base md:text-sm text-xs font-semibold self-center ">
						<p className="leading-tight">
							<span className="text-theme-color underline">M</span>ichael <br />
							<span className="text-theme-color underline">A</span>gyemang{" "}
							<br />
							<span className="text-theme-color underline">P</span>rempeh
						</p>
					</div> */}
				</div>
				<nav
					className={`sm:static px-4 py-2 w-5/12 sm:w-auto bg-slate-100 dark:bg-neutral-900 sm:bg-transparent dark:sm:bg-transparent flex flex-col sm:flex-row sm:items-center lg:text-base text-sm 2xl:gap-8 xl:gap-6 lg:gap-4 md:gap-2 gap-1 transition-all duration-700 shadow-md sm:shadow-none ${
						isMenuOpen
							? "block absolute right-0 top-12"
							: "sm:flex absolute right-0 -top-96"
					}`}
				>
					<ScrollLink
						to="home"
						className="px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						Home
					</ScrollLink>
					<ScrollLink
						to="home"
						className=" px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						Services
					</ScrollLink>
					<ScrollLink
						to="home"
						className=" px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						About
					</ScrollLink>
					<ScrollLink
						to="home"
						className=" px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						Experience
					</ScrollLink>
					<ScrollLink
						to="home"
						className=" px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						Contact
					</ScrollLink>
				</nav>
				<div
					className={`mt-5 sm:mt-0 flex sm:static items-center lg:gap-5 md:gap-4 gap-3 text-nowrap px-5 sm:px-0 py-2 w-5/12 sm:w-auto bg-slate-100 dark:bg-neutral-900 sm:bg-transparent dark:sm:bg-transparent transition-all duration-700 shadow-md sm:shadow-none ${
						isMenuOpen
							? "flex sm:flex absolute right-0 top-56"
							: "sm:flex absolute right-0 -top-60"
					}`}
				>
					<button
						onClick={toggleTheme}
						className="lg:p-3 p-2 bg-white sm:bg-slate-100 dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-300 dark:hover:bg-slate-600 shadow-xl sm:shadow-md transition-transform duration-700 ease-in-out"
					>
						{theme === "darkMode" ? (
							<Sun className="h-5 w-5 text-gray-500 dark:text-slate-200" />
						) : (
							<Moon className="h-5 w-5 text-gray-500 dark:text-slate-200" />
						)}
					</button>
					<button className="md:px-5 px-2 py-2 lg:text-base text-sm bg-theme-color text-slate-100 rounded-md sm:shadow-sm">
						Hire Me!
					</button>
				</div>
				<button
					onClick={toggleMenu}
					className="lg:p-3 p-2 bg-slate-100 dark:bg-slate-700 rounded-lg sm:hidden hover:bg-slate-300 dark:hover:bg-slate-600 shadow-sm"
				>
					<div
						className={`transition-transform duration-200 ease-in-out ${
							isMenuOpen ? "rotate-0" : "rotate-180"
						}`}
					>
						{isMenuOpen ? (
							<ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-gray-500 dark:text-slate-200" />
						) : (
							<Menu className="h-5 w-5 md:h-6 md:w-6 text-gray-500 dark:text-slate-200" />
						)}
					</div>
				</button>
			</header>
			{/* Hero section */}
			<section
				id="hero-section"
				className={`h-screen bg-cover bg-center overflow-hidden grid gap-5 md:gap-0 md:flex md:justify-center md:items-center py-20 px-6 sm:px-10 bg-lightModeBG dark:bg-darkModeBG ${
					theme === "darkMode" ? "darkModeBG" : "lightModeBG"
				} `}
			>
				<div className="lg:space-y-5 md:space-y-4 sm:space-y-3 space-y-2 md:w-1/2">
					<div className="2xl:space-y-4 xl:space-y-1 sm:space-y-2 mx-auto">
						<p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm mb-2 md:mb-3 lg:mb-4">
							Hello...👋
						</p>
						<p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl">
							I&apos;m{" "}
							<span className="text-theme-color font-bold font-JetBrainsMono">
								&lt;Michael/&gt;
							</span>
						</p>
						<p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl">
							A{" "}
							<span className="text-theme-color font-bold font-JetBrainsMono">
								Frontend Developer👨‍💻
							</span>
						</p>
						<p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl">
							&{" "}
							<span className="text-theme-color font-bold font-JetBrainsMono">
								Product Designer🎨
							</span>
						</p>
					</div>
					<p className="lg:text-base sm:text-sm text-xs">
						I craft seamless, user-focused digital experiences, transforming
						complex challenges into impactful solutions. <br /> Let&apos;s
						create something fantastic together.
					</p>
					<div className="text-nowrap flex flex-col md:space-y-5 space-y-3">
						<div className="sm:text-base text-sm flex md:space-x-5 space-x-2">
							<button className="md:px-5 px-2 py-2 bg-theme-color rounded-md hover:bg-blue-400 text-slate-100 lg:text-base text-sm">
								View Portfolio
							</button>
							<button className="md:px-5 px-2 py-2 border-[1px] border-theme-color dark:border-slate-200 rounded-md hover:bg-blue-400 text-theme-color hover:text-white dark:text-slate-200 lg:text-base text-sm">
								Download CV
							</button>
						</div>
						<div className="flex sm:space-x-5 space-x-2 text-slate-800">
							<button className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Linkedin />
							</button>
							<button className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Github />
							</button>
							<button className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Codepen />
							</button>
							<button className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Instagram />
							</button>
							<button className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Twitter />
							</button>
							<button className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Facebook />
							</button>
						</div>
					</div>
				</div>
				<div className="">
					<img
						src={myProfilePic}
						alt="myPicture"
						className="2xl:w-96 xl:w-60 lg:w-60 md:w-52 w-48 mx-auto md:ml-5 lg:ml-10 2xl:ml-16"
					/>
				</div>
			</section>
			{/* Hallmark */}
			<section className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					My HallMark
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3">
					{hallmark.map((item) => {
						const IconComponent = iconComponents[item.icon];
						return (
							<div
								key={item.id}
								className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap space-y-1 md:space-y-2 shadow-sm hover:shadow-md group"
							>
								<IconComponent className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:rotate-45 transition-all duration-1000" />
								<p className="lg:text-2xl md:text-xl text-lg text-theme-color font-bold font-JetBrainsMono">
									{item.numValue}
								</p>
								<p className="lg:text-base sm:text-sm text-xs">{item.anthem}</p>
							</div>
						);
					})}
				</div>
			</section>
			{/* Services */}
			<section className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					My Services
				</h2>
				<div className="md:space-y-10 space-y-4 rounded-xl md:m-5 m-2">
					<div className="grid sm:grid-cols-10 md:gap-10 gap-4">
						{services.slice(0, 2).map((service) => (
							<div
								key={service.id}
								className={`${service.span} bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 shadow-sm hover:shadow-md rounded-xl sm:h-full h-fit`}
							>
								<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
									{service.id}
								</span>
								<h2 className="lg:text-2xl md:text-xl text-lg  text-theme-color font-bold font-JetBrainsMono">
									{service.title}
								</h2>
								<p className="lg:text-base sm:text-sm text-xs">
									{service.desc}
								</p>
							</div>
						))}
					</div>
					<div className="grid sm:grid-cols-10 md:gap-10 gap-4">
						{services.slice(2, 4).map((service) => (
							<div
								key={service.id}
								className={`${service.span} bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 shadow-sm hover:shadow-md rounded-xl sm:h-full h-fit`}
							>
								<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
									{service.id}
								</span>
								<h2 className="lg:text-2xl md:text-xl text-lg  text-theme-color font-bold font-JetBrainsMono">
									{service.title}
								</h2>
								<p className="lg:text-base sm:text-sm text-xs">
									{service.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* About Me */}
			<section className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					About Me
				</h2>
				<div className="md:space-y-10 space-y-4 rounded-xl md:m-5 m-2">
					<div className="grid lg:grid-cols-10 md:gap-10 gap-4">
						<div className="flex justify-between md:col-span-3 bg-slate-100 w-full dark:bg-neutral-800 md:p-8 shadow-sm hover:shadow-md rounded-xl sm:h-full h-fit sm:gap-3">
							<img
								src={myPassportPic}
								alt="myPicture"
								className="md:col-span-5 bg-red-200 dark:bg-neutral-800 md:p-8 p-5 rounded-xl "
							/>
							<img
								src={myPassportPic}
								alt="myPicture"
								className="hidden sm:block lg:hidden bg-blue-200 dark:bg-neutral-800 md:p-8 p-5 rounded-xl "
							/>
							<img
								src={myPassportPic}
								alt="myPicture"
								className="hidden sm:block md:hidden bg-green-200 dark:bg-neutral-800 md:p-8 p-5 rounded-xl "
							/>
						</div>
						<div className="sm:col-span-7 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 rounded-xl sm:h-full h-fit shadow-sm hover:shadow-md">
							<h2 className="lg:text-2xl md:text-xl sm:text-lg text-base  font-bold font-JetBrainsMono">
								I&apos;m{" "}
								<span className="text-theme-color">
									Michael Agyemang Prempeh...
								</span>
							</h2>
							<p className="lg:text-base sm:text-sm text-xs">
								I am a Frontend Web Developer with hands-on experience in
								crafting responsive, user friendly web interfaces. Over the past
								year, I have honed my skills in building modern, interactive
								websites using HTML, CSS, JavaScript, and frameworks like React.{" "}
								<br />
								<br />
								My background in UI/UX Design equips me with a unique ability to
								blend aesthetics and functionality, ensuring seamless user
								experiences. Proficient in tools like Figma and Adobe Creative
								Suite, I bring a user centered approach to every project,
								collaborating effectively with teams to deliver innovative and
								impactful digital solutions.
							</p>
							<div className="sm:text-base text-sm flex md:space-x-5 space-x-2 pt-2">
								<button className="md:px-5 px-2 py-2 bg-theme-color rounded-md hover:bg-blue-400 text-slate-200 lg:text-base sm:text-sm text-xs">
									View Portfolio
								</button>
								<button className="md:px-5 px-2 py-2 border-[1px] border-theme-color dark:border-slate-200 rounded-md hover:bg-blue-400 text-theme-color hover:text-white dark:text-slate-200 lg:text-base sm:text-sm text-xs">
									Download CV
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="bg-slate-100 dark:bg-neutral-800 rounded-xl md:p-8 p-5 sm:h-full h-fit shadow-sm hover:shadow-md w-full ">
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl mb-5 text-theme-color font-bold font-JetBrainsMono">
								Education
							</h2>
							<div className="grid md:grid-cols-2 gap-5">
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-b md:border-r md:pb-5 md:pr-5 dark:border-neutral-700 border-neutral-300">
									<img
										src={mest}
										alt="school-logo"
										className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-12 h-12"
									/>
									<div className="flex flex-col lg:justify-start">
										<p className="xl:text-base sm:text-sm text-xs">
											Web Development Training
										</p>
										<p className="font-bold xl:text-base sm:text-sm text-xs">
											Generation Ghana/MEST Africa
										</p>
										<p className=" sm:text-sm text-xs p-1 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
											Sept 2024 - Nov 2024
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-b md:border-l md:pb-5 md:pl-5 dark:border-neutral-700 border-neutral-300">
									<img
										src={icms}
										alt="school-logo"
										className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-12 h-12"
									/>
									<div className="flex flex-col lg:justify-start">
										<p className="xl:text-base sm:text-sm text-xs">
											Advanced Diploma in Occupational Health and Safety
											Management
										</p>
										<p className="font-bold xl:text-base sm:text-sm text-xs">
											Imperial College of Mines and Safety
										</p>
										<p className=" sm:text-sm text-xs p-1 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
											Sept 2019 - Sept 2023
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-t md:border-r md:pt-5 md:pr-5 dark:border-neutral-700 border-neutral-300">
									<img
										src={uenr}
										alt="school-logo"
										className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-12 h-12"
									/>
									<div className="flex flex-col lg:justify-start">
										<p className="xl:text-base sm:text-sm text-xs">
											BSc. Computer Engineering
										</p>
										<p className="font-bold xl:text-base sm:text-sm text-xs">
											University of Energy and Natural Resources
										</p>
										<p className=" sm:text-sm text-xs p-1 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
											Sept 2019 - Sept 2023
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-t md:border-l md:pt-5 md:pl-5 dark:border-neutral-700 border-neutral-300">
									<img
										src={kuhis}
										alt="school-logo"
										className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-12 h-12"
									/>
									<div className="flex flex-col lg:justify-start">
										<p className="xl:text-base sm:text-sm text-xs">
											General Science
										</p>
										<p className="font-bold xl:text-base sm:text-sm text-xs">
											Kumasi High School
										</p>
										<p className=" sm:text-sm text-xs p-1 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
											July 2016 - July 2019
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Experience */}
			<section className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<div>
					<h2 className="md:p-5 p-3 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
						Experience
					</h2>
					<div className="flex flex-col gap-2 sm:gap-0 md:m-5 m-2">
						{/* Experience entry */}
						{experiences.map((experience) => (
							<div key={experience.id} className="sm:flex group">
								<div className="sm:w-1/4 w-full relative">
									<div className=" sm:mt-2 sm:p-3 pb-2 flex gap-2 transition-transform sm:group-hover:scale-105">
										<Clock className="text-gray-500 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 sm:mt-1 md:mt-0 transition-all duration-30 group-hover:text-theme-color" />
										<p className="lg:text-lg md:text-base sm:text-sm text-xs group-hover:text-theme-color self-center">
											{experience.timeSpan}
										</p>
									</div>
								</div>
								<div className="sm:w-3/4 w-full sm:border-l dark:border-neutral-700  border-neutral-400 hover:sm:border-theme-color group">
									<div className="relative">
										{/* Details */}
										<div className="ml-5 p-5 shadow-sm hover:shadow-md bg-slate-100 dark:bg-neutral-800 rounded-xl">
											<span className="absolute top-0 sm:top-6 lg:-left-[9px] md:-left-[7px] sm:-left-[4.5px] left-[5.5px] self-center justify-center flex items-center text-center mx-auto my-auto w-[3px] h-full sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-slate-100 dark:bg-neutral-800 sm:bg-neutral-400 sm:dark:bg-neutral-700 group-hover:bg-theme-color rounded-full shadow-md"></span>
											<h3 className="lg:text-lg md:text-base text-sm font-bold group-hover:text-theme-color">
												{experience.myRole}
											</h3>
											<p className="xl:text-base sm:text-sm text-xs text-gray-500">
												{experience.institution}
											</p>
											<p className="hidden sm:block lg:text-base sm:text-sm text-xs mt-2">
												{experience.descFull}
											</p>
											<div className="block sm:hidden relative">
												<p className="lg:text-base sm:text-sm text-xs mt-2">
													{isExpanded[experience.id]
														? `${experience.descFull}`
														: `${experience.descBrief}`}
												</p>
												<button
													onClick={() => toggleExpanded(experience.id)}
													className={`text-theme-color underline hover:text-slate-400 hover:font-medium transition-all duration-300 lg:text-base sm:text-sm text-xs bg-slate-100 dark:bg-neutral-800 px-1 font-semibold ${
														isExpanded[experience.id]
															? "static"
															: "absolute right-0 bottom-0"
													}`}
												>
													{isExpanded[experience.id]
														? "Show less"
														: "Read more"}
												</button>
											</div>
										</div>
									</div>
									{/* separator */}
									<div className="sm:flex">
										<div className="sm:w-1/4 w-full relative">
											<div className=" sm:mt-2 sm:p-3 pb-2 flex gap-2 transition-transform sm:group-hover:scale-105">
												<p className="lg:text-lg md:text-base sm:text-sm text-xs group-hover:text-theme-color self-center">
													{" "}
												</p>
											</div>
										</div>
										<div className="sm:w-3/4 w-full sm:border-none dark:border-neutral-700  border-neutral-400">
											<div className="relative">
												{/* Details */}
												<div className="">
													<h3 className="lg:text-lg md:text-base text-sm font-bold">
														{" "}
													</h3>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Projects */}
			<section className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					Some Past Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4 md:p-5 p-2">
					{projectsData.map((project) => (
						<div
							key={project.id}
							className="p-4 bg-slate-100 dark:bg-neutral-800 group mx-auto rounded-xl shadow-sm hover:shadow-md flex flex-col justify-between"
						>
							<div className="bg-monitorBG bg-top bg-cover md:w-80 w-72 h-64 md:h-72 mx-auto relative">
								<div className="group">
									<img
										src={project.images[currentImageIndex[project.id] || 0]}
										// alt={project.title + " snapshots"} // this is very valid... Thus, using Template Literal.
										// alt={`${project.title} snapshots`} // this is also very valid... Thus, using string concatenation...
										alt={`Snapshot ${currentImageIndex[project.id] + 1} of ${
											project.title
										}...`}
										className="w-full h-40 md:h-44 mx-auto px-3 pt-3 md:pb-1 pb-2"
									/>
									<button
										onClick={() =>
											handlePrevImage(project.id, project.images.length)
										}
										className="absolute sm:top-full left-5 bg-white text-black bg-opacity-70 shadow-lg rounded-full p-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 md:group-hover:top-[185px] top-[163px] transition-all duration-500 hover:bg-blue-200 hover:scale-110"
									>
										<ChevronLeft />
									</button>
									<button
										onClick={() =>
											handleNextImage(project.id, project.images.length)
										}
										className="absolute sm:top-full right-5 bg-white text-black bg-opacity-70 shadow-lg rounded-full p-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 md:group-hover:top-[185px] top-[163px] transition-all duration-500 hover:bg-blue-200 hover:scale-110"
									>
										<ChevronRight />
									</button>
								</div>
							</div>
							<h3 className="sm:text-base text-sm font-bold md:mt-2 mt-1 text-center mx-auto">
								{project.title}
							</h3>
							<p className="sm:text-sm text-xs md:mt-2 mt-1 mx-auto">
								{project.desc}
							</p>
							<ul className="flex flex-wrap gap-2 md:mt-4 mt-2 mx-auto">
								{project.tech.map((tech, index) => (
									<li
										key={index}
										className="text-xs py-1 px-2 bg-blue-100 dark:bg-blue-950 rounded-full"
									>
										{tech}
									</li>
								))}
							</ul>
							<Link
								to={project.liveLink}
								target={"_blank"}
								className="md:px-4 px-2 py-2 bg-theme-color rounded-md hover:bg-blue-400 text-slate-200 lg:text-base sm:text-sm text-xs flex gap-2 w-fit mx-auto md:mt-4 mt-2"
							>
								View Project
								<MoveUpRight size={20} className="" />
							</Link>
						</div>
					))}
				</div>
			</section>
			{/* My Stack/Tools */}
			<section className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3  xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					Familiar Tools / Languages / Frameworks
				</h2>
				<div className="flex flex-wrap justify-between gap-5 items-start border-2 border-neutral-200 dark:border-neutral-800 shadow-md p-4 rounded-xl sticky top-16 md:top-20 left-0 backdrop-blur-md">
					<div className="flex items-center justify-center gap-2 md:gap-3 text-theme-color">
						<Info size={32} />
						<span className="font-black text-sm sm:text-lg md:text-xl lg:text-2xl">
							KEY:
						</span>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
						{toolsLegend.map((toolLegend) => (
							<div
								key={toolLegend.id}
								className="flex gap-2 items-center px-2 py-1 md:px-4 md:py-2 rounded-lg bg-slate-50 dark:bg-neutral-800 shadow-sm"
							>
								<div
									className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full self-center ${toolLegend.bgColor}`}
								></div>
								<span
									className={`self-center text-xs lg:text-sm w-4/5 ${toolLegend.textColor}`}
								>
									{toolLegend.title}
								</span>
							</div>
						))}
					</div>
				</div>
				<div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-10 gap-5 md:p-5 p-2">
					{tools.map((tools) => (
						<div
							key={tools.id}
							// bg-slate-100 dark:bg-neutral-800
							className={`flex flex-col justify-center items-center shadow-md hover:shadow-lg rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 space-y-0 md:space-y-2 group mx-auto ${tools.bgColor}`}
							// style={{ backgroundColor: tools.bgColor }}
						>
							<img
								src={tools.img}
								alt={tools.toolName}
								className="h-12 sm:h-14 md:h-16 lg:h-20 flex mb-1"
							/>
							<h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold group-hover:text-theme-color">
								{tools.toolName}
							</h3>
							<p className="text-sm sm:text-base md:text-lg lg:text-xl">
								{tools.percentage}
							</p>
						</div>
					))}
				</div>
			</section>
			{/* Testimonials */}
			{/* Contact */}
			<section className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					Contact Me
				</h2>
				<div className="grid md:grid-cols-2 gap-5">
					<div className="flex flex-col w-full gap-3 md:gap-5 lg:gap-7 p-5 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md">
						<h3 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl text-theme-color font-bold font-JetBrainsMono">
							Let&apos;s talk about your project!
						</h3>
						<p className="text-sm md:text-base lg:text-lg">
							Whether it&apos;s a creative project or a freelance gig, I&apos;m
							ready to make it happen—let&apos;s build something remarkable
							together.
						</p>
						<div className="flex flex-col gap-2">
							<div className="flex gap-3 p-2 border-[0.1px] border-neutral-200 dark:border-neutral-700">
								<Phone className="mt-1" />
								<div className="">
									<p className="text-slate-500 dark:text-slate-400">Phone</p>
									<a
										className="text-sm md:text-base lg:text-lg hover:underline"
										href="tel: +233555975976"
									>
										+233 555 975 976
									</a>
								</div>
							</div>
							<div className="flex gap-3 p-2 border-[0.1px] border-neutral-200 dark:border-neutral-700">
								<Mail className="mt-1" />
								<div className="">
									<p className="text-slate-500 dark:text-slate-400">Email</p>
									<a
										className="text-sm md:text-base lg:text-lg  hover:underline"
										href="mailto:agyemangmichael555@gmail.com"
									>
										agyemangmichael555@gmail.com
									</a>
								</div>
							</div>
							<div className="flex gap-3 p-2 border-[0.1px] border-neutral-200 dark:border-neutral-700">
								<MapPin className="mt-1" />
								<div className="">
									<p className="text-slate-500 dark:text-slate-400">Address</p>
									<a
										className="text-sm md:text-base lg:text-lg  hover:underline"
										href="https://maps.app.goo.gl/euywUBrFsdxPfyqU9"
										target="_blank"
									>
										Crown Prince Academy (Annex), <br />
										Lapax, Accra - Ghana
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3 md:gap-5 lg:gap-7 p-5  bg-neutral-100 dark:bg-neutral-800 rounded-xl w-full shadow-sm hover:shadow-md md:justify-between">
						<h3 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl text-theme-color font-bold font-JetBrainsMono">
							Send me a message.
						</h3>
						<p className="text-sm md:text-base lg:text-lg">
							Feel free to Contact me by submitting the form below and I will
							get back to you as soon as possible..🫡
						</p>
						<form className="flex flex-col space-y-4 justify-center items-end">
							<input
								type="text"
								id="name"
								placeholder="Enter your name..."
								className="w-full px-3 py-3 rounded-md bg-slate-200 dark:bg-neutral-700 text-sm md:text-base lg:text-lg"
								required
							/>
							<input
								type="email"
								id="email"
								placeholder="Enter your email..."
								className="w-full px-3 py-3 rounded-md bg-slate-200 dark:bg-neutral-700 text-sm md:text-base lg:text-lg"
								required
							/>
							<textarea
								name="message"
								id="message"
								placeholder="Enter your message..."
								className="w-full px-3 py-3 rounded-md bg-slate-200 dark:bg-neutral-700 text-sm md:text-base lg:text-lg"
							></textarea>
							<button className="md:px-5 px-2 py-2 lg:text-base text-sm bg-theme-color text-slate-100 rounded-md sm:shadow-sm">
								<a href="#">Send Message</a>
							</button>
						</form>
						<form className="flex flex-col space-y-4 justify-center">
							<label
								htmlFor="userName"
								className="block relative rounded-md border shadow-sm focus-within:ring-1 focus-within:ring-theme-color border-slate-200 dark:border-slate-700"
							>
								<input
									type="text"
									id="name"
									placeholder="Enter your name..."
									className="w-full h-full bg-transparent rounded-md border-none focus:border-transparent focus:outline-none focus:ring-0"
									required
								/>
							</label>
							<label
								htmlFor="userMail"
								className="block relative rounded-md border shadow-sm focus-within:ring-1 focus-within:ring-theme-color border-slate-200 dark:border-slate-700"
							>
								<input
									type="email"
									id="email"
									placeholder="Enter your email..."
									className="w-full h-full bg-transparent rounded-md border-none focus:border-transparent focus:outline-none focus:ring-0"
									required
								/>
							</label>
							<label
								htmlFor="message"
								className="block relative rounded-md border shadow-sm focus-within:ring-1 focus-within:ring-theme-color border-slate-200 dark:border-slate-700"
							>
								<textarea
									name="message"
									id="message"
									placeholder="Enter your message..."
									className="w-full h-full bg-transparent rounded-md border-none focus:border-transparent focus:outline-none focus:ring-0"
								></textarea>
							</label>
							<button className="md:px-5 px-2 py-2 lg:text-base text-sm bg-theme-color text-slate-100 rounded-md sm:shadow-sm self-end">
								<a href="#">Send Message</a>
							</button>
						</form>
					</div>
				</div>
			</section>
			<section>
				<p>
					Made with <span>💓</span>
				</p>
				<p>
					&copy; <span>2024</span>
				</p>
				<p>A #RemedyOnlineGh Coorperation</p>
				<p>All Rights Reserved!</p>
			</section>
			{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

			<label
				htmlFor="Username"
				className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
			>
				<input
					type="text"
					id="Username"
					className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
					placeholder="Username"
				/>

				<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
					Username
				</span>
			</label>
		</section>
	);
};

export default LandingPageMain;
