import styled from 'styled-components'

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 44px;

    .image-container{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 291px;
        height: 198px;
        margin-right: 44px;

        img{
            height: 165px;
            border-radius: 50%;
            border: 5px solid #FFF;
            box-shadow: 0px 0px 0px 2.5px rgba(0, 0, 0, 0.1);
            margin-top: 3px;
            cursor: pointer;
        }
    }

    .info-container{
        display: flex; 
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    
        > .title{
            display: flex;
            align-items: center;
            justify-content: flex-start; 
            height: 40px;
            width: 100%;
            margin-bottom: 20px;
            
            h1{
                font-size: 28px;
                font-weight: 300;
            }

            > .title-buttons{
                width: 221px;
                height:30px;
                display: flex;
                margin-left: 20px;
                gap: 8px;

                .droplist{
                    height: 100%;
                    width: 34px;
                }

                button{
                    height: 100%;
                    width: 77px;
                    background: #fafafa;
                    outline: none;
                    border: 1px solid rgba(0, 0, 0, 0.3);
                    padding:5px 9px;
                    border-radius: 4px;
                    overflow: hidden;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                }
                
            }

            
        }
        .statistics{
                display: flex;
                flex-direction: row;
                justify-content:flex-start;
                align-items: center;
                width: 100%;
                gap: 45px;
                margin-bottom: 20px;
                
                div{
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    >h2{
                        font-weight: 600;
                        font-size: 16px;
                    }
                    >span{
                        font-weight: 400;
                        font-size: 16px;
                    }
                }
        }

        >.description{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
            height: 100px;
            margin-bottom: 44px;

            h2{
                font-weight: 600;
                font-size: 16px;
                margin-bottom: 4px;
            }

            span a{
                text-decoration: none;
                color: #00376b;
            }
            span + span{
                font-size: 16px;
                margin-bottom: 13px;
            }

            h3{
                font-size: 12px;
                font-weight: 500;
                color: #a2a2a2;

                span{
                font-size: 12px;
                cursor: pointer;
                }
            }
            
        }
    }
`