import React, { Component } from 'react';
import MenuItems from './MenuItems'
import { Drawer, Button } from 'antd';
import { Menu, Input } from 'antd';
import { MenuOutlined, ShoppingCartOutlined  } from '@ant-design/icons';

const { Search } = Input;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <div>
            <div className="frontLogoDiv">
                <img src="./idc_logo.svg" className="frontLogoImage" alt="International Diamond Company Logo"/>
            </div>
            <nav className="menuBar">
                <div className="menuCon">
                    <div className="menuItems">
                        <MenuItems />
                    </div>
                    <Button className="barsMenu" type="secondary" onClick={this.showDrawer} style={{ marginBottom: '8px' }}>
                        <MenuOutlined style={{ fontSize: '16px', color: '#686868' }} />
                    </Button>
                    <div className="searchMenuMobile">   
                        <Search
                            placeholder="SEARCH"
                            onSearch={value => console.log(value)}
                            style={{ width: 150, marginLeft: '10px' }}
                        />
                        <ShoppingCartOutlined  style={{ fontSize: '18px', color: '#686868', marginLeft: '10px' }} />
                    </div> 
                    <Drawer
                        placement="left"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <Menu mode="vertical">
                            <SubMenu title={<span>ENGAGMENT</span>}>
                                <MenuItemGroup style={{ marginTop: '-15px' }}>
                                        <Menu.Item key="setting:1">Bridal Set</Menu.Item>
                                        <Menu.Item key="setting:2">Halo Set</Menu.Item>
                                        <Menu.Item key="setting:3">Three Stone Ring</Menu.Item>
                                        <Menu.Item key="setting:4">Trio Sets</Menu.Item>
                                        <Menu.Item key="setting:5">Solitare Rings</Menu.Item>
                                        <Menu.Item key="setting:6">Gemstone Bridal</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>

                            <SubMenu title={<span>RINGS</span>}>
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

                            <SubMenu title={<span>WEDDING BANDS</span>}>
                                <MenuItemGroup style={{ marginTop: '-15px' }}>
                                    <Menu.Item key="setting:1">Men's Bands</Menu.Item>
                                    <Menu.Item key="setting:2">Ladies Diamond Bands</Menu.Item>
                                    <Menu.Item key="setting:3">Enhancers</Menu.Item>
                                    <Menu.Item key="setting:4">Wraps</Menu.Item>
                                    <Menu.Item key="setting:5">Eternity Bands</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>

                            <SubMenu title={<span>NECKLACES</span>}>
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

                            <SubMenu title={<span>EARRINGS</span>}>
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

                            <SubMenu title={<span>BRACELETS</span>}>
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
                            <SubMenu title={<span>WATCHES</span>}>
                                <MenuItemGroup style={{ marginTop: '-15px' }}>
                                    <Menu.Item key="setting:1">Men's</Menu.Item>
                                    <Menu.Item key="setting:2">Ladies</Menu.Item>   
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="setting:2">
                                <a href="/">CLEARANCE</a>
                            </Menu.Item>
                        </Menu>
                </Drawer>
            </div>
        </nav>
    </div>
       
    );
  }
}

export default Navbar;
