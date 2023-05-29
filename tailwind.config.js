/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        typography: (theme) => ({}),
        extend: {
            backgroundColor: {
                'dark-mode': '#181a2a',
                'toggle-light': '#e8e8ea',
                'search-light': '#f4f4f5',
                'toggle-dark': '#4b6bfb',
                'search-dark': '#242535',
            },
            textColor: {
                'color-bold': '#181A2A',
                'color-medium': '#3B3C4A',
                'color-thin': '#696A75',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
