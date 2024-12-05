/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"], // thus, enabling class-based dark mode functionality...
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-color": "#5A93C8",
			},
			fontFamily: {
				DancingScript: ["Dancing Script", "cursive"],
				Montserrat: ["Montserrat", "serif"],
				JetBrainsMono: ["JetBrains Mono", "serif"],
				Caprasimo: ["Caprasimo", "serif"],
				Garamond: ["Garamond", "serif"],
				FacultyGlyphic: ["Faculty Glyphic", "serif"],
				Merriweather: ["Merriweather", "serif"],
				Parkinsans: ["Parkinsans", "serif"],
				PlayfairDisplay: ["Playfair Display", "serif"],
				PlusJakartaSans: ["Plus Jakarta Sans", "serif"],
				Raleway: ["Raleway", "serif"],
				ZenTokyoZoo: ["Zen Tokyo Zoo", "serif"],
			},
			backgroundImage: {
				lightModeBG: "url('./assets/images/lightModeBG.jpg')",
				darkModeBG: "url('./assets/images/darkModeBG.jpg')",
			},
		},
	},
	plugins: [],
};
