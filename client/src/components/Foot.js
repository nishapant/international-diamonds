import '../style/App.css';
import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import { InstagramFilled, FacebookFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
const { Footer } = Layout;


class Foot extends Component {
  render() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            <Grid>
            <Row className="top-row-footer"  style={{ textAlign:'center' }}>
                <Col xs={24} md={8}>
                <a href="https://www.instagram.com/internationaldiamondcompany/"><InstagramFilled style={{ fontSize: '20px', color: '#686868', marginLeft: '15px' }} /></a>
                <a href="tel:+18474132600"><PhoneFilled style={{ fontSize: '19px', color: '#686868', marginLeft: '15px' }} /></a>
                <a href="https://www.facebook.com/International-Diamond-Company-134440416610269/"><FacebookFilled style={{ fontSize: '19px', color: '#686868', marginLeft: '15px' }} /></a>
                <a href="mailto:internationaldiamondco@gmail.com"><MailFilled style={{ fontSize: '19px', color: '#686868', marginLeft: '15px' }} /></a>
                </Col>
                <Col xs={24} md={16} style={{ textAlign:'center', margin: '0 auto'}}>
                International Diamond Company<br/>
                G-101 Woodfield Mall<br/>
                Schaumburg, IL 60173</Col>
            </Row>
            <Row className="bottom-row-footer">
                <Col xs={24} md={3} lg={3}><span class="footerLinks">
                    <Link to="/about">About Us</Link></span>
                </Col>
                <Col xs={24} md={3} lg={3}><span class="footerLinks">
                    <a href="http://online.anyflip.com/fblh/yclz/mobile/index.html">Catalog</a></span>
                    </Col>
                <Col xs={24} md={3} lg={3}>
                    <span class="footerLinks"><Link to="/delivery">Delivery</Link></span>
                    <br />
                    <Typography>
                    All orders that are shipped are insured. Delivery usually takes 3-5 business days after shipment but due to safety measures because 
                    of COVID-19, shipments will be delayed. 
                    </Typography>
                </Col>
                <Col xs={24} md={3} lg={3}><span class="footerLinks">
                    <Link to="/customization">Customization</Link></span>
                    <br />
                    <Typography>
                    We also do custom and special orders. If you have a specific design or style in mind, or even have a picture of an item that we may not
                     carry, we can design and create jewelry for you. In order to customize, please message our facebook, or email us at internationaldiamondco@gmail.com. 
                    </Typography>
                </Col>
            </Row>
            <Row className="bottom-row-footer">
                <Col xs={24} md={24} lg={24} style={{ textAlign:'center', margin: '50px auto 10px auto'}}>© International Diamond Company. All rights reserved.</Col>
            </Row>
            </Grid>
        </Footer>   
    );
  }
}

export default Foot;
