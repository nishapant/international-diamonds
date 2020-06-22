import '../style/About.css';
import React, { Component } from 'react';
import { Typography } from 'antd';


class About extends Component {

  render() {
    return (
      <div id="wrapper">
            <div class="about-div">
                <img src="./resources/about_pic.jpeg" alt="About us" class="about-pic" />
            </div>
          <Typography class="aboutPara">International Diamond Company is an independent, family-owned small business located in Woodfield Mall in Schaumburg, Illinois since 2008. We have been in the jewelry business for over 25 years and are committed to providing high-quality and stunning diamonds and jewelry to our customers. We strongly value customer service and satisfaction and work with you to make sure that your jewelry satisfies your desires no matter the occasion. Our experience and expertise allows us to work with you to customize unique pieces just for you. </Typography>
      </div>  
    );
  }
}

export default About;
