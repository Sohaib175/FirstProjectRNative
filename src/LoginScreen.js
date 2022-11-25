import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CustomeButton from './components/Button';
import TextComp from './components/Text';
import TextButton from './components/TextButton';
import CustomeTextInput from './components/TextField';

const LoginScreen = () => {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  return (
    <SafeAreaView style={styles.SafeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require('../assets/loginBG.png')}
          style={styles.ImageBackground}>
          <View style={styles.container}>
            <View style={styles.LogoContainer}>
              <Image
                style={styles.LogoContainer.logo}
                source={require('../assets/logo.png')}
              />
            </View>
            <View style={{flex: 4}}>
              <View style={{flex: 2}}>
                <CustomeTextInput
                  placeHolder="Phone No."
                  getVal={setUser}
                  maxLen={13}
                  keyboardType={'phone-pad'}
                  isPass={false}
                />
                <CustomeTextInput placeHolder="Password" getVal={setPass} isPass={true}/>
              </View>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 2}} />
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.bottom}>
              <TextButton label="ForgetPassword?" underLine="underline" />
              <CustomeButton
                btnText={'LOGIN'}
                func={() => {
                  checkNumber(user, pass);
                }}
              />
              <View style={styles.bottom.signUp}>
                <TextComp text={'ALREADY HAVE AN ACCOUNT?\t\t'} />
                <TextButton label="SIGN UP" />
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
function checkNumber(user, pass) {
  const passExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const userExp = /\+923\d{9}/g;
  isPassValid = passExp.test(pass);
  isUserValid = userExp.test(user);
  if (isPassValid && isUserValid) {
    alert('both valid');
  } else if (isPassValid && !isUserValid) {
    alert('user not valid');
  } else if (isUserValid && !isPassValid) {
    alert('pass not valid');
  }

  // if (/\+923\d{9}/g.test(user)) {
  //   alert(user, ' User Name correct');
  //   // console.log('true');
  // } else {
  //   alert(` User Name not correct,${user}`);
  // }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    // width: '100%',
    // height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  SafeArea: {
    flex: 1,
  },
  bottom: {
    flex: 2,
    signUp: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  ImageBackground: {
    flex: 1,
  },
  LogoContainer: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    logo: {
      height: 60,
      width: 100,
    },
  },
});

export default LoginScreen;
