import { CHECKOUT_PURCHASE } from "./checkout-actions";

const initialState = {
    email: null
};

export default function checkout(state = initialState, {type, payload}) {
    switch (type) {
        case CHECKOUT_PURCHASE: {
            return {
                ...state,
                email: payload
            }
        }

        default:
            return state;
    }
}
