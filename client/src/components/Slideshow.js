import '../style/Slideshow.css';
import React, { Component } from 'react';
import { Carousel } from 'antd';

class Slideshow extends Component {
  render() {
    return (
        <Carousel autoplay className="slideshow">
            <div>
            <h3>1</h3>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
      </Carousel>
    );
  }
}

export default Slideshow;
