import '../style/App.css';
import Slideshow from './Slideshow.js';
import React, { Component } from 'react';
import { Layout } from 'antd';
import { InstagramFilled, FacebookFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import { Grid, Row, Col } from 'react-flexbox-grid';
const { Footer } = Layout;


class App extends Component {
  render() {
    return (
      <Layout>
        <Slideshow />
        <Footer style={{ textAlign: 'center' }}>
          <Grid fliud>
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
              <Col xs={24} md={3} lg={3}>col-6</Col>
              <Col xs={24} md={3} lg={3}>col-6</Col>
              <Col xs={24} md={3} lg={3}>col-6</Col>
              <Col xs={24} md={3} lg={3}>About Us</Col>
            </Row>
            <Row className="bottom-row-footer">
              <Col xs={24} md={24} lg={24} style={{ textAlign:'center', margin: '50px auto 10px auto'}}>© International Diamond Company. All rights reserved.</Col>
            </Row>
          </Grid>
        </Footer>
      </Layout>
      
    );
  }
}

export default App;
