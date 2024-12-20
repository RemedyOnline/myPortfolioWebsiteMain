/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"], // thus, enabling class-based dark mode functionality...
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-color": "#5A93C8",
				"myBorder-color": "#5A93C8",
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
				monitorBG: "url('./assets/images/projects/monitorBG.png')",
			},
			keyframes: {
				pulseEffect: {
					"0%, 100%": {
						transform: "scale(1)",
						opacity: 1,
					},
					"50%": {
						transform: "scale(1.2)",
						opacity: 0.8,
					},
				},
			},
			animation: {
				pulseEffect: "pulseEffect 2s infinite",
			},
		},
	},
	plugins: [],
};
