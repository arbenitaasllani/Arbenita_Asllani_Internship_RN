import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import _ from 'lodash';

class EmployeeList extends Component {
    // componentDidMount() {
    //     this.props.employeesFetch();

    //     this.createDataSource(this.props);

    //     }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     // nextProps are the next set of props that this component
    //     //will be rendered with 
    //     // this.props is still the old set of props

    //     this.createDataSource(nextProps);
    // }

    createDataSource({ employees }) {
        const ds = new FlatList.DataSource({
            rowHasChanged: ( r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);

    }

    renderRow = (employee) => {
        return <ListItem employee={employee} />
    }

    render() {
        return (
            <FlatList 
                enableEmptySections
                dataSource={this.dataSource}
                renderItem={({ item }) => this.renderRow(item)}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
