import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/images/RemedyOnlineLogo.png";
import { useTheme } from "../contexts/ThemeContext";
import myProfilePic from "../assets/images/myProfilePic.png";
import {
	Codepen,
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Moon,
	Sun,
	Twitter,
} from "lucide-react";

const LandingPageMain = () => {
	const { darkMode, toggleTheme } = useTheme();

	return (
		<section>
			<header className="fixed top-0 left-0 z-50 w-full flex justify-around items-center py-2 bg-slate-100 dark:bg-slate-400">
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
						{darkMode ? (
							<Sun className="h-6 w-6 text-gray-500 dark:text-gray-400" />
						) : (
							<Moon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
						)}
					</button>
					<button className="px-5 py-2 xl:text-2xl lg:text-xl md:text-lg sm:text-base bg-theme-color  text-white rounded-md">
						Hire Me!
					</button>
				</div>
			</header>
			<section
				className={`h-screen bg-cover bg-center grid sm:flex justify-center items-center py-20 px-10 bg-lightModeBG dark:bg-darkModeBG ${
					darkMode === "darkMode" ? "darkModeBG" : "lightModeBG"
				} `}
			>
				<div className="mx-auto text-slate-800 dark:text-slate-200">
					<p>Hello...</p>
					<p className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-base">
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
					<br />
					<p className="sm:text-base text-sm">
						I break down complex user experience problems to create integrity
						focussed solutions that connect billions of people...
					</p>
					<br />
					<div className="text-nowrap flex flex-col gap-3">
						<div className="sm:text-base text-sm flex space-x-5">
							<button className="px-3 py-1 bg-theme-color rounded-md hover:bg-blue-400">
								View Portfolio
							</button>
							<button className="px-3 py-1 bg-theme-color rounded-md hover:bg-blue-400">
								Download CV
							</button>
						</div>
						<div className="flex space-x-5">
							<button>
								<Linkedin />
							</button>
							<button>
								<Twitter />
							</button>
							<button>
								<Github />
							</button>
							<button>
								<Codepen />
							</button>
							<button>
								<Instagram />
							</button>
							<button>
								<Facebook />
							</button>
						</div>
					</div>
				</div>
				<div className="mx-auto">
					<img src={myProfilePic} alt="myPicture" className="sm:w-full w-56" />
				</div>
			</section>
		</section>
	);
};

export default LandingPageMain;
