import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { products: [] };

    //lifecycle methods - methods that will be automatically called at some point
    //componentWillMount - lifecycle method

    // UNSAFE_componentWillMount() {

    componentDidMount() {
        axios.get('https://dummyjson.com/products')
        .then(response => {
            // console.log(response.data);
            this.setState({ products: response.data.products }); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    renderProducts() {
        return this.state.products.map(product => (
            <AlbumDetail key={product.title} product={product} />
        ));
    }

    render() {
        return (
            <ScrollView>
                {this.renderProducts()}
            </ScrollView>
        );
    }
}

export default AlbumList;