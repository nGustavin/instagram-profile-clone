import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0px;
        box-sizing: border-box;
        padding: 0px;
        overflow-x: hidden;
        overflow-y: visible;

        ::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: none;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: none;
}
    }

    body, h1, h2, span, strong, input {

        background: #fafafa;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: black;
    }
`