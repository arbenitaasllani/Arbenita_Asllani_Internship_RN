import React, { Component } from 'react';
import { CardSection } from './common';
import { connect } from 'react-redux';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const {titleStyle } = styles;
 
        return (
            <CardSection>
                <Text style={ titleStyle}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect( null, actions )(ListItem);