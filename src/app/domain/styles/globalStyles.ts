import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'Material Symbols Outlined';
        font-style: normal;
        src: url('/assets/fonts/MaterialIcons.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 900;
        font-style: normal;
        src: url('/assets/fonts/Roboto-Black.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 900;
        font-style: italic;
        src: url('/assets/fonts/Roboto-BlackItalic.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 700;
        font-style: normal;
        src: url('/assets/fonts/Roboto-Bold.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 700;
        font-style: italic;
        src: url('/assets/fonts/Roboto-BoldItalic.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 400;
        font-style: normal;
        src: url('/assets/fonts/Roboto-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 400;
        font-style: italic;
        src: url('/assets/fonts/Roboto-Italic.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 300;
        font-style: normal;
        src: url('/assets/fonts/Roboto-Light.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 300;
        font-style: italic;
        src: url('/assets/fonts/Roboto-LightItalic.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 500;
        font-style: normal;
        src: url('/assets/fonts/Roboto-Medium.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 500;
        font-style: italic;
        src: url('/assets/fonts/Roboto-MediumItalic.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 100;
        font-style: normal;
        src: url('/assets/fonts/Roboto-Thin.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 100;
        font-style: italic;
        src: url('/assets/fonts/Roboto-ThinItalic.ttf') format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .ant-typography {
        color: ${props => props.theme.appDefaultTextColor} !important;
    }

    .ant-btn-variant-link {
        color: ${props => props.theme.appLinkColor} !important;

        &:hover {
            opacity: 0.8;
        }
    }

    html,
    body,
    .renderer {
        height: 100%;
        color: ${props => props.theme.appDefaultTextColor};
    }
	
	body {
        font-family: 'Roboto' !important;
	}

    .renderer {
        width: 100%;
    }

    .material-symbols-outlined {
        font-family: 'Material Symbols Outlined';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        font-variation-settings: 'wght' 200;
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
    }
`