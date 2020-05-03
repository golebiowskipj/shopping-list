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
    @media(min-width: 767px) {
        max-width: 375px;
        max-height: 90vh;
        height: auto;
    }
`;

export const ModalBodyStyled = styled.div`
    z-index: 100;
    width: 100%;
    height: 100%; 
    background: white;
    padding: 20px 10px 10px;

    &>header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        h2 {
            font-size: 0.825rem;
        }
    }
    @media(min-width: 767px) {
       padding: 20px;
       border-radius: 10px;
       height: auto;
    }
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    width: 20px;
    height: 20px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.5rem;
`;