import React, { Component } from 'react';
import { Menu, Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Search } = Input;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  render() {
    return (
        <div>
            <Menu mode="horizontal" class="inline">
                <SubMenu title={<span>ENGAGMENT</span>} className="no-hover">
                    <MenuItemGroup style={{ marginTop: '-15px' }}>
                            <Menu.Item key="setting:1" class="no-hover-item">Bridal Set</Menu.Item>
                            <Menu.Item key="setting:2">Halo Set</Menu.Item>
                            <Menu.Item key="setting:3">Three Stone Ring</Menu.Item>
                            <Menu.Item key="setting:4">Trio Sets</Menu.Item>
                            <Menu.Item key="setting:5">Solitare Rings</Menu.Item>
                            <Menu.Item key="setting:6">Gemstone Bridal</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

                <SubMenu title={<span>RINGS</span>} className="no-hover">
                    <MenuItemGroup style={{ marginTop: '-15px' }}>
                        <Menu.Item key="setting:1">Anniversary Bands</Menu.Item>
                        <Menu.Item key="setting:2">Fashion Rings</Menu.Item>
                        <Menu.Item key="setting:3">Promise Rings</Menu.Item>
                        <Menu.Item key="setting:4">Claddagh Rings</Menu.Item>
                        <Menu.Item key="setting:5">Gemstone Rings</Menu.Item>
                        <Menu.Item key="setting:6">Infinity</Menu.Item>
                        <Menu.Item key="setting:7">Heart</Menu.Item>
                        <Menu.Item key="setting:8">Family and Mother Rings</Menu.Item>
                        <Menu.Item key="setting:9">Personalized</Menu.Item>
                        <Menu.Item key="setting:10">Cocktail Rings</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

                <SubMenu title={<span>WEDDING BANDS</span>} className="no-hover">
                    <MenuItemGroup style={{ marginTop: '-15px' }}>
                        <Menu.Item key="setting:1">Men's Bands</Menu.Item>
                        <Menu.Item key="setting:2">Ladies Diamond Bands</Menu.Item>
                        <Menu.Item key="setting:3">Enhancers</Menu.Item>
                        <Menu.Item key="setting:4">Wraps</Menu.Item>
                        <Menu.Item key="setting:5">Eternity Bands</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

                <SubMenu title={<span>NECKLACES</span>} className="no-hover">
                    <MenuItemGroup style={{ marginTop: '-15px' }}>
                        <Menu.Item key="setting:1">Chains</Menu.Item>
                        <Menu.Item key="setting:2">Religious</Menu.Item>
                        <Menu.Item key="setting:3">Hearts</Menu.Item>
                        <Menu.Item key="setting:4">Infinty</Menu.Item>
                        <Menu.Item key="setting:5">Lockets</Menu.Item>
                        <Menu.Item key="setting:6">Initial</Menu.Item>
                        <Menu.Item key="setting:7">Name</Menu.Item>
                        <Menu.Item key="setting:8">Personalized</Menu.Item>
                        <Menu.Item key="setting:9">Diamond Fashion Pendants</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

                <SubMenu title={<span>EARRINGS</span>} className="no-hover">
                    <MenuItemGroup style={{ marginTop: '-15px' }}>
                        <Menu.Item key="setting:1">Diamond Studs</Menu.Item>
                        <Menu.Item key="setting:2">Hoops</Menu.Item>
                        <Menu.Item key="setting:3">Dangling Earrings</Menu.Item>
                        <Menu.Item key="setting:4">Solitare Studs</Menu.Item>
                        <Menu.Item key="setting:5">Gemstone Studs</Menu.Item>
                        <Menu.Item key="setting:6">Children Earrings</Menu.Item>
                        <Menu.Item key="setting:7">Cubic Zirconia Studs</Menu.Item>
                        <Menu.Item key="setting:8">Cubic Zirconia Hoops</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

                <SubMenu title={<span>BRACELETS</span>} className="no-hover">
                    <MenuItemGroup style={{ marginTop: '-15px' }}>
                        <Menu.Item key="setting:1">Diamond Bangles</Menu.Item>
                        <Menu.Item key="setting:2">Tennis Bracelets</Menu.Item>
                        <Menu.Item key="setting:3">Gold Bangles</Menu.Item>
                        <Menu.Item key="setting:4">Charm Bracelet</Menu.Item>
                        <Menu.Item key="setting:5">Gold Bracelet</Menu.Item>
                        <Menu.Item key="setting:6">Men's Gold Bracelets</Menu.Item>
                        <Menu.Item key="setting:7">Children Bracelets</Menu.Item>
                        <Menu.Item key="setting:8">Silver Bracelets</Menu.Item>       
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span>WATCHES</span>} className="no-hover">
                    <MenuItemGroup style={{ marginTop: '-15px' }}>
                        <Menu.Item key="setting:1">Men's</Menu.Item>
                        <Menu.Item key="setting:2">Ladies</Menu.Item>   
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="setting:2" className="no-hover">
                    <a href="/">CLEARANCE</a>
                </Menu.Item>
                <div class="inline">   
                    <Search
                        placeholder="SEARCH"
                        onSearch={value => console.log(value)}
                        style={{ width: 150, marginLeft: '10px' }}
                    />
                    <ShoppingCartOutlined  style={{ fontSize: '18px', color: '#686868', marginLeft: '10px' }} />
                </div> 
            </Menu>
           
        </div>
    );
  }
}

export default LeftMenu;
