import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../contexts/ThemeContext";
import emailjs from "@emailjs/browser";
import projectsData from "../constants/projects";
import hallmark from "../constants/hallmark";
import services from "../constants/services";
import experiences from "../constants/experience";
import testimonials from "../constants/testimonials";
import { tools, toolsLegend } from "../constants/tools";
import logo from "../assets/images/myLogoNoCrown.png";
import myProfilePic from "../assets/images/myProfile.png";
import graduationStraight from "/satisfiedClients/mestGraduation2.jpg";
import graduationPicFold from "/satisfiedClients/mestGraduation3.jpg";
import graduationPicSpeak from "/satisfiedClients/mestGraduation4.jpg";
import icms from "/logos/icms.jpg";
import kuhis from "/logos/kuhis-logo.jpg";
import mest from "/logos/mest-logo.png";
import uenr from "/logos/uenrLogo.png";
import behanceBlack from "/behanceBlack.svg";
import behanceWhite2 from "/behanceWhite2.png";
import myCV from "/Michael_Agyemang_Prempeh-UiUxDevCV-Dec.pdf";
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
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [successFeedback, setSuccessFeedback] = useState("");
	const [failureFeedback, setFailureFeedback] = useState("");
	const [isExpanded, setIsExpanded] = useState({}); // using an object to track the expanded state of each experience, since using a boolean affects all states...
	const [currentImageIndex, setCurrentImageIndex] = useState({}); // track images per the projectID...
	const [iconSize, setIconSize] = useState(16); // setting default size to 16 for mobile screens...

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

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await emailjs.sendForm(
				"service_zjmslxj",
				"template_2g1hfz4",
				form.current,
				"LCrDScquVg1RPMliD"
			);

			// clearing form after successful submission...
			form.current.reset();
			setSuccessFeedback("Message sent Successfully!");
			// alert("Message sent Successfully!");
			console.log("Message sent Successfully!");
		} catch (error) {
			console.error("Error sending email:", error);
			setFailureFeedback("Failed to send message. Please try again.");
			// alert("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		const updateIconSize = () => {
			const width = window.innerWidth;
			if (width >= 640) {
				setIconSize(18); // thus, for tablet screens...
			} else {
				setIconSize(15); // else, back to default - mobile screens...
			}
		};

		updateIconSize(); // setting icon size function on mount...
		window.addEventListener("resize", updateIconSize); // adjust on resize...

		return () => window.removeEventListener("resize", updateIconSize); // cleanup...
	}, []);

	useEffect(() => {
		if (successFeedback || failureFeedback) {
			const timer = setTimeout(() => {
				setSuccessFeedback("");
				setFailureFeedback("");
			}, 4000);

			return () => clearTimeout(timer);
		}
	}, [successFeedback, failureFeedback]);

	return (
		<section className="bg-slate-200 dark:bg-neutral-900 text-slate-800 dark:text-slate-200">
			{/* Navbar... */}
			<header
				id="navbar-section"
				className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 transform z-50 w-11/12 flex md:justify-around items-center justify-between px-3 md:px-0 backdrop-blur-md border-2 rounded-xl shadow-sm border-slate-300 dark:border-slate-700 py-1"
			>
				<ScrollLink
					to="home"
					smooth={true}
					duration={2000}
					className="flex justify-center gap-1"
				>
					<img
						src={logo}
						className="p-1 lg:h-14 md:h-12 h-11 self-center hover:cursor-pointer"
						alt="logo"
					/>
				</ScrollLink>
				<nav
					className={`sm:static px-4 py-3 sm:py-2 w-5/12 sm:w-auto bg-slate-100 dark:bg-neutral-900 sm:bg-transparent dark:sm:bg-transparent flex flex-col sm:flex-row sm:items-center lg:text-base text-sm 2xl:gap-8 xl:gap-6 lg:gap-4 gap-2 transition-all duration-700 shadow-md sm:shadow-none ${
						isMenuOpen
							? "block absolute right-0 top-12"
							: "sm:flex absolute right-0 -top-96"
					}`}
				>
					<ScrollLink
						to="home"
						smooth={true}
						duration={2000}
						className="px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						Home
					</ScrollLink>
					<ScrollLink
						to="services"
						smooth={true}
						duration={2000}
						className=" px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						Services
					</ScrollLink>
					<ScrollLink
						to="about"
						smooth={true}
						duration={2000}
						className=" px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						About
					</ScrollLink>
					<ScrollLink
						to="experience"
						smooth={true}
						duration={2000}
						className=" px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						Experience
					</ScrollLink>
					<ScrollLink
						to="projects"
						smooth={true}
						duration={2000}
						className=" px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						Projects
					</ScrollLink>
					<ScrollLink
						to="contact"
						smooth={true}
						duration={2000}
						className=" px-2 py-2 rounded-xl hover:cursor-pointer hover:underline"
					>
						Contact
					</ScrollLink>
				</nav>
				<div
					className={`sm:mt-0 flex sm:static items-center lg:gap-5 md:gap-4 gap-3 text-nowrap sm:px-0 sm:w-auto sm:bg-transparent dark:sm:bg-transparent transition-all duration-700 shadow-none `}
				>
					<button
						onClick={toggleTheme}
						className={
							"lg:p-2.5 p-2 bg-white sm:bg-slate-100 dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-100 hover:sm:bg-slate-200 dark:hover:bg-slate-600 sm:shadow-md transition-transform duration-500 ease-in-out"
						}
					>
						<div
							className={`transition-transform  ease-in-out ${
								theme === "lightMode"
									? "rotate-180 duration-1000"
									: "rotate-0 duration-1000"
							}`}
						>
							{theme === "darkMode" ? (
								<Moon className="h-5 w-5 text-gray-500 dark:text-slate-200" />
							) : (
								<Sun className="h-5 w-5 text-gray-500 dark:text-slate-200" />
							)}
						</div>
					</button>
					<ScrollLink
						to="contact"
						smooth={true}
						duration={2000}
						className="lg:px-5 px-2 py-2 lg:text-base text-sm bg-theme-color text-slate-100 hover:bg-blue-400 hover:cursor-pointer rounded-lg shadow-sm md:shadow-md"
					>
						Hire Me!
					</ScrollLink>
					<button
						onClick={toggleMenu}
						className="lg:p-3 p-2 bg-white sm:bg-slate-100 dark:bg-slate-700 rounded-lg sm:hidden hover:bg-slate-100 hover:sm:bg-slate-200 dark:hover:bg-slate-600 shadow-sm"
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
				</div>
			</header>
			{/* Hero section */}
			<section
				id="home"
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
					<p className="lg:text-base text-sm">
						I craft seamless, user-focused digital experiences, transforming
						complex challenges into impactful solutions. <br /> Let&apos;s
						create something fantastic together.
					</p>
					<div className="text-nowrap flex flex-col md:space-y-5 space-y-3">
						<div className="flex md:space-x-5 space-x-2">
							<ScrollLink
								to="projects"
								smooth={true}
								duration={2000}
								className="lg:px-5 px-2 py-2 bg-theme-color rounded-md hover:bg-blue-400 text-slate-100 lg:text-base text-sm cursor-pointer"
							>
								View Portfolio
							</ScrollLink>
							<a href={myCV} download={myCV}>
								<button className="lg:px-5 px-2 py-2 border border-theme-color dark:border-slate-200 rounded-md hover:bg-blue-400 text-theme-color hover:text-white dark:text-slate-200 lg:text-base text-sm cursor-pointer">
									Download CV
								</button>
							</a>
						</div>
						<div className="flex sm:space-x-5 space-x-2">
							<Link
								to={"https://linkedin.com/in/agyemangmichael233"}
								target={"_blank"}
								className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
							>
								<Linkedin />
							</Link>
							<Link
								to={"https://github.com/RemedyOnline"}
								target={"_blank"}
								className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
							>
								<Github />
							</Link>
							<Link
								to={"https://www.behance.net/agyemangmichael233"}
								target={"_blank"}
							>
								<img
									src={theme === "darkMode" ? behanceWhite2 : behanceBlack}
									alt="behanceLogo"
									className="p-1 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 h-10 w-10 static"
								/>
							</Link>
							<Link
								to={"https://codepen.io/Michael-Agyemang-Prempeh"}
								target={"_blank"}
								className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
							>
								<Codepen />
							</Link>
							<Link
								to={"https://linkedin.com/in/agyemangmichael233"}
								target={"_blank"}
								className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
							>
								<Instagram />
							</Link>
							<Link
								to={"https://linkedin.com/in/agyemangmichael233"}
								target={"_blank"}
								className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
							>
								<Twitter />
							</Link>
							<Link
								to={"https://linkedin.com/in/agyemangmichael233"}
								target={"_blank"}
								className="p-2 shadow-md bg-white dark:bg-slate-700 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
							>
								<Facebook />
							</Link>
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
								<IconComponent className="self-center text-slate-600 dark:text-slate-300 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:rotate-45 transition-all duration-500" />
								<p className="lg:text-2xl md:text-xl text-lg text-theme-color font-bold font-JetBrainsMono">
									{item.numValue}
								</p>
								<p className=" sm:text-sm text-xs">{item.anthem}</p>
							</div>
						);
					})}
				</div>
			</section>
			{/* Services */}
			<section
				className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4"
				id="services"
			>
				<h2 className="md:p-5 p-3 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					My Services
				</h2>
				<div className="md:space-y-5 space-y-4 rounded-xl md:m-5 m-2">
					<div className="grid sm:grid-cols-10 md:gap-5 gap-4">
						{services.slice(0, 2).map((service) => (
							<div
								key={service.id}
								className={`${service.span} bg-slate-100 dark:bg-neutral-800 md:p-8 p-5  shadow-sm hover:shadow-md rounded-xl sm:h-full h-fit`}
							>
								<span className="py-1 px-2 border border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs mb-2 inline-block">
									{service.id}
								</span>
								<h2 className="lg:text-2xl md:text-xl text-lg text-theme-color font-bold font-JetBrainsMono">
									{service.title}
								</h2>
								<p className="sm:text-sm text-xs mt-1 md:mt-2">
									{service.desc}
								</p>
							</div>
						))}
					</div>
					<div className="grid sm:grid-cols-10 md:gap-5 gap-4">
						{services.slice(2, 4).map((service) => (
							<div
								key={service.id}
								className={`${service.span} bg-slate-100 dark:bg-neutral-800 md:p-8 p-5  shadow-sm hover:shadow-md rounded-xl sm:h-full h-fit`}
							>
								<span className="py-1 px-2 border border-slate-500 dark:border-slate-200 rounded-md xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs mb-2 inline-block">
									{service.id}
								</span>
								<h2 className="lg:text-2xl md:text-xl text-lg  text-theme-color font-bold font-JetBrainsMono">
									{service.title}
								</h2>
								<p className="sm:text-sm text-xs mt-1 md:mt-2">
									{service.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* About Me */}
			<section id="about" className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					About Me
				</h2>
				<div className="md:space-y-5 space-y-4 rounded-xl md:m-5 m-2">
					<div className="grid lg:grid-cols-10 md:gap-5 gap-4">
						<div className="flex justify-around lg:col-span-3 md:bg-slate-100 w-full dark:bg-neutral-800 md:p-8 shadow-md md:shadow-sm hover:shadow-md rounded-xl sm:h-full h-fit sm:gap-3">
							<img
								src={graduationPicFold}
								alt="myPicture"
								className="md:col-span-5 rounded-xl sm:w-48 lg:w-full"
							/>
							<img
								src={graduationStraight}
								alt="myPicture"
								className="hidden sm:block lg:hidden rounded-xl sm:w-48"
							/>
							<img
								src={graduationPicSpeak}
								alt="myPicture"
								className="hidden sm:block lg:hidden rounded-xl sm:w-48"
							/>
						</div>
						<div className="lg:col-span-7 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 rounded-xl sm:h-full h-fit shadow-sm hover:shadow-md">
							<h2 className="lg:text-2xl md:text-xl sm:text-lg text-base  font-bold font-JetBrainsMono">
								I&apos;m{" "}
								<span className="text-theme-color">
									Michael Agyemang Prempeh...
								</span>
							</h2>
							<p className="sm:text-sm text-xs">
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
							<div className="flex md:space-x-5 space-x-2">
								<ScrollLink
									to="projects"
									smooth={true}
									duration={2000}
									className="lg:px-5 px-2 py-2 bg-theme-color rounded-md hover:bg-blue-400 text-slate-100 lg:text-base text-sm cursor-pointer"
								>
									View Portfolio
								</ScrollLink>
								<a href={myCV} download={myCV}>
									<button className="lg:px-5 px-2 py-2 border border-theme-color dark:border-slate-200 rounded-md hover:bg-blue-400 text-theme-color hover:text-white dark:text-slate-200 lg:text-base text-sm cursor-pointer">
										Download CV
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="bg-slate-100 dark:bg-neutral-800 rounded-xl md:p-8 p-5 sm:h-full h-fit shadow-sm hover:shadow-md w-full ">
							<h2 className="lg:text-2xl text-xl mb-5 text-theme-color font-bold font-JetBrainsMono">
								Education
							</h2>
							<div className="grid md:grid-cols-2 gap-5">
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-b md:border-r md:pb-5 md:pr-5 dark:border-neutral-700 border-neutral-300">
									<img
										src={mest}
										alt="school-logo"
										className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16"
									/>
									<div className="flex flex-col lg:justify-start gap-1 md:gap-2">
										<p className=" sm:text-sm text-xs">
											Web Development Training
										</p>
										<p className="font-semibold  sm:text-sm text-xs">
											Generation Ghana/MEST Africa
										</p>
										<p className=" sm:text-sm text-xs px-1 py-0.5 border w-fit rounded-md text-theme-color border-theme-color">
											Sept 2024 - Nov 2024
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-b md:border-l md:pb-5 md:pl-5 dark:border-neutral-700 border-neutral-300">
									<img
										src={icms}
										alt="school-logo"
										className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16"
									/>
									<div className="flex flex-col lg:justify-start gap-1 md:gap-2">
										<p className=" sm:text-sm text-xs">
											Advanced Diploma in Occupational Health and Safety
											Management
										</p>
										<p className="font-semibold  sm:text-sm text-xs">
											Imperial College of Mines and Safety
										</p>
										<p className=" sm:text-sm text-xs px-1 py-0.5 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
											Sept 2023 - Mar 2024
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-t md:border-r md:pt-5 md:pr-5 dark:border-neutral-700 border-neutral-300">
									<img
										src={uenr}
										alt="school-logo"
										className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16"
									/>
									<div className="flex flex-col lg:justify-start gap-1 md:gap-2">
										<p className=" sm:text-sm text-xs">
											BSc. Computer Engineering
										</p>
										<p className="font-semibold  sm:text-sm text-xs">
											University of Energy and Natural Resources
										</p>
										<p className=" sm:text-sm text-xs px-1 py-0.5 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
											Sept 2019 - Sept 2023
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-6 sm:gap-4 gap-2 md:border-t md:border-l md:pt-5 md:pl-5 dark:border-neutral-700 border-neutral-300">
									<img
										src={kuhis}
										alt="school-logo"
										className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16"
									/>
									<div className="flex flex-col lg:justify-start gap-1 md:gap-2">
										<p className=" sm:text-sm text-xs">General Science</p>
										<p className="font-semibold  sm:text-sm text-xs">
											Kumasi High School
										</p>
										<p className=" sm:text-sm text-xs px-1 py-0.5 border-[0.1px] w-fit rounded-md text-theme-color border-theme-color">
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
			<section
				id="experience"
				className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4"
			>
				<div>
					<h2 className="md:p-5 p-3 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
						Experience
					</h2>
					<div className="flex flex-col gap-2 sm:gap-0 md:m-5 m-2">
						{/* Experience entry */}
						{experiences.map((experience) => (
							<div key={experience.id} className="sm:flex group">
								<div className="sm:w-1/4 w-full relative">
									<div className=" sm:mt-2 sm:p-3 pb-2 flex gap-2 transition-transform sm:group-hover:scale-105">
										<Clock className="text-gray-500 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 sm:mt-1 md:mt-0 transition-all duration-30 group-hover:text-theme-color" />
										<p className="sm:text-sm text-xs group-hover:text-theme-color self-center">
											{experience.timeSpan}
										</p>
									</div>
								</div>
								<div className="sm:w-3/4 w-full sm:border-l dark:border-neutral-700  border-neutral-400 hover:sm:border-theme-color group">
									<div className="relative">
										{/* Details */}
										<div className="ml-5 p-5 shadow-sm hover:shadow-md bg-slate-100 dark:bg-neutral-800 rounded-xl">
											<span className="absolute top-0 sm:top-6 lg:-left-[9px] md:-left-[7px] sm:-left-[4.5px] left-[5.5px] self-center justify-center flex items-center text-center mx-auto my-auto w-[3px] h-full sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-slate-100 dark:bg-neutral-800 sm:bg-neutral-400 sm:dark:bg-neutral-700 group-hover:bg-theme-color rounded-full shadow-md"></span>
											<h3 className="sm:text-sm text-xs font-semibold group-hover:text-theme-color">
												{experience.myRole}
											</h3>
											<p className="sm:text-sm text-xs text-gray-500">
												{experience.institution}
											</p>
											<p className="hidden sm:block  sm:text-sm text-xs mt-2">
												{experience.descFull}
											</p>
											<div className="block sm:hidden relative">
												<p className=" sm:text-sm text-xs mt-2">
													{isExpanded[experience.id]
														? `${experience.descFull}`
														: `${experience.descBrief}`}
												</p>
												<button
													onClick={() => toggleExpanded(experience.id)}
													className={`text-theme-color underline transition-all duration-300  sm:text-sm text-xs bg-slate-100 dark:bg-neutral-800  font-semibold ${
														isExpanded[experience.id]
															? "static"
															: "absolute right-0 bottom-0 px-1"
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
			<section
				id="projects"
				className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4"
			>
				<h2 className="md:p-5 p-3 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					A Glimpse Into My Work
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
							<h3 className="sm:text-base text-sm font-semibold mx-auto text-center md:mt-2 mt-1">
								{project.title}
							</h3>
							<p className="sm:text-sm text-xs md:mt-2 mt-1">{project.desc}</p>
							<ul className="flex flex-wrap gap-2 md:mt-2 mt-1">
								{project.tech.map((tech, index) => (
									<li
										key={index}
										className="text-xs py-0.5 px-2 bg-blue-100 dark:bg-blue-900 rounded-full"
									>
										{tech}
									</li>
								))}
							</ul>
							<div className="flex gap-2 mx-auto md:mt-4 mt-2 items-center">
								<Link
									to={project.githubLink}
									target={"_blank"}
									className="md:px-4 px-2 py-2 bg-[#010409] rounded-md hover:bg-gray-900 text-slate-200 sm:text-sm text-xs flex gap-1 w-fit h-fit"
								>
									Github Link
									<Github size={iconSize} />
								</Link>
								<Link
									to={project.liveLink}
									target={"_blank"}
									className="md:px-4 px-2 py-2 bg-theme-color rounded-md hover:bg-blue-400 text-slate-200 sm:text-sm text-xs flex gap-1 w-fit h-fit"
								>
									Preview Live
									<MoveUpRight size={iconSize} />
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
			{/* My Stack/Tools */}
			<section className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					Technologies I Work With
				</h2>
				<div className="flex flex-wrap justify-between gap-2 md:gap-5 items-start shadow-sm p-2 md:p-4 sticky top-[72px] md:top-24 left-0 backdrop-blur-md border-2 rounded-xl border-slate-300 dark:border-slate-700 z-40">
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
								className="flex gap-2 items-center px-2 py-1 md:px-4 md:py-2 rounded-lg bg-slate-50 dark:bg-neutral-800 shadow-md"
							>
								<div
									className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full self-center ${toolLegend.bgColor}`}
								></div>
								<span
									className={`self-center text-xs w-4/5 ${toolLegend.textColor}`}
								>
									{toolLegend.title}
								</span>
							</div>
						))}
					</div>
				</div>
				<div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:p-5 p-2">
					{tools.map((tools) => (
						<div
							key={tools.id}
							className={`flex flex-col justify-center items-center shadow-md hover:shadow-lg rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 space-y-0 group mx-auto ${tools.bgColor}`}
						>
							<img
								src={tools.img}
								alt={tools.toolName}
								className="h-12 sm:h-14 md:h-16 lg:h-20 flex mb-1"
							/>
							<h3 className="text-xs sm:text-sm font-semibold group-hover:text-theme-color">
								{tools.toolName}
							</h3>
							<p className="text-xs sm:text-sm text-gray-500">
								{tools.percentage}
							</p>
						</div>
					))}
				</div>
			</section>
			{/* Testimonials */}
			<section className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					What Clients Say
				</h2>
				<div className="grid lg:grid-cols-2 gap-5 md:p-5 p-2">
					{testimonials.map((testimony) => (
						<div
							key={testimony.id}
							className="bg-top bg-cover relative rounded-lg shadow-md hover:shadow-md overflow-hidden"
							style={{
								backgroundImage: `url(${testimony.img})`,
								height: "200px",
								// width: "400px",
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-l from-white dark:from-black via-white/20 dark:via-black/50 to-transparent"></div>

							<div className="bg-white dark:bg-black opacity-70 dark:opacity-70 h-full w-full p-5  dark:text-neutral-100 text-black flex flex-col justify-between items-end">
								<p className="text-sm">{`⭐`.repeat(testimony.rating)}</p>
								<p className="text-end w-2/3 text-xs sm:text-sm">
									<span className="text-3xl text-theme-color font-bold font-PlusJakartaSans mr-1">
										&quot;
									</span>
									{testimony.comment}
								</p>
								<h3 className="font-bold text-theme-color mt-2 md:mt-4 text-xs sm:text-sm">
									{testimony.clientName}
								</h3>
							</div>
						</div>
					))}
				</div>
			</section>
			{/* Contact */}
			<section
				id="contact"
				className="2xl:max-w-7xl mx-auto md:p-10 sm:p-6 p-4"
			>
				<h2 className="md:p-5 p-3 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-Caprasimo text-theme-color">
					Contact Me
				</h2>
				<div className="grid md:grid-cols-2 md:gap-10 gap-4 md:p-5 p-2">
					<div className="flex flex-col w-full gap-3 p-5 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md">
						<h3 className="lg:text-2xl text-xl text-theme-color font-bold font-JetBrainsMono">
							Let&apos;s talk about your project!
						</h3>
						<p className="text-xs sm:text-sm">
							Whether it&apos;s a creative project, a freelance gig, or a
							full-time role, I&apos;m ready to make it happen—let&apos;s build
							something remarkable together.
						</p>
						<div className="flex flex-col gap-2 text-sm md:text-base lg:text-lg">
							<div className="flex gap-3 pl-2 py-2 border-[0.1px] border-neutral-200 dark:border-neutral-700 group">
								<Clock className="mt-1 text-theme-color" />
								<div className="w-full">
									<p className="text-theme-color text-xs sm:text-sm">
										Availability
									</p>
									<div className="flex justify-between lg:justify-start lg:gap-5">
										<p className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-600 line-through">
											Monday-Friday: 9AM – 6PM <br />
											Saturday: 10 AM – 2 PM <br />
											Sunday: Closed
										</p>
										<span className="group-hover:underline text-xs sm:text-sm">
											*Available 24/7💯
										</span>
									</div>
								</div>
							</div>
							<div className="flex gap-3 p-2 border-[0.1px] border-neutral-200 dark:border-neutral-700 group">
								<Phone className="mt-1 text-theme-color" />
								<div className="w-full">
									<p className="text-theme-color text-xs sm:text-sm">Phone</p>
									<a
										className="group-hover:underline text-xs sm:text-sm"
										href="tel: +233555975976"
									>
										+233 555 975 976
									</a>
								</div>
							</div>
							<div className="flex gap-3 p-2 border-[0.1px] border-neutral-200 dark:border-neutral-700 group">
								<Mail className="mt-1 text-theme-color" />
								<div className="w-full">
									<p className="text-theme-color text-xs sm:text-sm">Email</p>
									<a
										className="group-hover:underline text-xs sm:text-sm"
										href="mailto:agyemangmichael555@gmail.com"
									>
										agyemangmichael555@gmail.com
									</a>
								</div>
							</div>
							<div className="flex gap-3 p-2 border-[0.1px] border-neutral-200 dark:border-neutral-700 group">
								<MapPin className="mt-1 text-theme-color" />
								<div className="w-full">
									<p className="text-theme-color text-xs sm:text-sm">Address</p>
									<a
										className="group-hover:underline text-xs sm:text-sm"
										href="https://maps.app.goo.gl/euywUBrFsdxPfyqU9"
										target="_blank"
									>
										Crown Prince Academy (Annex), <br />
										Lapaz, Accra - Ghana
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3 p-5  bg-neutral-100 dark:bg-neutral-800 rounded-xl w-full shadow-sm hover:shadow-md md:justify-between">
						<h3 className="lg:text-2xl text-xl text-theme-color font-bold font-JetBrainsMono">
							Send me a message.
						</h3>
						<p className="text-xs sm:text-sm">
							Feel free to Contact me by submitting the form below and I will
							get back to you as soon as possible..🫡
						</p>
						<form
							ref={form}
							onSubmit={sendEmail}
							className="flex flex-col space-y-4 md:space-y-5 justify-center text-base"
						>
							<label
								htmlFor="name"
								className="block relative rounded-md border-2 shadow-sm focus-within:ring-1 focus-within:ring-theme-color border-neutral-200 dark:border-neutral-700"
							>
								<input
									type="text"
									id="name"
									name="from_name"
									// value={name}
									placeholder="Enter your Name..."
									className="w-full h-full px-2 py-2 md:px-3 md:py-3 placeholder-transparent peer bg-transparent rounded-md border-none focus:border-transparent focus:outline-none focus:ring-0"
									required
								/>
								<span className="pointer-events-none absolute start-2 md:start-4 top-0 -translate-y-1/2 bg-neutral-100 dark:bg-neutral-800 px-1 text-xs sm:text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-focus:top-0">
									Enter your Name...
								</span>
							</label>
							<label
								htmlFor="email"
								className="block relative rounded-md border-2 shadow-sm focus-within:ring-1 focus-within:ring-theme-color border-neutral-200 dark:border-neutral-700"
							>
								<input
									type="email"
									id="email"
									name="from_email"
									// value={email}
									placeholder="Enter your Email..."
									required
									className="w-full h-full px-2 py-2 md:px-3 md:py-3 placeholder-transparent peer bg-transparent rounded-md border-none focus:border-transparent focus:outline-none focus:ring-0"
								/>
								<span className="pointer-events-none absolute start-2 md:start-4 top-0 -translate-y-1/2 bg-neutral-100 dark:bg-neutral-800 px-1 text-xs sm:text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-focus:top-0">
									Enter your Email...
								</span>
							</label>
							<label
								htmlFor="subject"
								className="block relative rounded-md border-2 shadow-sm focus-within:ring-1 focus-within:ring-theme-color border-neutral-200 dark:border-neutral-700"
							>
								<input
									type="text"
									id="subject"
									name="subject"
									// value={subject}
									placeholder="Enter the Subject..."
									className="w-full h-full px-2 py-2 md:px-3 md:py-3 placeholder-transparent peer bg-transparent rounded-md border-none focus:border-transparent focus:outline-none focus:ring-0"
									required
								/>
								<span className="pointer-events-none absolute start-2 md:start-4 top-0 -translate-y-1/2 bg-neutral-100 dark:bg-neutral-800 px-1 text-xs sm:text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-focus:top-0">
									Enter the Subject...
								</span>
							</label>
							<label
								htmlFor="message"
								className="block relative rounded-md border-2 shadow-sm focus-within:ring-1 focus-within:ring-theme-color border-neutral-200 dark:border-neutral-700"
							>
								<textarea
									name="message"
									id="message"
									// value={message}
									placeholder="Enter your Message..."
									className="w-full h-full px-2 py-2 md:px-3 md:py-3 placeholder-transparent peer bg-transparent rounded-md border-none focus:border-transparent focus:outline-none focus:ring-0"
									required
								></textarea>
								<span className="pointer-events-none absolute start-2 md:start-4 top-0 -translate-y-1/2 bg-neutral-100 dark:bg-neutral-800 px-1 text-xs sm:text-sm transition-all peer-placeholder-shown:top-1/4 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-focus:top-0">
									Enter your Message...
								</span>
							</label>
							{successFeedback && (
								<p className="text-xs sm:text-sm text-green-700 text-center py-1 rounded-md bg-green-200">
									{successFeedback}
								</p>
							)}
							{failureFeedback && (
								<p className="text-xs sm:text-sm text-red-700 text-center py-1 rounded-md bg-red-200">
									{failureFeedback}
								</p>
							)}
							<button
								type="submit"
								disabled={isSubmitting}
								className="md:px-5 px-2 py-2 text-xs sm:text-sm bg-theme-color text-slate-100 rounded-md sm:shadow-sm self-end"
							>
								{isSubmitting ? "Sending..." : "Send Message"}
							</button>
						</form>
					</div>
				</div>
			</section>
			{/* Footer */}
			<section className="text-xs sm:text-sm 2xl:max-w-7xl mx-auto md:px-10 sm:px-6 px-4">
				<div className="md:gap-10 gap-4 md:px-5 px-2 space-y-5">
					<div className="space-y-2 sm:space-y-0 flex flex-col sm:flex-row sm:items-center sm:justify-between ">
						<div className="flex gap-5 ">
							<h3 className="lg:text-2xl md:text-xl text-lg text-theme-color font-bold font-JetBrainsMono">
								Let&apos;s stay in touch...
							</h3>
						</div>
						<div className="flex sm:space-x-5 space-x-2 ">
							<Link
								to={"https://linkedin.com/in/agyemangmichael233"}
								target={"_blank"}
								className="p-2 shadow-md bg-neutral-100 dark:bg-neutral-800 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-neutral-700"
							>
								<Linkedin />
							</Link>
							<Link
								to={"https://github.com/RemedyOnline"}
								target={"_blank"}
								className="p-2 shadow-md bg-neutral-100 dark:bg-neutral-800 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-neutral-700"
							>
								<Github />
							</Link>
							<Link
								to={"https://www.behance.net/agyemangmichael233"}
								target={"_blank"}
							>
								<img
									src={theme === "darkMode" ? behanceWhite2 : behanceBlack}
									alt="behanceLogo"
									className="p-1 shadow-md bg-neutral-100 dark:bg-neutral-800 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-neutral-700 h-10 w-10"
								/>
							</Link>
							<Link
								to={"https://codepen.io/Michael-Agyemang-Prempeh"}
								target={"_blank"}
								className="p-2 shadow-md bg-neutral-100 dark:bg-neutral-800 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-neutral-700"
							>
								<Codepen />
							</Link>
							<Link
								to={"https://linkedin.com/in/agyemangmichael233"}
								target={"_blank"}
								className="p-2 shadow-md bg-neutral-100 dark:bg-neutral-800 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-neutral-700"
							>
								<Instagram />
							</Link>
							<Link
								to={"https://linkedin.com/in/agyemangmichael233"}
								target={"_blank"}
								className="p-2 shadow-md bg-neutral-100 dark:bg-neutral-800 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-neutral-700"
							>
								<Twitter />
							</Link>
							<Link
								to={"https://linkedin.com/in/agyemangmichael233"}
								target={"_blank"}
								className="p-2 shadow-md bg-neutral-100 dark:bg-neutral-800 text-gray-500 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-neutral-700"
							>
								<Facebook />
							</Link>
						</div>
					</div>
					<hr className="border-t border-theme-color" />
					<div className="md:pb-10 sm:pb-7 pb-5 flex justify-between">
						<div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5">
							<p>All Rights Reserved!</p>
							<p className="font-semibold">
								&copy; <span className="font-JetBrainsMono">2024</span>
							</p>
						</div>
						<div className="">
							<p>
								Made with{" "}
								<span className="animate-pulseEffect inline-block leading-none">
									❤️
								</span>{" "}
								by{" "}
								<span className="font-semibold text-theme-color font-JetBrainsMono">
									MySelf
								</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default LandingPageMain;
