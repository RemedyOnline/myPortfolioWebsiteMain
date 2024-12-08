import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/images/RemedyOnlineLogo.png";
import { useTheme } from "../contexts/ThemeContext";
import myProfilePic from "../assets/images/myProfile.png";
import fcGhana from "../assets/images/logos/fcGhanaLogo.png";
import fleetLabs from "../assets/images/logos/fleetLabs.jpg";
import giKace from "../assets/images/logos/giKaceLogo.png";
import icms from "../assets/images/logos/icms.jpg";
import kuhis from "../assets/images/logos/kuhis-logo.jpg";
import mest from "../assets/images/logos/mest-logo.png";
import uenr from "../assets/images/logos/uenrLogo.png";
import myPassportPic from "../assets/images/myPassportPic-noBG.png";
// import myPassportPic from "../assets/images/logos/icms.jpg";
// import myPassportPic from "../assets/images/logos/icms.jpg";
// import myPassportPic from "../assets/images/logos/icms.jpg";
import {
	Award,
	BookCheck,
	BriefcaseBusiness,
	ChevronUp,
	Clock,
	Codepen,
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Menu,
	Moon,
	Sun,
	Trophy,
	Twitter,
	UserCheck,
	Users2,
} from "lucide-react";
import { useState } from "react";

const LandingPageMain = () => {
	const { theme, toggleTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<section className="bg-slate-200 dark:bg-neutral-900 text-slate-800 dark:text-slate-200">
			{/* Navbar... */}
			<header
				id="navbar-section"
				className="fixed top-0 left-0 z-50 w-full px-8 sm:px-9 md:px-10 lg:px-10 xl:px-11 2xl:px-14 flex justify-between items-center backdrop-blur-md border-b-[0.1px] border-slate-300 dark:border-slate-600"
			>
				<div className="flex justify-center">
					<img
						src={logo}
						className="xl:h-20 lg:h-16 md:h-14 h-12 self-center"
						alt="logo"
					/>
					<div className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm font-semibold self-center">
						<p>
							<span className="text-theme-color underline">R</span>emedy <br />
							<span className="text-theme-color underline">O</span>nline
						</p>
					</div>
				</div>
				<nav
					className={`absolute sm:static right-0 top-12 px-4 py-2 w-1/2 sm:w-auto bg-slate-100 dark:bg-neutral-900 sm:bg-transparent dark:sm:bg-transparent flex flex-col sm:flex-row sm:items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm 2xl:gap-8 xl:gap-6 lg:gap-4 md:gap-2 sm:gap-1 transition-all duration-500 shadow-sm sm:shadow-none ${
						isMenuOpen ? "block" : "hidden sm:flex"
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
					className={`absolute right-0 mt-5 sm:mt-0 top-52 flex sm:static items-center lg:gap-6 gap-4 text-nowrap px-5 sm:px-0 py-2 w-1/2 sm:w-auto bg-slate-100 dark:bg-neutral-900 sm:bg-transparent dark:sm:bg-transparent shadow-2xl sm:shadow-none ${
						isMenuOpen ? "flex sm:flex" : "hidden sm:flex"
					}`}
				>
					<button
						onClick={toggleTheme}
						className="lg:p-3 p-2 bg-white sm:bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 shadow-xl sm:shadow-sm transition-transform duration-200 ease-in-out"
					>
						{theme === "darkMode" ? (
							<Sun className="h-5 w-5 md:h-6 md:w-6 text-gray-500 dark:text-slate-200" />
						) : (
							<Moon className="h-5 w-5 md:h-6 md:w-6 text-gray-500 dark:text-slate-200" />
						)}
					</button>
					<button className="md:px-5 px-2 py-2 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm bg-theme-color text-slate-100 rounded-md sm:shadow-sm">
						Hire Me!
					</button>
				</div>
				<button
					onClick={toggleMenu}
					className="lg:p-3 p-2 bg-slate-100 dark:bg-slate-700 rounded-lg sm:hidden hover:bg-slate-300 dark:hover:bg-slate-600 shadow-sm"
				>
					<div
						className={`transition-transform duration-200 ease-in-out ${
							isMenuOpen ? "-rotate-180" : "rotate-180"
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
						<p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7">
							Hello...👋
						</p>
						<p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl">
							I&apos;m{" "}
							<span className="text-theme-color font-JetBrainsMono">
								&lt;Michael/&gt;
							</span>
						</p>
						<p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl">
							A{" "}
							<span className="text-theme-color font-semibold font-JetBrainsMono">
								Frontend Developer👨‍💻
							</span>
						</p>
						<p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl">
							&{" "}
							<span className="text-theme-color font-semibold font-JetBrainsMono">
								UX Designer🎨
							</span>
						</p>
					</div>
					<p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm">
						I craft seamless, user-focused digital experiences, transforming
						complex challenges into impactful solutions. <br /> Let&apos;s
						create something extraordinary together.
					</p>
					<div className="text-nowrap flex flex-col md:space-y-5 space-y-2">
						<div className="sm:text-base text-sm flex md:space-x-5 space-x-2">
							<button className="md:px-5 px-2 py-2 bg-theme-color rounded-md hover:bg-blue-400 text-slate-100 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs shadow-md">
								View Portfolio
							</button>
							<button className="md:px-5 px-2 py-2 border-2 border-theme-color dark:border-slate-200 rounded-md hover:bg-blue-400 text-theme-color dark:text-slate-200 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs shadow-md">
								Download CV
							</button>
						</div>
						<div className="flex sm:space-x-5 space-x-2 text-slate-800">
							<button className="p-2 shadow-lg bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Linkedin />
							</button>
							<button className="p-2 shadow-lg bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Github />
							</button>
							<button className="p-2 shadow-lg bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Codepen />
							</button>
							<button className="p-2 shadow-lg bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Instagram />
							</button>
							<button className="p-2 shadow-lg bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Twitter />
							</button>
							<button className="p-2 shadow-lg bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Facebook />
							</button>
						</div>
					</div>
				</div>
				<div className="">
					<img
						src={myProfilePic}
						alt="myPicture"
						className="2xl:w-96 xl:w-60 lg:w-60 md:w-52 w-48 mx-auto md:ml-10 lg:ml-16 2xl:ml-24"
					/>
				</div>
			</section>
			{/* Hallmark */}
			<section className="md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					My HallMark
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 2xl:flex 2xl:flex-wrap 2xl:justify-center">
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-3 md:space-y-2 space-y-1 2xl:max-w-64 2xl:min-w-64 shadow-md ">
						<BriefcaseBusiness className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							2+
						</p>
						<p className="xl:text-xl lg:text-lg md:text-base text-sm">
							Years of Experience
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-3 md:space-y-2 space-y-1 2xl:max-w-64 2xl:min-w-64 shadow-md">
						<Trophy className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							14+
						</p>
						<p className="xl:text-xl lg:text-lg md:text-base text-sm">
							Completed Projects
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-3 md:space-y-2 space-y-1 2xl:max-w-64 2xl:min-w-64 shadow-md">
						<UserCheck className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							100+
						</p>
						<p className="xl:text-xl lg:text-lg md:text-base text-sm">
							Satified Clients
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-3 md:space-y-2 space-y-1 2xl:max-w-64 2xl:min-w-64 shadow-md">
						<BookCheck className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							7+
						</p>
						<p className="xl:text-xl lg:text-lg md:text-base text-sm">
							Languages / Frameworks
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-3 md:space-y-2 space-y-1 2xl:max-w-64 2xl:min-w-64 shadow-md">
						<Award className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							11+
						</p>
						<p className="xl:text-xl lg:text-lg md:text-base text-sm">
							Certifications Earned
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-3 md:space-y-2 space-y-1 2xl:max-w-64 2xl:min-w-64 shadow-md">
						<Users2 className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							2+
						</p>
						<p className="xl:text-xl lg:text-lg md:text-base text-sm">
							Cross-Functional Team Collaborations
						</p>
					</div>
				</div>
			</section>
			{/* Services */}
			<section className="md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					My Services
				</h2>
				<div className="md:space-y-10 space-y-4 rounded-xl md:m-5 m-2">
					<div className="grid sm:grid-cols-10 md:gap-10 gap-4">
						<div className="sm:col-span-6 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 shadow-md rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								1
							</span>
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base  text-theme-color font-bold font-JetBrainsMono">
								Frontend Web Development👨‍💻
							</h2>
							<p className="xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								I build responsive and interactive websites using TailwindCSS
								and modern frameworks like React, ensuring optimal performance
								across devices.
							</p>
						</div>
						<div className="sm:col-span-4 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 shadow-md rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								2
							</span>
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base text-theme-color font-bold font-JetBrainsMono">
								Graphic Design🖼️
							</h2>
							<p className="xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								I create visually appealing graphics, logos, and digital assets
								that align with branding and marketing goals.
							</p>
						</div>
					</div>
					<div className="grid sm:grid-cols-10 md:gap-10 gap-4">
						<div className="sm:col-span-4 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 shadow-md rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								3
							</span>
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base  text-theme-color font-bold font-JetBrainsMono">
								IT Support Specialist🛠️
							</h2>
							<p className="xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								With a Computer Engineering background, I provide technical
								support, troubleshoot hardware/software issues, and ensure
								system efficiency.
							</p>
						</div>
						<div className="sm:col-span-6 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 shadow-md rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								4
							</span>
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base  text-theme-color font-bold font-JetBrainsMono">
								UI/UX Design🎨
							</h2>
							<p className="xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								I design intuitive and visually engaging user interfaces,
								focusing on seamless user experiences for both web and mobile
								applications.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* About Me */}
			<section className="md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					About Me
				</h2>
				<div className="md:space-y-10 space-y-4 rounded-xl md:m-5 m-2">
					<div className="grid lg:grid-cols-10 md:gap-10 gap-4">
						<div className="flex justify-between md:col-span-3 bg-slate-100 w-full dark:bg-neutral-800 md:p-8 shadow-md rounded-xl sm:h-full h-fit sm:gap-3">
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
						<div className="sm:col-span-7 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 rounded-xl sm:h-full h-fit shadow-md">
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base  text-theme-color font-bold font-JetBrainsMono">
								<span className="text-slate-600 dark:text-slate-300 ">
									I&apos;m
								</span>{" "}
								Michael Agyemang Prempeh...
							</h2>
							<p className="xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								I am a Frontend Web Developer with hands on experience in
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
								<button className="md:px-5 px-2 py-2 bg-theme-color rounded-md hover:bg-blue-400 text-slate-200 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
									View Portfolio
								</button>
								<button className="md:px-5 px-2 py-2 border-2 border-theme-color dark:border-slate-200 rounded-md hover:bg-blue-400 text-theme-color dark:text-slate-200 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
									Download CV
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="bg-slate-100 dark:bg-neutral-800 rounded-xl md:p-8 p-5 sm:h-full h-fit shadow-md w-full ">
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl mb-5 text-theme-color font-bold font-JetBrainsMono">
								Education
							</h2>
							<div className="grid md:grid-cols-2 gap-3 md:gap-5 ">
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-b md:border-r md:pb-5 md:pr-5 dark:border-gray-500 border-gray-400">
									<img
										src={mest}
										alt="school-logo"
										className="lg:w-28 lg:h-28 md:w-20 md:h-20 w-12 h-12"
									/>
									<div className="flex flex-col lg:justify-start">
										<p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-base text-sm">
											Web Development Training
										</p>
										<p className="font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-base text-sm">
											Generation Ghana/MEST Africa
										</p>
										<p className="xl:text-lg lg:text-base sm:text-sm text-xs p-1 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
											Sept 2024 - Nov 2024
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-b md:border-l md:pb-5 md:pl-5 dark:border-gray-500 border-gray-400">
									<img
										src={icms}
										alt="school-logo"
										className="lg:w-28 lg:h-28 md:w-20 md:h-20 w-12 h-12"
									/>
									<div className="flex flex-col lg:justify-start">
										<p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-base text-sm">
											Advanced Diploma in Occupational Health and Safety
											Management
										</p>
										<p className="font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-base text-sm">
											Imperial College of Mines and Safety
										</p>
										<p className="xl:text-lg lg:text-base sm:text-sm text-xs p-1 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
											Sept 2019 - Sept 2023
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-t md:border-r md:pt-5 md:pr-5 dark:border-gray-500 border-gray-400">
									<img
										src={uenr}
										alt="school-logo"
										className="lg:w-28 lg:h-28 md:w-20 md:h-20 w-12 h-12"
									/>
									<div className="flex flex-col lg:justify-start">
										<p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-base text-sm">
											BSc. Computer Engineering
										</p>
										<p className="font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-base text-sm">
											University of Energy and Natural Resources
										</p>
										<p className="xl:text-lg lg:text-base sm:text-sm text-xs p-1 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
											Sept 2019 - Sept 2023
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-t md:border-l md:pt-5 md:pl-5 dark:border-gray-500 border-gray-400">
									<img
										src={kuhis}
										alt="school-logo"
										className="lg:w-28 lg:h-28 md:w-20 md:h-20 w-12 h-12"
									/>
									<div className="flex flex-col lg:justify-start">
										<p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-base text-sm">
											General Science
										</p>
										<p className="font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-base text-sm">
											Kumasi High School
										</p>
										<p className="xl:text-lg lg:text-base sm:text-sm text-xs p-1 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
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
			<section className="md:m-5 m-2">
				<div className=" md:p-8 p-5 rounded-xl sm:h-full h-fit">
					<h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl mb-5 text-theme-color font-bold font-JetBrainsMono">
						Experience
					</h2>
					<div>
						{/* Experience 1 */}
						<div className="sm:flex">
							<div className="sm:w-1/4 w-full relative">
								<div className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs sm:mt-2 sm:p-3 pb-2 flex gap-2">
									<Clock className="text-gray-500 w-4 md:w-5 xl:w-6 self-center" />
									<p className="self-center">Sept 2024 - Nov 2024</p>
								</div>
							</div>
							<div className="sm:w-3/4 w-full sm:border-l dark:border-gray-500 border-gray-400 hover:sm:border-theme-color group">
								<div className="relative">
									{/* Details */}
									<div className="ml-5 p-5 shadow-md bg-slate-100 dark:bg-neutral-800 rounded-xl">
										<span className="absolute top-0 sm:top-6 lg:-left-[9px] md:-left-[7px] sm:-left-[4.5px] left-[5.5px] self-center justify-center flex items-center text-center mx-auto my-auto w-1 h-full sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-slate-100 dark:bg-neutral-800 sm:bg-gray-400 sm:dark:bg-gray-500 group-hover:bg-theme-color rounded-full shadow-md"></span>
										<h3 className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm font-bold">
											Web Developer Trainee
										</h3>
										<p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm text-gray-500">
											MEST Africa/Generation
										</p>
										<p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs mt-2">
											Specializing in frontend development, I gained hands-on
											experience by building real-world projects such as a
											Library Management System, an Advertising Website, and a
											School Management System. Collaborating closely with
											backend developers, I integrated APIs and endpoints to
											ensure seamless functionality while honing my skills in
											version control and UI/UX integration.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Education */}
			<section className="experience-section my-8 p-8">
				<h2 className="text-4xl font-bold mb-6">Experience</h2>
				<div className="space-y-8">
					{/* <!-- Experience 1 --> */}
					<div className="flex items-start relative group">
						{/* <!-- Icon and Date --> */}
						<div className="w-1/4 text-right pr-6">
							<div className="flex justify-end items-center">
								<div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 7v-2a4 4 0 10-8 0v2M5 11h14M10 11v6m4-6v6"
										/>
									</svg>
								</div>
								<p className="ml-4 text-gray-500 dark:text-gray-300">
									Jan 2023 - Present
								</p>
							</div>
						</div>
						{/* <!-- Details --> */}
						<div className="w-3/4 pl-6 border-l border-gray-300 dark:border-gray-600 relative transition-all duration-300 group-hover:border-blue-500">
							<div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
								<h3 className="text-xl font-semibold">Frontend Developer</h3>
								<p className="text-gray-500 dark:text-gray-300">
									Tech Company XYZ
								</p>
								<p className="mt-2 text-gray-700 dark:text-gray-400">
									Built scalable web applications, implemented features, and
									optimized performance for user-centric interfaces.
								</p>
							</div>
						</div>
					</div>

					{/* <!-- Experience 2 --> */}
					<div className="flex items-start relative group">
						{/* <!-- Icon and Date --> */}
						<div className="w-1/4 text-right pr-6">
							<div className="flex justify-end items-center">
								<div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4zm5 4h1a2 2 0 110 4h-1a2 2 0 110-4zm-5 0h1a2 2 0 110 4H9a2 2 0 110-4z"
										/>
									</svg>
								</div>
								<p className="ml-4 text-gray-500 dark:text-gray-300">
									Aug 2020 - Dec 2022
								</p>
							</div>
						</div>
						{/* <!-- Details --> */}
						<div className="w-3/4 pl-6 border-l border-gray-300 dark:border-gray-600 relative transition-all duration-300 group-hover:border-green-500">
							<div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
								<h3 className="text-xl font-semibold">UI/UX Designer</h3>
								<p className="text-gray-500 dark:text-gray-300">
									Creative Agency ABC
								</p>
								<p className="mt-2 text-gray-700 dark:text-gray-400">
									Designed intuitive user interfaces and conducted usability
									testing to improve user satisfaction.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Experience */}
			{/* My Stack/Tools */}
			{/* Testimonials */}
			{/* Contact */}
		</section>
	);
};

export default LandingPageMain;
