import axios from 'axios'
import {CART_ADD_ITEM,CART_DELETE_ITEM} from '../constants/cartConstants'


export const addToCart = (qty,id,size) => async(dispatch,getState) => {
    const {data} = await axios.get(`/api/product/${id}`);

    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image1,
            price:data.price,
            countInStock:data.countInStock,
            qty,
            size,
        }
    });

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))


} 


export const removeFromCart = (id) => (dispatch,getState) => {
    dispatch({type:CART_DELETE_ITEM,payload:id});

    localStorage.removeItem('cartItems',JSON.stringify(getState().cartItems))
}