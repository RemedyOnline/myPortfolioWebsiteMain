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
	const [isExpanded, setIsExpanded] = useState({}); // using an object to track the expanded state of each experience, since using a boolean affects all states...

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const toggleExpanded = (id) => {
		setIsExpanded((prevState) => ({
			...prevState,
			[id]: !prevState[id], // this toggles a particular experience by it's id...
		}));
	};

	return (
		<section className="bg-slate-200 dark:bg-neutral-900 text-slate-800 dark:text-slate-200">
			{/* Navbar... */}
			<header
				id="navbar-section"
				className="fixed top-0 left-0 z-50 w-full flex justify-around items-center backdrop-blur-md border-b-[0.1px] border-slate-300 dark:border-slate-600 py-1"
			>
				<div className="flex justify-center gap-1">
					<img src={logo} className="md:h-14 h-12 self-center" alt="logo" />
					<div className="lg:text-base text-sm font-semibold self-center">
						<p>
							<span className="text-theme-color underline">R</span>emedy <br />
							<span className="text-theme-color underline">O</span>nline
						</p>
					</div>
				</div>
				<nav
					className={`sm:static px-4 py-2 w-5/12 sm:w-auto bg-slate-100 dark:bg-neutral-900 sm:bg-transparent dark:sm:bg-transparent flex flex-col sm:flex-row sm:items-center lg:text-base text-sm 2xl:gap-8 xl:gap-6 lg:gap-4 md:gap-2 gap-1 transition-all duration-700 shadow-md sm:shadow-none ${
						isMenuOpen
							? "block absolute right-0 top-14"
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
							? "flex sm:flex absolute right-0 top-60"
							: "sm:flex absolute right-0 -top-60"
					}`}
				>
					<button
						onClick={toggleTheme}
						className="lg:p-3 p-2 bg-white sm:bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 shadow-xl sm:shadow-sm transition-transform duration-700 ease-in-out"
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
				<h2 className="md:p-5 p-3 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					My HallMark
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3">
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap space-y-1 shadow-sm hover:shadow-md group">
						<BriefcaseBusiness className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-all duration-300" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							2+
						</p>
						<p className="lg:text-base sm:text-sm text-xs">
							Years of Experience
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap space-y-1 shadow-sm hover:shadow-md group">
						<Trophy className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:rotate-12  transition-all duration-300" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							14+
						</p>
						<p className="lg:text-base sm:text-sm text-xs">
							Completed Projects
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap space-y-1 shadow-sm hover:shadow-md group">
						<UserCheck className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:rotate-12  transition-all duration-300" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							100+
						</p>
						<p className="lg:text-base sm:text-sm text-xs">Satisfied Clients</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap space-y-1 shadow-sm hover:shadow-md group">
						<BookCheck className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:rotate-12  transition-all duration-300" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							7+
						</p>
						<p className="lg:text-base sm:text-sm text-xs">
							Languages / Frameworks
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap space-y-1 shadow-sm hover:shadow-md group">
						<Award className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:rotate-12  transition-all duration-300" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							11+
						</p>
						<p className="lg:text-base sm:text-sm text-xs">
							Certifications Earned
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap space-y-1 shadow-sm hover:shadow-md group">
						<Users2 className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:rotate-12  transition-all duration-300" />
						<p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-theme-color font-bold font-JetBrainsMono">
							2+
						</p>
						<p className="lg:text-base sm:text-sm text-xs">
							Cross-Functional Team Collaborations
						</p>
					</div>
				</div>
			</section>
			{/* Services */}
			<section className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					My Services
				</h2>
				<div className="md:space-y-10 space-y-4 rounded-xl md:m-5 m-2">
					<div className="grid sm:grid-cols-10 md:gap-10 gap-4">
						<div className="sm:col-span-6 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 shadow-sm hover:shadow-md rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								1
							</span>
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base  text-theme-color font-bold font-JetBrainsMono">
								Frontend Web Development👨‍💻
							</h2>
							<p className="lg:text-base sm:text-sm text-xs">
								I build responsive and interactive websites using TailwindCSS
								and modern frameworks like React, ensuring optimal performance
								across devices.
							</p>
						</div>
						<div className="sm:col-span-4 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 shadow-sm hover:shadow-md rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								2
							</span>
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base text-theme-color font-bold font-JetBrainsMono">
								Graphic Design🖼️
							</h2>
							<p className="lg:text-base sm:text-sm text-xs">
								I create visually appealing graphics, logos, and digital assets
								that align with branding and marketing goals.
							</p>
						</div>
					</div>
					<div className="grid sm:grid-cols-10 md:gap-10 gap-4">
						<div className="sm:col-span-4 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 shadow-sm hover:shadow-md rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								3
							</span>
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base  text-theme-color font-bold font-JetBrainsMono">
								IT Support Specialist🛠️
							</h2>
							<p className="lg:text-base sm:text-sm text-xs">
								With a Computer Engineering background, I provide technical
								support, troubleshoot hardware/software issues, and ensure
								system efficiency.
							</p>
						</div>
						<div className="sm:col-span-6 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 shadow-sm hover:shadow-md rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
								4
							</span>
							<h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base  text-theme-color font-bold font-JetBrainsMono">
								UI/UX Design🎨
							</h2>
							<p className="lg:text-base sm:text-sm text-xs">
								I design intuitive and visually engaging user interfaces,
								focusing on seamless user experiences for both web and mobile
								applications.
							</p>
						</div>
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
								<button className="md:px-5 px-2 py-2 border-[1px] border-theme-color dark:border-slate-200 rounded-md hover:bg-blue-400 text-theme-color hover:text-white dark:text-slate-200 lg:text-base text-sm">
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
			<section className="2xl:max-w-7xl mx-auto">
				<div className="md:p-14 sm:p-8 p-6 sm:h-full h-fit">
					<h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl mb-2 sm:mb-3 md:mb-4 xl:mb-5 text-theme-color font-bold font-JetBrainsMono ">
						Experience
					</h2>
					<div className="flex flex-col gap-2 sm:gap-0">
						{/* Experience 1 */}
						<div className="sm:flex group">
							<div className="sm:w-1/4 w-full relative">
								<div className=" sm:mt-2 sm:p-3 pb-2 flex gap-2 transition-transform sm:group-hover:scale-105">
									<Clock className="text-gray-500 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 sm:mt-1 md:mt-0 transition-all duration-30 group-hover:text-theme-color" />
									<p className="lg:text-lg md:text-base sm:text-sm text-xs group-hover:text-theme-color self-center">
										Sept 2024 - Nov 2024
									</p>
								</div>
							</div>
							<div className="sm:w-3/4 w-full sm:border-l dark:border-neutral-700  border-neutral-400 hover:sm:border-theme-color group">
								<div className="relative">
									{/* Details */}
									<div className="ml-5 p-5 shadow-sm hover:shadow-md bg-slate-100 dark:bg-neutral-800 rounded-xl">
										<span className="absolute top-0 sm:top-6 lg:-left-[9px] md:-left-[7px] sm:-left-[4.5px] left-[5.5px] self-center justify-center flex items-center text-center mx-auto my-auto w-[3px] h-full sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-slate-100 dark:bg-neutral-800 sm:bg-neutral-400 sm:dark:bg-neutral-700 group-hover:bg-theme-color rounded-full shadow-md"></span>
										<h3 className="lg:text-lg md:text-base text-sm font-bold">
											Web Developer Trainee
										</h3>
										<p className="xl:text-base sm:text-sm text-xs text-gray-500">
											MEST Africa/Generation
										</p>
										<p className="hidden sm:block lg:text-base sm:text-sm text-xs mt-2">
											Specializing in frontend development, I gained hands-on
											experience by building real-world projects such as a
											Library Management System, an Advertising Website, and a
											School Management System. Collaborating closely with
											backend developers, I integrated APIs and endpoints to
											ensure seamless functionality while honing my skills in
											version control and UI/UX integration.
										</p>
										<div className="block sm:hidden relative">
											<p className="lg:text-base sm:text-sm text-xs mt-2">
												{isExpanded[1]
													? "Specializing in frontend development, I gained hands-on experience by building real-world projects such as a Library Management System, an Advertising Website, and a School Management System. Collaborating closely with backend developers, I integrated APIs and endpoints to ensure seamless functionality while honing my skills in version control and UI/UX integration."
													: "Specializing in frontend development, I gained hands-on experience by building real-world projects such as a Library Management System, an Advertising Website, and ..."}
											</p>
											<button
												onClick={() => toggleExpanded(1)}
												className={`text-theme-color underline hover:text-slate-400 hover:font-medium transition-all duration-300 lg:text-base sm:text-sm text-xs ${
													isExpanded[1] ? "static" : "absolute right-0 bottom-0"
												}`}
											>
												{isExpanded[1] ? "Show less" : "Read more"}
											</button>
										</div>
									</div>
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
							<div className="sm:w-3/4 w-full sm:border-l dark:border-neutral-700  border-neutral-400">
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
						{/* Experience 2 */}
						<div className="sm:flex group">
							<div className="sm:w-1/4 w-full relative">
								<div className=" sm:mt-2 sm:p-3 pb-2 flex gap-2 transition-transform sm:group-hover:scale-105">
									<Clock className="text-gray-500 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 sm:mt-1 md:mt-0 transition-all duration-30 group-hover:text-theme-color" />
									<p className="lg:text-lg md:text-base sm:text-sm text-xs group-hover:text-theme-color self-center">
										March 2024 - Present
									</p>
								</div>
							</div>
							<div className="sm:w-3/4 w-full sm:border-l dark:border-neutral-700  border-neutral-400 hover:sm:border-theme-color group">
								<div className="relative">
									{/* Details */}
									<div className="ml-5 p-5 shadow-sm hover:shadow-md bg-slate-100 dark:bg-neutral-800 rounded-xl">
										<span className="absolute top-0 sm:top-6 lg:-left-[9px] md:-left-[7px] sm:-left-[4.5px] left-[5.5px] self-center justify-center flex items-center text-center mx-auto my-auto w-[3px] h-full sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-slate-100 dark:bg-neutral-800 sm:bg-neutral-400 sm:dark:bg-neutral-700 group-hover:bg-theme-color rounded-full shadow-md"></span>
										<h3 className="lg:text-lg md:text-base text-sm font-bold">
											UI/UX Designer (Voluntary)
										</h3>
										<p className="xl:text-base sm:text-sm text-xs text-gray-500">
											Fleet Labs Ghana
										</p>
										<p className="hidden sm:block lg:text-base sm:text-sm text-xs mt-2">
											Redesigned a client’s food ordering web app interface,
											reducing their bounce rate by 60%, and implemented A/B
											testing strategies for a subscription-based service,
											achieving a 6% increase in conversion rates and improved
											user retention. Additionally, conducted user research and
											developed personas to guide a mobile app redesign,
											resulting in a 30% boost in user satisfaction and a 15%
											rise in downloads.
										</p>
										<div className="block sm:hidden relative">
											<p className="lg:text-base sm:text-sm text-xs mt-2">
												{isExpanded[2]
													? "Redesigned a client’s food ordering web app interface, reducing their bounce rate by 60%, and implemented A/B testing strategies for a subscription-based service, achieving a 6% increase in conversion rates and improved user retention. Additionally, conducted user research and developed personas to guide a mobile app redesign, resulting in a 30% boost in user satisfaction and a 15% rise in downloads."
													: "Redesigned a client’s food ordering web app interface, reducing their bounce rate by 60%, and implemented A/B testing strategies for a..."}
											</p>
											<button
												onClick={() => toggleExpanded(2)}
												className={`text-theme-color underline hover:text-slate-400 hover:font-medium transition-all duration-300 lg:text-base sm:text-sm text-xs ${
													isExpanded[2] ? "static" : "absolute right-0 bottom-0"
												}`}
											>
												{isExpanded[2] ? "Show less" : "Read more"}
											</button>
										</div>
									</div>
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
							<div className="sm:w-3/4 w-full sm:border-l dark:border-neutral-700  border-neutral-400">
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
						{/* Experience 3 */}
						<div className="sm:flex group">
							<div className="sm:w-1/4 w-full relative">
								<div className=" sm:mt-2 sm:p-3 pb-2 flex gap-2 transition-transform sm:group-hover:scale-105">
									<Clock className="text-gray-500 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 sm:mt-1 md:mt-0 transition-all duration-30 group-hover:text-theme-color" />
									<p className="lg:text-lg md:text-base sm:text-sm text-xs group-hover:text-theme-color self-center">
										Sept 2023 - Sept 2024
									</p>
								</div>
							</div>
							<div className="sm:w-3/4 w-full sm:border-l dark:border-neutral-700  border-neutral-400 hover:sm:border-theme-color group">
								<div className="relative">
									{/* Details */}
									<div className="ml-5 p-5 shadow-sm hover:shadow-md bg-slate-100 dark:bg-neutral-800 rounded-xl">
										<span className="absolute top-0 sm:top-6 lg:-left-[9px] md:-left-[7px] sm:-left-[4.5px] left-[5.5px] self-center justify-center flex items-center text-center mx-auto my-auto w-[3px] h-full sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-slate-100 dark:bg-neutral-800 sm:bg-neutral-400 sm:dark:bg-neutral-700 group-hover:bg-theme-color rounded-full shadow-md"></span>
										<h3 className="lg:text-lg md:text-base text-sm font-bold">
											IT Support Specialist (NSS)
										</h3>
										<p className="xl:text-base sm:text-sm text-xs text-gray-500">
											Forestry Commission, HQ
										</p>
										<p className="hidden sm:block lg:text-base sm:text-sm text-xs mt-2">
											At the Database and Applications Unit, I contributed to
											revamping the company’s website using modern design
											principles, enhancing accessibility across devices, and
											achieving a 52% increase in user satisfaction. I
											collaborated with senior developers on the design and
											development of the “Green Ghana” mobile app, boosting
											brand visibility and driving a 46% increase in website
											traffic within the first month. Additionally, I supported
											the maintenance of websites and web applications by
											assisting with bug fixes and performance optimizations to
											enhance user experience.
										</p>
										<div className="block sm:hidden relative">
											<p className="lg:text-base sm:text-sm text-xs mt-2">
												{isExpanded[3]
													? "At the Database and Applications Unit, I contributed to revamping the company’s website using modern design principles, enhancing accessibility across devices, and achieving a 52% increase in user satisfaction. I collaborated with senior developers on the design and development of the “Green Ghana” mobile app, boosting brand visibility and driving a 46% increase in website traffic within the first month. Additionally, I supported the maintenance of websites and web applications by assisting with bug fixes and performance optimizations to enhance user experience."
													: "At the Database and Applications Unit, I contributed to revamping the company’s website using modern design principles, enhancing accessibility across devices, and achieving a 52%..."}
											</p>
											<button
												onClick={() => toggleExpanded(3)}
												className={`text-theme-color underline hover:text-slate-400 hover:font-medium transition-all duration-300 lg:text-base sm:text-sm text-xs ${
													isExpanded[3] ? "static" : "absolute right-0 bottom-0"
												}`}
											>
												{isExpanded[3] ? "Show less" : "Read more"}
											</button>
										</div>
									</div>
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
							<div className="sm:w-3/4 w-full sm:border-l dark:border-neutral-700  border-neutral-400">
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
						{/* Experience 4 */}
						<div className="sm:flex group">
							<div className="sm:w-1/4 w-full relative">
								<div className=" sm:mt-2 sm:p-3 pb-2 flex gap-2 transition-transform sm:group-hover:scale-105">
									<Clock className="text-gray-500 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 sm:mt-1 md:mt-0 transition-all duration-30 group-hover:text-theme-color" />
									<p className="lg:text-lg md:text-base sm:text-sm text-xs group-hover:text-theme-color self-center">
										Sept 2022 - Dec 2022
									</p>
								</div>
							</div>
							<div className="sm:w-3/4 w-full sm:border-l dark:border-neutral-700  border-neutral-400 hover:sm:border-theme-color group">
								<div className="relative">
									{/* Details */}
									<div className="ml-5 p-5 shadow-sm hover:shadow-md bg-slate-100 dark:bg-neutral-800 rounded-xl">
										<span className="absolute top-0 sm:top-6 lg:-left-[9px] md:-left-[7px] sm:-left-[4.5px] left-[5.5px] self-center justify-center flex items-center text-center mx-auto my-auto w-[3px] h-full sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-slate-100 dark:bg-neutral-800 sm:bg-neutral-400 sm:dark:bg-neutral-700 group-hover:bg-theme-color rounded-full shadow-md"></span>
										<h3 className="lg:text-lg md:text-base text-sm font-bold">
											Frontend Web Developer (Internship)
										</h3>
										<p className="xl:text-base sm:text-sm text-xs text-gray-500">
											AITI-KACE
										</p>
										<p className="hidden sm:block lg:text-base sm:text-sm text-xs mt-2">
											I gained foundational skills in HTML, CSS, and JavaScript,
											which I applied to building and maintaining responsive,
											user-centered and interactive websites. Successfully
											completing 8 projects on time, I demonstrated attention to
											detail and creativity while proactively seeking feedback
											to enhance my skills and grow professionally.
										</p>
										<div className="block sm:hidden relative">
											<p className="lg:text-base sm:text-sm text-xs mt-2">
												{isExpanded[4]
													? "I gained foundational skills in HTML, CSS, and JavaScript, which I applied to building and maintaining responsive, user-centered and interactive websites. Successfully completing 8 projects on time, I demonstrated attention to detail and creativity while proactively seeking feedback to enhance my skills and grow professionally."
													: "I gained foundational skills in HTML, CSS, and JavaScript, which I applied to building and maintaining responsive, interactive, user-centered..."}
											</p>
											<button
												onClick={() => toggleExpanded(4)}
												className={`text-theme-color underline hover:text-slate-400 hover:font-medium transition-all duration-300 lg:text-base sm:text-sm text-xs ${
													isExpanded[4] ? "static" : "absolute right-0 bottom-0"
												}`}
											>
												{isExpanded[4] ? "Show less" : "Read more"}
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Education */}
			{/* Projects */}
			{/* My Stack/Tools */}
			{/* Testimonials */}
			{/* Contact */}
		</section>
	);
};

export default LandingPageMain;
