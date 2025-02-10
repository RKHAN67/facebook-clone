/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // Font family
            fontFamily: {
                // For regular text
                inter: "Inter",

                // For heading text
                outfit: "Outfit",
            },

            // Colors
            colors: {
                customRed: {
                    default: "#D7222E",
                    100: "#C8343D",
                    200: "#8B0303",
                    300: "#BF2839",
                    400: "#CF2532",
                },

                customBlue: {
                    default: "#1D3F78",
                    100: "#013b7A",
                    200: "#6C8DB2",
                    300: "#1D3F78",
                },

                customGray: {
                    default: "#717993",
                    100: "#464646",
                },
            },

            // Box Shadow
            boxShadow: {
                full: "0px 0px 5px 5px rgba(0, 0, 0, 0.15)",
                full2: "0px 0px 10px 10px rgba(0, 0, 0, 0.15)",
                full3: "0px 0px 8px 8px rgba(0, 0, 0, 0.10)",
                full4: "0px 0px 8px 4px rgba(0, 0, 0, 0.04)",
                customShadow1: "0px 2px 15px rgba(0, 0, 0, 0.2)",
                solidBottomRight: "2px 2px 0px 0px #ef4444",
            },
        },
    },
    plugins: [],
};
