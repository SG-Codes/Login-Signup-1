import React, { Component } from 'react';
import { Text, View } from 'react-native';

class LoggedIn extends Component {
    render() { 
        return (
            <View>
                <Text style={{ fontSize: 28 }}>
                    You are successfully Logged in
                </Text>
                <Text style={{ fontSize: 28 }}>
                    {this.props.route.params.name}
                </Text>
        <Text style={{ fontSize: 28 }}>{this.props.route.params.email}</Text>
            </View>
        );
    }
}
 
export default LoggedIn;