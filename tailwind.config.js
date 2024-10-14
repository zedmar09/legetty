/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      screens: {
        desktop: '1440px',
        xs: '380px',
      },
      backgroundImage: {
        login: "url('/assets/login-background.png')",
      },
      colors: {
        action: '#0068F8',
        dark: '#666',
        darker: '#161616',
        lightest: '#C1C1C1',
        lightest2: '#BFBFBF',
        lightest3: '#DDDDDD',
        lightest4: '#F9F9F9',
        positiveAction: '#008000',
        negativeAction: '#FF0000',
        evaluation: '#FFA500',
        flowKitGreen: '#29CC6A',
        mainBlue: '#2174BB',
        actionGreen: '#98C24B',
        red: '#FF0000',
      },
      fontSize: {
        title0: ['2.5rem', '3rem'],
        title1: ['2rem', '2.375rem'],
        title2: ['1.25rem', '1.5rem'],
        title3: ['1rem', '1.1875rem'],
        paragraph: ['1rem', '1.5rem'],
        description1: ['0.875rem', '1.3125rem'],
        description2: ['0.75rem', '1.875rem'],
        description3: ['0.625rem', '0.75rem'],
      },
    },
  },
  plugins: [],
};
