import React,  { Component } from 'react';
import  ResponsiveAntMenu from 'responsive-ant-menu';
import { Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/lib/menu/style/css';
import 'antd/lib/popover/style/css';

const { SubMenu } = Menu;


class Navbar extends Component {
    state = {
        current: 'mail',
        };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
  render() {
      return (
        <ResponsiveAntMenu
        activeLinkKey=""
        mobileMenuContent={isMenuShown => isMenuShown ? <Button value="large"><MenuOutlined /></Button> : <Button value="large"><MenuOutlined /></Button>}
        menuClassName={'responsive-ant-menu'}
        >
            {(onLinkClick) =>
                <Menu>
                    <SubMenu title={<>ENGAGEMENT</>}>
                        <Menu.Item key="setting:1">BRIDAL SET</Menu.Item>
                        <Menu.Item key="setting:2">HALO SET</Menu.Item>
                        <Menu.Item key="setting:3">THREE STONE RING</Menu.Item>
                        <Menu.Item key="setting:4">TRIO SETS</Menu.Item>
                        <Menu.Item key="setting:5">SOLITARE RINGS</Menu.Item>
                        <Menu.Item key="setting:6">GEMSTONE BRIDAL</Menu.Item>
                    </SubMenu>

                    <SubMenu title={<>RINGS</>}>
                        <Menu.Item key="setting:1">ANNIVERSARY BANDS</Menu.Item>
                        <Menu.Item key="setting:2">FASHION RINGS</Menu.Item>
                        <Menu.Item key="setting:3">PROMISE RINGS</Menu.Item>
                        <Menu.Item key="setting:4">CLADDAGH RINGS</Menu.Item>
                        <Menu.Item key="setting:5">GEMSTONE RINGS</Menu.Item>
                        <Menu.Item key="setting:6">INFINITY</Menu.Item>
                        <Menu.Item key="setting:7">HEART</Menu.Item>
                        <Menu.Item key="setting:8">FAMILY AND MOTHER RINGS</Menu.Item>
                        <Menu.Item key="setting:9">PERSONALIZED</Menu.Item>
                        <Menu.Item key="setting:10">COCKTAIL RINGS</Menu.Item>
                    </SubMenu>

                    <SubMenu title={<>WEDDING BANDS</>}>
                        <Menu.Item key="setting:1">MEN'S BANDS</Menu.Item>
                        <Menu.Item key="setting:2">LADIES DIAMOND BANDS</Menu.Item>
                        <Menu.Item key="setting:3">ENHANCERS</Menu.Item>
                        <Menu.Item key="setting:4">WRAPS</Menu.Item>
                        <Menu.Item key="setting:5">ETERNITY BANDS</Menu.Item>
                    </SubMenu>

                    <SubMenu title={<>NECKLACES</>}>
                        <Menu.Item key="setting:1">CHAINS</Menu.Item>
                        <Menu.Item key="setting:2">RELIGIOUS</Menu.Item>
                        <Menu.Item key="setting:3">HEARTS</Menu.Item>
                        <Menu.Item key="setting:4">INFINITY</Menu.Item>
                        <Menu.Item key="setting:5">LOCKETS</Menu.Item>
                        <Menu.Item key="setting:6">INITIAL</Menu.Item>
                        <Menu.Item key="setting:7">NAME</Menu.Item>
                        <Menu.Item key="setting:8">PERSONALIZED</Menu.Item>
                        <Menu.Item key="setting:9">DIAMOND FASHION PENDANTS</Menu.Item>
                    </SubMenu>

                    <SubMenu title={<>EARRINGS</>}>
                        <Menu.Item key="setting:1">DIAMOND STUDS</Menu.Item>
                        <Menu.Item key="setting:2">HOOPS</Menu.Item>
                        <Menu.Item key="setting:3">DANGLING EARRINGS</Menu.Item>
                        <Menu.Item key="setting:4">SOLITARE STUDS</Menu.Item>
                        <Menu.Item key="setting:5">GEMSTONE STUDS</Menu.Item>
                        <Menu.Item key="setting:6">CHILDERN EARRINGS</Menu.Item>
                        <Menu.Item key="setting:7">CUBIC ZIRCONIA STUDS</Menu.Item>
                        <Menu.Item key="setting:8">CUBIC ZIRCONIA HOOPS</Menu.Item>
                    </SubMenu>

                    <Menu.Item key='/' className={'menu-home'}>
                        <a onClick={onLinkClick} href={'/#'}>CLEARANCE</a>
                    </Menu.Item>
                </Menu>
            }
        </ResponsiveAntMenu>
      );
  }
}

export default Navbar;