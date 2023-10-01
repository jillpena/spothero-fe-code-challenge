import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormField = ({
    className,
    label,
    name,
    error,
    ...inputAttributes
}) => {
    const classes = classNames(
        'FormField',
         className,
         {'FormField-error': error}
    );
    
    return (
        <div className={classes}>
            <label htmlFor={name}>
                {label}
                <input name={name} {...inputAttributes}/>
            </label>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
}

FormField.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
};

export default FormField;