import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { OverlayStyled, ModalStyled, ModalBodyStyled, CloseButton } from './modal.style';

export const Modal = (props) => {
    const [show, setShow] = useState(false);
    const overlayRef = useRef(null);

    useEffect(() => {
        const node = overlayRef.current;
        if (node) {
            node.addEventListener('click', close)
        }

        return () => {
            if (node) {
                node.removeEventListener('click', close);
            }
        };
    }, [show]);

    const close = (e) => {
        if (e.target.classList.contains('js-overlay')) {
            setShow(false);
        }
    }

    const content = show ?
        (
            <OverlayStyled ref={overlayRef} className='js-overlay'>
                <ModalStyled>
                    <ModalBodyStyled>
                        <header>
                            <h2>{props.title}</h2>
                            <CloseButton onClick={() => {
                                setShow(false);
                            }}>
                                x
                            </CloseButton>
                        </header>
                        {React.cloneElement(props.children, {})}
                    </ModalBodyStyled>
                </ModalStyled>
            </OverlayStyled>
        )
        :
        null;

    return (
        <>
            {props.activator(setShow)}
            {createPortal(content, document.body)}
        </>
    );
}