const CART_KEY = 'cart';

export const calculatePrice = cart_items => {
    return `$${ cart_items.reduce((acc, cart_item) => 
        acc + cart_item.quantity * (cart_item.clearance ? cart_item.sale_price : cart_item.regular_price), 0).toFixed(2)}`;
}

export const calculateAmount = cart_items => {
    
    return Number(cart_items.reduce((acc, cart_item) => 
    acc + cart_item.quantity * (cart_item.clearance ? cart_item.sale_price : cart_item.regular_price), 0)
    .toFixed(2));
}

export const setCart = (value, cartKey = CART_KEY) => {
    if(localStorage) {
        localStorage.setItem(cartKey, JSON.stringify(value));
    }
}

export const getCart = (cartKey = CART_KEY) => {
    if(localStorage && localStorage.getItem(cartKey)) {
        return JSON.parse(localStorage.getItem(cartKey));
    }
    return [];
}

export const clearCart = (cartKey = CART_KEY) => {
    if (localStorage) {
      localStorage.removeItem(cartKey);
    }
};