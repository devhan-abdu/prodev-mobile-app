/**  @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', // For Expo Router projects
    './components/**/*.{js,jsx,ts,tsx}', ],
    presets:[require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: [],
}