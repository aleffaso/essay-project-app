/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        staatliches: ['Staatliches', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#8EBEF5',
          100: '#7FB1EB',
          200: '#67A3E5',
          300: '#4271A6',
          400: '#315C8C',
          500: '#224873',
          600: '#163961',
          700: '#103157',
          800: '#0A2A4E'
        },
        neutrals: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          350: '#bfc0c0',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#212934',
          800: '#1A202E',
          900: '#111827'
        },
        dark: {
          50: '#C3C4D8',
          100: '#9799BA',
          200: '#787A99',
          300: '#666882',
          400: '#5B5D75',
          455: '#525D73',
          500: '#4F5166',
          550: '#2e3141',
          600: '#363745',
          700: '#2B2C39',
          800: '#272730',
          850: '#23232B',
          900: '#201E26',
          950: '#1b2334'
        },
        success: {
          100: '#CEFBD9',
          200: '#9FF7BD',
          300: '#6CE7A2',
          400: '#45CF8F',
          500: '#14AF77',
          600: '#0E9672',
          700: '#0A7D6B',
          800: '#06655F',
          900: '#035153'
        },
        warning: {
          100: '#FFEDD2',
          200: '#FFD6A6',
          300: '#FFBA79',
          400: '#FF9E58',
          500: '#FF7121',
          600: '#DB5218',
          700: '#B73810',
          800: '#93220A',
          900: '#7A1306'
        },
        error: {
          100: '#FFDED5',
          200: '#FFB6AC',
          300: '#FF8782',
          400: '#FF636C',
          500: '#FF304F',
          600: '#DB234F',
          700: '#B7184D',
          800: '#930F48',
          900: '#7A0944'
        },
        yellow: {
          100: '#faf8e2',
          200: '#f0ecc8',
          300: '#e6dfad',
          400: '#dcd393',
          500: '#d2c678',
          600: '#c9ba5e',
          700: '#bfad43',
          800: '#b5a129',
          900: '#AA930C'
        },
        green: {
          100: '#e5ffe5',
          200: '#c9ebc9',
          300: '#add8ad',
          400: '#91c491',
          500: '#76b176',
          600: '#5a9d5a',
          700: '#3e8a3e',
          800: '#227622',
          900: '#046104'
        },
        blue: {
          100: '#D2DBF8',
          200: '#B8C9E9',
          300: '#9EB7DA',
          400: '#83A4CB',
          500: '#6992BC',
          600: '#4F80AD',
          700: '#356E9E',
          800: '#1A5B8F',
          900: '#004980'
        }
      },
      backgroundColor: {
        primary: {
          50: '#8EBEF5',
          100: '#7FB1EB',
          200: '#67A3E5',
          300: '#4271A6',
          400: '#315C8C',
          500: '#224873',
          600: '#163961',
          700: '#103157',
          800: '#0A2A4E'
        },
        neutrals: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          350: '#bfc0c0',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#212934',
          800: '#1A202E',
          900: '#111827'
        },
        dark: {
          50: '#C3C4D8',
          100: '#9799BA',
          200: '#787A99',
          300: '#666882',
          400: '#5B5D75',
          455: '#525D73',
          500: '#4F5166',
          550: '#2e3141',
          600: '#363745',
          700: '#2B2C39',
          800: '#272730',
          850: '#23232B',
          900: '#201E26',
          950: '#1b2334'
        }
      }
    }
  },
  plugins: []
};
