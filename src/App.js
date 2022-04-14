import React, { Component } from 'react'
import Navi from "./Navi.js";
import CategoryList from "./CategoryList.js";
import ProductList from "./ProductList.js";
import './App.css';
import { Col, Container, Row } from 'reactstrap';

export default class App extends Component {
    state = {currentCategory:""}
    changeCategory =  category=>{
        this.setState({currentCategory: category.categoryName})
    }
    
    render(){
       let titleProduct = "Product List"
       let titleCategory = "Category List"
        return ( <div>
            <Container>
                <Row>
                    <Navi></Navi>
                </Row>
                <Row>
                    <Col xs="3">
                    <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory}  title="Category List"/>
                    </Col>
                    <Col xs="9">
                    <ProductList currentCategory={this.state.currentCategory} title="Product List"/>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

