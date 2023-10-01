import React from 'react';
import {useState} from 'react';
import FormField from '../../common/FormField';
import Button from '../../common/Button';
import {isValidEmail, containsOnlyDigits, formatPrice} from '../../utils/common';
import PropTypes from 'prop-types';

const CheckoutForm = ({spot, onSubmit}) => {
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(formErrors).every((error) => error === '');
        if (isValid) {
            onSubmit(formData);
        }
    };

    const validateField = (name, value) => {
        let error = '';
        if (name === 'email') {
          if (!isValidEmail(value)) {
            error = 'Please enter a valid email.';
          }
        } else if (name === 'phoneNumber') {
          if (!containsOnlyDigits(value)) {
            error = 'Please enter a valid phone number.';
          }
        }

        setFormErrors({
            ...formErrors,
            [name]: error,
        });
    };

    const onFormFieldChange = (e) => {
        const {name, value} = e.target;
        validateField(name, value);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormatPrice = (price) => {
        const priceString = price.toString();
        const trimmedString = priceString.slice(0, -2);
        const priceFloat = parseFloat(trimmedString);
        return formatPrice(priceFloat);
    };

    return (
        <div className="Checkout-form-container">
            <form className="Checkout-form" onSubmit={handleSubmit}>
                <FormField 
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName || ''}
                    onChange={onFormFieldChange} 
                    error={formErrors.firstName}
                />
                <FormField 
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName || ''}
                    onChange={onFormFieldChange}
                    error={formErrors.lastName}
                />
                <FormField 
                    label="Email"
                    type="text"
                    name="email"
                    value={formData.email || ''}
                    onChange={onFormFieldChange}
                    error={formErrors.email}
                    required={true}
                />
                <FormField 
                    label="Phone Number"
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber || ''}
                    onChange={onFormFieldChange}
                    error={formErrors.phoneNumber}
                    required={true}
                />
                <div className="Checkout-button-container">
                    <Button type="submit">Purchase for {handleFormatPrice(spot?.price)}</Button>
                </div>
            </form>
        </div>
    );
};

CheckoutForm.propTypes = {
    spot: PropTypes.object,
    onSubmit: PropTypes.func,
};

export default CheckoutForm;