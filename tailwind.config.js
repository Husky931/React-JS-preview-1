module.exports = {
    important: true,
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-p-color": "rgba(174, 221, 255, 0.7)",
                "secondary-p-color": "rgb(174, 221, 255)",
            },
            boxShadow: {
                main: "0 0 0 2px #26ffca",
            },
        },
    },
}
