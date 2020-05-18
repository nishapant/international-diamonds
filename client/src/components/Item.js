import React, { Component } from 'react';
import { setCart, getCart } from '../utils';
import { Typography, Button, Select, Collapse } from 'antd';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LineOutlined, ArrowRightOutlined } from '@ant-design/icons';
import '../style/Item.css';
import Strapi from 'strapi-sdk-javascript/build/main';
import { Redirect } from 'react-router-dom';


const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);
const { Option } = Select;
const { Text } = Typography;
const { Panel } = Collapse;


class Item extends Component {
    state = { 
        item: '',
        cartItems: [],
        images: [], 
        size: 'N/A',
        error: false
    }

    async componentDidMount() {
        try {
            const response = await strapi.request('POST', '/graphql', {
                data: {
                    query: `query {
                        item(id: "${this.props.match.params.itemId}") {
                            _id
                            name
                            description
                            regular_price
                            sale_price
                            stone_weight
                            color_clarity
                            center_stone
                            clearance
                            image {
                                url
                            }
                            is_ring
                        }
                    }`
                }
            });
            this.setState({
                item: response.data.item,
                cartItems: getCart(),
                images: response.data.item.image
            })
        }
        catch (err) {
            this.setState({
                error: true
            })
        }
    }

    addToCart = item => {
        const alreadyInCart = this.state.cartItems.findIndex(cart_item => cart_item._id === item._id);

        if(alreadyInCart === -1) {
            const updatedItems = this.state.cartItems.concat({
                ...item,
                quantity: 1
            });
            this.setState({cartItems: updatedItems}, () => setCart(updatedItems));
        } else {
            const updatedItems = [...this.state.cartItems];
            updatedItems[alreadyInCart].quantity += 1;
            this.setState({cartItems: updatedItems}, () => setCart(updatedItems));
        }
        window.location.reload();
    }

    deleteItemFromCart = itemToDeleteId => {
        const filteredItems = this.state.cartItems.filter(cart_item => cart_item._id !== itemToDeleteId);
        this.setState({ cartItems : filteredItems}, () => setCart(filteredItems));
        window.location.reload();
    }

    render() {
        const { item, images, error } = this.state;
        if (error === true) {
            return <Redirect to='/404' />
        }
        return (
            <div style={{ width: '100%'}}>
                <div className="itemName">
                    <div className="carouselDiv">
                        <Carousel autoplay showThumbs={false}>
                            {images.map(picture=>(
                                <div key={picture.url} style={{ backgroundColor: 'white'}}>
                                    <img src={`${apiUrl}${picture.url}`}  style={{width: '100%', padding: '50px 20px'}}/>
                                </div>
                            ))}     
                        </Carousel>
                    </div>
                    <div className="itemInfoDiv">
                        <div key={item._id} className="itemInfoCenterDiv">
                                <Typography className="title">{item.name}</Typography>
                                <LineOutlined style={{fontSize: '30px', color: '#30383d'}} />
                                { item.clearance && 
                                    <div>
                                        <Text delete className="price">${item.regular_price}</Text>
                                        <Typography className="price">${item.sale_price}</Typography> 
                                    </div>
                                }
                                { !item.clearance && <Typography className="price">${item.regular_price}</Typography> }
                                {item.is_ring && 
                                <div style= {{marginTop: '30px'}}>
                                    <Typography style={{letterSpacing: '2px', color: 'black', fontWeight: 'bolder', fontSize: '13px'}}>SIZE</Typography>
                                    <Select
                                        showSearch
                                        style={{ width: 200, }}
                                        defaultValue={4}
                                        style={{ width: 75 }}
                                        optionFilterProp="children"
                                        className="select"
                                        filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="4">4</Option>
                                        <Option value="5">5</Option>
                                        <Option value="6">6</Option>
                                        <Option value="7">7</Option>
                                        <Option value="8">8</Option>
                                        <Option value="9">9</Option>
                                    </Select>
                                </div>}

                                <Collapse bordered={false} style={{ marginBottom: '10px', backgroundColor: 'white'}}>
                                <Panel header={<Typography style={{color: 'black'}}>DESCRIPTION</Typography>} key="1">
                                    <Typography style={{fontSize: '13px', display: 'inline-block'}}>{item.description}</Typography>
                                    </Panel>
                                    <Panel header={<Typography style={{color: 'black'}}>SPECIFICATIONS</Typography>} key="2">
                                        <Typography style={{fontSize: '13px'}}>Stone Weight: {item.stone_weight} CT</Typography>
                                        <Typography style={{fontSize: '13px', marginTop: '2px'}}>Color and Clarity: {item.color_clarity}</Typography>
                                        <Typography style={{fontSize: '13px', marginTop: '2px'}}>Center Stone: {item.center_stone}</Typography>
                                    </Panel>
                                </Collapse>

                                <Button 
                                type="default" 
                                block 
                                onClick={() => this.addToCart(item)}
                                className="addToCart"
                                size="large"
                                >
                                    ADD TO CART <span style={{ width: '30px' }}></span>
                                    <ArrowRightOutlined />
                                </Button>  
                        </div>
                    </div> 

                </div>       
            </div>
        )}
}

export default Item;