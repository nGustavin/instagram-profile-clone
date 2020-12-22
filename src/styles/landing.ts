import styled from 'styled-components'

export const Landing = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    overflow-y: visible;
    
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 54px 487.5px;
    overflow-y: scroll;

    /* width */
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
`
