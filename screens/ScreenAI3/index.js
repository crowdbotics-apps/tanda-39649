import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {// handle login logic
  };

  const handleForgotPassword = () => {// handle forgot password logic
  };

  const handleSignUp = () => {// handle sign up logic
  };

  const handleSocialLogin = () => {// handle social login logic
  };

  return <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI4");
      }}><View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setRememberMe(!rememberMe)}>
            {rememberMe && <Image source={require('../assets/check.png')} style={styles.checkIcon} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View></Pressable>
        <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
          <Pressable onPress={() => {
          navigation.navigate("Terms and Conditions");
        }}><Text style={styles.forgotPasswordLabel}>Forgot password?</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginLabel}>Sign in</Text>
        </TouchableOpacity>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI6");
      }}><View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialLoginButton} onPress={() => handleSocialLogin('google')}>
            <Image source={require('../assets/google.png')} style={styles.socialLoginIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginButton} onPress={() => handleSocialLogin('apple')}>
            <Image source={require('../assets/apple.png')} style={styles.socialLoginIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginButton} onPress={() => handleSocialLogin('facebook')}>
            <Image source={require('../assets/facebook.png')} style={styles.socialLoginIcon} />
          </TouchableOpacity>
        </View></Pressable>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI10");
      }}><View style={styles.signupContainer}>
          <Text style={styles.signupLabel}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View></Pressable>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  checkbox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 20,
    height: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkIcon: {
    width: 15,
    height: 15
  },
  checkboxLabel: {
    fontSize: 16
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 10
  },
  forgotPasswordLabel: {
    fontSize: 16,
    color: '#007AFF'
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  loginLabel: {
    color: '#fff',
    fontSize: 16
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  socialLoginButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialLoginIcon: {
    width: 30,
    height: 30
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  signupLabel: {
    fontSize: 16
  },
  signupLink: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 5
  }
});
export default LoginScreen;