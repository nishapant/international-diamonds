import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Spin, Typography, Row, Col } from 'antd';
import { Card } from 'antd';
import { LineOutlined } from '@ant-design/icons';
import '../style/Items.css';


import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);
const { Meta } = Card;
const { Title } = Typography;
const { Text } = Typography;



class App extends Component {
  state = {
    items: [],
    searchTerm:'',
    loadingItems: true,
    category: '',
    subCategory: ''
  };
  async componentDidMount() {
    try{
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query:  `query {
            items {
              _id
              name
              category
              subcategory
              description
              image {
                url
              }
              sale_price
              regular_price
              clearance
            }
          }`
        }
      });
      console.log("response: " + response);
      const pathName = this.props.location.pathname;
      const categoriesArray = pathName.split("/");
      const categoriesArrayNew = categoriesArray[1].split("-");
      const category = categoriesArrayNew[0].replace("_", " ");
      const subCategory = categoriesArrayNew[1];
      console.log(category);
      console.log(subCategory);

      console.log(apiUrl + response.data.items[0].image[0].url)
      this.setState({ items: response.data.items, loadingItems: false, category: category, subCategory: subCategory });
    } catch (err){
      console.log(err);
      this.setState({ loadingItems: false });
    }
  }

  async componentWillReceiveProps(newProps) {
    const pathName = newProps.location.pathname;
    const categoriesArray = pathName.split("/");
    const categoriesArrayNew = categoriesArray[1].split("-");
    const category = categoriesArrayNew[0].replace("_", " ");
    const subCategory = categoriesArrayNew[1];
    this.setState({ category: category, subCategory: subCategory });

  }

  filteredItems = ({ searchTerm, items }) => {
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };
 
  handleChange = ({ value }) => {
    this.setState({ searchTerm : value});
  };

  render() {
    const { loadingItems, searchTerm, category, subCategory } = this.state;
    return (
      <Layout style={{backgroundColor: 'white', marginTop: '0'}}>
        <div style={{width: '100%', marginTop: '0'}}>
        <Row style={{marginTop: '0'}} className="headingInfo">
          <Col span={12}>
            <div style={{ margin: '0 auto', textAlign: 'center', position: 'absolute', top: '50%',
            left: "50%", msTransform: 'translate(-50%, -50%)', transform: "translate(-50%, -50%)"}}>
              <Title level={4} style={{letterSpacing: '2px', display: 'block', marginBottom: '-5px'}}>{category.toUpperCase()}</Title>
              <LineOutlined style={{fontSize: '30px', color: 'black'}} />
              <Typography style={{display: 'block'}} className="categoryDescription">Our stunning collection of silver & gold rings combines classic and timeless designs with organic shapes creating a unique range of stunning rings designed to be stacked and worn together for a creative individual style.</Typography>
            </div>            
          </Col>
          <Col span={12} style={{textAlign: 'center'}}>
          <div style={{width: '100%', margin: '0 auto'}}>
            <img src="./necklace.jpg" style={{width: '100%'}} />
          </div> 
          </Col>
        </Row>

        <div style={{ margin: '20px auto 5px auto', textAlign: 'center'}} className="mobileHeadingInfo">
              <Title level={4} style={{letterSpacing: '2px', display: 'block', marginBottom: '-5px'}}>{category.toUpperCase()}</Title>
              <LineOutlined style={{fontSize: '30px', color: 'black'}} />
        </div>

        </div>
        <div style={{display: "flex", width: '100%', backgroundColor: '#f1f2f5', paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px'}}
        className="centerItems">
          {this.filteredItems(this.state).map(item => (

            (item.subcategory === subCategory) && 
            <div key={item._id} style={{ margin: 5, width: '100%', maxWidth: '245px' }}>
              <Link to={`/${item._id}`}>
                <Card
                    hoverable
                    style={{ width: '100%'}}
                    cover={<img style={{ width: '80%', margin: "0 auto"}} alt="item_image" src={`${apiUrl}${item.image[0].url}`} />}
                >
                    <Title level={4} style={{ textAlign: "center"}}>
                        {item.name}
                    </Title>
                    <Meta description={item.description} />
                    { item.clearance && 
                      <div style={{marginTop: 5}}>
                        <Text delete>{item.regular_price}</Text>
                        <Text> {item.sale_price}</Text> 
                      </div>
                    } 
                    { !item.clearance && 
                      <div style={{marginTop: 5}}>
                        <Text>{item.regular_price}</Text>
                      </div> }   
                </Card>
                </Link>
            </div>  
          ))}
        </div>
          {loadingItems && <Spin style={{marginTop: '7%'}} /> }
      </Layout>
    );
  }
}

export default App;
