/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "490px",
      tablet: "1100px",
      desktop: "1620px",
    },
    fontSize: {
      'xs': ['0.7rem', {
        lineHeight: '0.9rem',
        letterSpacing: '0.02813rem',
        fontWeight: '300',
      }],

      'sm': ['0.85rem', {
        lineHeight: '1.4rem',
        letterSpacing: '0.02813rem',
        fontWeight: '300',
      }],
      'base': ['0.85rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0.03375rem',
        fontWeight: '300',
      }],
      'lg': ['0.93rem', {
        lineHeight: '1.3rem',
        letterSpacing: '0.0375rem',
        fontWeight: '400',
      }],
      'xl': ['0.9375rem', {
        lineHeight: '1.1em',
        letterSpacing: '0.075rem',
        fontWeight: '400',
      }],
      '2xl': ['1.125rem', {
        lineHeight: '2.3rem',
        letterSpacing: '0.045rem',
        fontWeight: '400',
      }],
      '3xl': ['1.3125rem', {
        lineHeight: '1.6rem',
        letterSpacing: '0.105rem',
        fontWeight: '400',
      }],
      '4xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '0.18rem',
        fontWeight: '400',
      }],
      '5xl': ['2.1rem', {
        lineHeight: '3.5rem',
        letterSpacing: '0.1rem',
        fontWeight: '400',
      }],
    },
    
    colors: {
      neutral: {
        DEFAULT: "#F5F6F5",
        100: "#EAECF4",
        200: "#D1D7E6",
        300: "#A8B4D1",
        400: "#798CB7",
        500: "#586E9F",
        600: "#455784",
        700: "#38456C",
        800: "#323D5A",
        900: "#2D354D",
        950: "#141722",
      },

      primary: {
        100: "#E0E7FF",
        200: "#C7D2FE",
        DEFAULT: "#A5B4FC",
        400: "#818CF8",
        500: "#6366F1",
        600: "#4F46E5",
        700: "#4338CA",
        800: "#3730A3",
        900: "#312E81",
      },
    },

    extend: {
      
    },
  },
  plugins: [],
}