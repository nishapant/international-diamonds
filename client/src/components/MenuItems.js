import React, { Component } from 'react';
import { Menu, Input, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink, Link } from 'react-router-dom'
import { getCart } from '../utils';

const { Search } = Input;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
    state = {
        cartItemsLength: ''
    }

    async componentDidMount() {
        this.setState({ cartItemsLength: getCart().length });
    }

    async componentWillReceiveProps(newProps) {
        this.setState({ cartItemsLength: getCart().length})
    }       
    render() {
        const { cartItemsLength } = this.state;
        return (
            <div>
                <Menu mode="horizontal" className="inline">
                    <SubMenu title={<span>ENGAGMENT</span>}>
                        <MenuItemGroup style={{ marginTop: '-15px' }}>
                                <Menu.Item key="1">
                                    <NavLink to="/engagement-bridal_set">Bridal Set</NavLink>
                                </Menu.Item >
                                <Menu.Item key="2">
                                    <NavLink to="/engagement-halo_set" >Halo Set</NavLink>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <NavLink to="/engagement-three_stone_ring" key="3">Three Stone Ring</NavLink>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <NavLink to="/engagement-trio_sets" key="4">Trio Sets</NavLink>
                                    </Menu.Item>
                                <Menu.Item key="5">
                                    <NavLink to="/engagement-solitare_rings" key="5">Solitare Rings</NavLink>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <NavLink to="/engagement-gemstone_bridal" key="6">Gemstone Bridal</NavLink>
                                </Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>

                    <SubMenu title={<span>RINGS</span>}>
                        <MenuItemGroup style={{ marginTop: '-15px' }}>
                            <Menu.Item key="7">
                                <NavLink to="/rings-anniversary_bands">Anniversary Bands</NavLink>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <NavLink to="/engagement-fashion_rings">Fashion Rings</NavLink>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <NavLink to="/engagement-promise_rings">Promise Rings</NavLink>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <NavLink to="/engagement-claddagh_rings">Claddagh Rings</NavLink>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <NavLink to="/engagement-gemstone_rings">Gemstone Rings</NavLink>
                            </Menu.Item>
                            <Menu.Item key="12">
                                <NavLink to="/engagement-infinity_rings">Infinity</NavLink>
                            </Menu.Item>
                            <Menu.Item key="13">
                                <NavLink to="/engagement-heart_rings">Heart</NavLink>
                            </Menu.Item>
                            <Menu.Item key="14">
                                <NavLink to="/engagement-family_and_mother_rings">Family and Mother Rings</NavLink>
                            </Menu.Item>
                            <Menu.Item key="15">
                                <NavLink to="/engagement-personalized_rings">Personalized</NavLink>
                            </Menu.Item>
                            <Menu.Item key="16">
                                <NavLink to="/engagement-cocktail_rings">Cocktail Rings</NavLink>
                            </Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>

                    <SubMenu title={<span>WEDDING BANDS</span>}>
                        <MenuItemGroup style={{ marginTop: '-15px' }}>
                            <Menu.Item key="17">
                                <NavLink to="/wedding_bands-cocktail_rings">Men's Bands</NavLink>
                            </Menu.Item>
                            <Menu.Item key="18">
                                <NavLink to="/wedding_bands-ladies_diamond_bands">Ladies Diamond Bands</NavLink>
                            </Menu.Item>
                            <Menu.Item key="19">
                                <NavLink to="/wedding_bands-enhancers">Enhancers</NavLink>
                            </Menu.Item>
                            <Menu.Item key="20">
                                <NavLink to="/wedding_bands-wraps">Wraps</NavLink>
                            </Menu.Item>
                            <Menu.Item key="21">
                                <NavLink to="/wedding_bands-eternity_bands">Eternity Bands</NavLink>
                            </Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>

                    <SubMenu title={<span>NECKLACES</span>}>
                        <MenuItemGroup style={{ marginTop: '-15px' }}>
                            <Menu.Item key="22">
                                <NavLink to="/necklaces-chains">Chains</NavLink>
                            </Menu.Item>
                            <Menu.Item key="23">
                                <NavLink to="/necklaces-religious_necklaces">Religious</NavLink>
                            </Menu.Item>
                            <Menu.Item key="24">
                                <NavLink to="/necklaces-hearts_necklaces">Hearts</NavLink>
                            </Menu.Item>
                            <Menu.Item key="25">
                                <NavLink to="/necklaces-infinity_necklaces">Infinty</NavLink>
                            </Menu.Item>
                            <Menu.Item key="26">
                                <NavLink to="/necklaces-lockets">Lockets</NavLink>
                            </Menu.Item>
                            <Menu.Item key="27">
                                <NavLink to="/necklaces-initial_nacklaces">Initial</NavLink>
                            </Menu.Item>
                            <Menu.Item key="28">
                                <NavLink to="/necklaces-name_necklaces">Name</NavLink>
                            </Menu.Item>
                            <Menu.Item key="29">
                                <NavLink to="/necklaces-personalized_necklaces">Personalized</NavLink>
                            </Menu.Item>
                            <Menu.Item key="30">
                                <NavLink to="/necklaces-diamond_fashion_pendants">Diamond Fashion Pendants</NavLink>
                            </Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>

                    <SubMenu title={<span>EARRINGS</span>}>
                        <MenuItemGroup style={{ marginTop: '-15px' }}>
                            <Menu.Item key="31">
                                <NavLink to="/earrings-diamond_studs">Diamond Studs</NavLink>
                            </Menu.Item>
                            <Menu.Item key="32">
                                <NavLink to="/earrings-hoops">Hoops</NavLink>
                            </Menu.Item>
                            <Menu.Item key="33">
                                <NavLink to="/earrings-dangling_earrings">Dangling Earrings</NavLink>
                            </Menu.Item>
                            <Menu.Item key="34">
                                <NavLink to="/earrings-solitare_studs">Solitare Studs</NavLink>
                            </Menu.Item>
                            <Menu.Item key="35">
                                <NavLink to="/earrings-gemstone_studs">Gemstone Studs</NavLink>
                            </Menu.Item>
                            <Menu.Item key="36">
                                <NavLink to="/earrings-children_earrings">Children Earrings</NavLink>
                            </Menu.Item>
                            <Menu.Item key="37">
                                <NavLink to="/earrings-cubic_zirconia_studs">Cubic Zirconia Studs</NavLink>
                            </Menu.Item>
                            <Menu.Item key="38">
                                <NavLink to="/earrings-cubic_zirconia_hoops">Cubic Zirconia Hoops</NavLink>
                            </Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>

                    <SubMenu title={<span>BRACELETS</span>}>
                        <MenuItemGroup style={{ marginTop: '-15px' }}>
                            <Menu.Item key="39">
                                <NavLink to="/bracelets-diamond_bangles">Diamond Bangles</NavLink>
                            </Menu.Item>
                            <Menu.Item key="40">
                                <NavLink to="/bracelets-tennis_bracelets">Tennis Bracelets</NavLink>
                            </Menu.Item>
                            <Menu.Item key="41">
                                <NavLink to="/bracelets-gold_bangles">Gold Bangles</NavLink>
                            </Menu.Item>
                            <Menu.Item key="42">
                                <NavLink to="/bracelets-charm_bracelets">Charm Bracelet</NavLink>
                            </Menu.Item>
                            <Menu.Item key="43">
                                <NavLink to="/bracelets-gold_bracelets">Gold Bracelet</NavLink>
                            </Menu.Item>
                            <Menu.Item key="44">
                                <NavLink to="/bracelets-men_gold_bracelets">Men's Gold Bracelets</NavLink>
                            </Menu.Item>
                            <Menu.Item key="45">
                                <NavLink to="/bracelets-gemstone_bracelets">Gemstone Bracelets</NavLink>
                            </Menu.Item>
                            <Menu.Item key="46">
                                <NavLink to="/bracelets-children_bracelets">Children Bracelets</NavLink>
                            </Menu.Item>
                            <Menu.Item key="47">
                                <NavLink to="/bracelets-silver_bracelets">Silver Bracelets</NavLink>
                            </Menu.Item>       
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu title={<span>WATCHES</span>}>
                        <MenuItemGroup style={{ marginTop: '-15px' }}>
                            <Menu.Item key="48">
                                <NavLink to="/watches-men_watches">Men's</NavLink>
                            </Menu.Item>
                            <Menu.Item key="49">
                                <NavLink to="/watches-ladies_watches">Ladies</NavLink>
                            </Menu.Item>   
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="50">
                        <NavLink to="/clearance-clearance">CLEARANCE</NavLink>
                    </Menu.Item>   
                    <div className="inline">   
                        <Search
                            placeholder="SEARCH"
                            onSearch={value => console.log(value)}
                            style={{ width: 150, marginLeft: '10px' }}
                        />
                        <Link to="/checkout">
                            <Badge count={cartItemsLength}>
                                <ShoppingCartOutlined  style={{ fontSize: '18px', color: '#686868', marginLeft: '10px' }} />
                            </Badge>
                        </Link>
                    </div> 
                </Menu>
            
            </div>
        );
    }
}

export default LeftMenu;
