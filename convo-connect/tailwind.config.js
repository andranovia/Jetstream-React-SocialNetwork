    import defaultTheme from 'tailwindcss/defaultTheme';
    import forms from '@tailwindcss/forms';
    import typography from '@tailwindcss/typography';

    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
        animation: {
            blob: 'blob 7s infinite',
        },
        fontFamily: {
            sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        },
        boxShadow: {
            ShadowCard:
            '0px 0px 0px 2px rgba(6, 24, 44, 0.4), 0px 4px 6px -1px rgba(6, 24, 44, 0.65), 0px 1px 0px inset rgba(255, 255, 255, 0.08)',
        },
        keyframes: {
            blob: { 
            '0%': {
                transform: 'translate(0px, 0px) scale(1)',
            },
            '33%': {
                transform: 'translate(30px, -50px) scale(1.1)',
            },
            '66%': {
                transform: 'translate(-20px, 20px) scale(0.9)',
            },
            '100%': {
                transform: 'tranlate(0px, 0px) scale(1)',
            },
            },
        },
        },
    },

    plugins: [forms, typography],
    };
