import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {purchase} from '../spot/spot-actions';
import CheckoutForm from './checkout-form/CheckoutForm';
import TextButton from '../common/TextButton';
import SpotItem from '../spot/SpotItem';
import axios from 'axios';
import PropTypes from 'prop-types';

const Checkout = ({spot, purchase, pushTo}) => {
    const buttonLabel = '< Back To Search';

    const _onSubmit = async(formData) => {
        try {
            const postData = {
                spotId: spot.id,
                email: formData.email,
                phone: formData.phoneNumber,
                lastName: formData.lastName,
                firstName: formData.firstName,
            };
            const {data} = await axios.post('/reservations', postData);
            
            if (data) {
                purchase(postData.email);
                pushTo('/confirmation');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const backToSearch = () => {
        pushTo('/');
    };

    return (
        <div className="Checkout">
            <div className="Back-button-container">
                <TextButton
                    className="Checkout-back-button"
                    onClick={backToSearch}
                >{buttonLabel}</TextButton>
            </div>
            <div className="Checkout-spotItem-container">
                <SpotItem
                    key={spot?.id}
                    data={spot}
                    showDetails={false}
                />
            </div>
            <CheckoutForm spot={spot} onSubmit={_onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        spot: state.spot.selected,
    };
};

const mapDispatchToProps = {
    purchase,
    pushTo: push
};

Checkout.propTypes = {
    spot: PropTypes.object,
    purchase: PropTypes.func,
    pushTo: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
