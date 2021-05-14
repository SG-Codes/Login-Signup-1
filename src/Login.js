import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';
import { Button } from 'react-native-elements';

class Login extends React.Component {
    render() {
        return (
            <View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.active}>SignIn</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>
                    <Text style={styles.nonActive}>Signup</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', marginTop: 100 }}>
                    <TextInput
                    placeholder='email'
                    keyboardType={'email-address'}
                    style={styles.inputField}
                    />
                    <TextInput
                    placeholder='password'
                    secureTextEntry={true}
                    style={styles.inputField}
                    />
                    <TouchableOpacity>
                        <Text style={{ width: 300 ,textAlign: 'right', color: 'blue', fontWeight :'bold', marginTop: 7 }}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <Button title='Login' buttonStyle={styles.btnStyle} onPress={() => this.props.navigation.navigate('home')} />
                </View>
            </View>
        )
    }
}

export default Login;