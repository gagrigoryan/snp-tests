import "!style-loader!css-loader!sass-loader!../src/styles/global.module.scss";

const customViewports = {
    desktop: {
        name: "Desktop",
        styles: { width: "1440px", height: "100%", padding: 0, margin: 0 },
    },
    tablet: {
        name: "Tablet",
        styles: { width: "768px", height: "100%", padding: 0, margin: 0 },
    },
    phone: {
        name: "Phone",
        styles: { width: "375px", height: "100%", padding: 0, margin: 0 },
    },
};

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: { viewports: customViewports },
};
