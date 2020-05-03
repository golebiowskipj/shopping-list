import styled from 'styled-components';

export const OverlayStyled = styled.div`
    z-index: 98;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
`;

export const ModalStyled = styled.div`
    z-index: 99;
  /* Everything below is optional styling */
    position: relative;
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;

    @media(min-width: 450px) {
        max-width: 450px;
        height: auto;
    }
    @media(min-width: 767px) {
        height: auto;
    }
`;

export const ModalBodyStyled = styled.div`
    z-index: 100;
    width: 100%;
    height: 100%; 
    margin: auto;
    background: white;
    padding: 20px 20px 10px;
    overflow: scroll;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar { width: 0 !important }


    &>header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        h2 {
            font-weight: 300;
            width: 100%;
            text-align: center;
        }
    }

    @media(min-width: 450px) {
        border-radius: 10px;
    }
    
    @media(min-width: 767px) {
       padding: 20px;
       height: auto;
       max-height: 90vh;
    }
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.5rem;
`;