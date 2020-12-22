import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 53px;
    background: #fafafa;;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow-y: visible;
`
export const Tabs = styled.div`
    width: 100%;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 45px;

    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 71px;
        height: 100%;
        cursor: pointer;

        h1{
            font-size: 12px;
            font-weight: 600;
            font-family: 'Roboto', sans-serif;
            background: none;
        }
    }
`
export const PhotoGrid = styled.div`
    width: 100%;
    /* height: 100vh; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 310px;
    padding: 0px 0px 20px 0px;
    grid-gap: 15px;
    overflow-y: visible;
    
`
export const Photo = styled.div`
    background: rgb(249,157,76);
    background: linear-gradient(67deg, rgba(249,157,76,1) 0%, rgba(195,46,146,1) 100%);
    width: 100%;
    height: 100%;
    transition: 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    cursor: pointer;
    
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        height: 100%;
        opacity: 0;
        
        h1{
            background: none;
            font-size: 17px;
            color: white;
            margin-bottom: 3px;
        }
    }

    :hover{
        box-shadow: inset 0px 0px 30px 310px rgba(0, 0, 0, 0.3);
        >div{
            opacity:1;
        }
    }

`