import styled from 'styled-components'

export const Container = styled.div`
    background: red;
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0.6px solid rgba(0, 0, 0, 0.4);
    background: #ffffff;

    >#header-wrapper{
        width: 975px;
        height: 100%;
        overflow-x: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;

        >.image-container{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow-y: hidden;
        max-width: 360px;
        width: 360px;
        height:100%;

        >img{
            height: 76px;
        }
    }

    > input{
        height: 28px;
        width: 215px;
        background: #fafafa;
        padding: 7px;
        border-radius: 4px;
    }

    >.buttons{
        display: flex;
        flex-direction: row;
        max-width: 360px;
        width: 360px;
        height:36px;
        justify-content: flex-end;
        align-items: center;
        gap: 22px;

        > img{
            border-radius: 50%;
            height: 24px;
            width: 24px;
        }
    }
}

    

    

    
`