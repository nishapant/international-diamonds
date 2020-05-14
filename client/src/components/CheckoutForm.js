import React, { Component } from 'react';
import { Typography, Input, Modal, Button, Spin, Form } from 'antd';
import { getCart, calculatePrice, calculateAmount, setCart } from '../utils';
import ToastMessage from './ToastMessage';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { LineOutlined, CloseCircleOutlined } from '@ant-design/icons';



import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337/';
const strapi = new Strapi(apiUrl);

class CheckoutForm extends Component {
    state = {
        cartItems: [],
        firstName: '',
        lastName: '',
        address: '',
        postalCode: '',
        city: '',
        confirmationEmailAddress: '',
        toast: false,
        toastMessage: '',
        orderProcessing: false,
        modal: false
    }
    
    componentDidMount() {
        this.setState({ cartItems: getCart() });
    };

    handleChange = value => {

        // event.persist();
        console.log(value);
        // this.setState({ [event.target.name] : value });
    };

    deleteItemFromCart = itemToDeleteId => {
        const filteredItems = this.state.cartItems.filter(cart_item => cart_item._id !== itemToDeleteId);
        this.setState({ cartItems : filteredItems}, () => setCart(filteredItems));
        window.location.reload();
    };

    handleConfirmOrder = async event => {
        event.preventDefault();
        if(this.isFormEmpty(this.state)) {
            this.showToast("Fill in all fields");
            return;
        }
        this.setState({ modal: true });
    };

    handleSubmitOrder = async () => {
        const { cartItems, city, address, postalCode, firstName, lastName } = this.state;
        console.log(firstName);
        const amount = calculateAmount(cartItems);

        this.setState({ orderProcessing: true });
        // let token;
        // try {
        //     const response = await this.props.stripe.createToken();
        //     token = response.token.id;
        //     await strapi.createEntry('orders', {
        //         lastName,
        //         firstName,
        //         amount,
        //         brews: cartItems,
        //         city,
        //         postalCode,
        //         address,
        //         token
        //     });
        //     this.setState({ orderProcessing: false, modal: false });
        //     clearCart();
        //     this.showToast('Your order has been successfully submitted!');
        // } catch (err) {
        //     this.setState({ orderProcessing: false, modal: false });
        //     this.showToast(err.message);
        // }
    };

    isFormEmpty = ({ firstName, lastName, address, postalCode, city, confirmationEmailAddress }) => {
        return !firstName || !lastName || !address || !postalCode || !city || !confirmationEmailAddress; 
    };

    showToast = (toastMessage, redirect = false) => {
        this.setState({ toast: true, toastMessage });
        setTimeout(() => this.setState({ toast: false, toastMessage: '' },
        () => redirect && this.props.history.push('/')
        ), 5000);
    };

    closeModal = () => this.setState({ modal: false });

    render() {
        const { toastMessage, toast, cartItems, modal, orderProcessing } = this.state;  
        return (
            <div style={{ width: '100%'}}>
                <div style={{width: '90%', margin: '40px auto', backgroundColor: 'white', padding: '40px'}}>
                    <div>
                        <div style={{ textAlign: 'center'}}>
                            <Typography style={{color: 'black', letterSpacing: '1px', fontWeight: 'bolder', fontSize: '17px'}}>SHOPPING CART</Typography>
                            <LineOutlined style={{fontSize: '30px', color: '#30383d'}} />
                            <br/>
                            <br/>
                        </div>
                        {cartItems.length > 0 ? <React.Fragment>
                        <div style={{ display: 'flex', width: '90%', margin: '0 auto' }}>
                            <div style={{ width: '-webkit-fit-content', fontFamily: 'Playfair Display', margin: '0 auto' }}>
                                    <Typography style={{ fontSize: '23px', letterSpacing: '1px', marginBottom: '10px'}}>
                                        Your Items
                                    </Typography>
                                    <div style={{ borderBottom: 'lightgrey 1px solid', fontSize: '16px'}}>
                                        {cartItems.map(item => (
                                            <div key={item._id} style={{ borderTop: 'lightgrey 1px solid', padding: '15px'}}>
                                                <Typography style={{ display: 'inline-block' }}>
                                                    {item.name} x {item.quantity} - ${item.quantity * item.sale_price} 
                                                </Typography>
                                                <Button onClick={() => this.deleteItemFromCart(item._id)} style={{ border: 'none',  marginLeft: '15px' }}>
                                                    <CloseCircleOutlined />
                                                </Button> 
                                            </div>
                                        ))}
                                    </div>
                                <Typography style={{ fontWeight: 'bolder', margin: '15px 0', fontSize: '18px'}}>Total Amount: {calculatePrice(cartItems)}</Typography>
                            </div>
                    
                            <Form style={{ width: '30%', margin: '0 auto',fontFamily: 'Playfair Display'}}>
                                <Form.Item label="First Name" rules={[{ required: true }]}>
                                    <Input 
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        onChange={this.handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Last Name" rules={[{ required: true }]}>
                                    <Input 
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                    />
                                </Form.Item>
                                <Form.Item label="Address" rules={[{ required: true }]}>
                                    <Input 
                                        id="address"
                                        name="address"
                                        placeholder="Shipping Address"
                                    />
                                </Form.Item>
                                <Form.Item label="Postal Code" rules={[{ required: true }]}>
                                    <Input 
                                        id="postalCode"
                                        name="postalCode"
                                        placeholder="Postal Code"
                                    />
                                </Form.Item>
                                <Form.Item label="City" rules={[{ required: true }]}>
                                    <Input 
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                    />
                                </Form.Item>
                                <Form.Item label="Email Address" rules={[{ required: true }]}>
                                    <Input 
                                        id="email"
                                        name="email"
                                        placeholder="Email Address"
                                    />
                                </Form.Item>
                            </Form>
                        </div>
                    
                    <form 
                        style={{
                            display: 'inlineBlock',
                            textAlign: 'center',
                            maxWidth: 450
                        }}
                        onSubmit={this.handleConfirmOrder}
                    >
    
                        
                        <CardElement id="stripe__input" onReady={input => input.focus()} />

                        <button id="stripe__button" type="submit">Submit</button>
                    </form>
                    
                    </React.Fragment> : (
                        <div>
                            <Typography>Your Cart is Empty</Typography>
                            <Typography>Add some jewelery!</Typography>
                        </div>
                    )}
                </div>
            </div>
                {modal && (
                    <ConfirmationModal orderProcessing={orderProcessing} cartItems={cartItems} closeModal={this.closeModal} handleSubmitOrder={this.handleSubmitOrder} />
                )}
                <ToastMessage show={toast} message={toastMessage} />
            </div>
        );
    }
}

const ConfirmationModal = ({ orderProcessing, cartItems, closeModal, handleSubmitOrder }) => (
    <Modal
        accessibilityCloseLabel="close"
        accessibilityModalLabel="Confirm Your Order"
        heading="Confirm Your Order"
        onDismiss={closeModal}
        footer={
            <div>
                <div>
                    <Button 
                        size="lg"
                        color="red"
                        disabled={orderProcessing}
                        onClick={handleSubmitOrder}
                    >
                        Submit
                    </Button>
                </div>
                <div>
                    <Button 
                        size="lg"
                        disabled={orderProcessing}
                        onClick={closeModal}
                    >
                        Cancel
                    </Button>
                </div>
            </div>

        }
        role="alertdialog"
        size="sm"

    >
        {!orderProcessing && (
            <div>
                {cartItems.map(item => (
                    <div key={item._id} >
                        <Typography color="red" size="lg">
                            {item.name} x {item.quantity} - {item.quantity * item.sale_price}
                        </Typography>
                    </div>
                ))}
                <div>
                    <Typography size="lg" bold>
                        Total: {calculatePrice(cartItems)}
                    </Typography>
                </div>
            </div>
        )}
        { orderProcessing && <Spin style={{marginTop: '7%'}} />}
        { orderProcessing && <Typography align="center" italic>Submitting Order...</Typography>}
    </Modal>
) 

export default CheckoutForm;
