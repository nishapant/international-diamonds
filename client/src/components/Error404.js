import React, { Component } from 'react';
import { Result, Button } from 'antd';

class Error404 extends Component {
  render() {
      return (
          <div style={{ width: '90%', backgroundColor: 'white', margin: '40px auto'}}>
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
            />
          </div>
        
      );
  }
}

export default Error404;
