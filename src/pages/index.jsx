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
        "LCrDScquVg1RPMliD",
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
    <section className="bg-slate-200 text-slate-800 dark:bg-neutral-900 dark:text-slate-200">
      {/* Navbar... */}
      <header
        id="navbar-section"
        className="fixed left-1/2 top-3 z-50 flex w-11/12 -translate-x-1/2 transform items-center justify-between rounded-xl border-2 border-slate-300 px-3 py-1 shadow-sm backdrop-blur-md dark:border-slate-700 md:top-5 md:justify-around md:px-0"
      >
        <ScrollLink
          to="home"
          smooth={true}
          duration={2000}
          className="flex justify-center gap-1"
        >
          <img
            src={logo}
            className="h-11 self-center p-1 hover:cursor-pointer md:h-12 lg:h-14"
            alt="logo"
          />
        </ScrollLink>
        <nav
          className={`flex w-5/12 flex-col gap-2 bg-slate-100 px-4 py-3 text-sm shadow-md transition-all duration-700 dark:bg-neutral-900 sm:static sm:w-auto sm:flex-row sm:items-center sm:bg-transparent sm:py-2 sm:shadow-none dark:sm:bg-transparent lg:gap-4 lg:text-base xl:gap-6 2xl:gap-8 ${
            isMenuOpen
              ? "absolute right-0 top-12 block"
              : "absolute -top-96 right-0 sm:flex"
          }`}
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={2000}
            className="rounded-xl px-2 py-2 hover:cursor-pointer hover:underline"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={2000}
            className="rounded-xl px-2 py-2 hover:cursor-pointer hover:underline"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={2000}
            className="rounded-xl px-2 py-2 hover:cursor-pointer hover:underline"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={2000}
            className="rounded-xl px-2 py-2 hover:cursor-pointer hover:underline"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={2000}
            className="rounded-xl px-2 py-2 hover:cursor-pointer hover:underline"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={2000}
            className="rounded-xl px-2 py-2 hover:cursor-pointer hover:underline"
          >
            Contact
          </ScrollLink>
        </nav>
        <div
          className={`flex items-center gap-3 text-nowrap shadow-none transition-all duration-700 sm:static sm:mt-0 sm:w-auto sm:bg-transparent sm:px-0 dark:sm:bg-transparent md:gap-4 lg:gap-5`}
        >
          <button
            onClick={toggleTheme}
            className={
              "rounded-lg bg-white p-2 shadow-sm transition-transform duration-500 ease-in-out hover:bg-slate-100 hover:shadow-md dark:bg-slate-700 dark:hover:bg-slate-600 sm:bg-slate-100 sm:shadow-md hover:sm:bg-slate-200 lg:p-2.5"
            }
          >
            <div
              className={`transition-transform ease-in-out ${
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
            className="rounded-lg bg-theme-color px-2 py-2 text-sm text-slate-100 shadow-sm hover:cursor-pointer hover:bg-blue-400 md:shadow-md lg:px-5 lg:text-base"
          >
            Hire Me!
          </ScrollLink>
          <button
            onClick={toggleMenu}
            className="rounded-lg bg-white p-2 shadow-sm hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 sm:hidden sm:bg-slate-100 hover:sm:bg-slate-200 lg:p-3"
          >
            <div
              className={`transition-transform duration-200 ease-in-out ${
                isMenuOpen ? "rotate-0" : "rotate-180"
              }`}
            >
              {isMenuOpen ? (
                <ChevronUp className="h-5 w-5 text-gray-500 dark:text-slate-200 md:h-6 md:w-6" />
              ) : (
                <Menu className="h-5 w-5 text-gray-500 dark:text-slate-200 md:h-6 md:w-6" />
              )}
            </div>
          </button>
        </div>
      </header>
      {/* Hero section */}
      <section
        id="home"
        className={`grid h-screen gap-5 overflow-hidden bg-lightModeBG bg-cover bg-center px-6 py-20 dark:bg-darkModeBG sm:px-10 md:flex md:items-center md:justify-center md:gap-0 ${
          theme === "darkMode" ? "darkModeBG" : "lightModeBG"
        } `}
      >
        <div className="space-y-2 sm:space-y-3 md:w-1/2 md:space-y-4 lg:space-y-5">
          <div className="mx-auto sm:space-y-2 xl:space-y-1 2xl:space-y-4">
            <p className="mb-2 text-sm md:mb-3 md:text-base lg:mb-4 lg:text-lg xl:text-xl 2xl:text-2xl">
              Hello...👋
            </p>
            <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              I&apos;m{" "}
              <span className="font-JetBrainsMono font-bold text-theme-color">
                &lt;Michael/&gt;
              </span>
            </p>
            <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              A{" "}
              <span className="font-JetBrainsMono font-bold text-theme-color">
                Frontend Developer👨‍💻
              </span>
            </p>
            <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              &{" "}
              <span className="font-JetBrainsMono font-bold text-theme-color">
                Product Designer🎨
              </span>
            </p>
          </div>
          <p className="text-sm lg:text-base">
            I craft seamless, user-focused digital experiences, transforming
            complex challenges into impactful solutions. <br /> Let&apos;s
            create something fantastic together.
          </p>
          <div className="flex flex-col space-y-3 text-nowrap md:space-y-5">
            <div className="flex space-x-2 md:space-x-5">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={2000}
                className="cursor-pointer rounded-md bg-theme-color px-2 py-2 text-sm text-slate-100 hover:bg-blue-400 lg:px-5 lg:text-base"
              >
                View Portfolio
              </ScrollLink>
              <a href={myCV} download={myCV}>
                <button className="cursor-pointer rounded-md border border-theme-color px-2 py-2 text-sm text-theme-color hover:bg-blue-400 hover:text-white dark:border-slate-200 dark:text-slate-200 lg:px-5 lg:text-base">
                  Download CV
                </button>
              </a>
            </div>
            <div className="flex space-x-2 sm:space-x-5">
              <Link
                to={"https://linkedin.com/in/agyemangmichael233"}
                target={"_blank"}
                className="rounded-lg bg-white p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              >
                <Linkedin />
              </Link>
              <Link
                to={"https://github.com/RemedyOnline"}
                target={"_blank"}
                className="rounded-lg bg-white p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              >
                <Github />
              </Link>
              <Link
                to={"https://www.behance.net/agyemangmichael233"}
                target={"_blank"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-behance static h-10 w-10 rounded-lg bg-white p-1 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                  <path d="M3 12l4.5 0" />
                  <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                  <path d="M16 6l3 0" />
                </svg>
              </Link>
              <Link
                to={"https://codepen.io/Michael-Agyemang-Prempeh"}
                target={"_blank"}
                className="rounded-lg bg-white p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              >
                <Codepen />
              </Link>
              <Link
                to={"https://linkedin.com/in/agyemangmichael233"}
                target={"_blank"}
                className="rounded-lg bg-white p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              >
                <Instagram />
              </Link>
              <Link
                to={"https://linkedin.com/in/agyemangmichael233"}
                target={"_blank"}
                className="rounded-lg bg-white p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              >
                <Twitter />
              </Link>
              <Link
                to={"https://linkedin.com/in/agyemangmichael233"}
                target={"_blank"}
                className="rounded-lg bg-white p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
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
            className="mx-auto w-48 md:ml-5 md:w-52 lg:ml-10 lg:w-60 xl:w-60 2xl:ml-16 2xl:w-96"
          />
        </div>
      </section>
      {/* Hallmark */}
      <section className="mx-auto p-4 sm:p-6 md:p-10 2xl:max-w-7xl">
        <h2 className="p-3 font-Caprasimo text-2xl text-theme-color md:p-5 md:text-3xl lg:text-4xl xl:text-5xl">
          My HallMark
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {hallmark.map((item) => {
            const IconComponent = iconComponents[item.icon];
            return (
              <div
                key={item.id}
                className="group m-2 flex flex-col space-y-1 text-wrap rounded-xl bg-slate-100 p-2 text-center shadow-sm hover:shadow-md dark:bg-neutral-800 md:m-5 md:space-y-2 md:p-5"
              >
                <IconComponent className="h-6 w-6 self-center text-slate-600 transition-all duration-500 group-hover:rotate-45 dark:text-slate-300 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                <p className="font-JetBrainsMono text-lg font-bold text-theme-color md:text-xl lg:text-2xl">
                  {item.numValue}
                </p>
                <p className="text-xs sm:text-sm">{item.anthem}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Services */}
      <section
        className="mx-auto p-4 sm:p-6 md:p-10 2xl:max-w-7xl"
        id="services"
      >
        <h2 className="p-3 font-Caprasimo text-2xl text-theme-color md:p-5 md:text-3xl lg:text-4xl xl:text-5xl">
          My Services
        </h2>
        <div className="m-2 space-y-4 rounded-xl md:m-5 md:space-y-5">
          <div className="grid gap-4 sm:grid-cols-10 md:gap-5">
            {services.slice(0, 2).map((service) => (
              <div
                key={service.id}
                className={`${service.span} h-fit rounded-xl bg-slate-100 p-5 shadow-sm hover:shadow-md dark:bg-neutral-800 sm:h-full md:p-8`}
              >
                <span className="mb-2 inline-block rounded-md border border-slate-500 px-2 py-1 text-xs dark:border-slate-200 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  {service.id}
                </span>
                <h2 className="font-JetBrainsMono text-lg font-bold text-theme-color md:text-xl lg:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm md:mt-2">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-10 md:gap-5">
            {services.slice(2, 4).map((service) => (
              <div
                key={service.id}
                className={`${service.span} h-fit rounded-xl bg-slate-100 p-5 shadow-sm hover:shadow-md dark:bg-neutral-800 sm:h-full md:p-8`}
              >
                <span className="mb-2 inline-block rounded-md border border-slate-500 px-2 py-1 text-xs dark:border-slate-200 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  {service.id}
                </span>
                <h2 className="font-JetBrainsMono text-lg font-bold text-theme-color md:text-xl lg:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm md:mt-2">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Me */}
      <section id="about" className="mx-auto p-4 sm:p-6 md:p-10 2xl:max-w-7xl">
        <h2 className="p-3 font-Caprasimo text-2xl text-theme-color md:p-5 md:text-3xl lg:text-4xl xl:text-5xl">
          About Me
        </h2>
        <div className="m-2 space-y-4 rounded-xl md:m-5 md:space-y-5">
          <div className="grid gap-4 md:gap-5 lg:grid-cols-10">
            <div className="flex h-fit w-full justify-around rounded-xl shadow-md hover:shadow-md dark:bg-neutral-800 sm:h-full sm:gap-3 md:bg-slate-100 md:p-8 md:shadow-sm lg:col-span-3">
              <img
                src={graduationPicFold}
                alt="myPicture"
                className="rounded-xl sm:w-48 md:col-span-5 lg:w-full"
              />
              <img
                src={graduationStraight}
                alt="myPicture"
                className="hidden rounded-xl sm:block sm:w-48 lg:hidden"
              />
              <img
                src={graduationPicSpeak}
                alt="myPicture"
                className="hidden rounded-xl sm:block sm:w-48 lg:hidden"
              />
            </div>
            <div className="h-fit space-y-2 rounded-xl bg-slate-100 p-5 shadow-sm hover:shadow-md dark:bg-neutral-800 sm:h-full md:space-y-5 md:p-8 lg:col-span-7">
              <h2 className="font-JetBrainsMono text-base font-bold sm:text-lg md:text-xl lg:text-2xl">
                I&apos;m{" "}
                <span className="text-theme-color">
                  Michael Agyemang Prempeh...
                </span>
              </h2>
              <p className="text-xs sm:text-sm">
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
              <div className="flex space-x-2 md:space-x-5">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={2000}
                  className="cursor-pointer rounded-md bg-theme-color px-2 py-2 text-sm text-slate-100 hover:bg-blue-400 lg:px-5 lg:text-base"
                >
                  View Portfolio
                </ScrollLink>
                <a href={myCV} download={myCV}>
                  <button className="cursor-pointer rounded-md border border-theme-color px-2 py-2 text-sm text-theme-color hover:bg-blue-400 hover:text-white dark:border-slate-200 dark:text-slate-200 lg:px-5 lg:text-base">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-fit w-full rounded-xl bg-slate-100 p-5 shadow-sm hover:shadow-md dark:bg-neutral-800 sm:h-full md:p-8">
              <h2 className="mb-5 font-JetBrainsMono text-xl font-bold text-theme-color lg:text-2xl">
                Education
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex gap-2 border-neutral-300 dark:border-neutral-700 sm:gap-4 md:gap-6 md:border-b md:border-r md:pb-5 md:pr-5 lg:gap-8">
                  <img
                    src={mest}
                    alt="school-logo"
                    className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
                  />
                  <div className="flex flex-col gap-1 md:gap-2 lg:justify-start">
                    <p className="text-xs sm:text-sm">
                      Web Development Training
                    </p>
                    <p className="text-xs font-semibold sm:text-sm">
                      Generation Ghana/MEST Africa
                    </p>
                    <p className="w-fit rounded-md border border-theme-color px-1 py-0.5 text-xs text-theme-color sm:text-sm">
                      Sept 2024 - Nov 2024
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 border-neutral-300 dark:border-neutral-700 sm:gap-4 md:gap-6 md:border-b md:border-l md:pb-5 md:pl-5 lg:gap-8">
                  <img
                    src={icms}
                    alt="school-logo"
                    className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
                  />
                  <div className="flex flex-col gap-1 md:gap-2 lg:justify-start">
                    <p className="text-xs sm:text-sm">
                      Advanced Diploma in Occupational Health and Safety
                      Management
                    </p>
                    <p className="text-xs font-semibold sm:text-sm">
                      Imperial College of Mines and Safety
                    </p>
                    <p className="w-fit rounded-md border-[0.1px] border-theme-color px-1 py-0.5 text-xs text-theme-color sm:text-sm">
                      Sept 2023 - Mar 2024
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 border-neutral-300 dark:border-neutral-700 sm:gap-4 md:gap-6 md:border-r md:border-t md:pr-5 md:pt-5 lg:gap-8">
                  <img
                    src={uenr}
                    alt="school-logo"
                    className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
                  />
                  <div className="flex flex-col gap-1 md:gap-2 lg:justify-start">
                    <p className="text-xs sm:text-sm">
                      BSc. Computer Engineering
                    </p>
                    <p className="text-xs font-semibold sm:text-sm">
                      University of Energy and Natural Resources
                    </p>
                    <p className="w-fit rounded-md border-[0.1px] border-theme-color px-1 py-0.5 text-xs text-theme-color sm:text-sm">
                      Sept 2019 - Sept 2023
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 border-neutral-300 dark:border-neutral-700 sm:gap-4 md:gap-6 md:border-l md:border-t md:pl-5 md:pt-5 lg:gap-8">
                  <img
                    src={kuhis}
                    alt="school-logo"
                    className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
                  />
                  <div className="flex flex-col gap-1 md:gap-2 lg:justify-start">
                    <p className="text-xs sm:text-sm">General Science</p>
                    <p className="text-xs font-semibold sm:text-sm">
                      Kumasi High School
                    </p>
                    <p className="w-fit rounded-md border-[0.1px] border-theme-color px-1 py-0.5 text-xs text-theme-color sm:text-sm">
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
        className="mx-auto p-4 sm:p-6 md:p-10 2xl:max-w-7xl"
      >
        <div>
          <h2 className="p-3 font-Caprasimo text-2xl text-theme-color md:p-5 md:text-3xl lg:text-4xl xl:text-5xl">
            Experience
          </h2>
          <div className="m-2 flex flex-col gap-2 sm:gap-0 md:m-5">
            {/* Experience entry */}
            {experiences.map((experience) => (
              <div key={experience.id} className="group sm:flex">
                <div className="relative w-full sm:w-1/4">
                  <div className="flex gap-2 pb-2 transition-transform sm:mt-2 sm:p-3 sm:group-hover:scale-105">
                    <Clock className="duration-30 h-5 w-5 text-gray-500 transition-all group-hover:text-theme-color dark:text-gray-400 sm:mt-1 sm:h-4 sm:w-6 md:mt-0 md:h-6 md:w-6 xl:h-8 xl:w-8" />
                    <p className="self-center text-xs group-hover:text-theme-color sm:text-sm">
                      {experience.timeSpan}
                    </p>
                  </div>
                </div>
                <div className="group w-full border-neutral-400 dark:border-neutral-700 sm:w-3/4 sm:border-l hover:sm:border-theme-color">
                  <div className="relative">
                    {/* Details */}
                    <div className="ml-5 rounded-xl bg-slate-100 p-5 shadow-sm hover:shadow-md dark:bg-neutral-800">
                      <span className="absolute left-[5.5px] top-0 mx-auto my-auto flex h-full w-[3px] items-center justify-center self-center rounded-full bg-slate-100 text-center shadow-md group-hover:bg-theme-color dark:bg-neutral-800 sm:-left-[4.5px] sm:top-6 sm:h-2 sm:w-2 sm:bg-neutral-400 sm:dark:bg-neutral-700 md:-left-[7px] md:h-3 md:w-3 lg:-left-[9px] lg:h-4 lg:w-4"></span>
                      <h3 className="text-xs font-semibold group-hover:text-theme-color sm:text-sm">
                        {experience.myRole}
                      </h3>
                      <p className="text-xs text-gray-500 sm:text-sm">
                        {experience.institution}
                      </p>
                      <p className="mt-2 hidden text-xs sm:block sm:text-sm">
                        {experience.descFull}
                      </p>
                      <div className="relative block sm:hidden">
                        <p className="mt-2 text-xs sm:text-sm">
                          {isExpanded[experience.id]
                            ? `${experience.descFull}`
                            : `${experience.descBrief}`}
                        </p>
                        <button
                          onClick={() => toggleExpanded(experience.id)}
                          className={`bg-slate-100 text-xs font-semibold text-theme-color underline transition-all duration-300 dark:bg-neutral-800 sm:text-sm ${
                            isExpanded[experience.id]
                              ? "static"
                              : "absolute bottom-0 right-0 px-1"
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
                    <div className="relative w-full sm:w-1/4">
                      <div className="flex gap-2 pb-2 transition-transform sm:mt-2 sm:p-3 sm:group-hover:scale-105">
                        <p className="self-center text-xs group-hover:text-theme-color sm:text-sm md:text-base lg:text-lg">
                          {" "}
                        </p>
                      </div>
                    </div>
                    <div className="w-full border-neutral-400 dark:border-neutral-700 sm:w-3/4 sm:border-none">
                      <div className="relative">
                        {/* Details */}
                        <div className="">
                          <h3 className="text-sm font-bold md:text-base lg:text-lg">
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
        className="mx-auto p-4 sm:p-6 md:p-10 2xl:max-w-7xl"
      >
        <h2 className="p-3 font-Caprasimo text-2xl text-theme-color md:p-5 md:text-3xl lg:text-4xl xl:text-5xl">
          A Glimpse Into My Work
        </h2>
        <div className="grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 md:gap-10 md:p-5 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group mx-auto flex flex-col justify-between rounded-xl bg-slate-100 p-4 shadow-sm hover:shadow-md dark:bg-neutral-800"
            >
              <div className="relative mx-auto h-64 w-72 bg-monitorBG bg-cover bg-top md:h-72 md:w-80">
                <div className="group">
                  <img
                    src={project.images[currentImageIndex[project.id] || 0]}
                    // alt={project.title + " snapshots"} // this is very valid... Thus, using Template Literal.
                    // alt={`${project.title} snapshots`} // this is also very valid... Thus, using string concatenation...
                    alt={`Snapshot ${currentImageIndex[project.id] + 1} of ${
                      project.title
                    }...`}
                    className="mx-auto h-40 w-full px-3 pb-2 pt-3 md:h-44 md:pb-1"
                  />
                  <button
                    onClick={() =>
                      handlePrevImage(project.id, project.images.length)
                    }
                    className="absolute left-5 top-[163px] rounded-full bg-white bg-opacity-70 p-1 text-black opacity-100 shadow-lg transition-all duration-500 hover:scale-110 hover:bg-blue-200 sm:top-full sm:opacity-0 sm:group-hover:opacity-100 md:group-hover:top-[185px]"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={() =>
                      handleNextImage(project.id, project.images.length)
                    }
                    className="absolute right-5 top-[163px] rounded-full bg-white bg-opacity-70 p-1 text-black opacity-100 shadow-lg transition-all duration-500 hover:scale-110 hover:bg-blue-200 sm:top-full sm:opacity-0 sm:group-hover:opacity-100 md:group-hover:top-[185px]"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
              <h3 className="mx-auto mt-1 text-center text-sm font-semibold sm:text-base md:mt-2">
                {project.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm md:mt-2">{project.desc}</p>
              <ul className="mt-1 flex flex-wrap gap-2 md:mt-2">
                {project.tech.map((tech, index) => (
                  <li
                    key={index}
                    className="rounded-full bg-blue-100 px-2 py-0.5 text-xs dark:bg-blue-900"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mx-auto mt-2 flex items-center gap-2 md:mt-4">
                <Link
                  to={project.githubLink}
                  target={"_blank"}
                  className="flex h-fit w-fit gap-1 rounded-md bg-[#010409] px-2 py-2 text-xs text-slate-200 hover:bg-gray-900 sm:text-sm md:px-4"
                >
                  Github Link
                  <Github size={iconSize} />
                </Link>
                <Link
                  to={project.liveLink}
                  target={"_blank"}
                  className="flex h-fit w-fit gap-1 rounded-md bg-theme-color px-2 py-2 text-xs text-slate-200 hover:bg-blue-400 sm:text-sm md:px-4"
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
      <section className="mx-auto p-4 sm:p-6 md:p-10 2xl:max-w-7xl">
        <h2 className="p-3 font-Caprasimo text-2xl text-theme-color md:p-5 md:text-3xl lg:text-4xl xl:text-5xl">
          Technologies I Work With
        </h2>
        <div className="sticky left-0 top-[72px] z-40 flex flex-wrap items-start justify-between gap-2 rounded-xl border-2 border-slate-300 p-2 shadow-sm backdrop-blur-md dark:border-slate-700 md:top-24 md:gap-5 md:p-4">
          <div className="flex items-center justify-center gap-2 text-theme-color md:gap-3">
            <Info size={32} />
            <span className="text-sm font-black sm:text-lg md:text-xl lg:text-2xl">
              KEY:
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-3">
            {toolsLegend.map((toolLegend) => (
              <div
                key={toolLegend.id}
                className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-1 shadow-md dark:bg-neutral-800 md:px-4 md:py-2"
              >
                <div
                  className={`h-3 w-3 self-center rounded-full md:h-4 md:w-4 lg:h-5 lg:w-5 ${toolLegend.bgColor}`}
                ></div>
                <span
                  className={`w-4/5 self-center text-xs ${toolLegend.textColor}`}
                >
                  {toolLegend.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 p-2 sm:grid-cols-3 md:grid-cols-4 md:p-5 lg:grid-cols-6">
          {tools.map((tools) => (
            <div
              key={tools.id}
              className={`group mx-auto flex h-28 w-28 flex-col items-center justify-center space-y-0 rounded-full shadow-md hover:shadow-lg sm:h-32 sm:w-32 md:h-40 md:w-40 ${tools.bgColor}`}
            >
              <img
                src={tools.img}
                alt={tools.toolName}
                className="mb-1 flex h-12 sm:h-14 md:h-16 lg:h-20"
              />
              <h3 className="text-xs font-semibold group-hover:text-theme-color sm:text-sm">
                {tools.toolName}
              </h3>
              <p className="text-xs text-gray-500 sm:text-sm">
                {tools.percentage}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="mx-auto p-4 sm:p-6 md:p-10 2xl:max-w-7xl">
        <h2 className="p-3 font-Caprasimo text-2xl text-theme-color md:p-5 md:text-3xl lg:text-4xl xl:text-5xl">
          What Clients Say
        </h2>
        <div className="grid gap-5 p-2 md:p-5 lg:grid-cols-2">
          {testimonials.map((testimony) => (
            <div
              key={testimony.id}
              className="relative overflow-hidden rounded-lg bg-cover bg-top shadow-md hover:shadow-md"
              style={{
                backgroundImage: `url(${testimony.img})`,
                height: "200px",
                // width: "400px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-white via-white/20 to-transparent dark:from-black dark:via-black/50"></div>

              <div className="flex h-full w-full flex-col items-end justify-between bg-white p-5 text-black opacity-70 dark:bg-black dark:text-neutral-100 dark:opacity-70">
                <p className="text-sm">{`⭐`.repeat(testimony.rating)}</p>
                <p className="w-2/3 text-end text-xs sm:text-sm">
                  <span className="mr-1 font-PlusJakartaSans text-3xl font-bold text-theme-color">
                    &quot;
                  </span>
                  {testimony.comment}
                </p>
                <h3 className="mt-2 text-xs font-bold text-theme-color sm:text-sm md:mt-4">
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
        className="mx-auto p-4 sm:p-6 md:p-10 2xl:max-w-7xl"
      >
        <h2 className="p-3 font-Caprasimo text-2xl text-theme-color md:p-5 md:text-3xl lg:text-4xl xl:text-5xl">
          Contact Me
        </h2>
        <div className="grid gap-4 p-2 md:grid-cols-2 md:gap-10 md:p-5">
          <div className="flex w-full flex-col gap-3 rounded-lg bg-neutral-100 p-5 shadow-sm hover:shadow-md dark:bg-neutral-800">
            <h3 className="font-JetBrainsMono text-xl font-bold text-theme-color lg:text-2xl">
              Let&apos;s talk about your project!
            </h3>
            <p className="text-xs sm:text-sm">
              Whether it&apos;s a creative project, a freelance gig, or a
              full-time role, I&apos;m ready to make it happen—let&apos;s build
              something remarkable together.
            </p>
            <div className="flex flex-col gap-2 text-sm md:text-base lg:text-lg">
              <div className="group flex gap-3 border-[0.1px] border-neutral-200 py-2 pl-2 dark:border-neutral-700">
                <Clock className="mt-1 text-theme-color" />
                <div className="w-full">
                  <p className="text-xs text-theme-color sm:text-sm">
                    Availability
                  </p>
                  <div className="flex justify-between lg:justify-start lg:gap-5">
                    <p className="text-xs text-neutral-400 line-through dark:text-neutral-600 sm:text-sm">
                      Monday-Friday: 9AM – 6PM <br />
                      Saturday: 10 AM – 2 PM <br />
                      Sunday: Closed
                    </p>
                    <span className="text-xs group-hover:underline sm:text-sm">
                      *Available 24/7💯
                    </span>
                  </div>
                </div>
              </div>
              <div className="group flex gap-3 border-[0.1px] border-neutral-200 p-2 dark:border-neutral-700">
                <Phone className="mt-1 text-theme-color" />
                <div className="w-full">
                  <p className="text-xs text-theme-color sm:text-sm">Phone</p>
                  <a
                    className="text-xs group-hover:underline sm:text-sm"
                    href="tel: +233555975976"
                  >
                    +233 555 975 976
                  </a>
                </div>
              </div>
              <div className="group flex gap-3 border-[0.1px] border-neutral-200 p-2 dark:border-neutral-700">
                <Mail className="mt-1 text-theme-color" />
                <div className="w-full">
                  <p className="text-xs text-theme-color sm:text-sm">Email</p>
                  <a
                    className="text-xs group-hover:underline sm:text-sm"
                    href="mailto:agyemangmichael555@gmail.com"
                  >
                    agyemangmichael555@gmail.com
                  </a>
                </div>
              </div>
              <div className="group flex gap-3 border-[0.1px] border-neutral-200 p-2 dark:border-neutral-700">
                <MapPin className="mt-1 text-theme-color" />
                <div className="w-full">
                  <p className="text-xs text-theme-color sm:text-sm">Address</p>
                  <a
                    className="text-xs group-hover:underline sm:text-sm"
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
          <div className="flex w-full flex-col gap-3 rounded-xl bg-neutral-100 p-5 shadow-sm hover:shadow-md dark:bg-neutral-800 md:justify-between">
            <h3 className="font-JetBrainsMono text-xl font-bold text-theme-color lg:text-2xl">
              Send me a message.
            </h3>
            <p className="text-xs sm:text-sm">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible..🫡
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col justify-center space-y-4 text-base md:space-y-5"
            >
              <label
                htmlFor="name"
                className="relative block rounded-md border-2 border-neutral-200 shadow-sm focus-within:ring-1 focus-within:ring-theme-color dark:border-neutral-700"
              >
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  // value={name}
                  placeholder="Enter your Name..."
                  className="peer h-full w-full rounded-md border-none bg-transparent px-2 py-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 md:px-3 md:py-3"
                  required
                />
                <span className="pointer-events-none absolute start-2 top-0 -translate-y-1/2 bg-neutral-100 px-1 text-xs transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-focus:top-0 dark:bg-neutral-800 sm:text-sm sm:peer-placeholder-shown:text-sm md:start-4">
                  Enter your Name...
                </span>
              </label>
              <label
                htmlFor="email"
                className="relative block rounded-md border-2 border-neutral-200 shadow-sm focus-within:ring-1 focus-within:ring-theme-color dark:border-neutral-700"
              >
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  // value={email}
                  placeholder="Enter your Email..."
                  required
                  className="peer h-full w-full rounded-md border-none bg-transparent px-2 py-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 md:px-3 md:py-3"
                />
                <span className="pointer-events-none absolute start-2 top-0 -translate-y-1/2 bg-neutral-100 px-1 text-xs transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-focus:top-0 dark:bg-neutral-800 sm:text-sm sm:peer-placeholder-shown:text-sm md:start-4">
                  Enter your Email...
                </span>
              </label>
              <label
                htmlFor="subject"
                className="relative block rounded-md border-2 border-neutral-200 shadow-sm focus-within:ring-1 focus-within:ring-theme-color dark:border-neutral-700"
              >
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  // value={subject}
                  placeholder="Enter the Subject..."
                  className="peer h-full w-full rounded-md border-none bg-transparent px-2 py-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 md:px-3 md:py-3"
                  required
                />
                <span className="pointer-events-none absolute start-2 top-0 -translate-y-1/2 bg-neutral-100 px-1 text-xs transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-focus:top-0 dark:bg-neutral-800 sm:text-sm sm:peer-placeholder-shown:text-sm md:start-4">
                  Enter the Subject...
                </span>
              </label>
              <label
                htmlFor="message"
                className="relative block rounded-md border-2 border-neutral-200 shadow-sm focus-within:ring-1 focus-within:ring-theme-color dark:border-neutral-700"
              >
                <textarea
                  name="message"
                  id="message"
                  // value={message}
                  placeholder="Enter your Message..."
                  className="peer h-full w-full rounded-md border-none bg-transparent px-2 py-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 md:px-3 md:py-3"
                  required
                ></textarea>
                <span className="pointer-events-none absolute start-2 top-0 -translate-y-1/2 bg-neutral-100 px-1 text-xs transition-all duration-300 peer-placeholder-shown:top-1/4 peer-placeholder-shown:text-xs peer-focus:top-0 dark:bg-neutral-800 sm:text-sm sm:peer-placeholder-shown:text-sm md:start-4">
                  Enter your Message...
                </span>
              </label>
              {successFeedback && (
                <p className="rounded-md bg-green-200 py-1 text-center text-xs text-green-700 sm:text-sm">
                  {successFeedback}
                </p>
              )}
              {failureFeedback && (
                <p className="rounded-md bg-red-200 py-1 text-center text-xs text-red-700 sm:text-sm">
                  {failureFeedback}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="self-end rounded-md bg-theme-color px-2 py-2 text-xs text-slate-100 sm:text-sm sm:shadow-sm md:px-5"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="mx-auto px-4 text-xs sm:px-6 sm:text-sm md:px-10 2xl:max-w-7xl">
        <div className="gap-4 space-y-5 px-2 md:gap-10 md:px-5">
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="flex gap-5">
              <h3 className="font-JetBrainsMono text-lg font-bold text-theme-color md:text-xl lg:text-2xl">
                Let&apos;s stay in touch...
              </h3>
            </div>
            <div className="flex space-x-2 sm:space-x-5">
              <Link
                to={"https://linkedin.com/in/agyemangmichael233"}
                target={"_blank"}
                className="rounded-lg bg-neutral-100 p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-neutral-800 dark:text-slate-200 dark:hover:bg-neutral-700"
              >
                <Linkedin />
              </Link>
              <Link
                to={"https://github.com/RemedyOnline"}
                target={"_blank"}
                className="rounded-lg bg-neutral-100 p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-neutral-800 dark:text-slate-200 dark:hover:bg-neutral-700"
              >
                <Github />
              </Link>
              <Link
                to={"https://www.behance.net/agyemangmichael233"}
                target={"_blank"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-behance static h-10 w-10 rounded-lg bg-white p-1 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                  <path d="M3 12l4.5 0" />
                  <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                  <path d="M16 6l3 0" />
                </svg>
              </Link>
              <Link
                to={"https://codepen.io/Michael-Agyemang-Prempeh"}
                target={"_blank"}
                className="rounded-lg bg-neutral-100 p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-neutral-800 dark:text-slate-200 dark:hover:bg-neutral-700"
              >
                <Codepen />
              </Link>
              <Link
                to={"https://linkedin.com/in/agyemangmichael233"}
                target={"_blank"}
                className="rounded-lg bg-neutral-100 p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-neutral-800 dark:text-slate-200 dark:hover:bg-neutral-700"
              >
                <Instagram />
              </Link>
              <Link
                to={"https://linkedin.com/in/agyemangmichael233"}
                target={"_blank"}
                className="rounded-lg bg-neutral-100 p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-neutral-800 dark:text-slate-200 dark:hover:bg-neutral-700"
              >
                <Twitter />
              </Link>
              <Link
                to={"https://linkedin.com/in/agyemangmichael233"}
                target={"_blank"}
                className="rounded-lg bg-neutral-100 p-2 text-gray-500 shadow-md hover:bg-slate-300 dark:bg-neutral-800 dark:text-slate-200 dark:hover:bg-neutral-700"
              >
                <Facebook />
              </Link>
            </div>
          </div>
          <hr className="border-t border-theme-color" />
          <div className="flex justify-between pb-5 sm:pb-7 md:pb-10">
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              <p>All Rights Reserved!</p>
              <p className="font-semibold">
                &copy; <span className="font-JetBrainsMono">2024</span>
              </p>
            </div>
            <div className="">
              <p>
                Made with{" "}
                <span className="inline-block animate-pulseEffect leading-none">
                  ❤️
                </span>{" "}
                by{" "}
                <span className="font-JetBrainsMono font-semibold text-theme-color">
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
