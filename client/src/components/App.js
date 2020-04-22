import '../style/App.css';
import Slideshow from './Slideshow.js';
import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;


class App extends Component {
  render() {
    return (
      <Layout>
        <Slideshow />
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

export default App;
