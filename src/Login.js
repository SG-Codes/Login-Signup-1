import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {Text} from 'react-native-elements';
import styles from './styles';
import {Button} from 'react-native-elements';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleEmail = value => {
    this.setState({
      email: value,
    });
  };

  handlePwd = value => {
    this.setState({
      password: value,
    });
  };

  validate = () => {
    this.setState({
      error: '',
    });

    const expression =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!expression.test(this.state.email)) {
      this.setState({
        error: 'Invalid Email',
      });
      return false;
    } else if (this.state.password.length === 0) {
      this.setState({
        error: 'Password cannot be empty',
      });

      return false;
    } else if (this.state.password.length < 8) {
      this.setState({
        error: 'Password is too short',
      });
    }

    return true;
  };

  submit = () => {
    if (this.validate()) {
      this.props.navigation.navigate('home');
    }
  };

  render() {
    return (
      <View>
        <View style={{marginTop: 30}}>
          <Text style={styles.active}>SignIn</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('signup')}>
            <Text style={styles.nonActive}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginTop: 100}}>
          <TextInput
            onChangeText={this.handleEmail}
            placeholder="email"
            keyboardType={'email-address'}
            style={styles.inputField}
          />
          <TextInput
            onChangeText={this.handlePwd}
            placeholder="password"
            secureTextEntry={true}
            style={styles.inputField}
          />
          <TouchableOpacity>
            <Text
              style={{
                width: 300,
                textAlign: 'right',
                color: 'blue',
                fontWeight: 'bold',
                marginTop: 7,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          {this.state.error.length === 0 ? null : (
            <Text style={styles.error}>{this.state.error}</Text>
          )}
          <Button
            title="Login"
            buttonStyle={styles.btnStyle}
            onPress={this.submit}
          />
        </View>
      </View>
    );
  }
}

export default Login;
