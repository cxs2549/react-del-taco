import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    :root {
        --brandRed: #E82833;
        --maxWidth: 1300px;
        --icon: rgb(95, 99, 104);
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        background-color: var(--brandRed);
    }
   

    button, svg, a, li, img {
        cursor: pointer;
    }
    .modal-open {
        overflow: hidden;
    }
    .indicators {
		
	}
`
