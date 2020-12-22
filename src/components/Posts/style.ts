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
export const Photo = styled.img`
    background: green;
    width: 100%;
    height: 100%;

`