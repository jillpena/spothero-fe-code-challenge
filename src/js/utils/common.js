//  common utils
export const formatPrice = (price) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format(price);

export const containsOnlyDigits = (value) => value.match(/^\d*$/);

export const isValidEmail = (value) => value.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/);
