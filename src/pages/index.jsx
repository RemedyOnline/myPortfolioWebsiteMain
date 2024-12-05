import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/images/RemedyOnlineLogo.png";
import { useTheme } from "../contexts/ThemeContext";
import myProfilePic from "../assets/images/myProfilePic.png";
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
	Codepen,
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Moon,
	Sun,
	Trophy,
	Twitter,
	UserCheck,
	Users2,
} from "lucide-react";

const LandingPageMain = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<section className="bg-slate-200 dark:bg-neutral-900 text-slate-800 dark:text-slate-200">
			{/* Navbar... */}
			<header
				id="navbar-section"
				className="fixed top-0 left-0 z-50 w-full flex justify-around items-center py-2 backdrop-blur-md border-b-[0.1px] border-slate-300 dark:border-slate-600"
			>
				<div className="flex justify-center">
					<img
						src={logo}
						className="xl:h-20 lg:h-16 md:h-14 h-12 self-center"
						alt="logo"
					/>
					<div className="xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold self-center">
						<p>
							<span className="text-theme-color underline">R</span>emedy <br />
							<span className="text-theme-color underline">O</span>nline
						</p>
					</div>
				</div>
				<nav className="xl:text-2xl lg:text-xl md:text-lg sm:text-base sm:flex 2xl:gap-8 xl:gap-6 lg:gap-4 md:gap-2 sm:gap-1 hidden">
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
				<div className="flex items-center lg:gap-6 md:gap-4 sm:gap-2 gap-1   text-nowrap">
					<button
						onClick={toggleTheme}
						className="lg:p-3 p-2 bg-slate-200 dark:bg-slate-500 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
					>
						{theme === "darkMode" ? (
							<Sun className="h-6 w-6 text-gray-500 dark:text-slate-200" />
						) : (
							<Moon className="h-6 w-6 text-gray-500 dark:text-slate-200" />
						)}
					</button>
					<button className="px-5 py-2 xl:text-2xl lg:text-xl md:text-lg sm:text-base bg-theme-color  text-slate-200 rounded-md">
						Hire Me!
					</button>
				</div>
			</header>
			{/* Hero section */}
			<section
				id="hero-section"
				className={`h-screen bg-cover bg-center overflow-hidden grid md:flex justify-center items-center py-20 px-10 bg-lightModeBG dark:bg-darkModeBG ${
					theme === "darkMode" ? "darkModeBG" : "lightModeBG"
				} `}
			>
				<div className="sm:space-y-5 space-y-2 mx-auto md:w-2/3">
					<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base">
						Hello...
					</p>
					<p className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">
						I&apos;m{" "}
						<span className="text-theme-color font-JetBrainsMono">
							&lt;Michael/&gt;
						</span>
						<br />A passionate{" "}
						<span className="text-theme-color font-semibold font-JetBrainsMono">
							Frontend Web Developer👨‍💻
						</span>{" "}
						<br />&{" "}
						<span className="text-theme-color font-semibold font-JetBrainsMono">
							UX Designer🎨
						</span>
					</p>
					<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
						I craft seamless, user-focused digital experiences, transforming
						complex challenges into impactful solutions. <br /> Let&apos;s
						create something extraordinary together.
					</p>
					<div className="text-nowrap flex flex-col md:space-y-5 space-y-2">
						<div className="sm:text-base text-sm flex md:space-x-5 space-x-2">
							<button className="md:px-5 px-2 py-2 bg-theme-color rounded-md hover:bg-blue-400 text-slate-200 xl:text-2xl lg:text-xl md:text-lg sm:text-base">
								View Portfolio
							</button>
							<button className="md:px-5 px-2 py-2 border-2 border-theme-color dark:border-slate-200 rounded-md hover:bg-blue-400 text-theme-color dark:text-slate-200 xl:text-2xl lg:text-xl md:text-lg sm:text-base">
								Download CV
							</button>
						</div>
						<div className="flex sm:space-x-5 space-x-2 text-slate-800">
							<button className="p-2 bg-slate-200 dark:bg-neutral-400 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Linkedin />
							</button>
							<button className="p-2 bg-slate-200 dark:bg-neutral-400 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Github />
							</button>
							<button className="p-2 bg-slate-200 dark:bg-neutral-400 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Codepen />
							</button>
							<button className="p-2 bg-slate-200 dark:bg-neutral-400 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Instagram />
							</button>
							<button className="p-2 bg-slate-200 dark:bg-neutral-400 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Twitter />
							</button>
							<button className="p-2 bg-slate-200 dark:bg-neutral-400 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">
								<Facebook />
							</button>
						</div>
					</div>
				</div>
				<div className="mx-auto">
					<img src={myProfilePic} alt="myPicture" className="sm:w-full w-56" />
				</div>
			</section>
			{/* Hallmark */}
			<section className="md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-Caprasimo text-theme-color">
					My HallMark
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3">
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-5 md:space-y-3 space-y-1">
						<BriefcaseBusiness
							size={40}
							className="self-center text-slate-600 dark:text-slate-300"
						/>
						<p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
							2+
						</p>
						<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
							Years of Experience
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-5 md:space-y-3 space-y-1">
						<Trophy
							size={40}
							className="self-center text-slate-600 dark:text-slate-300"
						/>
						<p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
							14+
						</p>
						<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
							Completed Projects
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-5 md:space-y-3 space-y-1">
						<UserCheck
							size={40}
							className="self-center text-slate-600 dark:text-slate-300"
						/>
						<p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
							100+
						</p>
						<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
							Satified Clients
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-5 md:space-y-3 space-y-1">
						<BookCheck
							size={40}
							className="self-center text-slate-600 dark:text-slate-300"
						/>
						<p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
							7+
						</p>
						<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
							Languages / Frameworks
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-5 md:space-y-3 space-y-1">
						<Award
							size={40}
							className="self-center text-slate-600 dark:text-slate-300"
						/>
						<p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
							11+
						</p>
						<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
							Certifications Earned
						</p>
					</div>
					<div className="md:p-5 md:m-5 m-2 p-2 bg-slate-100 dark:bg-neutral-800 rounded-xl text-center flex flex-col text-wrap lg:space-y-5 md:space-y-3 space-y-1">
						<Users2
							size={40}
							className="self-center text-slate-600 dark:text-slate-300"
						/>
						<p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
							2+
						</p>
						<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
							Cross-Functional Team Collaborations
						</p>
					</div>
				</div>
			</section>
			{/* Services */}
			<section className="md:p-10 sm:p-6 p-4">
				<h2 className="md:p-5 p-3 xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-Caprasimo text-theme-color">
					My Services
				</h2>
				<div className="md:space-y-10 space-y-4 rounded-xl md:m-5 m-2">
					<div className="grid sm:grid-cols-10 md:gap-10 gap-4">
						<div className="sm:col-span-6 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
								1
							</span>
							<h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
								Frontend Web Development👨‍💻
							</h2>
							<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
								I build responsive and interactive websites using TailwindCSS
								and modern frameworks like React, ensuring optimal performance
								across devices.
							</p>
						</div>
						<div className="sm:col-span-4 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
								2
							</span>
							<h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
								Graphic Design🖼️
							</h2>
							<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
								I create visually appealing graphics, logos, and digital assets
								that align with branding and marketing goals.
							</p>
						</div>
					</div>
					<div className="grid sm:grid-cols-10 md:gap-10 gap-4">
						<div className="sm:col-span-4 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
								3
							</span>
							<h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
								IT Support Specialist🛠️
							</h2>
							<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
								With a Computer Engineering background, I provide technical
								support, troubleshoot hardware/software issues, and ensure
								system efficiency.
							</p>
						</div>
						<div className="sm:col-span-6 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 rounded-xl sm:h-full h-fit">
							<span className="py-1 px-2 border-2 border-slate-500 dark:border-slate-200 rounded-md xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
								4
							</span>
							<h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
								UI/UX Design🎨
							</h2>
							<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
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
				<h2 className="md:p-5 p-3 xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-Caprasimo text-theme-color">
					About Me
				</h2>
				<div className="md:space-y-10 space-y-4 rounded-xl md:m-5 m-2">
					<div className="grid sm:grid-cols-10 md:gap-10 gap-4">
						<div className="sm:col-span-4 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 rounded-xl sm:h-full h-fit">
							<img
								src={myPassportPic}
								alt="myPicture"
								className="sm:col-span-5 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 rounded-xl "
							/>
						</div>
						<div className="sm:col-span-6 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 rounded-xl sm:h-full h-fit">
							<h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
								<span className="text-slate-600 dark:text-slate-300 ">
									I&apos;m
								</span>{" "}
								Michael Agyemang Prempeh...
							</h2>
							<p className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm">
								I am a Frontend Web Developer with hands on experience in
								crafting responsive, user friendly web interfaces. Over the past
								year, I have honed my skills in building modern, interactive
								websites using HTML, CSS, JavaScript, and frameworks like React.
								My background in UI/UX Design equips me with a unique ability to
								blend aesthetics and functionality, ensuring seamless user
								experiences. Proficient in tools like Figma and Adobe Creative
								Suite, I bring a user centered approach to every project,
								collaborating effectively with teams to deliver innovative and
								impactful digital solutions.
							</p>
						</div>
					</div>
					<div className="grid sm:grid-cols-10 md:gap-10 gap-4">
						<div className="sm:col-span-5 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5  rounded-xl sm:h-full h-fit">
							<h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
								Education
							</h2>
							<div className="lg:space-y-5 md:space-y-3 space-y-2 xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm">
								<div className="flex lg:gap-8 md:gap-5 sm:gap-3 gap-2">
									<img
										src={mest}
										alt="school-logo"
										className="lg:w-36 md:w-24 w-16 lg:h-36 md:h-24 h-16"
									/>
									<div>
										<p className="lg:text-2xl md:text-xl sm:text-lg text-base">
											Web Development Training
										</p>
										<p className="font-bold lg:text-2xl md:text-xl sm:text-lg text-base">
											Generation Ghana/MEST Africa
										</p>
										<p className="lg:text-xl md:text-lg sm:text-base text-xs p-1 border-2 w-fit rounded-md">
											Sept 2024 - Present
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-5 sm:gap-3 gap-2">
									<img
										src={icms}
										alt="school-logo"
										className="lg:w-36 md:w-24 w-16 lg:h-36 md:h-24 h-16"
									/>
									<div>
										<p className="lg:text-2xl md:text-xl sm:text-lg text-base">
											Advanced Diploma in Occupational Health and Safety
											Management
										</p>
										<p className="font-bold lg:text-2xl md:text-xl sm:text-lg text-base">
											Imperial College of Mines and Safety
										</p>
										<p className="lg:text-xl md:text-lg sm:text-base text-xs p-1 border-2 w-fit rounded-md">
											Sept 2019 - Sept 2023
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-5 sm:gap-3 gap-2">
									<img
										src={uenr}
										alt="school-logo"
										className="lg:w-36 md:w-24 w-16 lg:h-36 md:h-24 h-16"
									/>
									<div>
										<p className="lg:text-2xl md:text-xl sm:text-lg text-base">
											BSc. Computer Engineering
										</p>
										<p className="font-bold lg:text-2xl md:text-xl sm:text-lg text-base">
											University of Energy and Natural Resources
										</p>
										<p className="lg:text-xl md:text-lg sm:text-base text-xs p-1 border-2 w-fit rounded-md">
											Sept 2019 - Sept 2023
										</p>
									</div>
								</div>
								<div className="flex lg:gap-8 md:gap-5 sm:gap-3 gap-2">
									<img
										src={kuhis}
										alt="school-logo"
										className="lg:w-36 md:w-24 w-16 lg:h-36 md:h-24 h-16"
									/>
									<div>
										<p className="lg:text-2xl md:text-xl sm:text-lg text-base">
											General Science
										</p>
										<p className="font-bold lg:text-2xl md:text-xl sm:text-lg text-base">
											Kumasi High School
										</p>
										<p className="lg:text-xl md:text-lg sm:text-base text-xs p-1 border-2 w-fit rounded-md">
											July 2016 - July 2019
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="sm:col-span-5 bg-slate-100 dark:bg-neutral-800 md:p-8 p-5 md:space-y-5 space-y-2 rounded-xl sm:h-full h-fit">
							<h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-theme-color font-bold font-JetBrainsMono">
								Experience
							</h2>
							<p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-sm">
								I design intuitive and visually engaging user interfaces,
								focusing on seamless user experiences for both web and mobile
								applications.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* Education */}
			{/* Experience */}
			{/* My Stack/Tools */}
			{/* Testimonials */}
			{/* Contact */}
		</section>
	);
};

export default LandingPageMain;
