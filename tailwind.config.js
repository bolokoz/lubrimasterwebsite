module.exports = {
    content: [
      "./node_modules/flowbite/**/*.js",
    ],
    plugins: [
      require('flowbite')
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'white': '#ffffff',
          'gray-lightest': '#f8f9f8',
          'gray-lighter': '#e4e5e4',
          'gray-light': '#d1d1d0',
          'gray': '#bebfbe',
          'gray-dark': '#969796',
          'gray-darker': '#6f6f6f',
          'gray-darkest': '#484948',
          'black': '#202120',
          
          'brand-light': '#cde4cc',
          'brand': '#28933e',
          'brand-dark': '#1e4823',
          
          'cta-light': '#ddc8e4',
          'cta': '#732893',
          'cta-dark': '#3b1a48',
          
          'info-light': '#d8f3f5',
          'info': '#3fced7',
          'info-dark': '#2a6266',
          
          'warning-light': '#faf2cc',
          'warning': '#d9cf1f',
          'warning-dark': '#68621c',
          
          'success-light': '#d7f8d1',
          'success': '#32db44',
          'success-dark': '#266827',
          
          'danger-light': '#ffd7cd',
          'danger': '#df5b42',
          'danger-dark': '#6b3024',
        }
      },
      fontFamily: {
        'body': [
      'Merriweather', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        'sans': [
      'Merriweather', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
      }
    }
  }