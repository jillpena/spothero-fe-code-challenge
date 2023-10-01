export const CHECKOUT_PURCHASE = 'SPOT_PURCHASE';

export const purchase = data => {
    return {
        type: CHECKOUT_PURCHASE,
        payload: data,
    };
};
