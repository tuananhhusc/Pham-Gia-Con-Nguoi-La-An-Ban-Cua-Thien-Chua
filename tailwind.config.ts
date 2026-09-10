import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: 'var(--color-parchment)',
        'parchment-dark': 'var(--color-parchment-dark)',
        charcoal: 'var(--color-charcoal)',
        tooltip: 'var(--color-tooltip-bg)',
        burgundy: {
          DEFAULT: '#722F37',
          light: '#8B3A42',
          dark: '#5C262E',
          50: '#F9F0F1',
          100: '#F0D4D7',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#D4B56E',
          dark: '#A8874A',
          50: '#FBF7EE',
          100: '#F5ECD5',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-lora)', 'serif'],
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.charcoal'),
            '--tw-prose-headings': theme('colors.charcoal'),
            '--tw-prose-links': theme('colors.burgundy.DEFAULT'),
            '--tw-prose-bold': theme('colors.charcoal'),
            '--tw-prose-quotes': theme('colors.charcoal'),
            '--tw-prose-quote-borders': theme('colors.burgundy.DEFAULT'),
            '--tw-prose-th-borders': theme('colors.burgundy.100'),
            '--tw-prose-td-borders': '#E5E7EB',
            fontSize: '1.125rem',
            lineHeight: '1.8',
            fontFamily: 'var(--font-lora), serif',
            maxWidth: 'none',
            h1: {
              fontFamily: 'var(--font-playfair), serif',
              fontSize: '2rem',
              fontWeight: '700',
              marginTop: '3rem',
              marginBottom: '1.5rem',
              color: theme('colors.charcoal'),
            },
            h2: {
              fontFamily: 'var(--font-playfair), serif',
              fontSize: '1.65rem',
              fontWeight: '700',
              marginTop: '3.5rem',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gold.DEFAULT'),
              color: theme('colors.charcoal'),
            },
            h3: {
              fontFamily: 'var(--font-playfair), serif',
              fontSize: '1.35rem',
              fontWeight: '600',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              color: theme('colors.burgundy.DEFAULT'),
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.burgundy.DEFAULT'),
              backgroundColor: theme('colors.parchment-dark'),
              padding: '1rem 1.25rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              quotes: 'none',
              '& p:first-of-type::before': { content: 'none' },
              '& p:last-of-type::after': { content: 'none' },
            },
            table: {
              fontSize: '0.95rem',
              lineHeight: '1.6',
            },
            thead: {
              borderBottomWidth: '2px',
              borderBottomColor: theme('colors.burgundy.DEFAULT'),
            },
            'thead th': {
              backgroundColor: theme('colors.burgundy.50'),
              fontWeight: '600',
              padding: '0.75rem 1rem',
              color: theme('colors.charcoal'),
            },
            'tbody td': {
              padding: '0.75rem 1rem',
              verticalAlign: 'top',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: '#E5E7EB',
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: theme('colors.gold.50'),
            },
            a: {
              color: theme('colors.burgundy.DEFAULT'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
                color: theme('colors.burgundy.light'),
              },
            },
            sup: {
              color: theme('colors.gold.dark'),
              fontWeight: '600',
              fontSize: '0.7em',
            },
            strong: {
              color: theme('colors.charcoal'),
              fontWeight: '700',
            },
            'p': {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
