import styled from 'styled-components'

export const Landing = styled.div`
  
    width: 100vw;
  height: 100vh;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  overflow-y: hidden;
  padding: 0px 2px 0px 0px;
    
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0px 487.5px;
    overflow-y: scroll;
    margin-top:56px;

    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fafafa;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(249,157,76);
  background: linear-gradient(67deg, rgba(249,157,76,1) 0%, rgba(195,46,146,1) 100%);
  border-radius: 50px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: none;
}
`
