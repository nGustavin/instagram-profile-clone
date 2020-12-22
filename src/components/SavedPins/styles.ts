import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: none;
    height: 130px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 44px;
    gap: 10px;
    overflow-x: auto;
`

export const Title = styled.h1`
    height: 33px;
    width: 85px;
    overflow: hidden;
    padding: 15px 0px 0px 0px;
    font-size: 14px;
    color: black;
    text-align: center;
    background: none;
`

export const Story = styled.div`
    width: 77px;
    height: 77px;
    background: #feff99;
    border-radius: 50%;
    border: 4px solid #FFF;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
`

export const PinContainer = styled.div`
    width: 125px;
    height: 100%;
    background: none;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`