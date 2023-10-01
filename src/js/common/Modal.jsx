import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';

const Modal = ({
    className,
    title,
    isOpen,
    onClose,
    children,
    ...attrs
}) => {
    const [modalOpen, setModalOpen] = useState(isOpen);

    const classes = classNames(
        'Modal',
         className,
         {'opened': modalOpen}
    );

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className={classes} {...attrs}>
            <div className='ModalContent'>
                {title && (<h1>{title}</h1>)}
                {children}
            </div>
            <Button className="CloseButton" onClick={toggleModal}>x</Button>
        </div>
    );
};

Modal.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
};

export default Modal;