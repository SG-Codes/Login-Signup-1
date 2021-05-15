import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {Button} from 'react-native-elements';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  handleName = value => {
    this.setState({
      name: value,
    });
  };

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

  handleConfirmPwd = value => {
    this.setState({
      confirmPassword: value,
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
    } else if (this.state.password.length < 8) {
      this.setState({
        error: 'Password is too short',
      });

      return false;
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: "Passwords don't match.",
      });

      return false;
    }

    return true;
  };

  submit = () => {
    if (this.validate()) {
      this.props.navigation.navigate('home', {
          name: this.state.name,
          email: this.state.email
      });
    }
  };

  render() {
    return (
      <View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('login')}>
            <Text style={styles.nonActive}>SignIn</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.active}>Signup</Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 100}}>
          <TextInput
            onChangeText={this.handleName}
            placeholder="Name"
            style={styles.inputField}
          />
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
          <TextInput
            onChangeText={this.handleConfirmPwd}
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.inputField}
          />
          {
              (this.state.error.length === 0) ? null : <Text style={styles.error}>{this.state.error}</Text>
          }
          <Button
            title="Signup"
            buttonStyle={styles.btnStyle}
            onPress={this.submit}
          />
        </View>
      </View>
    );
  }
}

export default Signup;
