import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    render() {
        return (
           <Card>
                <EmployeeForm />
                <CardSection>  
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                        </Button> 
                </CardSection>
           </Card>
        );
    }
}



const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};


export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate 
})(EmployeeCreate);