import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import _ from 'lodash';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
        }

        componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
        }

        createDataSource({ employees }) {
            const ds = new FlatList.DataSource({
                rowHasChanges: (r1, r2) => r1 !== r2
            });
    
            this.dataSource = ds.cloneWithRows(employees);
            // this.createDataSource(this.props);
    

        }

   renderRow(employee) {
    return <ListItem employee={employee} />
   }

    render() {
        return (
            <FlatList
                enableEmpltySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
            // <FlatList 
            //     enableEmptySections
            //     dataSource={this.dataSource}
            //     renderItem={({ item }) => this.renderRow(item)}
            // />
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
