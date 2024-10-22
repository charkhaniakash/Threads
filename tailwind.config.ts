module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	fontSize: {
  		'heading1-bold': [\r\n        "36px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "700",\r\n        },\r\n      ],
  		'heading1-semibold': [\r\n        "36px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "600",\r\n        },\r\n      ],
  		'heading2-bold': [\r\n        "30px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "700",\r\n        },\r\n      ],
  		'heading2-semibold': [\r\n        "30px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "600",\r\n        },\r\n      ],
  		'heading3-bold': [\r\n        "24px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "700",\r\n        },\r\n      ],
  		'heading4-medium': [\r\n        "20px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "500",\r\n        },\r\n      ],
  		'body-bold': [\r\n        "18px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "700",\r\n        },\r\n      ],
  		'body-semibold': [\r\n        "18px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "600",\r\n        },\r\n      ],
  		'body-medium': [\r\n        "18px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "500",\r\n        },\r\n      ],
  		'body-normal': [\r\n        "18px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "400",\r\n        },\r\n      ],
  		'body1-bold': [\r\n        "18px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "700",\r\n        },\r\n      ],
  		'base-regular': [\r\n        "16px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "400",\r\n        },\r\n      ],
  		'base-medium': [\r\n        "16px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "500",\r\n        },\r\n      ],
  		'base-semibold': [\r\n        "16px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "600",\r\n        },\r\n      ],
  		'base1-semibold': [\r\n        "16px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "600",\r\n        },\r\n      ],
  		'small-regular': [\r\n        "14px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "400",\r\n        },\r\n      ],
  		'small-medium': [\r\n        "14px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "500",\r\n        },\r\n      ],
  		'small-semibold': [\r\n        "14px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "600",\r\n        },\r\n      ],
  		'subtle-medium': [\r\n        "12px",\r\n        {\r\n          lineHeight: "16px",\r\n          fontWeight: "500",\r\n        },\r\n      ],
  		'subtle-semibold': [\r\n        "12px",\r\n        {\r\n          lineHeight: "16px",\r\n          fontWeight: "600",\r\n        },\r\n      ],
  		'tiny-medium': [\r\n        "10px",\r\n        {\r\n          lineHeight: "140%",\r\n          fontWeight: "500",\r\n        },\r\n      ],
  		'x-small-semibold': [\r\n        "7px",\r\n        {\r\n          lineHeight: "9.318px",\r\n          fontWeight: "600",\r\n        },\r\n      ]
  	},
  	extend: {
  		colors: {
  			'primary-500': '#877EFF',
  			'secondary-500': '#FFB620',
  			blue: '#0095F6',
  			'logout-btn': '#FF5A5A',
  			'navbar-menu': 'rgba(16, 16, 18, 0.6)',
  			'dark-1': '#000000',
  			'dark-2': '#121417',
  			'dark-3': '#101012',
  			'dark-4': '#1F1F22',
  			'light-1': '#FFFFFF',
  			'light-2': '#EFEFEF',
  			'light-3': '#7878A3',
  			'light-4': '#5C5C7B',
  			'gray-1': '#697C89',
  			glassmorphism: 'rgba(16, 16, 18, 0.60)'
  		},
  		boxShadow: {
  			'count-badge': '0px 0px 6px 2px rgba(219, 188, 159, 0.30)',
  			'groups-sidebar': '-30px 0px 60px 0px rgba(28, 28, 31, 0.50)'
  		},
  		screens: {
  			xs: '400px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};