import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

class Signup extends React.Component {
    render() {
        return (
            <View>
                <View style={{ marginTop: 30 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
                    <Text style={styles.nonActive}>SignIn</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.active}>Signup</Text>
                </View>
            </View>
        )
    }
}

export default Signup;