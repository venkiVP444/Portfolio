/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './Views/**/*.cshtml', // Add this line if you're using Razor views
    ],
    theme: {
        extend: {
            colors: {
                'ugro-green': '#4ade80', // Custom green for UGroLife, directly using hex
                'accent-cyan': '#06B6D4', // Example if you want to name your existing cyan-500
            },
            // You can also extend other parts of the theme, e.g., spacing, font-families
            // spacing: {
            //   '128': '32rem',
            // },
        },
    },
    plugins: [],
};